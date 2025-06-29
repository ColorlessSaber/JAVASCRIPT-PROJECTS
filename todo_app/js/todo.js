/* Gets the task from input */
function get_todos() {
    /*Creates an array of tasks that are inputed*/
    var todos = new Array;
    /*Pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');

    /* if the input is not null, then JSON.parse will
    communicate with the web browser to make the task a JavaScript object*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*adds the nputed task to the get_todos function array*/
function add() {
    /*Takes the inputed task and creates a variable of it*/
    var task = document.getElementById('task').value;

    /*Add the new task to the end of the array */
    var todos = get_todos();
    todos.push(task);

    /* converts the task input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/*keeps thet tasks permanetly displayed on the screen*/
function show() {
    /*Sets the task that was retrieved as a variable*/
    var todos = get_todos();

    /*Sets up each task as an unordered list,
    and then loop through todos array and insert each task with a button that closes the task*/
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id ="' + i + '">x</button></li>';
    };
    html += '</ul>';
    /*displays the task as a list*/
    document.getElementById('todos').innerHTML = html;

    /*Add function to each task close-button to delete the task when button is clicked*/
    var taskCloseButtons = document.getElementsByClassName('remove');
    for (var i = 0; i < taskCloseButtons.length; i++) {
        taskCloseButtons[i].addEventListener('click', function () {
            var id = this.getAttribute('id');
            var todos = get_todos();
            todos.splice(id, 1);
            localStorage.setItem('todo', JSON.stringify(todos));
            show(); // Update the list on display

            return false;
        });
    };
}

// Display the inputed task when the "add item" button is clicked
document.getElementById('add').addEventListener('click', add);
show();