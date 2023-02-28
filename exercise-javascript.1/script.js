//-----------------------------------------------Exercicios de Operadores------------------

let a = 7;
let b = 4;
let c = 12;

console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b);

console.log(a % b);

if (a > b){
    console.log("A é maior que B");
   
} else{
    console.log('B é maior que A');
}

if(a > b && a > c){
    console.log('A é maior que B e C');
}

else if(b > a && b > c){
    console.log('B é maior que A e C');
}
else if(c > a && c > b){
    console.log('C é maior que A e B');
}

let number = 18;

if(number > 0){
    console.log('Positivo');
}else if(number < 0){
    console.log('Negativo')
}else{
    console.log("Zero");
};

let anguloTriangulo = a + b + c;
let todosAngulosPositivos = a > 0 && b > 0 && c >> 0;

if(todosAngulosPositivos){
    if(anguloTriangulo === 180){
    console.log(true)
}else{
    console.log(false)
}
} else{
    console.log('Ângulo Inválido!')
}

//----------------------------------------Exercicios de switch/case -------------------------------


let pecaXadrez = 'torre';

switch(pecaXadrez){

    case 'peão':
       console.log('Peão -> Retas (limitados a uma casa por turno , podendo optar por andar duas na primeira rodada)');

     break;

    case 'cavalo':
        console.log('Cavalo -> Movimentos em formatos de L');

    break;

     case 'torre' :
        console.log('Torre -> Apenas em agulos de 90 graus sem limites de casas , não podendo passar por cima de nenhuma outra peça');
    
    break;

    case 'rainha':
        console.log('Rainha -> Qualquer direção e sem limite de quantidade de casas');

    break;
    
    case 'bispo':
        console.log('Bispo -> Apenas diagonais sem limite de quantidade de casas');

    break;

     case 'rei':
        console.log('Rei -> Qulquer direção mas apenas uma casa por turno');
     
     default:
        console.log('Erro, peça inválida');   

}


//----------------------------------------Exercicios else/if---------------------------------------



let notaPorcentagem = 70;


if(notaPorcentagem > 100 || notaPorcentagem < 0){
    console.log('Erro na nota')
}else if(notaPorcentagem >= 90 ){
    console.log('Nota A');
}else if(notaPorcentagem >=80){
    console.log('Nota B');
}else if(notaPorcentagem >=70){
    console.log('Nota C');
}else if(notaPorcentagem >=60){
    console.log('Nota D');
}else if(notaPorcentagem >=50){
    console.log('Nota E');
}else if(notaPorcentagem < 50){
    console.log('Nota F');
}



//----------------------------------------Exercicio par/impar --------------------------------



let number1 = 43;
let number2 = 32;
let number3 = 27;
let even = false;
if ((number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0)){
    even = true;
}
console.log(even)


let number4 = 43;
let number5 = 32;
let number6 = 27;
let odd = false;
if ((number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0)){
    odd = true;
}
console.log(odd)


//-----------------------------------------------Exercicio Lucro Total --------------------------

let valorCusto = 1000;
let valorVenda = 2150;
let valorCustoTotal = valorCusto * 1.2;
let quantidadeProdutos = 1000;
let lucroTotal = (valorVenda - valorCustoTotal) * quantidadeProdutos;
if(valorCusto < 0 || valorVenda < 0){
    console.log("Erro no valor colocado")
}else{
    console.log(lucroTotal)
}

//----------------------------------------------Exercicio Salário -----------------------------

let salarioBruto = 13250;
let aliquotaINSS;
let aliquotaIR;

if(salarioBruto <= 1559.94){
    aliquotaINSS = salarioBruto * 0.08
}else if(salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 0.09
}else if(salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 0.11
}else{
    aliquotaINSS = 570.88
}

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase < 1903.38){
    aliquotaIR = 0
}else if(salarioBase <= 2826.65){
    aliquotaIR =(salarioBase * 0.075) - 142.80
}else if(salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 0.15) - 354.80
}else if(salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 0.225) - 636.13
}else{
    aliquotaIR = (salarioBase * 0.275) - 869.36
}
console.log('Salário Liquido é de' + " "+(salarioBase - aliquotaIR)+" "+ 'reais')