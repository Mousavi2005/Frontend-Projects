const playStopBtn = document.querySelector('.play-stop-btn');
const resetBtn = document.querySelector('.reset-btn');
const timer = document.querySelector('.timer');
const platStopIcon = document.querySelector('#p-s');

let seconds = 0;
let minutes = 0;
let houres = 0;

let stringSeconds = '';
let stringMinutes = '';
let stringHoures = '';

let interVal;
let active = false;

function changeTimer() {

    seconds++;

    if (seconds >= 60) {

        minutes++;
        seconds = 0;

        if (minutes >= 60) {

            houres++;
            minutes = 0;
        }
    };

    if (seconds < 10) {
        stringSeconds = '0' + String(seconds);
    } else {
        stringSeconds = String(seconds);
    };

    if (minutes < 10) {
        stringMinutes = '0' + String(minutes);
    } else {
        stringMinutes = String(minutes);
    }

    if (houres < 10) {
        stringHoures = '0' + String(houres);
    } else {
        stringHoures = String(houres);
    }

    timer.innerHTML = String(stringHoures) + ":" + String(stringMinutes) + ":" + String(stringSeconds);
};


playStopBtn.addEventListener('click',function(){

    if (!active) {

        interVal = window.setInterval(changeTimer,1000);
        playStopBtn.style.backgroundColor = 'orange';
        platStopIcon.classList.remove('fas', 'fa-play');
        platStopIcon.classList.add('fa-solid', 'fa-pause');
        // platStopIcon.classList.add('fa-stop');
        // console.log(platStopIcon);
        active = true;
    } else {

        window.clearInterval(interVal);
        playStopBtn.style.backgroundColor = 'green';
        platStopIcon.classList.remove('fa-solid', 'fa-stop');
        platStopIcon.classList.add('fas', 'fa-play');
        active = false;
    }

});

resetBtn.addEventListener('click',function(){

    seconds = 0;
    minutes = 0;
    houres = 0;
    
    timer.innerHTML = '00:00:00';
});
