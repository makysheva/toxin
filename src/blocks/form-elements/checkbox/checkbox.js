// checkbox buttons

const markSmoke = document.getElementById('mark-smoke')// i
const markNursling = document.getElementById('mark-nursling')
const markGuests = document.getElementById('mark-guests')
const checkboxHide = document.querySelectorAll('.checkbox')// input

checkboxHide.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {

        let attrdataType = checkbox.getAttribute('data-type')

        if(attrdataType === 'smoke') {
            markSmoke.classList.toggle('checkbox__mark--checked')
        } else if(attrdataType === 'nursling') {
            markNursling.classList.toggle('checkbox__mark--checked')
        } else if(attrdataType === 'guests') {
            markGuests.classList.toggle('checkbox__mark--checked')
        }
    })
})
