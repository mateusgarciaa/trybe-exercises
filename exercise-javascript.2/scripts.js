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
