// Récupérer les éléments nécessaires du DOM
const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskInput = document.getElementById('newTaskInput');
const taskList = document.querySelector('#taskList');
let element1 = document.getElementById('addsession');

// Écouter l'événement de clic sur le bouton d'ajout de tâche
addTaskBtn.addEventListener("click", function() {
    const taskText = newTaskInput.value.trim();

    if (taskText) {
        newTaskInput.classList.remove('outline', 'outline-red-400', 'outline-1');
        newTaskInput.parentElement.querySelector('span').classList.add('hidden');

        localStorage.setItem('task_' + Date.now(), taskText); // Sauvegarder le texte de la tâche dans le localStorage

        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-white px-4 py-2 shadow-sm mb-2";
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="favoriteBtn p-2">
                    <i class="fa-regular fa-circle-check fa-lg"></i>
                </button>
                <button class="deleteBtn p-2">❌</button>
            </div>
        `;
        
        taskList.appendChild(li);
        newTaskInput.value = '';

        // Ajouter une écoute d'événement sur le bouton de suppression de la tâche
        const deleteBtn = li.querySelector('.deleteBtn');
        deleteBtn.addEventListener("click", function () {
            li.remove();
            localStorage.removeItem('task_' + taskText); // Supprimer la tâche du localStorage en utilisant le texte de la tâche
        });

        // Ajouter une écoute d'événement sur le bouton de marque comme terminée
        const taskDoneBtn = li.querySelector('.favoriteBtn');
        taskDoneBtn.addEventListener("click", function () {
            const icon = li.querySelector('i');
            icon.classList.toggle('fa-solid');
            icon.classList.toggle('text-green-500');
        });
    } else {
        newTaskInput.classList.add('outline', 'outline-red-400', 'outline-1');
        newTaskInput.parentElement.querySelector('span').classList.remove('hidden');
    }
});

// Écouter l'événement input sur newTaskInput pour mettre à jour le localStorage lorsque le contenu change
newTaskInput.addEventListener('input', function() {
    localStorage.setItem('area', this.value);
});

// Récupérer la valeur de l'élément area dans le localStorage et la définir comme valeur de newTaskInput
newTaskInput.value = localStorage.getItem('area');


// function updateLocalStorage() {
//     localStorage.setItem("addTaskBtn", JSON.stringify(taskText.checked));
//   }