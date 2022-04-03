
var cuenta = document.getElementById('cuentaAdmin');
var password = document.getElementById('passwordAdmin');
var error = document.getElementById('error');

var usuarioCorrecto = "admin";
var passwordCorrecta = "1";

error.style.color = 'red';

function iniciarSesion() {

    var mensajesError = [];
    var aux = 0;

    if(cuenta.value === null || cuenta.value === ""){
        mensajesError.push("Ingresa el nombre de usuario");
        aux = 1;
    }

    if(password.value === null || password.value === ""){
        mensajesError.push("Ingresa la contraseña.");
        aux = 1;
    }

    if( aux === 0 && ((cuenta.value != usuarioCorrecto && password.value != null) || (password.value != passwordCorrecta && cuenta.value != null)) ){
        mensajesError.push("El usuario y la contraseña no coinciden.");
    }

    if(cuenta.value === usuarioCorrecto && password.value === passwordCorrecta){
        window.location.href = "/app/html/dashboard/historial.html";
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
}