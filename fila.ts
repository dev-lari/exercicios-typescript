// 1- Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string - OK
// 2- O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3: 
//     1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
//     2: Listar todos os Clientes na fila
//     3: Chamar (retirar) uma pessoa da fila 
//     0: O programa deve ser finalizado. 
// 3- Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.

import leia = require('readline-sync')
import { Queue } from "./Queue";

const fila: Queue<string> = new Queue<string>();
let opcao: number

do{

    console.log("*******************************************")
    console.log("1: Adicionar novo cliente")
    console.log("2: Listar todos os clientes da fila")
    console.log("3: Chamar uma pessoa da fila")
    console.log("0: Sair")
    console.log("*******************************************")

    opcao = leia.questionInt("Escolha uma opcao do menu: ")

    switch(opcao) {
        case 1:
        console.log("Adicionar novo cliente");
        let adicionar: string = leia.question("Digite o nome do cliente: ");
        fila.enqueue(adicionar)
        console.log("Cliente adicionado!")
        break
        
        case 2: 
        console.log("Listar todos os clientes da fila")
        console.log(fila.printQueue())
        break

        case 3:
        console.log("Chamar uma pessoa da fila")
        fila.dequeue()
        console.log('Chamando agora: ' + fila.dequeue());
        break

        case 0: 
        console.log("Obrigada por usar nosso sistema!")
        break

        default: 
            console.log("Escolha uma opção válida")
    }

} while (opcao != 0)