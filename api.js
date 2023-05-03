import usuarios from './usuarios.json' assert { type: "json" };

const promesaACumplir = new Promise((resolve, reject) => {
    const usuariosBuscados = usuarios;
    setTimeout(() => {
        if(usuariosBuscados != ""){
            resolve(usuariosBuscados);
        } else {
            reject("Error al buscar usuarios");
        }
    }, 4000);
});

promesaACumplir
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log(error))    


