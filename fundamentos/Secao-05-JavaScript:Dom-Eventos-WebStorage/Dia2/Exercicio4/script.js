// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
// Adicione a tag main com a classe main-content como filho da tag body;
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.


// //Adicione a classe title na tag h1 criada;
// Adicione a classe description nas 3 tags h3 criadas;
// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
// Centralize a section criada no passo 6 (aquele que possui a classe right-content).
//Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// Remova os dois últimos elementos (nove e dez) da lista criada no passo 

const body = document.getElementById('body');
const tagH1 = document.createElement('h1');
tagH1.innerHTML = 'TrybeTrip - Agência de Viagens';
tagH1.className = 'title'
body.appendChild(tagH1);

const tagMain = document.createElement('main');
tagMain.className = 'main-content';
body.appendChild(tagMain);

const tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

const tagP = document.createElement('p');
tagP.innerHTML = 'ALGUM TEXTO';
tagSection.appendChild(tagP);

const leftContent = document.createElement('section') ;
leftContent.className = 'left-content';
tagMain.appendChild(leftContent);

const rightContent = document.createElement('section') ;
rightContent.className = 'right-content';
tagMain.appendChild(rightContent);

const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftContent.appendChild(image);

const ul = document.createElement('ul');
ul.id = 'ul';
rightContent.appendChild(ul);

const createLi = () => {
    const extenso = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
    for (let index = 0; index < extenso.length; index += 1) {
        const liElement = document.createElement('li');
        liElement.innerHTML = extenso[index];
        
        ul.appendChild(liElement);
    }
    
}
createLi()

const createH3 = () => {
    for (let index = 1; index <= 3; index += 1) {
        const createdH3 = document.createElement('h3');
        createdH3.className = 'description';
        tagMain.appendChild(createdH3);
    }
}
createH3()

const sectionLeftContent = document.getElementsByClassName('left-content')[0];
 tagMain.removeChild(sectionLeftContent);

rightContent.style.margin = '0 auto';

const centerContentParent = document.getElementsByClassName('center-content')[0];
centerContentParent.parentNode.style.backgroundColor = 'green';

const ul2 = document.getElementsByClassName('ul')[0];
ul.lastChild.remove();
ul.lastChild.remove();

    






