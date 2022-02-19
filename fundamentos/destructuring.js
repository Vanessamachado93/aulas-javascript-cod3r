//novo recurso do ES2015

const pessoa = {
	nome: 'Ana',
	idade: 5,
	endereco: {
		rua: 'Rua ABC',
		numero: 1000,
	},
};

const { nome, idade } = pessoa;
console.log(nome, idade);
