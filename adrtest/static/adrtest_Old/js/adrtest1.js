var cellValues = {};

var user = document.getElementById('context').getAttribute('user'); 




function syncCellValue(cellId) {
    var cell = document.getElementById(cellId);
    var newValue = cell.textContent;
    cellValues[cellId] = newValue;

    // Puedes hacer algo con los valores en cellValues cada vez que se editen las celdas.
    //console.log(cellId);
    //console.log(cellValues);
    //console.log(cellValues[cellId]);
    //console.log(cellValues);
    //contactarApi(cellId);
    subirDatos(cellId);
    
}



function subirDatos(cellId) {

  const url = `http://127.0.0.1:8000/api/adrtest/1/`; // Reemplaza con la URL correcta

  const formData = new FormData();
  formData.append(cellId, parseFloat(cellValues[cellId]));

  fetch(url, {
    method: 'PATCH',
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        console.log('Actualización exitosa');
        peticion();
      } else {
        console.error('Error al actualizar:', response.status);
        // Puedes manejar el error según tus necesidades
      }
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var cells = document.querySelectorAll('td[contenteditable="true"]');
    cells.forEach(function (cell) {
        cell.addEventListener('input', function () {
            syncCellValue(cell.id);
        });
    });
});

