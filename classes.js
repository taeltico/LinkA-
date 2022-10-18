class pessoa {
    nome;
    idade;
    emprego;
    sexo;
    formacao;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    descrever(){
        console.log('meu nome é ${this.nome} e minha idade é ${this.idade}');
    }

}
const rafael = new pessoa();
rafael.nome = "Rafael Wanderley";
rafael.idade = 31;
rafael.sexo = 'masculino';
rafael.emprego = 'Pizzaiolo';
rafael.formacao = 'superior incompleto'

const raquel = new pessoa();
raquel.nome = 'Raquel vitor';
raquel.idade = 29;
raquel.sexo = 'Feminino';
raquel.emprego = 'Operadora de caixa';
raquel.formacao = 'Ensino medio completo'

console.log(rafael);
console.log(raquel);
rafael.descrever();
raquel.descrever();
console.log(raquel.idade);

function compararPessoas(){
    if (p1.idade > p2.idade){
        console.log(${p1.nome} 'é mais velho');
    } else if(p1.idade < p2.idade)
    console.log(${p2.nome}'é mais velho');
    else 
    console.log(${p1.nome} e ${p2.nome} possuem a mesma idade')
}

compararPessoas(rafael,raquel);
