const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

//pegar múltiplos de dentro do array apenas com uma atribuiçã

const [, [, nota]] = [
	[, 8, 8],
	[9, 6, 8], //isso aqui é só na teoria no dia a dia nao se usa.
];
console.log(nota);
