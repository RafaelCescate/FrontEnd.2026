const taksInput =document.getElementById('taksInput');
const taskList =document.getElementById('taskList');

function addTask(){
  const taskText = taskInput.value.trim()
  if(taskText !== ''){
    const newItem = document.createElement('li');
    newItem.innerHTML = `
      <span>${taskText}</span>
      <button onclick="editar()">Editar</button>
      <button onclick="delet(this)">Remover</button>
      <button onclick="completar(this)">Feito</button>
      `;
    taskList.appendChild(newItem);
    taskInput.value='';
  }  
}

function delet(button){
  const itemToRemove = button.parentElement;
  taskList.removeChild(itemToRemove);
}

function completar(button){
  const itemCompleted = button.parentElement;
  itemCompleted.classList.toggle('completed');
}
