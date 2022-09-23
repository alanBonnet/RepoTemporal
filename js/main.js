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
const ListaDeTareas = document.getElementById("listaDeTarjetas");

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

console.log(Negocio[ Negocio.length -1]["clientes"])

console.log(Negocio[ Negocio.length -1]["clientes"][1])

console.log(Negocio[ Negocio.length -1].clientes)

console.log(Negocio[ Negocio.length -1].clientes[1])
