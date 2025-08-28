# 🚀 Quest - Base do React  

Este repositório contém a resolução da **Quest de Fundamentos do React**, proposta no curso **Dev em Dobro**.  
O objetivo é praticar os principais conceitos do React, como **componentes, props, eventos e renderização**.  

---

## 🎯 Objetivos da Quest  

### 🔹 Desafio 1: Componente de Texto Colorido  
- Criar um componente que receba **texto e cor** como props.  
- O texto deve ser exibido em **maiúsculas (uppercase)**.  
- A cor do texto deve ser aplicada via **style inline**.  

### 🔹 Desafio 2: Componente Button Interativo  
- Criar um componente `Button` que receba uma **label** como prop.  
- Ao clicar no botão, exibir um **alert** mostrando a label:  
  > "A label desse botão é `<label>`".  

---

## 🛠️ Tecnologias utilizadas  
- **React.js** (com Vite)  
- **JavaScript (ES6+)**  
- **PropTypes** para validação de props  

---

## 📂 Estrutura do projeto  

```bash
src/
├─ components/
│ ├─ paragraph/ → componente do desafio 1
│ ├─ button/ → componente do desafio 2
├─ App.jsx → uso dos componentes
├─ main.jsx → ponto de entrada
```

---

## 🚀 Como rodar o projeto  
1. Clonar o repositório  
```bash
git clone https://github.com/Maicaoxd/Curso-Dev-Quest/desafios/react/react-props-eventos.git 
```

2. Instalar dependências
```bash
npm install
```

3. Rodar o servidor de desenvolvimento

```bash
npm run dev
```

## ✅ Aprendizados

- Criar e reutilizar componentes de função

- Passar props para personalizar componentes

- Usar defaultProps e PropTypes

- Trabalhar com eventos no React (onClick)
