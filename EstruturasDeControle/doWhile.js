function getInteiroAleatorioEntre(min, max) {
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
	opcao = getInteiroAleatorioEntre(-1, 10)
	console.log(`Opcao escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

//Diferenças na estrutura While e Do/While

//Fala galera! Tudo bom?

//Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja, fazendo assim:

function getInteiroAleatorioEntre(min, max) {
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}

let opcao //somente iniciada a variável, sem valor inicial!

do {
	opcao = getInteiroAleatorioEntre(-1, 10)
	console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')

//Fazendo isso, garante que a estrutura vá rodar pelo menos uma vez.

//Bons estudos!
