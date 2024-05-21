let gg = document.getElementById('gg');
let b = document.getElementById('b');
let percentage = document.getElementById('percentage');
let span = document.getElementById('span');


function calculateTotal() {
    let y = parseFloat(1+percentage.value / 100);
    let o = parseFloat(gg.value);
    let total = o *y ;

    span.innerHTML = total;
}

b.addEventListener('click', calculateTotal);

































