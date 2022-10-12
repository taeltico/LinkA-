const preco = 456;
const pix = 0.15;
const debito = 0.10;
const ate2x = preco
const parceladoEmMaisDe2x = preco * 0.10;
const formaDePagamento = '';

const valorFinal = formaDePagamento * preco

if (formaDePagamento === 'pix'){
    console.log(preco -(preco * pix))
} else if(formaDePagamento === 'debito'){
    console.log(preco -(preco * debito))
} else if (formaDePagamento === 'ate2x'){
    console.log(preco)
}else {
    console.log(preco + parceladoEmMaisDe2x)
}


