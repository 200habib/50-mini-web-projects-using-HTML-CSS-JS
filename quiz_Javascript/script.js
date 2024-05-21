let quiz = [
    {
        description: "Qu'est-ce que JavaScript?",
        question: ["Un format de données", "Un langage de programmation", "Un framework JavaScript"],
        corret: 0
    },
    {
        description: "Qu'est-ce que le format JSON?",
        question: ["Un format de données", "Un langage de programmation", "Un framework JavaScript"],
        corret: 0
    },
    {
        description: "Que signifie HTML?",
        question: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        corret: 0
    }
];



let question1 = document.getElementById('question1');
let question2 = document.getElementById('question1');
let question3 = document.getElementById('question1');
let bdn = document.getElementById('bdn');
let text = document.getElementById('text_description');
let AllQuestion = document.querySelector('.AllQuestion');



text.textContent= quiz[0].description
console.log

quiz[0].question.forEach((element, index )=> {
    const div = document.createElement("div");
    div.innerHTML += `
                        <input type="radio"name="question1" value="1" onClick="abilitaCheck(${index});"/>
                        <label for="huey">${element}</label>
                    `;
    AllQuestion.appendChild(div);

});



let count = 0

function abilitaCheck(aForm){
    bdn.addEventListener('click', function() {
        
        
       
        
            if (aForm == quiz[count].corret)
                {                                     
                    console.log(count);
                                                    text.textContent= quiz[count].description
                let AllQuestion2 = document.querySelectorAll('.AllQuestion > div')

                AllQuestion2.forEach(element => {
                    AllQuestion.removeChild(element);
                });

                
                

                
                quiz[count].question.forEach((element, index )=> {
                    const div = document.createElement("div");
                    
                    div.innerHTML += `
                                        <input type="radio"name="question1" value="1" onClick="abilitaCheck(${index});"/>
                                        <label for="huey">${element}</label>
                                    `;
                                    
                    AllQuestion.appendChild(div);
                    if (count < 2) {
                        count ++
                        console.log(count);
                    } 
                });
            }
    });
}