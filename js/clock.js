const clock = document.querySelector("#clock");

//h2와 id를 함께 사용하는 방법 ex) h2#clock

function sayHello() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


setInterval(sayHello, 1000);
// setInterval 두 개의 인자를 받는 데,
// (첫번째 인자는 실행하려는 함수, 두 번째 인자는 몇 초마다)

// padStart의 예시
// string.padStart(targetLength, [, padString])
// targetLength 생성하려는 문자열의 최소 길이