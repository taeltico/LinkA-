//Booleano javascript

numero = 1250;
const eNumeroPar = numero %2 === 0;




if(eNumeroPar) {
   console.log("o numero e Par"); 
      
} else {
    console.log("o numero e impar"); 
}

const multiploDe2 = (numero *2) ===0;

const numeroDivisivelPor5 = (numero %5) === 0;
if (numero === 0) {
    console.log("o numero e numero invalido")

} else if (numeroDivisivelPor5) {
    console.log("sim");
} else {
    console.log("Nao");
}

if (numero ===0){
    console.log("o numero e numero invalido")
} else if (multiploDe2){
    console.log("e multiplo de 2 ")
} else {
   console.log("Nao e multiplo de 2");
}