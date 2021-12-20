// function to erase

// function to clear all?

// function to save to an svg?

// function - when 'tools' button is clicked, show <aside> tag which contains all the tools
// add LH, RH, LF, RF images to be placed on canvas when buttons are clicked

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

// add text to canvas - NOT WORKING
function text() {
    ctx.fillText("Hello World", 50, 50);
    console.log(text);
}
