const numeros = [22, 7, 16, 25, 12, 3, 18];
let max = 0;
let min = Infinity;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) {
        max = numeros[i];
    }
    if (numeros[i] < min) {
        min = numeros[i];

    }
}
console.log(max - min);