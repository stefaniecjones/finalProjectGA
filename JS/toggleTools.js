// ================ FUNCTION - toggle tool buttons =======================
// CREATE FUNCTION - when one button is toggled, don't allow others to be toggled
document.querySelector(".newRoute").addEventListener("click", toggleNewRoute);
document.querySelector(".import").addEventListener("click", toggleImport);
document.querySelector(".pen").addEventListener("click", togglePen);
document.querySelector(".undo").addEventListener("click", toggleUndo);
document.querySelector(".textBox").addEventListener("click", toggleTextBox);
document.querySelector(".leftHand").addEventListener("click", toggleLeftHand);
document.querySelector(".rightHand").addEventListener("click", toggleRightHand);
document.querySelector(".leftFoot").addEventListener("click", toggleLeftFoot);
document.querySelector(".rightFoot").addEventListener("click", toggleRightFoot);
document.querySelector(".match").addEventListener("click", toggleMatch);
document.querySelector(".bolt").addEventListener("click", toggleBolt);
document.querySelector(".anchors").addEventListener("click", toggleAnchors);

function toggleNewRoute() {
    document.querySelector(".newRoute").classList.toggle("redBorder");
    document.querySelector(".import").classList.remove("redBorder");
    document.querySelector(".pen").classList.remove("redBorder");
    document.querySelector(".undo").classList.remove("redBorder");
    document.querySelector(".textBox").classList.remove("redBorder");
    document.querySelector(".leftHand").classList.remove("redBorder");
    document.querySelector(".rightHand").classList.remove("redBorder");
    document.querySelector(".leftFoot").classList.remove("redBorder");
    document.querySelector(".rightFoot").classList.remove("redBorder");
    document.querySelector(".match").classList.remove("redBorder");
    document.querySelector(".bolt").classList.remove("redBorder");
    document.querySelector(".anchors").classList.remove("redBorder");
    document.removeEventListener("mousedown", start);
}
function toggleImport() {
    document.querySelector(".newRoute").classList.remove("redBorder");
    document.querySelector(".import").classList.toggle("redBorder");
    document.querySelector(".pen").classList.remove("redBorder");
    document.querySelector(".undo").classList.remove("redBorder");
    document.querySelector(".textBox").classList.remove("redBorder");
    document.querySelector(".leftHand").classList.remove("redBorder");
    document.querySelector(".rightHand").classList.remove("redBorder");
    document.querySelector(".leftFoot").classList.remove("redBorder");
    document.querySelector(".rightFoot").classList.remove("redBorder");
    document.querySelector(".match").classList.remove("redBorder");
    document.querySelector(".bolt").classList.remove("redBorder");
    document.querySelector(".anchors").classList.remove("redBorder");
    document.removeEventListener("mousedown", start);
}
function togglePen() {
    document.querySelector(".newRoute").classList.remove("redBorder");
    document.querySelector(".import").classList.remove("redBorder");
    document.querySelector(".pen").classList.toggle("redBorder");
    document.querySelector(".undo").classList.remove("redBorder");
    document.querySelector(".textBox").classList.remove("redBorder");
    document.querySelector(".leftHand").classList.remove("redBorder");
    document.querySelector(".rightHand").classList.remove("redBorder");
    document.querySelector(".leftFoot").classList.remove("redBorder");
    document.querySelector(".rightFoot").classList.remove("redBorder");
    document.querySelector(".match").classList.remove("redBorder");
    document.querySelector(".bolt").classList.remove("redBorder");
    document.querySelector(".anchors").classList.remove("redBorder");
    // document.removeEventListener("mousedown", start);
}
function toggleUndo() {
    document.querySelector(".newRoute").classList.remove("redBorder");
    document.querySelector(".import").classList.remove("redBorder");
    document.querySelector(".pen").classList.remove("redBorder");
    document.querySelector(".undo").classList.toggle("redBorder");
    document.querySelector(".textBox").classList.remove("redBorder");
    document.querySelector(".leftHand").classList.remove("redBorder");
    document.querySelector(".rightHand").classList.remove("redBorder");
    document.querySelector(".leftFoot").classList.remove("redBorder");
    document.querySelector(".rightFoot").classList.remove("redBorder");
    document.querySelector(".match").classList.remove("redBorder");
    document.querySelector(".bolt").classList.remove("redBorder");
    document.querySelector(".anchors").classList.remove("redBorder");    
    document.removeEventListener("mousedown", start);
}
function toggleTextBox() {
    document.querySelector(".newRoute").classList.remove("redBorder");
    document.querySelector(".import").classList.remove("redBorder");
    document.querySelector(".pen").classList.remove("redBorder");
    document.querySelector(".undo").classList.remove("redBorder");
    document.querySelector(".textBox").classList.toggle("redBorder");
    document.querySelector(".leftHand").classList.remove("redBorder");
    document.querySelector(".rightHand").classList.remove("redBorder");
    document.querySelector(".leftFoot").classList.remove("redBorder");
    document.querySelector(".rightFoot").classList.remove("redBorder");
    document.querySelector(".match").classList.remove("redBorder");
    document.querySelector(".bolt").classList.remove("redBorder");
    document.querySelector(".anchors").classList.remove("redBorder");    
    document.removeEventListener("mousedown", start);
}
function toggleLeftHand() {
    document.querySelector(".newRoute").classList.remove("redBorder");
    document.querySelector(".import").classList.remove("redBorder");
    document.querySelector(".pen").classList.remove("redBorder");
    document.querySelector(".undo").classList.remove("redBorder");
    document.querySelector(".textBox").classList.remove("redBorder");
    document.querySelector(".leftHand").classList.toggle("redBorder");
    document.querySelector(".rightHand").classList.remove("redBorder");
    document.querySelector(".leftFoot").classList.remove("redBorder");
    document.querySelector(".rightFoot").classList.remove("redBorder");
    document.querySelector(".match").classList.remove("redBorder");
    document.querySelector(".bolt").classList.remove("redBorder");
    document.querySelector(".anchors").classList.remove("redBorder");
    document.removeEventListener("mousedown", start);
}
function toggleRightHand() {
    document.querySelector(".newRoute").classList.remove("redBorder");
    document.querySelector(".import").classList.remove("redBorder");
    document.querySelector(".pen").classList.remove("redBorder");
    document.querySelector(".undo").classList.remove("redBorder");
    document.querySelector(".textBox").classList.remove("redBorder");
    document.querySelector(".leftHand").classList.remove("redBorder");
    document.querySelector(".rightHand").classList.toggle("redBorder");
    document.querySelector(".leftFoot").classList.remove("redBorder");
    document.querySelector(".rightFoot").classList.remove("redBorder");
    document.querySelector(".match").classList.remove("redBorder");
    document.querySelector(".bolt").classList.remove("redBorder");
    document.querySelector(".anchors").classList.remove("redBorder");
    document.removeEventListener("mousedown", start);
}
function toggleLeftFoot() {
    document.querySelector(".newRoute").classList.remove("redBorder");
    document.querySelector(".import").classList.remove("redBorder");
    document.querySelector(".pen").classList.remove("redBorder");
    document.querySelector(".undo").classList.remove("redBorder");
    document.querySelector(".textBox").classList.remove("redBorder");
    document.querySelector(".leftHand").classList.remove("redBorder");
    document.querySelector(".rightHand").classList.remove("redBorder");
    document.querySelector(".leftFoot").classList.toggle("redBorder");
    document.querySelector(".rightFoot").classList.remove("redBorder");
    document.querySelector(".match").classList.remove("redBorder");
    document.querySelector(".bolt").classList.remove("redBorder");
    document.querySelector(".anchors").classList.remove("redBorder");
    document.removeEventListener("mousedown", start);
}
function toggleRightFoot() {
    document.querySelector(".newRoute").classList.remove("redBorder");
    document.querySelector(".import").classList.remove("redBorder");
    document.querySelector(".pen").classList.remove("redBorder");
    document.querySelector(".undo").classList.remove("redBorder");
    document.querySelector(".textBox").classList.remove("redBorder");
    document.querySelector(".leftHand").classList.remove("redBorder");
    document.querySelector(".rightHand").classList.remove("redBorder");
    document.querySelector(".leftFoot").classList.remove("redBorder");
    document.querySelector(".rightFoot").classList.toggle("redBorder");
    document.querySelector(".match").classList.remove("redBorder");
    document.querySelector(".bolt").classList.remove("redBorder");
    document.querySelector(".anchors").classList.remove("redBorder");
    document.removeEventListener("mousedown", start);
}
function toggleMatch() {
    document.querySelector(".newRoute").classList.remove("redBorder");
    document.querySelector(".import").classList.remove("redBorder");
    document.querySelector(".pen").classList.remove("redBorder");
    document.querySelector(".undo").classList.remove("redBorder");
    document.querySelector(".textBox").classList.remove("redBorder");
    document.querySelector(".leftHand").classList.remove("redBorder");
    document.querySelector(".rightHand").classList.remove("redBorder");
    document.querySelector(".leftFoot").classList.remove("redBorder");
    document.querySelector(".rightFoot").classList.remove("redBorder");
    document.querySelector(".match").classList.toggle("redBorder");
    document.querySelector(".bolt").classList.remove("redBorder");
    document.querySelector(".anchors").classList.remove("redBorder");
    document.removeEventListener("mousedown", start);
}
function toggleBolt() {
    document.querySelector(".newRoute").classList.remove("redBorder");
    document.querySelector(".import").classList.remove("redBorder");
    document.querySelector(".pen").classList.remove("redBorder");
    document.querySelector(".undo").classList.remove("redBorder");
    document.querySelector(".textBox").classList.remove("redBorder");
    document.querySelector(".leftHand").classList.remove("redBorder");
    document.querySelector(".rightHand").classList.remove("redBorder");
    document.querySelector(".leftFoot").classList.remove("redBorder");
    document.querySelector(".rightFoot").classList.remove("redBorder");
    document.querySelector(".match").classList.remove("redBorder");
    document.querySelector(".bolt").classList.toggle("redBorder");
    document.querySelector(".anchors").classList.remove("redBorder");
    document.removeEventListener("mousedown", start);
}
function toggleAnchors() {
    document.querySelector(".newRoute").classList.remove("redBorder");
    document.querySelector(".import").classList.remove("redBorder");
    document.querySelector(".pen").classList.remove("redBorder");
    document.querySelector(".undo").classList.remove("redBorder");
    document.querySelector(".textBox").classList.remove("redBorder");
    document.querySelector(".leftHand").classList.remove("redBorder");
    document.querySelector(".rightHand").classList.remove("redBorder");
    document.querySelector(".leftFoot").classList.remove("redBorder");
    document.querySelector(".rightFoot").classList.remove("redBorder");
    document.querySelector(".match").classList.remove("redBorder");
    document.querySelector(".bolt").classList.remove("redBorder");
    document.querySelector(".anchors").classList.toggle("redBorder");
    document.removeEventListener("mousedown", start);
}
