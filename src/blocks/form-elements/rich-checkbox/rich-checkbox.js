const markHall = document.getElementById('mark-hall')
const markSpecialist = document.getElementById('mark-specialist')
const checkboxHide = document.querySelectorAll('.rich-checkbox__input')

checkboxHide.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        let checkboxAttr = checkbox.getAttribute('data-type')

        if(checkboxAttr === 'hall'){
            markHall.classList.toggle('checkbox__mark--checked')
        }else if(checkboxAttr === 'specialist') {
            markSpecialist.classList.toggle('checkbox__mark--checked')
        }
    })
})