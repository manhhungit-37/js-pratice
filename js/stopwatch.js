window.onload = function() {
    const appendMinutes = document.getElementById("minutes");
    const appendSeconds = document.getElementById("seconds");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");
    let timer;
    let minutes = 0;
    let seconds = 0;

    
    start.onclick = function() {
        timer = setInterval(startTimer, 10);
    }

    stop.onclick = function() {
        clearInterval(timer);
    }

    reset.onclick = function() {
        clearInterval(timer);
        minutes = 0;
        seconds = 0;
        appendMinutes.innerHTML = "0" + minutes;
        appendSeconds.innerHTML = "0" + seconds;
    }

    function startTimer() {
        seconds++;

        if (minutes >= 10) {
            appendMinutes.innerHTML = minutes;
        }

        if (seconds < 10) {
            appendSeconds.innerHTML = "0" + seconds;  
        }

        if (seconds > 10) {
            appendSeconds.innerHTML = seconds;
        }

        if(seconds > 99) {
            seconds = 0;
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
        }
    }
}