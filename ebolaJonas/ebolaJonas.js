console.log('ebolaJonas.js loaded')

// load the data

ebolaJonas=function(){
    // ini
    ebolaJonas.loadData()
}

ebolaJonas.loadData=function(){
    var url = 'https://graphics8.nytimes.com/packages/js/newsgraphics/2014/08/06-eboal-cases-deaths.js'
    jQuery.getJSON(url,function(x){
        console.log(x.length+' ebola records loaded')
        ebolaJonas.cleanData(x) // callback function
    })
}

ebolaJonas.cleanData=function(x){ // recognize types
    x = x.map(function(xi){
        xi.date=new Date(xi.date)
        for(var p in xi){
            if(p!='date'){
                xi[p]=parseFloat(xi[p])
            }
        }
        return xi
    })
    console.log('clean data:',x)
    // transpose data
    var parms=Object.getOwnPropertyNames(x[0])
    var y ={}
    parms.forEach(function(p){
    	y[p]=[]
    })
    x.forEach(function(xi,i){ // discuss i, why use it here?
    	parms.forEach(function(p){
			y[p][i]=xi[p]
		})
    })
    console.log('transposed data:',x)
    
    ebolaJonas.plotData(y)
}

ebolaJonas.plotData=function(x){
    // create DOM element for plot.ly
    
    var div = document.createElement('div') // using primitives for ol'times sake
    div.id = 'plotlyDiv'
    document.body.appendChild(div)
    
    /*  // basic plot for comparison
    Plotly.plot( div, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );
	*/

	//see https://plot.ly/javascript/line-and-scatter/ for plot.ly data structure
	var data = []
	var parms=Object.getOwnPropertyNames(x)
	parms.forEach(function(p){
		if(p!='date'){
			var trace = {
			  x: x.date,
			  y: x[p],
			  mode: 'markers',
			  type: 'scatter',
			  name: p
			};
			data.push(trace)
		}
	})

	Plotly.newPlot(div, data);

}


$(document).ready(function(){
    ebolaJonas()
})
