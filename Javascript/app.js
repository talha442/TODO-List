var TodoArray = [];

// Add TODO
function AddTodo() {
    if (input.value == "") {
        alert("Enter Something")
    }
    else {
        var userinput = document.getElementById('input').value;
        TodoArray.push(userinput)
        console.log(TodoArray)
        GenerateTodo();
    }
}

// Generate Todo List
function GenerateTodo() {
    let htmlCode = "Todo List".fontsize(18);
    TodoArray.forEach((list, ind) => {
        htmlCode += `<div class='flex mb-4 items-center'>
<p class='w-full text-grey-darkest'>${list}</p>
<button onclick='EditTodo(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-grey bg-green-600'>Edit</button>
<button onclick='DeleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500'>Delete</button>
</div>`;
    });
    main.innerHTML = htmlCode;
}

// Edit And Then Save
function SaveTodo() {
    const addTaskButton = document.getElementById("add-task-btn");
    const saveTaskButton = document.getElementById("save-edit-todo-btn");
    const input = document.getElementById("input");
    const saveInd = document.getElementById("saveIndex");

    i = saveInd.value
    TodoArray[i] = input.value
    GenerateTodo();
    input.value = ""
    addTaskButton.style.display = "block";
    saveTaskButton.style.display = "none";
}

// Delete Todo
function DeleteTodo(i) {
    TodoArray.splice(i, 1);
    GenerateTodo();
}

// Edit Todo
function EditTodo(i) {
    const addTaskButton = document.getElementById("add-task-btn");
    const saveTaskButton = document.getElementById("save-edit-todo-btn");
    const saveInd = document.getElementById("saveIndex");
    saveInd.value = i;
    const input = document.getElementById("input");

    input.value = TodoArray[i];
    addTaskButton.style.display = "none";
    saveTaskButton.style.display = "block";
}

// Change Background Color
function setBackground() {
    let mybody=document.getElementsByTagName("body")[0];
    //mybody.style.background-color="red";
    mybody.style.backgroundColor = "red";
}
