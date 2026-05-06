let saldo = 1500;
let saque = Number(prompt("Digite o valor que deseja sacar:"));

while (saldo > 0) {
    if (saque <= saldo) {
        saldo -= saque;
        alert(`Saque realizado! Saldo restante: R$ ${saldo}`);
    } else {
        alert("Saldo insuficiente!");
    }

    if (saldo > 0) {
        saque = Number(prompt("Digite outro valor para sacar:"));
    }
}

alert("Seu saldo acabou.");