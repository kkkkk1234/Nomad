const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting =  document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "dontshow";
const Username_key = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(Username_key, username);
    paintingGreetings(username);
    }

function paintingGreetings(username){
    greeting.innerText = `HEllo ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(Username_key);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    paintingGreetings(savedUsername);
   }

//하나의 파일에 여러개의 코드를 넣는 것은 선호하지않는다.


//유저의 이름을 기억하는 것에 대해 학습할 예정이다.
// 유저의 이름을 기억하는 방법에 대해서는 Localstorage


// 띄어쓰기 꿀팁 1.백틱사용하기 2.표시해야 할 변수 ${} 이렇게 감싸기


// submit이벤트는 엔터를 누르거나 버튼을 클릭할 때 발생한다.
// preventDefault는 브리우저의 기본동작을 막아준다.





/*const h1 = document.querySelector("div.hello:first-child h1");


// about classList -> 이것은 htmml element에 해당 클래스가 포함되어 있는지 확인할 수 있는 코드이다.
// classList는 element의 class 내용물을 조작하는 것을 허용한다.
function handleTitleClick() {
    h1.classList.toggle("clicked");
}

screenX.addEventListener()

// className을 추가하고, 변경하고, 확인하는 것은 개발자들에게 있어서 너무니도 흔한 일읻다.

// className은 모든 것을 교체해버린다. 이전에 class들이 무슨 양상을 띠던간에 말이다.

h1.addEventListener("click",handleTitleClick); 
// addEventListener에서 ()를 붙이지 않는 이유는 이벤트 핸들러 함수를 참조하는 것이기 때문이다. addEventListener함수는 이벤트가 발생했을 때 실행할 함수를 지정하는 메서드인데, 함수 자체를 전달해야 하기 때문에 함수의 호출을 원하지 않는다.
// 만약 괄호를 붙인다면, 함수를 호출한 결과를 전달하게 되므로, 이벤트가 발생할 때 함수가 실행되는 것이 아니라, 코드가 실행되는 시점에서 함수가 호출되어 결과를 전달하게 된다.

// step1 -> find element
// step2 -> event를 listen해라
// step3 -> 그 event에 반응하

// 왜 classList를 사용하는 것일까?U

*/