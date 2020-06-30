var ctxP = document.getElementById('pieChart').getContext('2d');
    var myPieChart = new Chart(ctxP, {
      type: 'pie',
      data: {
        datasets: [{
          data: [102,104,203,102,103,102],
          backgroundColor: ['red','blue','grey','green','yellow','red'],
          hoverBackgroundColor: ['green','red','black','blue','yellow','grey']
        }]
      },
      options: {
        responsive: true
      }
    });