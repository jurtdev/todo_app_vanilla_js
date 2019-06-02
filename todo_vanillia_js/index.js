let todoList = document.getElementById("todo-list");
let submitBtn = document.getElementById("submit");
    submitBtn.onclick = () => addTodo();
    
let todo = [
{"task" : "Todo App: Vanilla Javascript", "status" : true}, 
{"task" : "Todo App: React Javascript", "status" : false}, 
{"task" : "Weather App: Vanilla Javascript", "status" : false}, 
{"task" : "Weather App: React Javascript", "status" : false}, 
{"task" : "Complete Portfolio", "status" : false}
];

showList();

function showList () {
    todoList.innerHTML = "";

    todo.map((item, todos) => {

        let li = document.createElement("li");
        let todoItem = document.createElement("p");
        let todoStatus = document.createElement("span");  
        let deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "X";
        deleteBtn.classList.add("deleteBtn");

        let checkLabel = document.createElement("label");
        checkLabel.classList.add("toggle");
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("toggle__input")

        let toggleSpan = document.createElement("span");
        toggleSpan.classList.add("toggle__label");

        let toggleText = document.createElement("span");
        toggleText.classList.add("toggle__text");

        checkbox.addEventListener("click", () => {
            item.status == true ? item.status = false : item.status = true;
            showList();
        });

        deleteBtn.addEventListener("click", () => {
            let conf = confirm("Are you sure you want to delete this task?");
            if(conf === true){
            let tasks = todo.filter(x => !(x.task === item.task));
            todo = tasks;
            showList();
            }else {
                //do nothing
            }
        });

        todoItem.innerHTML = item.task;        
        item.status === true ? 
        checkbox.checked = true :
        checkbox.checked = false ;
        checkbox.checked === false ?
        li.classList.add("red") :
        li.classList.add("green");

        checkLabel.appendChild(checkbox);
        toggleSpan.appendChild(toggleText);
        checkLabel.appendChild(toggleSpan);

        li.appendChild(checkLabel);
        li.appendChild(todoItem);
        li.appendChild(deleteBtn);
        li.appendChild(todoStatus);
        
        todoList.appendChild(li);

    })
}

function addTodo () {
    let newTodo = document.getElementById("add-todo").value;
    if(newTodo === ""){
        alert("You must add a todo!")
    }else {
    let listItem = {"task" : newTodo, "status" : false};
    todo.unshift(listItem);
    showList();
    document.getElementById("add-todo").value = ""; 
    }
}

function clearTasks () {
    todo = [];
    showList();
}
