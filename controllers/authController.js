const User = require("../models/User");
const {validationResult} = require('express-validator')
const {nanoid} = require('nanoid') ;
const nodemailer = require('nodemailer');
require('dotenv').config()
// -------------------- REGISTER  -------------------

const registerForm = (req,res)=> {
    res.render("register");
}

const registerUser = async(req,res) =>{
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        req.flash("mensajes",errors.array())
        return res.redirect('/auth/register');
    }

    const {userName,email,password} = req.body
    try{ 
       let user = await User.findOne({email:email});
       if(user) throw new Error("ya existe usuario");
        user = new User({userName ,email ,password , tokenConfirm: nanoid()});
        await user.save();

        //enviar correo electronico al usuario 
        const transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.userEmail,
              pass: process.env.passEmail,
            },
          });

        await transport.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>',
            to: user.email,
            subject: "verifique su cuenta de correo",
            html: `<a href="http://localhost:5000/auth/confirmar/${user.tokenConfirm}">verificar cuenta aquí</a>`,
        });

        req.flash("mensajes",[{msg: "Revisa tu correo electronico y valida cuenta"}]);
        return res.redirect("/auth/login")      
    }catch(error){
        req.flash("mensajes",[{msg: error.message}]);
        return res.redirect('/auth/register');
    }
}

const confirmarCuenta = async(req,res)=>{
   const {token} = req.params;
   try{
        const user = await User.findOne({tokenConfirm:token});
        if(!user) throw new Error("No existe este usuario");
        
        user.cuentaConfirmada = true;
        user.tokenConfirm = null;

        await user.save();

        req.flash("mensajes",[{msg: "Cuenta verificada,puedes iniciar sesion"}]);
        return res.redirect("/auth/login") 
        
   }catch(error){
        req.flash("mensajes",[{msg: error.message}]);
        return res.redirect('/auth/login');
   }
};

// -------------------- LOGIN -------------------

const loginForm = (req,res) =>{
    res.render("login");
}


const loginUser = async(req,res) =>{
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        req.flash("mensajes",errors.array())
        return res.redirect('/auth/login');
    }

    const { email, password} = req.body
    try {
        const user = await User.findOne({email});
        if(!user) throw new Error("No existe este email");

        if(!user.cuentaConfirmada) throw new Error("Falta confirmar cuenta");

        if( !(await user.comparePassword(password)))
             throw new Error("Contraseña invalida");
    
        //Crea la sesion al usar passport
        req.login(user,function(err) {
            if (err)throw new Error("Error al crear la sesion")
            //si ingresa ahora si puede acceder a algun lugar 
            res.redirect('/registroVentas');
        })     
       
    } catch (error) {
        req.flash("mensajes",[{msg: error.message}]);
        return res.redirect('/auth/login');
    }
}

const cerrarSession = (req,res) =>{
    req.logout()
    return res.redirect("/auth/login");
};

module.exports = {
    loginForm,
    registerForm,
    registerUser,
    confirmarCuenta,
    loginUser,
    cerrarSession
} 