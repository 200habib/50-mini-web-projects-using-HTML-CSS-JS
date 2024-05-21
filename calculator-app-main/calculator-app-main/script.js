let displayInput = '';
let display = document.getElementById('display');
window.onload = () => {

    // let touches = document.querySelectorAll(".touche");
    for (let touche of display) {
        touche.addEventListener("click", gestionTouches);
    }
}

function inputNumber(n) {
    gestionTouches(n);
    displayInput  += n; 
    document.getElementById('display').value = displayInput; 
    document.getElementById('displayy').value = displayInput;
}

function performOperation(n) {
    displayInput  += n;
    document.getElementById('display').value = displayInput ; 
}

function resetCalculator() {
    displayInput = ''; 
    document.getElementById('display').value = displayInput;
}

function calculateResult()  {
        let display = document.getElementById('display').value;
        let result = eval(display);
        document.getElementById('display').value = result;
        displayInput = ''; 
}


let hh = document.querySelector('.buttt');

function header1()  {
    document.body.style.backgroundColor = 'rgb(230, 230, 230)';
    let displ = document.getElementById('header1');
    displ.style.display='none';
    let disp = document.getElementById('header2');
    disp.style.display='block';
    
    display.style.backgroundColor='white';
    display.style.color='black';
    disp.style.backgroundColor='rgb(252, 137, 60)';
    hh.style.backgroundColor='rgb(211, 205, 205)';
    hh.style.color='rgb(211, 205, 205)';
}

function header2()  {
    let h = document.getElementById('title');
    document.body.style.backgroundColor = 'rgb(23, 6, 42)';
    let displ = document.getElementById('header2');
    displ.style.display='none';
    let dis = document.getElementById('header3');
    dis.style.display='block';
    dis.style.backgroundColor='rgb(152, 255, 248)';
    hh.style.backgroundColor='rgb(30, 8, 54)';
    display.style.color='rgb(251, 228, 64)';
    display.style.backgroundColor='rgb(30, 8, 54)';
    hh.style.color='rgb(251, 228, 64)';
    h.style.color= 'rgb(229, 205, 70)';
}

function header3()  {
    document.body.style.backgroundColor = 'rgb(59, 70, 100)';
    let displ = document.getElementById('header3');
    displ.style.display='none';
    let dis = document.getElementById('header1');
    dis.style.display='block';
    hh.style.backgroundColor='rgb(37, 45, 68)';
    display.style.backgroundColor='rgb(24, 31, 50)';
    dis.style.backgroundColor='rgb(253, 105, 94)';
}

function rotate() {
      let dis = document.querySelector('.container');
      dis.style.display='none';
      let diss = document.querySelector('.container2');
      diss.style.display='block';

}


function rotatePhone() {
    let dis = document.querySelector('.container2');
      dis.style.display='none';
      let diss = document.querySelector('.container');
      diss.style.display='block';
}

























































































