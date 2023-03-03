//---------------------------------Exercicio Boas vindas ao objeto ----------------------------------

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem-vinda, " + info.personagem);

  //---------------------------------------Adição de Propriedade--------------------------------------

  info['recorrente'] = 'Sim';
  
  console.log(info);

//------------------------------------------------For/in-------------------------------------------

for (let chave in info) {
    console.log(chave);
  }

  for (let chave in info) {
    console.log(info[chave]);
  }

  //---------------------------------------- Novo objeto ---------------------------------------------

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  

  for (let chave in info) {
    if (chave === 'recorrente') {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[chave] + ' e ' + info2[chave]);
    }
  }
  
  //-------------------------------------------Leitura de objetos ----------------------------------

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  //---------------------------------------Livro favorito ------------------------------


  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'");

//--------------------------------------Adicionando Novo Livro-----------------------------


leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco'
  });
  

  console.log(leitor);

//-------------------------------Informando a quantidade de livros favoritos -----------------

  console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);
