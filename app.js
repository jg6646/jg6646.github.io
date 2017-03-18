/**
* @file The main logic for the Todo List App.
* @author Matt West <matt.west@kojilabs.com>
* @license MIT {@link http://opensource.org/licenses/MIT}.
*/
function onSub() {
    txt = window.location.search.substring(1);
    getOne(txt);
}

 


window.onload = function () {
  
    // Display the todo items.
    todoDB.open(refreshTodos);


    // Get references to the form elements.
    var newTodoForm = document.getElementById('new-todo-form');
    var newTodoInput = document.getElementById('new-todo');
   
   
    // Handle new todo item form submissions.
    newTodoForm.onsubmit = function () {
        // Get the todo text.
        var text = newTodoInput.value;

        // Check to make sure the text is not blank (or just spaces).
        if (text.replace(/ /g, '') != '') {
            // Create the todo item.
            todoDB.createTodo(text, function (todo) {
                refreshTodos();
            });
        }

        // Reset the input field.
        newTodoInput.value = '';

        // Don't send the form.
        return false;
    };
 
}

// Update the list of todo items.
function refreshTodos() {
    todoDB.fetchTodos(function (todos) {
        var todoList = document.getElementById('todo-items');
        todoList.innerHTML = '';

        for (var i = 0; i < todos.length; i++) {
            // Read the todo items backwards (most recent first).
            var todo = todos[(todos.length - 1 - i)];

            var li = document.createElement('li');
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.className = "todo-checkbox";
            checkbox.setAttribute("data-id", todo.timestamp);

            li.appendChild(checkbox);

            var span = document.createElement('span');
            span.innerHTML =todo.timestamp + " - " + todo.text;

            li.appendChild(span);

            todoList.appendChild(li);

            // Setup an event listener for the checkbox.
            checkbox.addEventListener('click', function (e) {
                var id = parseInt(e.target.getAttribute('data-id'));

                todoDB.deleteTodo(id, refreshTodos);
            });
        }
        onSub();
    });
}
function getOne(obj) {
    todoDB.fetchTodos(function (todos) {
        var todoList = document.getElementById('todo-items');
        todoList.innerHTML = '';

        for (var i = 0; i < todos.length; i++) {
            // Read the todo items backwards (most recent first).
            var todo = todos[(todos.length - 1 - i)];
            if (todo.timestamp == obj) {
                var divCard = document.getElementById('divCard');
                var str = todo.text.split('|');
                strCard = "";
                strCard += "<span>Name: " + str[0] + "</span><br />";
                strCard += "<span>License: " + str[1] + "</span><br />";
                strCard += "<span>State: " + str[2] + "</span><br />";
                strCard += "<span>License Number: " + str[3] + "</span><br />";
                strCard += "<span>Expires: " + str[4] + "</span><br />";
                strCard += "<span>AF Training Date" + str[5] + "</span><br />";
                strCard += "<span>AF below 600 Training Date" + str[6] + "</span><br />";
                strCard += "<span>AF above 600 Training Date" + str[7] + "</span><br />";
                for(var y=0;y<str.length;y++)
                {
                    
                }
                divCard.innerHTML = todo.timestamp + "<br />" + strCard;
                
            }
            var li = document.createElement('li');
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.className = "todo-checkbox";
            checkbox.setAttribute("data-id", todo.timestamp);

            li.appendChild(checkbox);

            var span = document.createElement('span');
            span.innerHTML = todo.timestamp + " - " + todo.text;

            li.appendChild(span);

            todoList.appendChild(li);

            // Setup an event listener for the checkbox.
            //"harry bailey|master|TX|255877|02/22/2018|02/22/2016|02/22/2016|02/22/2017"
            checkbox.addEventListener('click', function (e) {
                var id = parseInt(e.target.getAttribute('data-id'));

                todoDB.deleteTodo(id, refreshTodos);
            });
        }

    });
}



