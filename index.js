
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const { create } = require("express-handlebars");
const csrf = require('csurf')

const User = require('./models/User');
require('dotenv').config();
require('./database/db');

const app = express();

app.use(
    session({
        secret: 'keyboard dog',
        resave: false,
        saveUninitialized: false,
        name:"secret-name",
    })
);

app.use(flash())

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user,done) => done(null,{id:user._id,userName: user.userName})) //req.user
passport.deserializeUser( async(user,done) => {
    //revisar la base de datos?
    const userDB = await User.findById(user.id)
    return done(null,{id: userDB._id,userName: userDB.userName})
})
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});


app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");


app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));

app.use(csrf());

//variables locales mandando a todos
app.use(( req,res,next) => {
    res.locals.csrfToken = req.csrfToken();
    res.locals.mensajes = req.flash("mensajes");
    next();
})

app.use("/",require('./routes/inicio'));
app.use("/auth",require('./routes/auth'));
app.use("/nuevaVenta",require('./routes/nuevaVenta'));
app.use("/registroVentas",require('./routes/registroVentas'));
app.use("/inventario",require('./routes/inventario'));
app.use("/precios",require('./routes/precios'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('servidor funcionando ' + PORT));