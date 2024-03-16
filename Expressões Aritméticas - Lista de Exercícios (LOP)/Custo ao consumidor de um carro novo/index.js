let precoF = Number(prompt('Digite o preço da fábrica do veículo:'));
let percentualL = Number(prompt('Digite o percentual de lucro do distribuidor:'));
let percentualI = Number(prompt('Digite o percentual de imposto:'));

let lucroD = precoF * (percentualL / 100);
let imposto = precoF * (percentualI / 100);
let precoFinalV = precoF + lucroD + imposto;

alert(lucroD + '\n' + imposto + '\n' + precoFinalV);