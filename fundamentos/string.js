let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

//concatencao

const nome = 'Rebeca';
const concatencao = 'Olá' + nome + '!';
const template = `Olá ${nome}!`;
console.log(concatencao, template);

//template String

const up = (texto) => texto.toUpperCase();
console.log(`Ei...${up('cuidado')}!`);
