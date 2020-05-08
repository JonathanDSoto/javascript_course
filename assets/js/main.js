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

var flag = false;

           //   0  ,   1    ,     2     ,   3    ,    4    ,    5   ,    6
var dias = ["Lunes","martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

for (var i = 0; i < dias.length; ++i) {
	console.log(dias[i])
}

var numero1 = 9; 
	numero1 %=2;
	console.log(numero1);
	//divisibles
	
	/*
	if(arreglo[3] > arreglo[4]){
		alert(arreglo[3])
	}else{
		alert(arreglo[4])
	}
 	resultado = arreglo[3] > arreglo[4];
 	*/

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
alert(texto1)
 