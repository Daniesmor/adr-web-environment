

function obtenerDatosYActualizar() {
    fetch('/api/certificates/daniel/')  // Usamos la URL de la vista 'UserView' en la app 'users'
        .then(response => response.json())
        .then(data => {
            // Llamar a la función para mostrar los datos en la página
            mostrarDatosEnPagina(data[0]);
        })
        .catch(error => console.error('Error al obtener los datos:', error));
    /*
    fetch('/api/certificates/daniel/')  // Usamos la URL de la vista 'UserView' en la app 'users'
        .then(response => response.json())
        .then(data => {
            console.log(data[0])
            // Llamar a la función para mostrar los datos en la página
            //mostrarDatosEnPagina(certificates[0]);
            
        })
        .catch(error => console.error('Error al obtener los datos:', error));       */
}

// Función para mostrar los datos en el HTML según los campos recibidos del JSON
function mostrarDatosEnPagina(data) {
    const aboutElemento = document.getElementById('about');
    const certtitleElemento = document.getElementById('certitle');
    const certinfoElemento = document.getElementById('certinfo');
    const certidElemento = document.getElementById('certid');

    // Mostrar el nombre completo en el elemento h1
    aboutElemento.textContent = data.about_me;


}






// Realizar la primera petición y actualizar cada 5 segundos
obtenerDatosYActualizar();
//setInterval(obtenerDatosYActualizar, 1000); // Actualizar cada 5 segundos (5000 milisegundos)
    
    //<script src="static/core/js/ajax.js"></script>*/