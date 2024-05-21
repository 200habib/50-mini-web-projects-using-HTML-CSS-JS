let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let timeRemaining = 1500;
let timerInterval;

startButton.addEventListener('click', function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    startButton.disabled = true;
});

function updateTimer() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    if (timeRemaining > 0) {
        timeRemaining -= 1;
    } else {
        clearInterval(timerInterval);
    }
}

stopButton.addEventListener('click', function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
});

resetButton.addEventListener('click', function resetTimer() {
    clearInterval(timerInterval);
    timeRemaining = 1500;
    timerDisplay.textContent = "25:00";
    startButton.disabled = false;
});
