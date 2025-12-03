// 1- Criar uma collection array do tipo string ok 
// 2- Solicitar ao usuário que ele digite 5 cores ok
// 3- adicionar individualmente no array ok
// 4 - mostrar na tela todas as cores adicionadas ok
// 5- mostrar todas as cores adicionadas, ordenadas em ordem crescente.

import leia = require('readline-sync')

const lista: Array<string> = new Array<string>()
let cor1, cor2, cor3, cor4, cor5: string

cor1 = leia.question("Digite a primeira cor: ")
cor2 = leia.question("Digite a segunda cor: ")
cor3 = leia.question("Digite a terceira cor: ")
cor4 = leia.question("Digite a quarta cor: ")
cor5 = leia.question("Digite a quinta cor: ")

lista.push(cor1)
lista.push(cor2)
lista.push(cor3)
lista.push(cor4)
lista.push(cor5)

console.log("Listar todas as cores: " + lista)
console.log("Ordenar as cores: " + lista.sort())