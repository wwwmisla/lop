let valor = Number(prompt('Digite um valor:'));

let dias = Math.floor(valor / 24);
let horas = valor % 24;

alert(dias + ' dias e ' + horas + ' horas');