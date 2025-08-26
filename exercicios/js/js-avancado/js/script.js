const btn = document.getElementById('dado');
const adviceTitle = document.getElementById('conselho-id');
const adviceText = document.getElementById('conselho-texto');

btn.addEventListener('click', async () => {
    const conselho = await getRandomAdvice();

    atribuirValores(conselho);
})

async function getRandomAdvice() {
    try {
        const url = 'https://api.adviceslip.com/advice';
        response = await fetch(url);

        if (!response.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        return await response.json();
    } catch (e) {
        console.error(e);
    }
}

function atribuirValores(conselho) {
    adviceTitle.innerText = `advice #${conselho.slip.id}`;
    adviceText.innerText = `${conselho.slip.advice}`;
}