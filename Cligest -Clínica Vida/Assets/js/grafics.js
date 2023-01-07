
//Para usar chartjs devemos ter em conta os segtes parametros: type, data e options
const ctx = document.getElementById('myChart');
    
      new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","nov","Dez"],
          datasets: [{
            label: "Produção da Clínica - 2022",
            data: [5,10,5,14,20,15,6,14,8,12,15,5,10],
            borderWidth: 5,
            bordercolor: 'rgba(77.166,253,0.5)',
            backgroundcolor: 'transparent',
      
          },
          {
            label: "Produção da Clínica - 2023",
            data: [3,18,9,10,8,10,14,8,14,15,12,10,7],
            borderWidth: 5,
            bordercolor: 'rgba(77.166,253,0.5)',
            backgroundcolor: 'transparent',
      
          },
        ]
        },
        options: {
          title: {
            display: true,
            fontSize: 20,
            text: "RELATÓRIO DE CONTROLE ANUAL"
          },
          labels: {
            fontStyle: 'bold',
        }
      }
  });