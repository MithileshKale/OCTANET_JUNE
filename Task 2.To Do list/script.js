const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const deadlineInput = document.getElementById('deadline-input');
const prioritySelect = document.getElementById('priority-select');
const labelsInput = document.getElementById('labels-input');
const taskList = document.getElementById('task-list');
const allTasksBtn = document.getElementById('all-tasks-btn');
const completedTasksBtn = document.getElementById('completed-tasks-btn');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  const deadline = deadlineInput.value;
  const priority = prioritySelect.value;
  const labels = labelsInput.value.split(',');

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span class="task-text">${taskText}</span>
      <span class="deadline">Deadline: ${deadline}</span>
      <span class="priority ${priority}-priority">Priority: ${priority}</span>
      <span class="labels">Labels: ${labels.join(', ')}</span>
    `;

    taskItem.addEventListener('click', function () {
      taskItem.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
    deadlineInput.value = '';
    prioritySelect.value = 'high';
    labelsInput.value = '';
  }
});

allTasksBtn.addEventListener('click', function () {
  allTasksBtn.classList.add('active');
  completedTasksBtn.classList.remove('active');
  showAllTasks();
});

completedTasksBtn.addEventListener('click', function () {
  allTasksBtn.classList.remove('active');
  completedTasksBtn.classList.add('active');
  showCompletedTasks();
});

function showAllTasks() {
  const tasks = document.querySelectorAll('#task-list li');
  tasks.forEach(function (task) {
    task.style.display = 'block';
  });
}

function showCompletedTasks() {
  const tasks = document.querySelectorAll('#task-list li');
  tasks.forEach(function (task) {
    if (task.classList.contains('completed')) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
