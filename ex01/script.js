let numerop = Number(prompt("Inrira um número positivo:"));

while (numerop < 0) {
    alert("Número inválido! Digite um número positivo.");
    numerop = Number(prompt("Insira um número positivo:"));
}

alert("Obrigada!");