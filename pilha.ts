import leia = require('readline-sync')

import { Stack } from "./Stack";

const pilha: Stack<string> = new Stack<string>();

let opcao: number

do {
    console.log("-----------------------------------------\n")
    console.log("1- Adicionar um novo livro")
    console.log("2- Listar todos os livros")
    console.log("3- Retirar um livro\n")
    console.log("0- Sair")
    console.log("\n-----------------------------------------")

    opcao = leia.questionInt("Digite uma opcao do menu: ")

    switch(opcao){
        case 1:
            console.log("Adicionar um novo livro")
            let livro: string = leia.question("Digite o nome do livro: ")
            pilha.push(livro)
            console.log("Livro adicionado: " + livro)
            break

        case 2:
            console.log("Todos os livros listados são:")
            pilha.printStack()
            break

        case 3:
            console.log("Retirar um livro da pilha")
            pilha.pop()
            console.log("Livro retirado!")
            break

        case 0: 
            console.log("Obrigada por usar nosso sistema!")

        default:
            console.log("Digite uma opcao válida!")
    }
} while (opcao != 0)