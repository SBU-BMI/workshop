console.log('javiEbola.js loaded')

Plotly.d3.json('http://graphics8.nytimes.com/packages/js/newsgraphics/2014/08/06-eboal-cases-deaths.js', 
  function(figure){
	  var index;
	  var x_a=[];
	  var y_a=[];
	  var y2_a=[];
	  for	(index = 0; index < figure.length; index++) {
	  	x_a.push(figure[index].date);
	  	y_a.push(figure[index].liberia_cases);
	  	y2_a.push(figure[index].liberia_deaths);
	  }
		var data = [ 
			{	x: x_a, 
				y: y_a, 
				name: 'Liberia Cases', 
				type: 'bar'
			},
			{
				x: x_a, 
				y: y2_a, 
				name: 'Liberia Deaths', 
				type: 'bar'
			}];
		var layout =  {barmode: 'group'};

  Plotly.newPlot('myDiv', data,layout);
  
}
);

/*var trace1 = {
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [20, 14, 23],
  name: 'SF Zoo',
  type: 'bar'
};

var trace2 = {
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [12, 18, 29],
  name: 'LA Zoo',
  type: 'bar'

  var data = [trace1, trace2];

var layout = {barmode: 'group'};

Plotly.newPlot('myDiv', data, layout);
};*/