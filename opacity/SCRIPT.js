let range = document.getElementById('range');
let con = document.getElementById('con');

setValue = () => {
    con.style.opacity = range.value / range.max;
};
range.addEventListener('input', setValue);




























