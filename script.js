var daysCount = new Date("dec 31,2024 00:00:00").getTime();

var count = setInterval(function(){
    var now = new Date().getTime();
    var time= daysCount-now;

    var days =Math.floor(time/(100*60*60*24));
    var hours = Math.floor((time % (100 * 60 * 60 * 24)) / (1000*60*60));
    var minutes = Math.floor((time%(1000*60*60))/(1000*60));
    var seconds = Math.floor((time%(1000*60))/1000);

    document.getElementById("Time-display").innerHTML= days+" "+hours+" "+minutes+" "+seconds+" ";

    if(time<0){
        clearInterval(count);
        document.getElementById("sphe").innerHTML="happy new Year";
    }
})