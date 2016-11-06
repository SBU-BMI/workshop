console.log('u2u.js loaded');

U2U={
    jobs:{}
};

U2U.getData=function(cb){
    var dataUrl = "https://script.google.com/macros/s/AKfycbwyQx71RQcMbuZ2v4MuFLxSm4yHhESabYtfe4ezJB8vSd-nnTQY/exec" 
    var uid = 'job'+Math.random().toString().slice(2)
    cb = cb || function(x){console.log(x)}
    U2U.jobs[uid]=cb
    $.getScript(dataUrl+'callback=U2U.jobs.'+uid)
}

U2U.showData=function(){
    U2U.getData(function(x){
        x = decodeURIComponent(x)
        rr = x.split(/[/n/r]+/)
        U2U.showData.dt=[]
        var parms = rr[0].split('\t')
        rr.slice(1).forEach(function(r,i){
            4
            
            U2U.showData.dt[i]={}
            U2U.showData.dt[i][parms[i]]=v
        })
        var pre=document.createElement('pre')
        U2U.getData.pre=pre
        pre.textContent=JSON.stringify(U2U.showData.dt,null,3)
        document.body.appendChild(pre)
    })
}

U2U.showData()
