const precoGasolina = 5.79;
const precoEtanol = 6.66;
const precoGas = 3.98
const KmPorLitros = 10;
const distanciaEmKm = 100;
const tipoDeCombustivel = 'gas';

const litrosConsumidos = distanciaEmKm / KmPorLitros;

if (tipoDeCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2)); 
} else if(tipoDeCombustivel === 'gas'){
    const valorGasto = litrosConsumidos * precoGas;
    console.log(valorGasto.toFixed(2));
}
else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

