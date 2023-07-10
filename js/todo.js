// 너의 미래를 그려봐 Free draw

const toDoForm = document.getElementById("todo-form"); //form태그 선택(submit)
const toDoInput = toDoForm.querySelector("input");  // form태그 안에 들어가있는 input요소 선택
const todoList = document.getElementById("todo-list"); //ul태그 선택

const TODOS_KEY = "todos"; //중복된 글자라서 변수로 빼둠

let toDos = []; //localStorage에 배열으로 저장하기 위해 선언했다.


function savedToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//
function DeleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter;
    li.remove()
}


//새로운 To-do를 추가하는 함수이다.
function paintToDo(newTodo){
    const li = document.createElement("li"); //왜 li를 추가해야하지?
    li.id = newTodo.id; //출력하는 값에서 obj를 매개변수로 집어넣었으므로
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", DeleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li); //이것이 무슨 의미가 있는 문장이지?
}



function sayHello(item){
    console.log("No pain No gain", item);
}



//여기에 실행하는 모든 함수가 들어가있다.
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);  //배열에 todo를 저장했음.
    paintToDo(newTodoObj); //todo를 추가하는 놈이다.
    savedToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedTodos); //객체로 변환하는 과정
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo(newTodoObj)); //
}


//sexy의 역할을 반드시 true를 리턴해야한다.
// 만약 False를 리턴하면 그 item은 새 array에 포함되지 않을 것이다.
// true가 리턴되면 array안에는 값이 그대로 저장되있다.
function sexyFilter(){
    
}


[1,2,3,4].filter(sexyFilter)  //js가 sexyFilter를 4번 부르는 것이다.

