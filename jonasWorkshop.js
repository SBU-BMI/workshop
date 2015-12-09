console.log('loaded workshopJonas.js')

$(document).ready(function() {
    var boxSelect = new BoxSelect();
    // Register a success callback handler
    boxSelect.success(function(response) {
        console.log(response);
    });
    // Register a cancel callback handler
    boxSelect.cancel(function() {
        console.log("The user clicked cancel or closed the popup");
    });
});