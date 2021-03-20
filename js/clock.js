function engineClock(){
    
    let actualTime = new Date();
    
    h = actualTime.getHours();
    m = actualTime.getMinutes();
    s = actualTime.getSeconds();

    if (s < 10) {
        s = "0" + s;
    }
    
    let outputTime = h + " : " + m + " : " + s;
    
    document.form_clock.clock.value = outputTime;
    
    setTimeout("engineClock()",1000);
    
    }