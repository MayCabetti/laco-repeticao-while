let nota = Number(prompt("Digite uma nota (negativo para sair):"));
let soma = 0;
let contador = 0;

while (nota >= 0) {
    if (nota <= 10) {
        soma += nota;
        contador++;
    } else {
        alert("Número inválido (notas só vão até 10)");
    }

    nota = Number(prompt("Digite outra nota (negativo para sair):"));
}

if (contador > 0) {
    let media = soma / contador;
    alert("Média das notas: " + media);
} else {
    alert("Nenhuma nota válida foi digitada.");
}