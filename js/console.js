let Rafael = 1991;

console.log(Rafael);

const combustivel = 5.04;
let KmPorLitro = 12.90;
const distancia_percorrida_em_km = 208;

let gasto_de_combustivel = (distancia_percorrida_em_km / KmPorLitro)*combustivel;
let gasto_na_em_valor = (distancia_percorrida_em_km * combustivel);
let litros_no_percurso = (distancia_percorrida_em_km / KmPorLitro);

console.log(gasto_de_combustivel.toFixed(2));
console.log(gasto_na_em_valor.toFixed(2));
console.log(litros_no_percurso.toFixed(2));


