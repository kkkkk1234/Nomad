const images = [
"beach.jpeg",
"hiking.jpeg",
"nature.jpeg"
];

const imagechanger = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `nicesight/${imagechanger}`;


document.body.appendChild(bgImage);

