const rafael = {
    nome:'Rafael Wanderley Vitor Sá',
    idade: 31,
    Sexo: 'masc',

    apresentacao: function() {
        this
        console.log("meu nome é  ${this.nome}  e minha idade é ${this.idade} minha profissão é  ${this.formacao}");
    }
};

console.log(rafael.nome);
console.log(rafael.sexo);
console.log(rafael);

rafael.alt = 1.75;
rafael.formacao = 'programador';

console.log()
rafael.apresentacao();

const atributo = 'idade';

console.log(pessoa['nome']);