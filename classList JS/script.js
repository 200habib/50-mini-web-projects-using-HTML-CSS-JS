let u = document.getElementById('u');

u.addEventListener('click', function () {
    u.classList.add("acces");
    w.classList.add("acces");
    x.classList.add("acces");

});
let container = document.getElementById('container');

container.addEventListener("wheel", function(event) {
    // Verifica se lo scroll è verso il basso
    if (event.deltaY > 0) {
        // Aggiungi la classe "acces" agli elementi u e w
        u.classList.add("acces");
        w.classList.add("acces");
        console.log("Scroll verso il basso");
        // Aggiungi qui il codice da eseguire quando lo scroll è verso il basso
    } 
});


window.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        k.classList.add("dd");
        }
    
});



















