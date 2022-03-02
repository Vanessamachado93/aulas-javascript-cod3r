function teste1(num) {
	if (num > 7) console.log(num)
	console.log('Final')
} // essa estrutura é modo correto.

teste1(6)
teste1(8)

function teste2(num) {
	//obs nao usar o ; com as estruturas de controle do if.
	// cuidado, acaba gerando um erro no grave, o código pedia
	//que o numero tinha que ser maior de 7 e console.log 6 e 8 ambos foram mostrados
	// como certo, e na verdade só 8 é certo.
	if (num > 7);
	console.log(num)
}
teste2(6)
teste2(8)
