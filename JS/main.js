// function to erase

// function to clear all?

// function to save to an svg?

// function - when 'tools' button is clicked, show <aside> tag which contains all the tools


// TOGGLE HAMBURGER MENU
// locate hamburger image
const hamburgerImg = document.querySelector(".hamburgerImg");
const dropDownMenu = document.querySelector(".dropDownMenu");
const xLogo = document.querySelector(".xLogo");

// add "click" event listener to hamburger image
hamburgerImg.addEventListener("click", toggleDropDownMenu);

// function - when hamburger menu is clicked, toggle dropDownMenuVisible class
function toggleDropDownMenu() {
    dropDownMenu.classList.toggle("dropDownMenuVisible");
    // change hamburger menu to x symbol
//    .classList.toggle("xLogoVisible");
}


// TOGGLE TOOLS MENU
// locate tool text and toolMenu
const mainNavToolButton = document.querySelector(".mainNavTools");
const dropDownToolButton = document.querySelector(".dropDownTools");
const toolsMenu = document.querySelector(".toolsMenu");

// add 'click' event listenener to tool text
mainNavToolButton.addEventListener("click", toggleToolsMenu);
dropDownToolButton.addEventListener("click", toggleToolsMenu);

// function - when tool text is clicked, toggle toolMenuVisible
function toggleToolsMenu() {
 toolsMenu.classList.toggle("toolMenuVisible");
}



// *** FREE-DRAW SCRIPT *** 
// set up function to allow finger to draw on mobile.
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };
const penButton = document.querySelector(".pen");
let canvasOn = false;
// function to change all buttons to solid run colour when clicked

penButton.addEventListener("click", allowDraw);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);


resize();

function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
function reposition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}
function allowDraw() {
// when clicked, change button color
    // document.querySelector(".pen").classList.toggle("redBorder");
    // document.addEventListener("mousedown", canvasSwitch);
    document.addEventListener("mousedown", start);
}

// function removeDraw() {
//     penpenButton.style.border = "black solid 0.2rem";
//     document.addEventListener("mouseup", stop);
// }

// CURRENTLY NOT WORKING - MAKING LINES JOIN TOGETHER
// function canvasSwitch() {
//     if (canvasOn = false) {
//         stop();
//     }
//     else {
//         start();
//     }
// }

function start(event) {
    document.addEventListener("mousemove", draw);
    reposition(event);
    // canvasOn = true;
}

function stop() {
    document.removeEventListener("mousemove", draw);
    // canvasOn = false;
}

function draw(event) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}

// add LH, RH, LF, RF images to be placed on canvas when buttons are clicked

// add text to canvas - NOT WORKING
function text() {
    ctx.fillText("Hello World", 50, 50);
    console.log(text);
}