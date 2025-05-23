/* Winston */

const maxVidaW = 1000;
const limiteArmor = 750;
const barrasVida = 20;
const quntVidaPorBarra = maxVidaW / barrasVida;

let vidaAtualW = maxVidaW;
const barraW = document.getElementById('lifebarW')



function updateBar(barElemento , vida) {
    const segs = barElemento.children;

const hpSegs = Math.min (
    Math.ceil(Math.min(vida, limiteArmor) / quntVidaPorBarra),
    barrasVida
)

const armorSegs = vida > limiteArmor
    ? Math.ceil((vida - limiteArmor) / quntVidaPorBarra)
    :0;

for (let i = 0; i < barrasVida; i++) {
    segs[i].classList.remove('hp' , 'armor');
    if (i < hpSegs) {
        segs[i].classList.add('hp'); 
    }else if (i < hpSegs + armorSegs) {
        segs[i].classList.add("armor");
    }
}
}

updateBar(barraW , vidaAtualW);

/* Reaper */

const maxVidaR = 20;
const barrasVidaR = 10;
const quntVidaPorBarraR = maxVidaW / barrasVida;

let vidaAtualR = maxVidaW;
const barraR = document.getElementById('lifebarR')

updateBar(barraR , vidaAtualR);


/*Botoes*/




