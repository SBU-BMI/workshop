console.log('jonas.js loaded :-O and today is Aug 26!')
document.body.innerHTML+=' <h2>hello from the console :O</h2>'
console.log('hello world!')
lala = function(x){
    var lele=9
    4
    
}

ourGet=function(url,callback){
  if(!url){
    url = 'https://health.data.ny.gov/resource/5q8c-d6xq.json?patient_zipcode=11790'
  }

  if(!callback){
    callback = function () {
      console.log(this.responseText);
    }
  }

  xhr = new XMLHttpRequest();
  xhr.addEventListener("load", callback);
  xhr.open("GET", url, true);
  xhr.send();
}

cb=function(x){
  lala=JSON.parse(x.target.responseText);
  console.log('data loaded onto lala')
  var ol = document.createElement('ol')
  document.body.appendChild(ol)
  ol.id='lele'
  lala.forEach(function(xi,i){
    var li = document.createElement('li')
    ol.appendChild(li)
    li.innerHTML='<h3>'+xi.pqi_name+'</h3> '+xi.observed_rate_per_100_000_people+'/'+xi.expected_rate_per_100_000_people
    li.style.color='blue'
    4
  })
  4
}
ourGet('http://sbu-bmi.github.io/workshop/pqi11790.json',cb)




//

////
