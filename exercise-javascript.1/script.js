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

