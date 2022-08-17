const nomes = ["Ana", "Joana", "Carlos", "amanda", "Amalia", "edgar", "aroldo", "arhi"];
let secund = [];

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0] === "A" || nomes[i][0] === "a") {
        secund.push(nomes[i]);
    }
}
console.log(secund)