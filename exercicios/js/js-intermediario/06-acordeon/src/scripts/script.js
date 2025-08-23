const listaAcordeons = document.querySelectorAll('.acordeon')

listaAcordeons.forEach(acordeon => {
    acordeon.addEventListener("click", () => {
        const body = acordeon.querySelector('.acordeon-texto')
        const seta = acordeon.querySelector('.fa-chevron-down')

        if (body.classList.contains('ativo')) {
            desativarAcordeons()
        } else {
            desativarAcordeons()
            body.classList.toggle('ativo')
            seta.classList.toggle('vermelho')
        }
    })
});

function desativarAcordeons() {
    let ativos = document.querySelectorAll('.ativo');
    let vermelhos = document.querySelectorAll('.vermelho')

    if (ativos !== null) {
        ativos.forEach(ativo => {
            ativo.classList.remove('ativo')
        })
    }

    if (vermelhos !== null) {
        vermelhos.forEach(vermelho => {
            vermelho.classList.remove('vermelho')
        })
    }
}