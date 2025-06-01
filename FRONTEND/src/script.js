const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTaskButton');


addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    taskInput.value = '';
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function(){
            listItem.remove();
        });
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }
})