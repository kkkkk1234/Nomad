const quotes = [
{    
    quote : "지금 이 인생을 다시 한번 완전히 똑같이 살아도 좋다는 마음으로 살라.",
    author : "Friedrich Nietzsche",
},
{
    quote : "삶의 여로를 걷는 우리들은 여행자다. 가장 비참한 여행자는 누군가를 따라가는 인간이며, 가장 위대한 여행자는 습득한 모든 지혜를 남김없이 발휘하여 스스로 목적지를 선택하는 인간이다.",
    author : "Friedrich Nietzsche",
},
{
    quote : "춤추는 별을 낳기 위해선 내면에 혼돈을 지녀야 한다.",
    author : "Friedrich Nietzsche",
},
{
    quote : "나를 죽이지 못하는 것은 나를 더 강하게 만든다.",
    author : "Friedrich Nietzsche",
},
{
    quote : "음악이 없다면 인생은 잘못된 것이다.",
    author : "Friedrich Nietzsche",
},
{
    quote : "위험하게 살아라! 베수비오 화산의 비탈에 너의 도시를 세워라!",
    author : "Friedrich Nietzsche",
},
{
    quote : "그대의 몸은 그대의 철학보다 더 많은 지혜를 품고 있다.",
    author : "Friedrich Nietzsche",
},
{
    quote : "진리는 추악하다. 진리에 의해서 멸하지 않기 위해 우리는 예술을 가지는 것이다.",
    author : "Friedrich Nietzsche",
},
{
    quote : "결혼 생활을 불행하게 만드는 것은 사랑의 결핍이 아니라 우정의 결핍이다.",
    author : "Friedrich Nietzsche",
},
{
    quote : "이것이 삶이던가? 그렇다면 다시 한번.",
    author : "Friedrich Nietzsche",
}];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
// 왜냐면 처음부터 끝까지 명언을 제공해야하고, 배열은 0부터 시작이니까!