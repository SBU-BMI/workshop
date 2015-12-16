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
    return x
}




$(document).ready(function(){
    ebolaJonas()
})
