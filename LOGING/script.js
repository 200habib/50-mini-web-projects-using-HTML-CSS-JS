let inp = document.getElementById('myInput');
let button = document.getElementById('logButton');
let con = document.getElementById('content');

function name() {
    vide =inp.value;
    console.log(vide);
    inp.value = "";
    return vide;
}


button.addEventListener('click', () => {
    if ( inp.value.trim() !=="")  {
        let oo= name();
    const article = document.createElement("article");
    con.appendChild(article); 
    const para = document.createElement("p");
    para.innerText = oo;
    article.appendChild(para);
    article.style.display="flex";
    article.style.justifyContent="space-around";
    const clear = document.createElement("button");
    clear.innerText = "X";
    article.appendChild(clear);
    clear.addEventListener("click", () => {
    con.removeChild(article)
    });
}  else {
        console.log("non");
            const par = document.createElement("p");
            par.innerText = "Prière de remplir le champ de saisie avant de cliquer sur le bouton.";
            con.appendChild(par);
        setTimeout(() => {
            par.style.display="none";
        }, 1000);
}
});
    













let p = document.getElementById('oo');
let password = document.getElementById('password');
const ii = document.querySelector(".conteiner");
let k = document.getElementById('kk');
let ty = document.getElementById('ty');
p.addEventListener("click", () => {
    if (k.value == '4289' && ty.value == "abib") {
        ii.classList.remove("active");
        password.style.display = "none";
        
    } else {
        console.log("error");
        k.style.border = "2px solid red";
        ty.style.border = "2px solid red";
        alert("Le mot de passe n'est pas valide.");
        
    }
    
});










