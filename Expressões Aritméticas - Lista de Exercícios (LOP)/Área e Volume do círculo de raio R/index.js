// Recebendo o valor de entrada R
let R = Number(prompt('Digite o valor para R:'));

// Cálculos
const pi = 3.14159265;
let A = (pi * Math.pow(R, 2)).toFixed(2); // Área do círculo de raio R
let V = ((4 / 3) * pi * Math.pow(R, 3)).toFixed(2); // Volume da esfera de raio R

// Saída
alert(A + ' ' + V);