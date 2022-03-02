const imprimirResultado = function (nota) {
	if (nota >= 7) {
		console.log('Aprovado!')
	} else {
		console.log('reprovado!')
	}
}

imprimirResultado(8)
imprimirResultado(4)
imprimirResultado('Epa!') //cuidado, linguagem fracamente tipada
//no resultado mostrou reprovado, ele tentou comparar a string com o zero!
