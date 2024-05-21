let container = document.getElementById('container');
let button = document.getElementById('button');
let text = document.getElementById('text');

let array = [1,2,3,4,5,6,7,8,9];

let j =0;
button.addEventListener('click', function ab() {
    let random = Math.floor(Math.random() * array.length);
    text.textContent = array[random]
});





















































