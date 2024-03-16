var massa = parseFloat(prompt('Digite o seu peso:'));
var metros = parseFloat(prompt('Digite a sua altura:'));
var calculo = massa/(Math.pow(metros, 2));

alert("IMC: " + calculo);