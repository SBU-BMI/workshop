
joeCerner.get=function(url,callback){
  //defaults
  if(!callback){
    callback = function () {
      console.log(this.responseText);
    }
  }
  if(!url){ // the demo url from CERNER's docuentation at http://fhir.cerner.com/may2015/#schema
    url="https://fhir.sandboxcernerpowerchart.com/may2015/open/d075cf8b-3261-481d-97e5-ba6c48d3b41f/metadata"
  }
  // define call with accept header as required by CERNER
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", callback);
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Accept","application/json+fhir");
  xhr.send();
  return xhr // just so we can look at it
}
