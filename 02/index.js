const letras = ["A", "a", "B", "C", "E"];

let total = 0
let encontrados = false
const genero = total === 1 ? "Foi encontrado" : "Foram encontrados";

for (let item of letras) {
    if (item === "E" || item === "e") {
        total++;
        console.log(`${genero} ${total} letras "E" ou "e".`);
        encontrados = true;
        break;
    }
}

if (!encontrados) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
}