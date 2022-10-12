function CalcularDeIMC(peso,alt){
    return peso / Math.pow(alt,2)
}

function main(){
    const peso = 90;
    const alt = 1.75;
    const IMC = CalcularDeIMC(peso,alt)  

    console.log('seu IMC e', IMC.toFixed(2));
    console.log(classificacaoIMC(IMC))
}


function classificacaoIMC(IMC){
if (IMC < 18.5){
    return 'Abaixo do peso';
 } else if(IMC >= 18.5 && IMC <= 25){
     return 'Peso normal';
 } else if(IMC >= 25. && IMC <= 30){
    return 'Acima do peso';
}else if(IMC >= 30 && IMC <= 40){
    return 'Obeso';
} else{
    return 'Obesidade Grave';
 } 
}

main();

 
