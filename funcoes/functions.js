function sayMyName(name) {
    console.log('your name is '+ name);
}
function incrementarJuros (valor, percentualJuros){
    const valorDeJuros =(percentualJuros/ 100) *valor;
    return valor + valorDeJuros;
}
sayMyName('Rafael')
sayMyName('Wanderley')
sayMyName('Vitor')
sayMyName('Sá')



console.log(incrementarJuros(100,10))

function quadrado (valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez * quadradoDeDez)

