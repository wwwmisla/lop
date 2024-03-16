// Valores fornecidos previamente, ou seja, fixos.
let a = 1;
let b = 8;
let c = -9;

// Cálculos
let calculoPositivo = (-b + Math.sqrt( Math.pow(b, 2) - 4 * a *c )) / (2 * a);
let calculoNegativo = (-b - Math.sqrt( Math.pow(b, 2) - 4 * a *c )) / (2 * a);

// Saída dos cálculos
alert(calculoPositivo + " " + calculoNegativo);