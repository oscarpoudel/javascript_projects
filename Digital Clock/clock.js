setInterval(function(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var periods = 'AM';
    if(hours >= 12){
        periods = ' PM';

    }
    if(hours>12){
        hours = hours-12;


    }

    if (seconds < 10){
        seconds = '0'+seconds;
    }
    if(minutes<10){
        minutes = '0'+minutes;
    }
    var clockTime = hours+':'+minutes+':'+seconds+""+periods;
    var clock = document.getElementById('clock');
    clock.innerHTML= clockTime;




},1000);