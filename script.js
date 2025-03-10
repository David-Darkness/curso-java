/*
* Este es un comentario importante     (🟢 Verde)
! Error posible: verificar validaciones  (🔴 Rojo)
? ¿Este método es eficiente?           (🔵 Azul)
TODO: Refactorizar esta parte más adelante  (🟠 Naranja)
@note Código experimental, podría cambiar  (⚪ Gris)
*/




/* 
!CONCATENACIÓN

var holaM = 7;
let holaMundo, hola2, hola3;
nombre = "Juan David";
nombre_dos = "Juan David Polanco";
? `promp` sirve para pedir datos
let hola = prompt("Hola mundo"); 
*la siguiente es la mejor forma de concatenar
* frase = `soy ${nombre_dos} y soy heterosexual`


*/

/*
!BOOLEAN
let numero = 13; 
let numero2 = 12;
document.writeln(numero == numero2)
?  ==no difiere de datos en cambio === si mira el tipo de dato
*/


/*
!CONDICIONES
let nombre = "JUAN DAVID POLANCO"

if (nombre == "juan"){
    alert("hola");
}else if(nombre == "JUAN DAVID POLANCO"){
    alert("hola pene");
}

document.writeln(nombre)
*/


/*
!CONDICIONES SINTAXIS
let dinero = prompt("cuanto dinero tienes? ");
let dineroRoberto = prompt("cuanto dinero tienes? ");
let dineroPedro = prompt("cuanto dinero tienes? ");


if (dineroPedro >= 1 && dineroPedro <= 2) {
    document.writeln("Te lo podés comprar");
} else if(dinero < 2){
    document.writeln("pobre");
}
?CONVERTIR LOS VALORES A ENTEROS
?dineroPedro = parseInt(dineroPedro)
*/

/*

!ARRAYS

let array = ["Juan",24,"Neiva"]
let frutas = ["banana","mangostino","manzana","pera"]



?array asociativo
pc ={
    nombre: "daltoPC",
    procesador : "Intel Core i7",
    ram : "16GB",
    espacio : "1TB",
}
let procesador = pc["procesador"]

frase = `el procesador de mi pc es: ${procesador}`


document.writeln(frase)
*/


/*

!WHILE
let numero = 0

while(numero < 10){
    numero++;
    document.writeln(numero);

    if(numero >= 5 ){
        break;
    }
}


do {
    numero++;
    document.writeln(numero);
    if(numero >= 5){
        break;
    }
} while (numero < 10);

*/

/*
!For loop

for (let i = 0; i < 6; i++){

    if(i ==4){
        continue; //se salta este bloque y continua con el siguiente
    }
    document.writeln(i + "<br>");
}

let animales = ["gato","perro","tirayn"]

!For in
?animal recorre dl array animales como si fuera un indice, es decir:1 2 3 4 5
?solo muestra el indice

for (let animal in animales){
    document.writeln(animal + "<br>");
}

!For of

?muestra el contenido de la posicion animal
for (let animal of animales){
    document.writeln(animal + "<br>");
}

*/


/*
!FUNCIONES
function saludar(nombre){
    let respuesta = prompt("Hola, cómo estás? ");
    if (respuesta == "bien"){
        alert("me alegro")
    }else{
        alert("lo siento")
    }    
};


function saludar1(){
    return "Hola amigo cómo estás?";
}
let saludo = saludar1();
document.writeln(saludo)



function suma(num1, num2){
    document.writeln(num1 + " " + num2)
    let res = num1 + num2;
    return res;
}

let resul = suma(12,20);

document.writeln("<br>")
document.writeln(resul);

*/

