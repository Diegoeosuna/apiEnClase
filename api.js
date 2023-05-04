import usuarios from './usuarios.json' assert { type: "json" };

const usuariosBuscados = usuarios;

const promesaACumplir = new Promise((resolve, reject) => {

    setTimeout(() => {
        if(usuariosBuscados != ""){
            let nombreUsuario = usuariosBuscados.forEach ((user) => {
                console.log("Nombre: "+ user.nombre)
            })
            resolve(nombreUsuario);
        } else {
            reject("Error al buscar usuarios");
        }
    }, 4000);
});

promesaACumplir
    .then(() => console.log("Estos son los usuarios"))
    .catch((error) => console.log(error))    


