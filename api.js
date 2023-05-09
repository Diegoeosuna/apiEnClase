import usuarios from './usuarios.json' assert { type: "json" };

const usuariosBuscados = usuarios;

const promesaACumplir = new Promise((resolve, reject) => {

    setTimeout(() => {
        if(usuariosBuscados != ""){
            let nombreUsuario = usuariosBuscados.forEach ((user) => {console.log("Nombre: "+ user.nombre)})
            resolve(nombreUsuario);
        } else {
            reject("Error al buscar usuarios");
        }
    }, 4000);
});

/*promesaACumplir
    .then(() => console.log("Estos son los usuarios"))
    .catch((error) => console.log(error))    */

//Segunda Tarea

async function findAllCharacters(){
    let contador = 0; //Se hace un contador para asignarse a cada elemento y que se puedan identificar y mostrar.
    let characterReceptor = []; //Variable donde se guardará la información solicitada.
    const charactersReceived = await fetch("https://rickandmortyapi.com/api/character"); //Se piden los datos del API

    const charactersJson = await charactersReceived.json(); //Se convierte la información recibida a formato json.
    
    charactersJson.results.forEach((character) => //De los datos recibidos y ya convertidos a JSON, se toma del array "results" por cada personaje la info solicitada
    {characterReceptor.push({ //Se agrega la info solicitada al array creado para usar como receptor de info
        id: contador,
        name: character.name,
        origin: character.origin.name,
        gender: character.gender,
        image: character.image,
    })
    contador++; //Ya que se termina de sacar la info de un personaje, se agrega 1 para pasar al siguiente personaje.
})

console.log(characterReceptor); //Importante!!! Agregar el console log del array.
}

findAllCharacters(); //Se llama la función para que se vea en la Terminal.