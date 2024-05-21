
let spaceTodo = document.querySelector('.section_2');


function createTodo() {
  let todo = document.createElement('div');
  todo.style.display = 'flex';
  todo.style.justifyContent = 'space-between';
  todo.style.alignContent = 'center';
  todo.style.alignItems = 'center';


  let check = document.createElement('input');
  check.type = 'checkbox'; 
  check.style.height = '25px';
  check.style.width = '25px';
  check.style.cursor= "pointer";

  let text = document.createElement('div');
  text.style.fontSize = '30px';
  text.style.textAlign = 'left';

  let clear = document.createElement('div');
  clear.style.fontSize = '30px';
  clear.textContent = 'X';

  
  todo.appendChild(check);
  todo.appendChild(text);
  todo.appendChild(clear);
  spaceTodo.appendChild(todo);
  
  clear.addEventListener('click', function() {
    todo.classList.add('clicked');
    setTimeout(function() {
      spaceTodo.removeChild(todo); 
    }, 700); 
  });

  check.addEventListener('click', function() {
    if (text.style.textDecoration=='line-through') {
      text.style.textDecoration= 'none';
    } else {
      text.style.textDecoration= 'line-through';
    }
  });console.log(text);
  return text;
  
}
function hh() {
  if (input.value.trim() !== "") { 
    let text = createTodo();
    text.textContent = input.value;
    console.log(text);
    input.value = ""; 
  } else {
    let error = document.createElement('div');
    error.textContent = "Input non può essere vuoto!";
    error.style.color = 'red';
    spaceTodo.appendChild(error);
    setTimeout(function() {
      spaceTodo.removeChild(error);
    }, 700); 
    
  }
}

