const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


for (let i = 0; i < 5; i++) {
    if (filaDeDentro.length < 5 && filaDeFora.length > 0) {
        filaDeDentro.push(filaDeFora.shift());
    }
}
console.log(filaDeDentro);
console.log(filaDeFora);