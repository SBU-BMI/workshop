console.log('loaded workshopJonas.js')

$(document).ready(function() {
    var boxSelect = new BoxSelect();
    // Register a success callback handler
    boxSelect.success(function(response) {
        response.forEach(function(r){
            $.get(r.url)
                .then(function(x){
                    //console.log('content of the file:',x)
                    document.body.innerHTML+='<li>'+x+'</li>'
                })
        })
        
    });
    // Register a cancel callback handler
    boxSelect.cancel(function() {
        console.log("The user clicked cancel or closed the popup");
    });
});