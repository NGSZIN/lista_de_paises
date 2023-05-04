//Definir a API//
const url = "https://restcountries.com/v2/all"

const listaPaises = document.querySelector('#listaPaises')

//faz uma solicitação GET para a URL da API usando a função fetch()
//fetch() retorna uma promessa (Promise) que será resolvida com a 
//resposta da solicitação
fetch(url)

.then(response => response.json())

.then(data => {
    for(let i = 0; i < data.length; i++){
        const pais = data[i]
        const div = document.createElement("div")
        div.classList = "col-md-3"
        div.innerHTML = `
        <div class="card" style="width: 20rem; height: 22rem;">
        <img src="${pais.flag}" class="card-img-top">
        <div id="listaPaises" class="card-body">
            <h5 id="nome" class="card-title pais">${pais.name}</h5>
            <h5 id="capital" class="card-title capital">${pais.capital}</h5>
            <h5 id="regiao" class="card-title">${pais.region}</h5>
        </div>
    </div>
        `
        listaPaises.appendChild(div)
        
    }
})

.catch(error => console.error(error))