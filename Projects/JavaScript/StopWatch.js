
function timeClock(time) {
    let hours = time / 3_600_000;
    let hh = Math.floor(hours);

    let minutes = (hours - hh) * 60;
    let mm = Math.floor(minutes);

    let seconds = (minutes - mm) * 60;
    let ss = Math.floor(seconds);

    let doubleHH = hh.toString().padStart(2, 0);
    let doubleMM = mm.toString().padStart(2, 0);
    let doubleSS = ss.toString().padStart(2, 0);

    return `${doubleHH}:${doubleMM}:${doubleSS}`;
}

let buttonPlay = document.getElementById("playButton");
let buttonPause = document.getElementById("pauseButton");
let buttonReset = document.getElementById("resetButton");

buttonPlay.addEventListener("click", start);
buttonPause.addEventListener("click", pause);
buttonReset.addEventListener("click", reset);

let startTime = Date.now();

