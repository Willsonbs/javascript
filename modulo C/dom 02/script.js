function changeColor() {
    const demo = document.getElementById('demo');
    demo.style.color = 'red';
}

function changeBackground() {
    const main = document.querySelector('main'); // Seleciona o elemento <main>
    main.style.backgroundColor = 'lightblue'; // Define a cor de fundo como azul clar
}

function addParagraph() {
    const main = document.querySelector('main');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Novo parágrafo adicionado!';
    main.appendChild(paragraph); // Adiciona o novo parágrafo ao <main>
}

function removeParagraph() {
    const main = document.querySelector('main');
    const lastParagraph = main.lastElementChild; // Seleciona o último elemento do <main>
    if (lastParagraph.tagName === 'P') { // Verifica se o último elemento é um parágrafo
        main.removeChild(lastParagraph); // Remove o último elemento do <main>
    }
}

function changeText() {
    const demo = document.getElementById('demo');
    demo.textContent = 'Olá, você está estudando manipulação de DOM!';
}

function changeFontSize() {
    const demo = document.getElementById('demo');
    demo.style.fontSize = '24px';
}

function toggleVisibility() {
    const demo = document.getElementById('demo');
    demo.style.display = demo.style.display === 'none'? 'block' : 'none'; // Alterna a visibilidade do elemento
}

function toggleBold(){
    const demo = document.getElementById('demo');
    demo.style.fontWeight = demo.style.fontWeight === 'bold'? 'normal' : 'bold'; // Alterna a negrito do elemento
}

function toggleItalic() {
    const demo = document.getElementById('demo');
    demo.style.fontStyle = demo.style.fontStyle === 'italic'? 'normal' : 'italic'; // Alterna a itálico do elemento
}

function toggleUnderline() {
    const demo = document.getElementById('demo');
    demo.style.textDecoration = demo.style.textDecoration === 'underline'? 'none' : 'underline'; // Alterna a sublinhado do elemento
}

function toggleStrikethrough() {
    const demo = document.getElementById('demo');
    demo.style.textDecoration = demo.style.textDecoration === 'line-through'? 'none' : 'line-through'; // Alterna a tachado do elemento
} 

