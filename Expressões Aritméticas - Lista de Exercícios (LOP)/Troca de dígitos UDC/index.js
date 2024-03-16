let numero = Number(prompt('Digite um valor de 3 dígitos no formato CDU:'));

let U = parseInt(numero % 10);
let D = parseInt((numero / 10) % 10);
let C = parseInt(numero / 100);

alert(U.toString() + D.toString() + C.toString());