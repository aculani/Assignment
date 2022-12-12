// document.getElementsByClassName("helloText")[0].innerHTML = "Hello World";
// document.getElementById("helloText").innerHTML = "Hello World";
// const items = document.getElementsByClassName("dummy")
// console.log(items);
// for (let i = 0; i < items.length; i++) {

//     items[i].innerHTML = `Hello Dummy Div ${i + 1}`;
// }
// document.getElementById("demo").innerHTML = "Date : " + Date();
// const pTag = document.createElement("p");
// pTag.innerHTML = "Created by create element";
// pTag.id = "demoId"

// const bTag = document.createElement("b");
// bTag.innerHTML = " This is Bold";

// pTag.appendChild(bTag);

// demo.appendChild(pTag);
// document.getElementById("test").style.color = "#ff0000";
// document.getElementById("test").style.textAlign = "center";
// document.getElementById("test").style.fontSize = "24px";


function getRandomNumber(min, max) {
    return parseInt(Math.abs(max - min) * Math.random() + min);
}
function getRandomColor() {
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return `rgb(${red},${green},${blue})`;
}
// document.getElementById("myBtn").style.backgroundColor = getRandomColor();

let myButton = document.getElementById("myBtn");
function changeBackgroundColor() {
    document.getElementsByTagName("body")[0].style = "background-color:" + getRandomColor();
    myButton.style = "background-color:" + getRandomColor();
}
myButton.addEventListener("click", changeBackgroundColor);