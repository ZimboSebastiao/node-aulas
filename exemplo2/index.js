// import soma from './modulos/funcoes.mjs'; // Importando um único recurso
// import operacoes from './modulos/funcoes.mjs'; // Importando todos os recursos por meio de um objetivo
import {soma, multiplica, divide, subtrai} from './modulos/funcoes.mjs';



// let resultadoSoma = operacoes.soma(10, 50);
let resultadoSoma = soma(10, 50);
let resultadoMultiplica = multiplica(2, 10);
let resultadoDivide = divide(50, 5);
let resultadoSubtrai = subtrai(10, 4);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Multiplicação: ${resultadoMultiplica}`);
console.log(`Divisão: ${resultadoDivide}`);
console.log(`Subtração: ${resultadoSubtrai}`);