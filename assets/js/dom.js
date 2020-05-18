

function excuteOrder66(){

	/*Búsqueda por atributo id*/
	var objetivo = document.getElementById('parrafin')
	console.log(objetivo)

		/*Añadir un nodo al DOM (Añadir un objeto a la pagina)*/
		var objeto = document.createElement('p');
		var contenido = document.createTextNode('Hola amiguitos yo me añadí después de la carga');
		objeto.appendChild(contenido);

		objetivo.appendChild(objeto);


	/*Búsqueda por atributo name*/
	var resultado = document.getElementsByName('li_dos');
	console.log(resultado)
	resultado[0].parentNode.removeChild(resultado[0]);

	/* búsqueda por etiqueta */
	var contenedores = document.getElementsByTagName('div');

	for (var i = 0; i < contenedores.length; i++) {

		//console.log(contenedores[i]);

		var parrafos = contenedores[i].getElementsByTagName('p');

		for (var j = 0; j < parrafos.length; j++) {
			//console.log(parrafos[j])
		}
	}

}