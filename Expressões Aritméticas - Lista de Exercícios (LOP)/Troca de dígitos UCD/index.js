let numero = Number(prompt('Digite um número de 3 dígitos no formato CDU:'));

let C = parseInt(numero / 100);
let D = parseInt((numero / 10) % 10);
let U = parseInt(numero % 10);

alert(U.toString() + C.toString() + D.toString());

