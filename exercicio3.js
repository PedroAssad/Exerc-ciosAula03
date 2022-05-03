const numero = [0, 12, 22, 27]; //tamanho 4

let soma = 0;

for (let i = 0; i < numero.length; i++) {
    //será executado para i de 0 até 4 | 5 não será mais executado
    soma = soma + numero[i];
    //soma += numero[i]
}

console.log(soma);