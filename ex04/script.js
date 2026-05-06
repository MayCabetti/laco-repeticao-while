let nome = prompt("Insira seu nome:");
let sobrenome = prompt("Insira seu sobrenome:");

while (nome === "" || sobrenome === "") {
    alert("Preencha corretamente nome e sobrenome.");

    nome = prompt("Insira seu nome:");
    sobrenome = prompt("Insira seu sobrenome:");
}

alert(`Nome completo: ${nome} ${sobrenome}`);