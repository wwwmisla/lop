// Receber o valor da entrada
let subtotal = Number(prompt('Digite o valor do subtotal:'));

// Cálculo
let comissao = subtotal * 0.1;
let total = subtotal + comissao;

// Saída
alert('Subtotal: ' + subtotal + '\n' + 'Comissao: ' + comissao + '\n' + 'Total: ' + total);