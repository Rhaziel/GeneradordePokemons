document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

//Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
     e.preventDefault();

     console.log('Si!');
     //Leer las variables
     /*const origen = document.getElementById('origen');
     const origenSeleccionado = origen.options[origen.selectedIndex].value;

     const genero = document.getElementById('genero');
     const generoSeleccionado = genero.options[genero.selectedIndex].value;
     */
     const cantidad = document.getElementById('numero1').value;
     const inicial = document.getElementById('numero2').value;

     console.log(cantidad);

     let url = '';
     url += 'https://pokeapi.co/api/v2/pokemon?limit='+cantidad+'&offset='+inicial;
     //Si hay origen agregarlo a la URL
    /* if (origenSeleccionado !== '') {
          url += `region=${origenSeleccionado}&`;
     }
     //Si hay un genero agregarlo a la url
     if (generoSeleccionado !== '') {
          url += `gender=${generoSeleccionado}&`;
     }
     //Si hay una cantidad agregarlo a la URL
     if (cantidad !== '') {
          url += `amount=${cantidad}&`;
     }
     console.log(url);*/
     const xhr = new XMLHttpRequest();

     xhr.open('GET', url, true)

     xhr.onload = function(){
          if(this.status === 200){
              
               const contenido = JSON.parse(this.responseText)
               
               let htmlNombres = '<h2> Pokemones: </h2>'

               htmlNombres += '<ul class="lista">';
               console.log(contenido.results)
               contenido.results.forEach( function(elem){
                    console.log(elem.name)
                    htmlNombres += `<li> ${elem.name}`;
               })

               htmlNombres += '</ul>'

               document.getElementById('resultado').innerHTML = htmlNombres;
          }
     }

     xhr.send()
}