/*

!POO

class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }
    verInfo(){
document.writeln(this.informacion + "<br>");
    }

    ladrar(){
        if (this.especie === "perro"){
            return "guauu";
        }else{
            return "no es un perro";
        }
    }
}

    TODO: Herencia
class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }

    ?setter
    set setRaza(newName){
        this.raza = newName;
    }
    ?getter
    get getRaza(){
        return this.raza;
    }


    ?Métodos estáticos

    static ladrar(){
        alert("guauu ");
    }
}


const perro = new Perro("perro", 5, "negro", "bulldog");
const gato = new Animal("gato", 5, "negro");
const pajaro = new Animal("pajaro", 5, "negro");


// Perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

Perro.ladrar();
document.writeln("<br>"); 
document.writeln(gato.ladrar());

*/

//!MÉTODOS DE CADENA

// let cadena = "Cadena de prueba";
// let cadena2 = "Cadena de prueba 2";


//*buscar cadenas y nos devuelve un valor
//let result = cadena.concat(cadena2);
//let result = cadena.startsWith(cadena2);  //?muestra en boolean si la cadena de comparación inicia igual
//let result = cadena.endsWith(cadena2) //?lo mismo pero al final
//let result = cadena.includes("de prueba"); //? Muestra en booleano si la subcadena está dentro de la cadena
//let result = cadena.indexOf("de"); //? Devuelve la posición donde inicia la subcadena, es decir, la posición de la letra (si no está, devuelve -1)

// let result = cadena.lastIndexOf("e"); //? Devuelve la última posición donde aparece la subcadena

//*pueden ser muy usados  
// let result = cadena.padStart(30, "*"); //? Rellena la cadena al inicio hasta completar la longitud especificada
// let result = cadena.padEnd(25, "-"); //? Rellena la cadena al final hasta completar la longitud especificada
// let result = cadena.repeat(3); //? Devuelve la cadena repetida el número de veces indicado
//let result = cadena.length();

//*modification de la cadena
// let result = cadena.split(" "); //? Divide la cadena en un array según el separador indicado
// let result = cadena.substring(0, 6); //? Nos retorna una porción de la cadena desde el índice inicial hasta el final (sin incluirlo)
// let result = cadena.toLowerCase(); //? Convierte toda la cadena a minúsculas
// let result = cadena.toUpperCase(); //? Convierte toda la cadena a mayúsculas
// let result = cadena.toString(); //? Devuelve la representación en cadena del valor
// let result = cadena.trim(); //? Elimina los espacios en blanco al inicio y al final
// let result = cadena.trimEnd(); //? Elimina los espacios en blanco al final
// let result = cadena.trimStart(); //? Elimina los espacios en blanco al inicio
// let result = cadena.valueOf(); //? Retorna el valor primitivo de la cadena

// document.writeln(result);

//! MÉTODOS DE ARRAYS

// let array = [1, 2, 3, 4, 5];
// let array2 = ["a", "b", "c"];

//* Métodos Transformadores
//  let result = array.pop(); //? Elimina el último elemento del array y lo retorna
// let result = array.shift(); //? Elimina el primer elemento del array y lo retorna
// let result = array.push(6,5); //? Agrega un elemento al final del array y retorna la nueva longitud
// let result = array.reverse(); //? Invierte el orden de los elementos en el array
// let result = array.unshift(0); //? Agrega un elemento al inicio del array y retorna la nueva longitud
// let result = array.sort(); //? Ordena los elementos del array alfabéticamente (para números, se recomienda usar una función de comparación)
// let result = array.splice(2, 1, 99); //? Cambia el contenido del array eliminando y/o agregando elementos en una posición específica. el primer valor es la posición, el segundo la cantidad de posiciones a eliminar. el ultimo valor agrega el valor por el que lo queremos reemplazar

//* Métodos Accesores
// let result = array2.join(" - "); //? Une todos los elementos del array en una cadena con el separador indicado
// let result = array.slice(1, 4); //? Devuelve una porción del array sin modificar el original

//* Métodos de Repetición
// let result = array.filter(num => num > 2); //? Crea un nuevo array con los elementos que cumplan la condición, el primer num es como el contador
// array.forEach(num => console.log(num * 2)); //? Ejecuta la función dada en cada elemento del array
// let result = array.map(num => num * 2); //? Crea un nuevo array aplicando la función a cada elemento

