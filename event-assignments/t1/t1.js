// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const listElement = document.querySelector('ul');
const dialogElement = document.querySelector('dialog');
const addBtn = document.querySelector('.add-btn');
const dialogForm = document.querySelector('dialog form');
const dialogInput = document.querySelector('dialog input');

function getNextId() {
  if (todoList.length === 0) return 1;
  return Math.max(...todoList.map(item => item.id)) + 1;
}

function renderTodoList() {
  listElement.innerHTML = '';

  todoList.forEach(item => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${item.id}`;
    checkbox.checked = item.completed;

    const label = document.createElement('label');
    label.setAttribute('for', `todo-${item.id}`);
    label.textContent = item.task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.type = 'button';

    checkbox.addEventListener('change', () => {
      const todoItem = todoList.find(t => t.id === item.id);
      todoItem.completed = checkbox.checked;
      console.log(todoList);
    });

    deleteBtn.addEventListener('click', () => {
      const index = todoList.findIndex(t => t.id === item.id);
      todoList.splice(index, 1);

      listElement.removeChild(li);

      console.log(todoList);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);
    listElement.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  dialogInput.value = '';
  dialogElement.showModal();
});

dialogForm.addEventListener('submit', event => {
  event.preventDefault();

  const taskName = dialogInput.value.trim();
  if (taskName === '') return;

  const newItem = {
    id: getNextId(),
    task: taskName,
    completed: false,
  };

  todoList.push(newItem);
  console.log(todoList);

  renderTodoList();
  dialogElement.close();
});

renderTodoList();
