let j = document.getElementById('j');
let m = document.getElementById('m');
let a = document.getElementById('a');
let span = document.getElementById('span');
let b = document.getElementById('b');


let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; 
let year = currentDate.getFullYear();

let jValue = parseFloat(j.value);  
    let mValue = parseFloat(m.value);
    let aValue = parseFloat(a.value); 

    j.addEventListener('input', function() {
        let jValue = parseFloat(j.value); // Converti il valore in un numero
    
        // Verifica se il valore supera 31
        if (jValue > 31) {
            j.value = "31"; // Imposta il valore a 31 se supera il limite
        }
    });
    
    m.addEventListener('input', function() {
        let mValue = parseFloat(m.value); // Converti il valore in un numero
    
        // Verifica se il valore supera 31
        if (mValue > 12) {
            m.value = "12"; // Imposta il valore a 31 se supera il limite
        }
    });
let newDiv = document.createElement("div");
            newDiv.textContent = "Vieni dal futuro";
            newDiv.style.display = "none";
            // n.parentNode.insertBefore(newDiv, n.nextSibling);
            n.appendChild(newDiv);
    a.addEventListener('input', function() {
        let aValue = parseFloat(a.value); 
        let n = document.getElementById('n');
        
        if (aValue > year) {
            console.log ("ciao")
            newDiv.style.display = "block";
        }   else {
            newDiv.style.display = "none";
        }
    
    }

    );

b.addEventListener('click', function () {
    let jValue = parseFloat(j.value);  
    let mValue = parseFloat(m.value);
    let aValue = parseFloat(a.value); 

    let r = jValue - day;  
    let t = mValue - month;
    let d = Math.abs(-aValue + year); 

    let totale = r+ ":" +t +":"+ d;
    span.innerHTML = totale;
}
);













































































