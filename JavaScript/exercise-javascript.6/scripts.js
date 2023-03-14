// Seleciona todos os botões dentro de cada seção de opções
const backgroundColorButtons = document.querySelectorAll('#background-color button');
const fontColorButtons = document.querySelectorAll('#font-color button');
const fontSizeButtons = document.querySelectorAll('#font-size button');
const lineHeightButtons = document.querySelectorAll('#line-height button');
const fontFamilyButtons = document.querySelectorAll('#font-family button');

// Cor de fundo da tela;
backgroundColorButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.style.backgroundColor = button.textContent;
  });
});

//Cor do texto
fontColorButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.style.color = button.textContent;
  });
});

//Tamanho da fonte
fontSizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.style.fontSize = button.textContent;
  });
});

//Espaçamento entre as linhas do texto
lineHeightButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.style.lineHeight = button.textContent;
  });
});

//Tipo da fonte (Font family).
fontFamilyButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.style.fontFamily = button.textContent;
  });
});