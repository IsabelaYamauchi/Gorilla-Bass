/* Winston */

const maxVidaW = 1000;
const limiteArmor = 750;
const barrasVidaW = 20;
const quntVidaPorBarra = maxVidaW / barrasVidaW;

let vidaAtualW = maxVidaW;
const barraW = document.getElementById('lifebarW')


export function updateBarW(barElementoW , vida) {
    const segsW = barElementoW.children;

const hpSegsW = Math.min (
    Math.ceil(Math.min(vida, limiteArmor) / quntVidaPorBarra),
    barrasVidaW
)

const armorSegs = vida > limiteArmor
    ? Math.ceil((vida - limiteArmor) / quntVidaPorBarra)
    :0;

for (let i = 0; i < barrasVidaW; i++) {
    segsW[i].classList.remove('hp' , 'armor');
    if (i < hpSegsW) {
        segsW[i].classList.add('hp'); 
    }else if (i < hpSegsW + armorSegs) {
        segsW[i].classList.add("armor");
    }
}

}
updateBarW(barraW , vidaAtualW);


/* Reaper */

var totalReapers = 100;
var reapers = []
const maxVidaR = 20;
const barrasVidaR = 10;
const quntVidaPorBarraR = maxVidaR / barrasVidaR;

let vidaAtualR = maxVidaR;
const barraR = document.getElementById('lifebarR')

export function updateBarR (barElementoR , vidaR) {
    const segsR = barElementoR.children;

    const hpSegsR = Math.min (
    Math.ceil(Math.min(vidaR , maxVidaR) / quntVidaPorBarraR),
    barrasVidaR);

    for (let i = 0; i < segsR.length; i++) {
        segsR[i].classList.remove('hpR');
    }
    for (let i = 0; i < hpSegsR; i++) {
        segsR[i].classList.add('hpR');
    }
}
updateBarR(barraR , vidaAtualR);

for ( let i = 0; i <= totalReapers; i++){
    console.log(reapers.length);
    reapers.push(true);
    console.log(reapers.length);
}





/*Habilidades Winston*/


export function botaoQ (qntDano) {
    console.log('vida antes', vidaAtualR);
    vidaAtualR = Math.max(0,vidaAtualR - qntDano)
    console.log('vida depois', vidaAtualR);
    updateBarR(barraR , vidaAtualR);
}


export function botaoW (qntDano) {
    console.log('vida antes', vidaAtualR);
    vidaAtualR = Math.max(0,vidaAtualR - qntDano)
    console.log('vida depois', vidaAtualR);
    updateBarR(barraR , vidaAtualR);
}

export function botaoE (qntCura) {
    console.log('vida antes', vidaAtualW);
    vidaAtualW = Math.min(maxVidaW,vidaAtualW + qntCura)
    console.log('vida depois', vidaAtualW);
    updateBarR(barraW , vidaAtualW);
}
/*Troca de turno de ataque Reaper x Winston*/



/*Habilidades Reaper*/

export function ataqueReaper () {
    console.log ('vida antes', vidaAtualW);
    vidaAtualW = Math.max(0, vidaAtualW - 500)
    console.log ('vida depois', vidaAtualW);
    updateBarW(barraW , vidaAtualW)
}
