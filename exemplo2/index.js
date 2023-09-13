function soma(valor1, valor2) {
    return valor1 + valor2;
} 

function multiplica(valor1, valor2) {
    return valor1 * valor2;
} 

function divide(valor1, valor2) {
    return valor1 / valor2;
} 

function subtrai(valor1, valor2) {
    return valor1 - valor2;
} 

let resultadoSoma = soma(10, 50);
let resultadoMultiplica = multiplica(2, 10);
let resultadoDivide = divide(50, 5);
let resultadoSubtrai = subtrai(10, 4);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Multiplicação: ${resultadoMultiplica}`);
console.log(`Divisão: ${resultadoDivide}`);
console.log(`Subtração: ${resultadoSubtrai}`);