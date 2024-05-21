const element1 = document.getElementById('Change');
const planChange = document.getElementById('planChange');
const plancost = document.getElementById('plancost');

const cost2 = {
    annual: { description: "annual plan change", cost: "$300 / annual" },
    mensual: { description: "mensual plan change", cost: "$30 / mensual" },
    week: { description: "week plan change", cost: "$10 / week" },
    day: { description: "day plan change", cost: "$1 / day" }
};

const array = ["annual", "mensual", "week", "day"];
let count = 0;

element1.addEventListener('click', function() {
    console.log(cost2[array[count]].description);
    planChange.textContent = cost2[array[count]].description;
    plancost.textContent = cost2[array[count]].cost;
    count = (count + 1) % array.length; 
});