const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')


let minhaListaDeItens = []


function addNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefa()
}

function mostrarTarefa() {
    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + `

        <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="Check na tarefa" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="Apagar tarefa" onclick="deletarItem(${index})">
        </li>

        `
    })

    listaCompleta.innerHTML = novaLi  
    
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefa()
}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1)

    mostrarTarefa()
}

function recarregarTarefa() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefa() 
}

recarregarTarefa()
button.addEventListener('click', addNovaTarefa)
