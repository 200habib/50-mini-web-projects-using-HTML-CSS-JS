let counter = document.getElementById('counter-value');
let increment = document.getElementById('increment-btn');
let decrement = document.getElementById('decrement-btn');
let reset = document.getElementById('reset');

let total=  counter.textContent

let input = document.getElementById('input');

console.dir(input);


if (localStorage.getItem("testJSON") !== null) {
    let text = localStorage.getItem("testJSON");
    let obj = JSON.parse(text);
    let total =obj.total_count
    counter.textContent = total;
}




increment.addEventListener('click', function() {
    total++;
    counter.textContent = total;

    const myObj = { total_count: total, color_total: color }; // Include color in the object
    const myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);

    // console.log(obj);
    
    counter.textContent = total;
    // localStorage.clear()
});




decrement.addEventListener('click', function() {
    total--; 
    counter.textContent = total;


    const myObj = { total_count: total, color_total: color };
    const myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);
    console.log(total );

    let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
counter.textContent = obj.name;
});

let color= "";

reset.addEventListener('click', function() {
    total=0;
    counter.textContent = total;
    // localStorage.setItem('items', total)
    console.log(total );

    // let color  = "red";
    const myObj = { total_count: total, color_total: color };
    const myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);

    let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
counter.textContent = obj.name;
});


// total = localStorage.getItem('items');
//   if (total) {
//     counter.textContent = total;
//   }
//   console.log(counter.textContent );
// let text = localStorage.getItem("testJSON");
// let obj = JSON.parse(text);
// document.getElementById("demo").innerHTML = obj.name;



//   color = localStorage.getItem('color');
//   if (color) {
//     document.body.style.backgroundColor= color;
//   }
//   console.log(counter.textContent );


