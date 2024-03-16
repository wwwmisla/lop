var numero = parseFloat(prompt('Digite um número:'));

if (numero < 0) {
    alert(Math.pow(numero, 2));
} else {
    alert(Math.sqrt(numero));
}