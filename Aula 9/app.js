function criaCard(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let card = document.createElement('article')
    card.className = 'card'
    card.innerHTML = `
    <div class="card-conteudo">
    <h3> ${categoria}</h3>
    <div class="card-pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="card-resposta">
      <p> ${resposta}</p>
    </div>
    `
    container.appendChild (card)
}