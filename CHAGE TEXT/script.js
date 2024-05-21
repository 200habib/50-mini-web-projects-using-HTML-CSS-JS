let title = document.getElementById('title');
let button = document.getElementById('button');

const titles = [
    "Charlotte's Web",
    "The Very Hungry Caterpillar",
    "Green Eggs and Ham",
    "Goodnight Moon",
    "Where the Wild Things Are",
    "Harry Potter and the Sorcerer's Stone",
    "Matilda",
    "The Cat in the Hat",
    "Alice's Adventures in Wonderland",
    "The Lion, the Witch and the Wardrobe"
];



button.addEventListener('click', () => {

    const randomIndex = Math.floor(Math.random() * titles.length);

    title.textContent = titles[randomIndex] 
}
);












































