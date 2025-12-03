// 1- Escreva um programa para criar uma Collection Set do tipo number
// 2- O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos
// 3- adicione-os individualmente na Collection Set.
// 4- Mostre na tela todos os elementos da Collection Set.

import leia = require('readline-sync')

const lista: Set<number> = new Set<number>()
let i: number

for (i = 0; i < 10; i++){
    let numero: number = leia.questionInt("Digite " + (i + 1) + " numero: ")
    if (lista.has(numero) == true){  // PRECISO CONFERIR SE NÃO É NUMERO REPETIDO ANTES DE ADICIONAR O NUMERO NA LISTA, SE NÃO FICA EM LOOP
        console.log("Não pode numeros repetidos")
    }
    lista.add(numero)
}

console.log(lista)