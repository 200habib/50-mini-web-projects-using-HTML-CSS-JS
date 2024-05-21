//buttone per sommetere 
let button = document.querySelector('.add-btn');

//  i tre input  
let budgetInput = document.getElementById('budget-input');
let montant = document.getElementById('montant-input');
let nome = document.getElementById('nome-input');

// message d errore quando uno degli input viene lasciato vguoto
let warning_montant = document.querySelector('.warning_montant');
let warning_budget = document.querySelector('.warning_budget');
let warning_depense = document.querySelector('.warning_depense');

warning_montant.style.display= "none";
warning_budget.style.display= "none";
warning_depense.style.display= "none";

// i tre output
let Dépenses = document.getElementById('Dépenses');
let Budget = document.getElementById('Budget');
let Balance = document.getElementById('Balance');

// e qui che vara immagawinato il valore di deponse
let counter =0

// questi sono gli elemnti dove verrano creati sotto depenses
let expenses = document.querySelector('.expenses-list');





// questo mettera i valori negli output

button.addEventListener('click', function  hh() {
console.dir(nome)

if ( budgetInput.value.trim() == "") return warning_budget.style.display= "block";
warning_budget.style.display= "none";
if ( nome.value.trim() == "") return warning_depense.style.display= "block";
warning_depense.style.display= "none";
if ( montant.value.trim() == "") return warning_montant.style.display= "block";
warning_montant.style.display= "none";



    Budget.textContent = budgetInput.value

    console.log("budgetInput.value : "+ budgetInput.value );

    let j= parseInt(Budget.textContent)
    let p= parseInt(budgetInput.value)
    let sss= parseInt(montant.value)

    counter+= sss
    Dépenses.textContent= counter

    Balance.textContent=Budget.textContent -counter

    // console.log(counter);

    const paragraph = expenses.appendChild(document.createElement("p"))
    paragraph.innerHTML= `<p> <span>${nome.value}</span>  <span>${counter}</span></p>`



}
);

let reset = document.querySelector('.reset-btn');
reset.addEventListener('click', function() {

    window.location.reload();

    console.log( "dd");
});


