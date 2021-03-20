function timeTock() {
    function timeTicking() {
        return new Date().toLocalTimeString()
    }

    setInterval(timeTicking, 3000);
}
document.getElementById('timeTick').innerHTML = timeTock();