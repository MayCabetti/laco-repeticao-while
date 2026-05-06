let valorCompras = Number(prompt("Insira o valor da sua compra (para encerrar digite 0):"));
let soma = 0

while (valorCompras > 0) {
    soma += valorCompras;

    valorCompras = Number(prompt("Insira o valor de outra compra (para encerrar digite 0):"));
}

alert(`A soma das suas compras é ${soma}R$`);