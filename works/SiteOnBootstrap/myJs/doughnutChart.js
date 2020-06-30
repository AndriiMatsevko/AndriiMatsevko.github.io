var ctxD = document.getElementById('doughnutChart').getContext('2d');
    var myDoughnutChart = new Chart(ctxD, {
    	type: 'doughnut',
    	data: {
    		labels: ["One","Two","Three","Four","Five"],
    		datasets: [
    		{
    			data: [300,50,100,72,120],
                backgroundColor: ["red","green","blue","black","grey"],
                hoverBackgroundColor: ["green","blue","red","grey","black"]
    		}
    		]
    	},
        options: {
            responsive: true
        }
    });