//document.writeln(result);

/*
!OBJETO MATH

let num = 25;
let num2 = 8.75;
let valores = [3, 7, 1, 9, 4];

MÉTODOS
let result = Math.sqrt(num); //? Devuelve la raíz cuadrada de un número
let result = Math.cbrt(num); //? Devuelve la raíz cúbica de un número
let result = Math.max(2,4,5,6,45); //? Devuelve el valor máximo de una lista de números
let result = Math.min(...valores); //? Devuelve el valor mínimo de una lista de números
let result = Math.random(); //? Devuelve un número aleatorio entre 0 y 1
* let result = Math.round(num2); //? Redondea al entero más cercano
let result = Math.fround(num2); //? Redondea a un número de punto flotante de precisión simple
let result = Math.floor(num2); //? Redondea hacia abajo al entero más cercano
* let result = Math.trunc(num2); //? Elimina la parte decimal del número

PROPIEDADES
let result = Math.PI; //? Devuelve el valor de PI (3.141592...)
let result = Math.SQRT1_2; //? Devuelve la raíz cuadrada de 1/2
let result = Math.SQRT2; //? Devuelve la raíz cuadrada de 2
let result = Math.E; //? Devuelve el número de Euler (e ≈ 2.718)
let result = Math.LN2; //? Devuelve el logaritmo natural de 2
let result = Math.LN10; //? Devuelve el logaritmo natural de 10
let result = Math.LOG2E; //? Devuelve el logaritmo en base 2 de e
let result = Math.LOG10E; //? Devuelve el logaritmo en base 10 de e

document.writeln(result);
*/


//!----------------------------------------------------------------
//!-----------------------------HTML DOM-------------------------------

//! MÉTODOS DE SELECCIÓN DE ELEMENTOS

//*selección de los elementos
//let parrafo = document.getElementById("parrafo");
//let parrafo = document.getElementByTagName("parrafo");

//let textoParrafo = document.querySelector(".parrafo");

//!MÉTODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS
//setAtribute();
/*
    const rangoEtario = document.querySelector(".rangoEtario");


    let valorDelAtributo = rangoEtario.getAttribute("type");
    document.writeln(valorDelAtributo);
*/

/*
!ATRIBUTOS GLOBALES
//*lo seleccionamos
const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable", "true"); //*editar texto de la pagina
titulo.setAttribute("dir", "rtl"); //mover, pero se puede desde css
*/

/*
!ATRIBUTOS DE INPUTS

const input = document.querySelector(".input-normal");
document.writeln(input.className);
document.writeln(input.value);
document.writeln(input.type="range");
document.writeln(input.className);
document.writeln(input.required); 

!CLASES, CLASSLIST Y MÉTODOS DE CLASSLIST

const titulo =document.querySelector(".titulo"); 

titulo.classList.add("titulo2");
*/

//!CREACIÓN DE ELEMENTOS

/*
const titulo = document.querySelector(".titulo");
let resultado = titulo.textContent; //NOS MUESTRA TODO EL TEXTO
let resultado2 = titulo.innerText; //devuelve el texto visisble
let resultado3 = titulo.innerHTML; //MUESTRA TODO EL CONTENIDO HTML

document.writeln(resultado); //*nos devuelve el texto
*/


/*
!MÉTODOS HIJOS
const contenedor = document.querySelector('.contenedor');

const item = document.createElement('li');

item.innerHTML = "Este es un hijo de los elementos"

console.log("firstChild:", contenedor.firstChild);  // Puede ser texto o un nodo
console.log("lastChild:", contenedor.lastChild);
console.log("firstElementChild:", contenedor.firstElementChild);
console.log("lastElementChild:", contenedor.lastElementChild);
console.log("childNodes:", contenedor.childNodes); // Incluye nodos de texto y elementos
console.log("children:", contenedor.children); // Solo elementos hijos
*/


//!----------------------------------------------------------------
//!---------------------------------NIVEL MEDIO--------------------  