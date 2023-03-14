//Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body
const title = document.createElement('h1');
const textTitle = document.createTextNode('TrybeTrip - Agência de Viagens');
title.className = "title"
title.appendChild(textTitle)

document.body.appendChild(title);

//Adicione a tag main com a classe main-content como filho da tag body
const mainContent = document.createElement('main');
mainContent.className = "main-content";

document.body.appendChild(mainContent);

//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2
const firstSection = document.createElement('section');
firstSection.className = 'center-content';

mainContent.appendChild(firstSection);

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto
const firstSectionContent = document.createElement('p');
const firstSectionText = document.createTextNode('Este é o conteúdo da primeira seção.');
firstSectionContent.appendChild(firstSectionText);

firstSection.appendChild(firstSectionContent);

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2
const secondSection = document.createElement('section');
secondSection.className = 'left-content';

mainContent.appendChild(secondSection);

//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2
const thirdSection = document.createElement('section');
thirdSection.className = 'right-content';

mainContent.appendChild(thirdSection);

//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5
const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';

secondSection.appendChild(image);

//dicione uma lista não ordenada com os valores de 1 a 10
const list = document.createElement('ol');

for (let index = 1; index < 11; index+=1) {
    const itemList = document.createElement('li');
    const textList = document.createTextNode(index); 
    itemList.appendChild(textList);
    list.appendChild(itemList);
}

thirdSection.appendChild(list);

//Adicione 3 tags h3, todas sendo filhas do main criado no passo 2
const textFinal = document.createElement('h3');

for (let index = 0; index < 5; index+=1) {
    const textFinal = document.createElement('h3');
    const finalContent =document.createTextNode('Texto');
    textFinal.appendChild(finalContent);
    document.body.appendChild(textFinal);
    
}






