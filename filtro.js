const campoFiltro = document.querySelector('#filtrar-paises')
campoFiltro.addEventListener('input', function () {
    let cards = document.querySelectorAll('.card')
    if (this.value.length > 0) {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            let nome = card.querySelector('.pais').textContent
            //Cria uma expressão regular a partir do valor digitado no campo de filtro
            let expressao = new RegExp(this.value, 'i')
            if (!expressao.test(nome)) {
                card.classList.add('invisivel')
            } else {
                card.classList.remove('invisivel')
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            card.classList.remove('invisivel')
        }
    }
})

const filtrarcapital = document.querySelector('#btnBuscar')
filtrarcapital.addEventListener('click', function () {

    let capital = document.querySelector('#filtrarcapitais').value
    let cards = document.querySelectorAll('.card')
    if(capital.length > 0 ){
        for(let i = 0; i < cards.length; i++){
            let card = cards[i]
            let nome = card.querySelector('.capital').textContent
            //-----------------------------------------------
            if(capital != nome){
                card.classList.add('invisivel')
            } else {
                card.classList.remove('invisivel')
                alert('Capital nao encontrada')
            }    
        } 
    } else {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            card.classList.remove('invisivel')
        }
    }    
})