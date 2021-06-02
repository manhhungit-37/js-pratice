window.onload = function() {
    const myClock = document.getElementById("myclock");
    const timer = setInterval(dateTime, 1000);
    
    function dateTime() {
        const date = new Date();
        myClock.innerHTML = date.toLocaleTimeString();
    }
}