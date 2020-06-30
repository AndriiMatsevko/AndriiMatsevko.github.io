var ctxL = document.getElementById('lineChart').getContext('2d');
    var myLineChart = new Chart(ctxL, {
    	type: 'line',
    	data: {
    		labels: ["1","2","3","4","5","6","7"],
    		datasets: [
    		{
    			label: "dataset-1",
    			fillColor: "black",
    			strokeColor: "red",
    			pointColor: "green",
    			pointStrokeColor: "white",
    			pointHighlightFill: "white",
    			pointHighlightStroke: "yellow",
    			data: [65,57,82,72,54,34,40]
    		},

    		{
    			label: "dataset-2",
    			fillColor: "black",
    			strokeColor: "red",
    			pointColor: "green",
    			pointStrokeColor: "white",
    			pointHighlightFill: "white",
    			pointHighlightStroke: "yellow",
    			data: [32,34,23,65,85,54,78]
    		}
    		]
    	}
    });