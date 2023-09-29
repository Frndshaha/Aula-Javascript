import { calcularMediaEAprovacao } from "./Modulo.js"

const notasDoAluno = [3, 6, 2];
const mediaMinima = 7.0;

const resultado = calcularMediaEAprovacao(notasDoAluno, mediaMinima);
console.log(`Resultado da aprovação: ${resultado}`);