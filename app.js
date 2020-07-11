let startBtn = document.querySelector('.start')
let pauseBtn = document.querySelector('.pause')
let resetBtn = document.querySelector('.reset')

let interval;

let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let msec = document.querySelector('.msec');

let h = 0, m = 0, s = 0, ms = 0;

const start = () => {
    
    interval = setInterval(() => {
        if (ms >= 100){
            ms = 0;
            sec.innerHTML = ++s;
        } else if (s >= 10){
            s = 0;
            min.innerHTML = ++m;
        } else if (m >= 2){
            m = 0;
            hour.innerHTML = ++h;
        }
       msec.innerHTML = ++ms; 
    }, 10)
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
}
const stop = () => {
    clearInterval(interval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = false;
}
const reset = () => {
    hour.innerHTML = 0;
    min.innerHTML = 0;
    sec.innerHTML = 0;
    msec.innerHTML = 0;
    stop();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
}



