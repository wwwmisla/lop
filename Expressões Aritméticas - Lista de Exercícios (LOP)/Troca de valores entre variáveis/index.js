// Tipos de dados primitivos | a & b não apontam para o mesmo local da mémoria  
let aPrimitivo = Number(prompt('Digite o valor para a:'));
let bPrimitivo = Number(prompt('Digite o valor para b:'));

alert('Inicial: ' + aPrimitivo + ' ' + bPrimitivo);

let aSecundario = aPrimitivo;
aPrimitivo = bPrimitivo;
bPrimitivo = aSecundario;

alert('\nFinal: ' + aPrimitivo + ' ' + bPrimitivo);