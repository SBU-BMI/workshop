console.log('ebolaJonas.js loaded')

// load the data

ebolaJonas=function(){
    // ini
    ebolaJonas.loadData()
}

ebolaJonas.loadData=function(){
    var url = 'http://graphics8.nytimes.com/packages/js/newsgraphics/2014/08/06-eboal-cases-deaths.js'
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
    ebolaJonas.plotData(x)
}

ebolaJonas.plotData=function(x){
    // create DOM element for plot.ly
    var div = document.createElement('div') // using primitives for ol'times sake
    div.id = 'plotlyDiv'
    document.body.appendChild(div)
    Plotly.plot( div, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );
}


$(document).ready(function(){
    ebolaJonas()
})
