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

