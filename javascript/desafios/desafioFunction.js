function escrevaMeuNome (nome){
    return'meu nome é '+ nome;
}

function vericaAIdade(idade){
    
    if (idade >= 18){
        console.log( escrevaMeuNome('Rafael ')+ 'É maior de idade', idade, 'anos' )
    } else {
        console.log('É menor de idade')
    }
}

vericaAIdade(31);


