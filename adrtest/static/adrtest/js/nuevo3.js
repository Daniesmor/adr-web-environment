


grafica_impresa=false;
let chart;
function peticion() {
    console.log("se hallamado a peticion");

    fetch(`http://127.0.0.1:8000/api/adrtest/1/`)  // Usamos la URL de la vista 'UserView' en la app 'users'
    .then(response => response.json())
    .then(data => {
        // Llamar a la función para mostrar los datos en la página

        mostrarGrafica(data);

        //console.log(data);

    })
    .catch(error => console.error('Error al obtener los datos:', error));

}

function actualizarGrafica(data) {
  console.log("holas");
}


function mostrarGrafica(data) {

  let dataX = [parseFloat(data['first_vel']), 
                parseFloat(data['second_vel']), 
                parseFloat(data['third_vel']), 
                parseFloat(data['fourth_vel']), 
                parseFloat(data['fifth_vel'])];
    let dataY = [parseFloat(data['first_weight']), 
                parseFloat(data['second_weight']), 
                parseFloat(data['third_weight']), 
                parseFloat(data['fourth_weight']), 
                parseFloat(data['fifth_weight'])];
  
  //------------------------------REGRESION------------------------------------------------

    let xy_sum = 0;
    let x_sum = 0;
    let y_sum = 0;
    let xx_sum = 0;
    let n = dataX.length;

    
    for (let item=0; item < n; item++) {

      xy_sum = xy_sum + (dataX[item] * dataY[item]);
        
    }
    
    for (let itemX of dataX) {
        x_sum = x_sum + itemX;
    }
    
    for (let itemY of dataY) {
        y_sum = y_sum + itemY;
    }
    
    for (let itemX of dataX) {
        xx_sum = xx_sum + (itemX * itemX);
    }
    console.log(xy_sum);
    console.log(x_sum);
    console.log(y_sum);
    console.log(xx_sum);
    console.log(x_sum*x_sum);
    console.log(n);
    
    //y=ax+b
    let a = ((n*xy_sum)-(x_sum*y_sum))/((n*xx_sum)-(x_sum*x_sum));
    let b = ((y_sum)-(a*x_sum))/n;


    const corteEjes = [  
      { x: 0, y: b },
      { x:((-b)/a), y: 0 }
    ];
    
    const dataset = [  
        { x: data['first_vel'], y: data['first_weight'] },
        { x: data['second_vel'], y: data['second_weight'] },
        { x: data['third_vel'], y: data['third_weight'] },
        { x: data['fourth_vel'], y: data['fourth_weight'] },
        { x: data['fifth_vel'], y: data['fifth_weight'] },
      ];

      // FILA RM ESTIMADO
      const rm_vels = {
        "Sentadilla": 0.30,
        "Press banca": 0.16,
        "Peso muerto": 0.15,
        "Hip thrust": 0.25,
        "Remo tumbado": 0.50,
        "Press militar": 0.19,
      };

      var valorSeleccionado = "Sentadilla";
      var workout_selected = rm_vels[valorSeleccionado];

      var dropdown_text = document.getElementById('dropdownMenuButton');
      dropdown_text.textContent = valorSeleccionado;

      var items = document.querySelectorAll('.dropdown-item');

      // Agregar un event listener 'click' a cada elemento
      items.forEach(function(item) {
        item.addEventListener('click', function() {
          // Obtener el texto del elemento seleccionado
          valorSeleccionado = item.textContent.trim();

          switch(valorSeleccionado) {
            case 'Peso muerto':
              workout_selected = rm_vels['Peso muerto']  
              break;
            case 'Sentadilla':
              workout_selected = rm_vels['Sentadilla']; 
              break;
            case 'Press banca':
              workout_selected = rm_vels['Press banca']; 
              break;
            case 'Hip thrust':
              workout_selected = rm_vels['Hip thrust']; 
              break;
            case 'Remo tumbado':
              workout_selected = rm_vels['Remo tumbado']; 
              break;
            case 'Press militar':
              workout_selected = rm_vels['Press militar']; 
              break;
            default:
              workout_selected = rm_vels['Sentadilla'];  
              break;
          }
          dropdown_text.textContent = valorSeleccionado;
          console.log('Valor seleccionado:', workout_selected);
          rm_vel.textContent = workout_selected;
          rm_weight.textContent = (a*workout_selected+b).toFixed(2);
          // Puedes hacer lo que quieras con el valor seleccionado aquí
        });
      });





     

      var rm_weight = document.getElementById('rm_weight');
      rm_weight.textContent = (a*workout_selected+b).toFixed(2);

      var rm_vel = document.getElementById('rm_vel');
      rm_vel.textContent = workout_selected;
 
      
    // FILA L0
      var lo_weight = document.getElementById('lo_weight');
      lo_weight.textContent = b.toFixed(2);
    
    // FILA V0
      var v0_vel = document.getElementById('v0_vel');
      v0_vel.textContent = ((-b)/a).toFixed(2);

    // Calcular la regresión lineal


    

  if (grafica_impresa == false) {
    
    // Crear el gráfico
    const ctx = document.getElementById("regressionChart");


    
    chart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Datos de Carga',
          data: dataset,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointStyle: 'circle',
          pointRadius: 5,
        }, {
          label: 'Datos de Regresion',
          data: corteEjes,
          backgroundColor: 'rgba(239, 255, 0, 1)',
          borderColor: 'rgba(239, 255, 0, 1)',
          pointStyle: 'circle',
          pointRadius: 5,
          fill: false,
          type: 'line',
        }]
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Gráfica combinada de dispersión y línea'
        },
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          },
          y: {
            type: 'linear',
            position: 'left'
          }
        }
      }
    });
    
    grafica_impresa = true;    

    
  } else {
    chart.data.datasets[0].data = dataset;
    chart.data.datasets[1].data = corteEjes;
    chart.update();
    console.log("aqui adnamos");
    console.log(dataset);
  }



}


peticion();
