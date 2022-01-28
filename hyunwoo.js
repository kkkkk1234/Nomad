const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
     title.style.color = "blue";
}

function handlemouseenter() {
   title.innerHTML = "mouse is over";
}

function handlemouseout() {
   title.innerHTML = "mouse is out!"
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handlemouseenter);
title.addEventListener("mouseout", handlemouseout);


