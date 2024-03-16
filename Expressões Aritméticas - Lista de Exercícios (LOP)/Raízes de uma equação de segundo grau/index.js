// Nesta questão teremos a entrada de dados.
let a = Number(prompt('Digite o valor para a:'));
let b = Number(prompt('Digite o valor para b:'));
let c = Number(prompt('Digite o valor para c:'));

// Cálculos
let calculoPositivo = (-b + Math.sqrt( Math.pow(b, 2) - 4 * a *c )) / (2 * a);
let calculoNegativo = (-b - Math.sqrt( Math.pow(b, 2) - 4 * a *c )) / (2 * a);

// Saída
alert(calculoPositivo + ' ' + calculoNegativo);