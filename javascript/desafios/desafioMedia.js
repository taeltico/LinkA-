const nota1 = 10 ;
const nota2 = 6;
const nota3 = 8;
const nota4 = 7;

const media = (nota1 + nota2 + nota3 + nota4) / 4;


if (media < 5){
   console.log('Reprovado');
} else if(media <= 7 && media >= 5){
    console.log('Recuperacao');
}
else{
    console.log('Aprovado');
} 
console.log('sua media e', media);