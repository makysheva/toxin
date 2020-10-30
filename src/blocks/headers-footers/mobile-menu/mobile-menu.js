(function(){
const menuIcon = document.querySelectorAll('.js-mobile__menu')
const menuOpen = document.querySelectorAll('.mobile__menu')

for(let i=0; i < menuIcon.length; i++){
    menuIcon[i].onclick = function(e){
        e.preventDefault()
        menuOpen[i].classList.toggle('mobile__menu--open')
    }
}
})();