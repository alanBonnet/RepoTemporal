/* let numero1 = 30;
let numero2 = 16; */


/* let suma = numero1 + numero2 ;
console.log(`${numero1} + ${numero2} = ${suma}`);//30 + 16 = 46

let resta = numero1 - numero2 ;
console.log(`${numero1} - ${numero2} = ${resta}`);// 30 - 16 = 14

let producto = numero1 * numero2;
console.log(`${numero1} * ${numero2} = ${producto}`);// 30 * 16 = 480 */
// comenta una sola linea
/*multi linea 
    linea 1
    linea 2
*/
/* function sumar(a,b){
    if(typeof a === "number" && typeof b === "number"){
        let suma = a+b;
        return `${a} + ${b} = ${suma}`;
    }else{
        return "Ingresaste letras meñojo";
    }    
}
console.log(sumar(numero1,numero2));
console.log(sumar(20,10))
console.log(sumar(35,"12")) */


// función => retorna un valor que vamos a utilizar
// función => retornan por defecto el valor de undefined que es un valor que no se puede utilizar
// función => que no retonar nada se llaman PROCEDIMIENTO




// conexión con el dom
const ListaDeCartas = document.getElementById("listaDeTarjetas");

// colección de tarjetas
let string = "soy un objeto"; //VARCHAR = STRING =>(CHAR+CHAR+CHAR) ==> STRING = "abc"

const array = []; //array o arreglo o matríz coleccionan otros objetos(array,string,objeto = diccionario{} ) u otros datos o también funciones

const diccionarioUObjeto = {};

const Negocio = [
    ["pera","manzana","banana","kiwi"],

    ["lechuga","tomate","papa"],

    {
        clientes:["juan","mateo","gabriel"],
        proveedores:["chanchitopelao", "ericito loco", "ericito bailando"]
    }
];
/* el conteo del array//matriz//arreglo comienza en 0 */
// console.log(Negocio[1])
// console.log(Negocio.length)
// console.log(Negocio[Negocio.length - 1])
console.log(Negocio[0])
console.log(Negocio[1])

console.log(Negocio[0][0])
console.log(Negocio[0][1])

// Negocio[0].push("durazno")//se agregó el durazno al final del array
// Negocio[0].unshift("durazno")//se agregó el durazno al comienzo del array
// Negocio[0].pop()//se elimina el ultimo elemento del array (es contrario al push)
// Negocio[0].shift()//se elimina el primer elemento del array (es contrario al unshift)

console.log(Negocio[0])

console.log(Negocio[ Negocio.length -1]["clientes"])

console.log(Negocio[ Negocio.length -1]["clientes"][1])

console.log(Negocio[ Negocio.length -1].clientes)

console.log(Negocio[ Negocio.length -1].clientes[1])

const persona1 = {
    nombre:"Juan",
    apellido:"erizote"
}


console.log(persona1)

console.log(persona1.nombre)
console.log(persona1["nombre"])

// persona1.fechaNacimiento = "12/05/94";
persona1["fechaNacimiento"] = "12/05/94"

console.log(persona1)

persona1.sumar = (a,b) => {
    if(typeof a === "number" && typeof b === "number"){
        let suma = a+b;
        return `${a} + ${b} = ${suma}`;
    }else{
        return "meñojo";
    }    

}
// asi es como se acciona el método de la persona1 y usamos el console.log para que 
// nos pinte el resultado
console.log(persona1.sumar(6,8))

const electrodomesticos = [
    {nombre:"Heladera inverter",precio:"$ 259.899",imagen:"https://http2.mlstatic.com/D_Q_NP_694262-MLA50206918753_062022-P.webp"},
    {nombre:"Ventilador",precio:"$ 31.999",imagen:"../img/ventilador.webp"},
    {nombre:"Aspiradora Samsung", precio:"$ 29.800", imagen:"https://http2.mlstatic.com/D_Q_NP_776212-MLA43123276415_082020-P.webp"},
    {nombre:"Aire acondicionador Philco",precio:"$ 109.999", imagen:"https://http2.mlstatic.com/D_Q_NP_838536-MLA42421073259_062020-P.webp"},
]

const pintarCards = (divElement,arrayTarjetas,title,price,img) =>{
    divElement["innerHTML"] = "";
    arrayTarjetas.forEach(objetoTarjeta => {
        divElement["innerHTML"] += `
            <div class="col-12 col-md-6 col-lg-4 my-2">
                <div class="card">
                <img src="${objetoTarjeta[`${img}`]}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${objetoTarjeta[`${title}`]}</h5>
                    <p class="card-text fs-3">
                        ${objetoTarjeta[`${price}`]}
                    </p>
                    <div class="d-grid gap-2">
                        <a href="#" class="btn btn-success">Comprar</a>
                    </div>
                </div>
                </div>
            </div>
    `;
    })
}

