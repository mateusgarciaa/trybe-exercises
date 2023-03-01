let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
  let element = numbers[index];
  console.log(element)
};

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
};
console.log(soma)
 
let media = soma / numbers.length;

console.log(media)

if(media > 20){
  console.log('Média maior que 20')
} else {
  console.log("Média menor que 20")
};

let maiorValor = Math.max.apply(null, numbers);
console.log(maiorValor)


let impares = 0;

for (let index = 0; index < numbers.length; index += 1) {
   if(numbers[index] % 2 !== 0){
    impares += 1;
   }
}
if (impares === 0){
  console.log('Nnehum numero ímpar encontrado!')
} else{
  console.log(impares)
};

let menorNumero = numbers[0]

for (let index = 0; index < numbers.length; index+=1) {
  if (numbers[index] < menorNumero) {
    menorNumero =numbers[index]   
  }
};
console.log(menorNumero)


let numbers2 = []

for (let index = 0; index < 25; index +=1) {
  numbers2.push(index)
  
};
console.log(numbers2)

for (let index = 0; index < numbers2.length; index += 1) {
 console.log(numbers2[index] / 2);
  
};


//------------------------------------Logica de Programação e algoritimos-----------

let fatorial = 1;
for (let index = 10; index > 0; index -=1) {
 fatorial *= index; 
}
console.log(fatorial)


let palavra ='tryber';
let palavraReversa ='';

palavraReversa = palavra.split('').reverse().join('');

console.log(palavraReversa);


let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra =[0];
let menorPalvra = [0];

for (let index = 1; index < array.length; index += 1) {
  if(array[index].length > maiorPalavra.length ){
    maiorPalavra =array[index];
  }
}

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length < menorPalvra.length) {
    menorPalvra = array[index];
  }
}

console.log(maiorPalavra)
console.log(menorPalvra)


//--------------------------------------------Exercicio bonus------------------------------------


let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbers3.sort(function(a,b){
  if(a > b) return -1;
  if(a < b) return 1;
    
  return 0;
});
console.log(numbers3)

let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let index = 0; index < numbers4.length; index += 1) {
  if( index < (numbers4.length -1)){
    newNumbers.push(numbers4[index] * numbers4[index + 1]);
  } else {
    newNumbers.push([index] * 6);
  }
}
console.log(newNumbers)

