function engineClock(){
    
    let actualTime = new Date();
    
    h = actualTime.getHours();
    m = actualTime.getMinutes();
    s = actualTime.getSeconds();

    if (s < 10) {
        s = "0" + s;
    }

    if (m < 10) {
        m = "0" + m;
    }
    
    let outputTime = h + " : " + m + " : " + s;
    
    document.form_clock.clock.value = outputTime;
    
    setTimeout("engineClock()",1000);
    
    }