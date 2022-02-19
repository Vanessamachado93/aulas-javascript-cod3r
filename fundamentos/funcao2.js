//armazenado uma funcao em uma variavel

const imprimirSoma = function (a, b) {
	console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenamento uma funcao arrow em uma variavel a la
const soma = (a, b) => {
	return a + b;
};

console.log(soma(2, 3));

//retorno implícito

const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));