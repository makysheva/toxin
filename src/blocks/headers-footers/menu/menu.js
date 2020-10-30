let dropdownButtons = document.querySelectorAll(".js-menu__expander");
let subLists = document.querySelectorAll(".js-menu__submenu");
let checkmarks = document.querySelectorAll(".menu__checkmark");

// Dropdown appears when you click the button
for (let i = 0; i < dropdownButtons.length; i++) {
    dropdownButtons[i].onclick = function(e) {
        e.preventDefault()
        subLists[i].classList.toggle("show");
        checkmarks[i].classList.toggle("checkmark__down");
        checkmarks[i].classList.toggle("checkmark__up");
    }
}