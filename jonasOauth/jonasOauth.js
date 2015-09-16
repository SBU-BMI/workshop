console.log('jonasOauth.js loaded')

jonasOauth = function(){ // ini
    // ini
    jonasOauth.login={}
    if(location.hash.length>1){ // if oauth credention
    	location.hash.slice(1).split('&').forEach(function(x){
    		console.log(x)
    		x=x.split('=')
    		jonasOauth.login[x[0]]=x[1]
    	})

    }else{
        jonasOauth.oauth()
    }
    location.hash=''


}

jonasOauth.oauth=function(){
	var oUrl='https://accounts.google.com/o/oauth2/auth' // <-- Google's OAUTH service'
    document.location.href=oUrl+'?client_id=113010836143-l6sd0qnkhjjmafra08g1tqke1fpk9kvh.apps.googleusercontent.com&response_type=token&scope=email&redirect_uri='+document.location.href
}

// https://accounts.google.com/o/oauth2/auth?client_id=113010836143-l6sd0qnkhjjmafra08g1tqke1fpk9kvh.apps.googleusercontent.com&response_type=token&scope=email&redirect_uri=http://localhost://



$(document).ready(function(){
    jonasOauth() // <- starts here, after DOM is ready
})

// document.location.href=oUrl+'?client_id=219713047770-62lp54st6asguu9r43djdhnbs0nqhse6.apps.googleusercontent.com&response_type=token&scope=email&redirect_uri='+location.href



/*
jonas.oauth=function(){
    var oUrl='https://accounts.google.com/o/oauth2/auth'
    //document.location.href=oUrl+'?client_id=219713047770-62lp54st6asguu9r43djdhnbs0nqhse6.apps.googleusercontent.com&response_type=token&scope=email&redirect_uri=http://localhost:8000/DavidIsRight/jonas.html'
    document.location.href=oUrl+'?client_id=219713047770-62lp54st6asguu9r43djdhnbs0nqhse6.apps.googleusercontent.com&response_type=token&scope=email&redirect_uri='+location.href
}
*/
