var x = Number(prompt('Digite o primeiro número:'));
var y = Number(prompt('Digite o segundo número:'));
var z = Number(prompt('Digite o terceiro número:'));

if (x < y && x < z){
    alert(x);
} else if (y < x && y < z) {
    alert(y);
} else if (z < x && z < y) {
    alert(z);
}