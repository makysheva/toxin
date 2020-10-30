(function () {
    const dropdownSelect = document.querySelectorAll('.form-elements__input--dropdown')
    const dropdownOpen = document.querySelectorAll('.dropdown__menu')

    for(let i=0; i<dropdownSelect.length; i++){
        dropdownSelect[i].onclick = function(e){
            e.preventDefault()
            dropdownOpen[i].classList.toggle('dropdown__menu--open')
        }
    }

    // функция для увеличения/уменьшения выбора количества гостей
    const minusBtn = document.querySelectorAll('.dropdown__minus')
    const plusBtn= document.querySelectorAll('.dropdown__plus')
    const dropdownCount = document.querySelectorAll('.dropdown__count')
    const applyBtn = document.querySelectorAll('.apply-btn')
    const countGuests = document.querySelectorAll('.text-field--dropdown')

    for(let i=0; i < minusBtn.length; i++){
        minusBtn[i].innerHTML = '-'
        minusBtn[i].onclick = function(){
            if(parseInt(dropdownCount[i].innerHTML) !== 0){
                dropdownCount[i].innerHTML = parseInt(dropdownCount[i].innerHTML) - 1
                isTypeNouns(i)
            } else{
            return false
            }
        }
    }

    for(let i=0; i < plusBtn.length; i++){
        plusBtn[i].innerHTML = '+'
        plusBtn[i].onclick = function(){
            if(parseInt(dropdownCount[i].innerHTML) !== 10){
                dropdownCount[i].innerHTML = parseInt(dropdownCount[i].innerHTML) + 1
                isTypeNouns(i)
            } else{
            return false
            }
        }
    }

    function isTypeNouns(i){
        let menuOption = document.getElementsByClassName('dropdown__menu-option')

        for(let j=0; j < menuOption.length; j++){
            let dataId = menuOption[i].getAttribute('data-id')

            if(dataId === 'adults' || dataId === 'children' || dataId === 'babies'){
                countGuests[i].value = getTypeNouns(parseInt(dropdownCount[i].innerHTML), 'гость', 'гостя', 'гостей')

            } else if(dataId === 'bedrooms'){
                countGuests[i].value = getTypeNouns(parseInt(dropdownCount[i].innerHTML), 'спальня', 'спальни', 'спален')

            }else if(dataId === 'beds'){
                countGuests[i].value = getTypeNouns(parseInt(dropdownCount[i].innerHTML), 'кровать', 'кровати', 'кроватей')

            } else if(dataId === 'bathroom'){
                countGuests[i].value = getTypeNouns(parseInt(dropdownCount[i].innerHTML), 'ванная комната', 'ванные комнаты', 'ванных комнат')
            }
        }
    }

    // функция для проверки условия склонения слов
    function getTypeNouns(num, singular, moreTwo, moreFour){
        if(num === 1){
            return num + ' ' + singular
        }else if(num >= 2 && num <= 4){
            return num + ' ' + moreTwo
        } else if(num >= 5){
            return num + ' ' + moreFour
        }
    }

    // функция кнопки Применить, закрывает dropdown
    for(let i=0; i<applyBtn.length; i++){
        applyBtn[i].onclick = function(e){
            e.preventDefault()
            dropdownOpen[i].classList.toggle('dropdown__menu--open')
        }
    }
})();