//para capitalizar un texto
const capitalizar = (texto) =>{
    return texto.trim().replace(/^\w/, (c) => c.toUpperCase())

}
// regex la g global va a leer todo el texto y va accionar por cada vez que cumple la condición
// la i quiere decir que no va a importar si está en mayúscula o minúscula
// console.log("  hola cOmO estas  ".trim().replace(/^\w/gi,e => e.toUpperCase()))



// pintarCards(ListaDeCartas,electrodomesticos,"nombre","precio","imagen")
async function ObtenerPokemones(){
    // fetch("https://pokeapi.co/api/v2/pokedex/national")//pokemonesFetch
    //     .then(pokemonesObjeto => pokemonesObjeto.json())
    //     .then(pokemones => pokemones.pokemon_entries)
    //     .catch(error => console.log(error.message));
    try {
        const pokemonesFetch = await fetch("https://pokeapi.co/api/v2/pokedex/national");
        const pokemonesObjeto = await pokemonesFetch.json();
        return await pokemonesObjeto.pokemon_entries;
        
    } catch (error) {
        console.log(error.message)
    }
}//Esta función sirve para hacer un fetch a la pokeAPI y recibir todos pokemones

const ObtenerPokemon = async (pokeID) => {
    try {
        const pokeFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
        const pokeObjeto = await pokeFetch.json();
        return pokeObjeto;  
    } catch (error) {
        console.log(error.message)
    }
}//Esta función sirve para un fetch ala pokeAPI y recibir un Pokemon por el parametro que le pasamos



const obtenerImgPokemon = async (pokeID)=>{
    try {
        const pokemon = await ObtenerPokemon(pokeID);
        const imagenPokemon = await pokemon.sprites.front_default;
        return imagenPokemon
    } catch (error) {
        console.log(error.message)
    }
}//Esta función sirve para un fetch a la pokeAPI y recibir la imagen de un Pokemon por el parametro que le pasamos


let inicioPintado = 0;
let limiteActual = 30;
const PintarPokemones = async () => {
    try {
        const Pokemones = await ObtenerPokemones();//obtenerpokemones es una promesa entonces espero y luego guardo su información

        ListaDeCartas["innerHTML"] = "";//limpiamos primero el innerHTML de la lista


        for(inicioPintado;inicioPintado<limiteActual;inicioPintado++){//es para que solo carguen 30 pokemones y no se rompa el orden

            const PokeNombre = await Pokemones[inicioPintado].pokemon_species.name;//sirve para obtener el nombre del pokemon

            const infoPokemon = await ObtenerPokemon(`${inicioPintado+1}`);//sirve para obtener la información del pokemon como objeto

            const tipo1Pokemon = await infoPokemon.types[0].type.name;//primera forma de acceder a la información del pokemon
            const tipo2Pokemon = await infoPokemon.types[1]?.type.name;// objeto en sus propediades de TIPO 

            const imagenPokemon = await obtenerImgPokemon(`${inicioPintado+1}`)// segunda forma de acceder a la info del pokemón
                                                                              //y así acceder como objeto a la url de su Imagen
            // console.log(`${PokeNombre} y su index es: ${inicioPintado}`)
            
            // console.log(`${tipo1Pokemon} ${tipo2Pokemon}`)
            //vamos pintando cada carta con la información por pokemon
            ListaDeCartas["innerHTML"] += `
                <div class="col-12 col-md-6 col-lg-2 my-2">
                    <div class="card text-center">
                        <img src="${imagenPokemon}" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${capitalizar(PokeNombre)}</h5>
                            <p class="card-text fs-5">
                                ${capitalizar(tipo1Pokemon)} ${tipo2Pokemon !== undefined ?capitalizar(tipo2Pokemon) : ""} <br />
                                <img src="../img/240px-Pokémon_${capitalizar(tipo1Pokemon)}_Type_Icon.svg.png" alt="..." class="tipoPokemon"  />
                                ${tipo2Pokemon !== undefined 
                                    ? `<img src="../img/240px-Pokémon_${capitalizar(tipo2Pokemon)}_Type_Icon.svg.png" alt="..." class="tipoPokemon"  />`
                                    : ""}
                            </p>
                            <div class="d-grid gap-2">
                                <a href="#" class="btn btn-success">Ver Más</a>
                            </div>
                        </div>
                    </div>
                </div>
            `

        }
        // Pokemones.forEach(async (pokemon,index) => {
        //     const PokeNombre = await pokemon.pokemon_species.name;
        //     const infoPokemon = await ObtenerPokemon(`${index+1}`)
            
        // })
    } catch (error) {
        console.log(error)
    }
}
PintarPokemones()//Llamamos a la función PintarPokemones para que accione