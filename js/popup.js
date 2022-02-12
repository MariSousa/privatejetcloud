const btnHorario = window.document.getElementById('call-btn')
const janelaPopup = window.document.querySelector('div.popup-wrapper')
const btnFechar = window.document.getElementById('popup-close')

btnHorario.addEventListener('click', function(){
    janelaPopup.style.display = 'block'
})

janelaPopup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)

    if(shouldClosePopup){
        janelaPopup.style.display = 'none'
    }
})