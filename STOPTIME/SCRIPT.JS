let cronometroElemento = document.getElementById('cronometro');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let tempo = 0;
let intervalId;
let vvv = 0;
let stopButtonClicked = false;

startButton.addEventListener('click', function() {
    startButton.disabled = true;
    intervalId = setInterval(function() {
        name();
    }, 1000);
});

stopButton.addEventListener('click', function() {
    // Ferma l'intervallo
    clearInterval(intervalId);
    // Riabilita il pulsante di avvio
    startButton.disabled = false;
});

resetButton.addEventListener('click', function() {
    tempo = 0;
    cronometroElemento.textContent = '00';
    vvv = 0;
    clearInterval(intervalId);
    startButton.disabled = false;
});
let minu = document.getElementById('minu');
function name() {
    tempo++;
    if (tempo < 10) {
        let oo = "0" + tempo;
        cronometroElemento.textContent = oo;

    } else if (tempo == 10) {
        tempo = 0;
                vvv++;
            if (vvv < 10) {
                let oo = "0" + vvv;
                minu.textContent = oo;
            } else if (vvv == 60) {
                vvv = 0;
            } else {
                minu.textContent = vvv;
            }
    } else {
        cronometroElemento.textContent = tempo;
    }
}


















































































