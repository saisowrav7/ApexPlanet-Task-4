
document.addEventListener('DOMContentLoaded', function () {
  loadTasks();
});

function addTask() {
  const taskInput = document.getElementById('newTask');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const tasks = getTasks();
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = ''; 
    loadTasks();
  }
}

function loadTasks() {
  const tasks = getTasks();
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; 

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
      li.textContent = task;
      const dltbtn = document.createElement("button")
      dltbtn.innerText = "Delete";
      dltbtn.style.marginLeft = '50px';
      li.appendChild(dltbtn);
    dltbtn.onclick = () => removeTask(index);
    taskList.appendChild(li);
  });
}

function getTasks() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks();
}
