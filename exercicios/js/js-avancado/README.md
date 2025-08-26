# Frontend Mentor - Solução de aplicativo gerador de conselhos

Esta é uma solução para o [desafio do componente do cartão de perfil no Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Índice

- [Visão geral](#visão-geral)
   - [O desafio](#o-desafio)
   - [Captura de tela](#captura-de-tela)
   - [Links](#links)
- [Meu processo](#meu-processo)
   - [Construído com](#construído-com)
   - [O que aprendi](#o-que-aprendi)
- [Autor](#autor)

## Visão geral

### O desafio

- Descrição da tarefa: Você deve criar um layout próximo desse desafio do frontend mentor: [Frontend Mentor | Advice generator app coding challenge](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Onde o principal desafio é construir um aplicativo que gere conselhos aleatórios. Nessa primeira etapa do exercício, será realizado apenas a construção do HTML e CSS.

### Captura de tela

![](./design/Screenshot.jpg)

### Links

- URL da solução: [https://github.com/Maicaoxd/app-gerador-de-conselhos](https://github.com/Maicaoxd/app-gerador-de-conselhos)
- URL do site ao vivo: [https://maicaoxd.github.io/app-gerador-de-conselhos/](https://maicaoxd.github.io/app-gerador-de-conselhos/)

### Como clonar projeto

1 - Clone para o projeto

```
git clone https://github.com/Maicaoxd/app-gerador-de-conselhos.git
```

2 - Acesse a pasta do projeto

```
cd app-gerador-de-conselhos
```
## Meu processo

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas CSS3
- Flexbox
- Responsividade

### O que eu aprendi

Aprendi a utilizar a pseudo-classe :rover que corresponde a quando o usuário designa um elemento com um dispositivo apontador, mas sem ativa-lo.

```html
<button class="dado">
   <img src="./images/icon-dice.svg" alt="Dado">
</button>
```
```css
.container .cartao .dado:hover {
    color: #53FFAB;
    cursor: pointer;
    box-shadow: 0 5px 30px var(--cor-verde);
}
```

## Autor

- GitHub - [Maicon Alves Guedes](https://github.com/Maicaoxd)
- Frontend Mentor - [@Maicaoxd](https://www.frontendmentor.io/profile/Maicaoxd)
