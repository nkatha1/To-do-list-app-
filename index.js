// Selects the input field where users enter tasks
const todoInput = document.getElementById('todo-input');
// Selects the "ADD" button
const addBtn = document.getElementById('add-btn');
// Selects the unordered list where tasks will be displayed
const todoList = document.getElementById('todo-list');

// This method attaches the event listener to the specified element
// Arrow function is the callback function that will be executed when the event occurs
addBtn.addEventListener('click', () => { // This event listener is triggered when the add btn is clicked
  const todoText = todoInput.value.trim(); // todoInput value gets the text entered by the user in the input
  if (todoText !== '') {   //If todoText is not empty it proceeds to a new task trim() method removes any leading or trailing whitespaces
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span'); // craates a span element to display the text

    checkbox.type = 'checkbox'; 
    span.textContent = todoText;

    //Appends the checkbox and span to the li element.
     //Appends the li element to the todoList element, adding it to the list.

    li.appendChild(checkbox);
    li.appendChild(span);
    todoList.appendChild(li);

    // Clears the input field after adding the task
    todoInput.value = '';
  }
});