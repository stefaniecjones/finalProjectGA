// FREE-DRAW SCRIPT
// ================================================
// set up function to allow finger to draw on mobile.
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };
const penButton = document.querySelector(".pen");
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
    document.addEventListener("mousedown", start);
}
function start(event) {
    document.addEventListener("mousemove", draw);
    reposition(event);
}
function stop() {
    document.removeEventListener("mousemove", draw);
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