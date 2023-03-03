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


  //------------------------------Exercicios pedido de clientes -------------------------------

  let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    return `Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`;
  }

  console.log(customerInfo(order));

  //----------------------------------------Modificando pedido -------------------------------

  customerInfo(order);
  
  function orderModifier(order) {
    order.name = 'Luiz Silva';
    let pizzas = '';
    let drinks = '';
    let totalPrice = 0;
  
    for (let pizza in order.order.pizza) {
      pizzas += `${pizza}, `;
      totalPrice += order.order.pizza[pizza].price * order.order.pizza[pizza].amount;
    }
    pizzas = pizzas.slice(0, -2);
  
    for (let drink in order.order.drinks) {
      drinks += `${order.order.drinks[drink].type}, `;
      totalPrice += order.order.drinks[drink].price * order.order.drinks[drink].amount;
    }
    drinks = drinks.slice(0, -2);
  
    order.payment.total = totalPrice.toFixed(2);
  
    return `Olá, ${order.name}, o valor total de seu pedido de ${pizzas} e ${drinks} é R$ ${order.payment.total.replace('.', ',')}.`;
  }
  
  console.log(orderModifier(order));
  
      