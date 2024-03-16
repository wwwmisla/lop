// Receber o valor de entrada
let valorRaio = Number(prompt('Digite um valor para o raio:'));

// Realizar o cálculo do perímetro de raio R
const pi = 3.14159265;
let calculoP = (2 * pi * valorRaio).toFixed(2);

// Saída
alert(calculoP);