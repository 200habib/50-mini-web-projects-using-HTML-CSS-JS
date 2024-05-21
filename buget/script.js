const inputTask = document.getElementById('input-task');
const inputBudget = document.getElementById('input-budget');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const budgetDisplay = document.getElementById('budget-display');

let budget = 0;

addTaskBtn.addEventListener('click', function() {
    const taskName = inputTask.value;
    const taskCost = parseFloat(inputBudget.value);

    if (taskName.trim() !== '' && !isNaN(taskCost) && taskCost >= 0) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskName + ' - $' + taskCost.toFixed(2);


        budget += taskCost;
        console.log("budget"+budget);
        budgetDisplay.textContent = 'Budget: $' + budget.toFixed(2);

        taskList.appendChild(taskItem);

        inputTask.value = '';
        inputBudget.value = '';
    }
});
