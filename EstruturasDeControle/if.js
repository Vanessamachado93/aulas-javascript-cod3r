function soBoaNoticia(nota) {
	if (nota >= 7) {
		//expressão relacional
		console.log('Aprovado com ' + nota)
	}
}

soBoaNoticia(7.8)

function seForVerdadeEuFalo(valor) {
	if (valor) {
		console.log('é verdade ... ' + valor)
	}
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('  ')
