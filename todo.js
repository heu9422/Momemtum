const toDoForm = document.querySelector("#toDo-form");
const toDoInput = document.querySelector("#toDo-form input");
const toDoList = document.querySelector("#toDo-list");
const main = document.querySelector("#main");
const TODOS_KEY ="todos";

if(localStorage.getItem(USERNAME_KEY) !== null){
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    main.classList.remove(HIDDEN_CLASSNAME);
    let toDos = [];

    function savetoDos(){
        localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }

    function deleteToDo(event){
        const li = event.target.parentElement;
        li.remove();
        toDos = toDos.filter((toDO) => toDO.id !== parseInt(li.id));
        savetoDos();
    }

    function paintToDO(newTodo){
        const li = document.createElement("li");
        li.id = newTodo.id;
        const span = document.createElement("span");
        span.innerText = newTodo.text;
        const button = document.createElement("button");
        button.innerText = "✔"
        button.addEventListener("click", deleteToDo);
        li.appendChild(span);
        li.appendChild(button);
        toDoList.appendChild(li);
    }

    function handleToDoSubmit(event){
        event.preventDefault();
        //console.log(toDoInput.value);
        const newTodo = toDoInput.value;
        toDoInput.value = "";
        const newTodoObj = {
            text:newTodo,
            id: Date.now(),
        };
        toDos.push(newTodoObj);
        paintToDO(newTodoObj);
        savetoDos();
    }

    toDoForm.addEventListener("submit", handleToDoSubmit); 

    const savedToDos = localStorage.getItem(TODOS_KEY);
    console.log(savedToDos);

    if(savedToDos !== null){
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDO);
    }
} else {
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    main.classList.add(HIDDEN_CLASSNAME);
}