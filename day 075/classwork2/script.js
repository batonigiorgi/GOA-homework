document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let taskValue = document.querySelector('input[name="task"]').value;
    let newTask = document.createElement('li');
    newTask.textContent = taskValue;
    newTask.id = `task-${Date.now()}`;
    newTask.addEventListener('click', function() {
        newTask.remove();
    });
    document.getElementById('todoList').appendChild(newTask);
    document.getElementById('todoForm').reset();
});
