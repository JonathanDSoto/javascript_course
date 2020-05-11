/*reglas de lenguaje
* 1.- No importan los espacios en blanco y saltos;
* 2.- Se distingue entre mayúsuclas y minúsculas
* 3.- No se definen las variables o los tipos de variables
* 4.- No es obligatorio o necesario terminar la linea en ; 
* 5.- Admite comentarios
*/

/*Tipos de variables
* Númericas
* Cadenas de texto
* Arrays
* Boolean
*/

//Math.trunc(13.37)

var flag = false;
var edad = prompt("Ingrese su edad",12);

if ( edad >= 18) { //condición   t o f, 1  = t, 0 = f 

	console.log("El usuario es mayor de edad");

}else if(edad >= 10 && edad < 18){

	console.log("El usuario tiene entre 10 y 17")

}else{

	console.log("El usuario es muy pequeño")
}

var flag = false;

           //   0  ,   1    ,     2     ,   3    ,    4    ,    5   ,    6
var dias = ["Lunes","martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

for(i in dias){
	console.log(dias[i])
}

/*for (var i = 0; i < dias.length; i++) {
	console.log(dias[i])
}*/

/*for (var i = 0; i < dias.length; ++i) {
	console.log(dias[i])
}*/


var numero1 = 9; 
	numero1 %=2;
	console.log(numero1);
	//divisibles

var mensaje = "Hola este es mi sitio web";
var producto = 'Chocolate abuelita';
var caracter = 'A';
 
var texto1 = "Esta \n frase \n con \"comilla \n simple\" \n dentro";
var texto2 = 'Esta frase \t con \'com\\illas dobles\' dentro';

var valor_uno = 5.234;
var valor_dos = 2;

var resultado = valor_uno+valor_dos; 

//console.log(valor_uno)
console.log(resultado)
//alert(texto1)
 