const form = document.querySelector('form');
const list = document.getElementById('tasks');
const task = document.querySelector('#new-task-description');task.value

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
});

function createNewToDo(event){
  event.preventDefault();
  const newList = document.createElement('li');
  newList.textContent = task.value;
  
  list.append(newList);
  task.value = ''
}

document.addEventListener('submit', createNewToDo)