var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["one1","one2","one3","one4","one5","one6"],
        datasets: [{
          label: '# of Votes',
          data: [12,14,23,12,13,12],
          backgroundColor: ['red','blue','grey','green','yellow','red'],
          borderColor: ['black','black','black','black','black','black'],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });