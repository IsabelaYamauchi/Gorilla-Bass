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

/*Habilidades Winston*/


export function botaoQ(qntDano){
    while ( qntDano > 0 && reapers.length > 0){
        reapers.pop();
        qntDano--;
    }
    console.log('2 reapers morreram, faltam ',reapers.length)
    updateBarR(barraR)
}

export function botaoW(qntDano){
    while ( qntDano > 0 && reapers.length > 0){
        reapers.pop();
        qntDano--;
    }
    console.log('4 reapers morreram, faltam ',reapers.length)
    updateBarR(barraR)
}

export function botaoE (qntCura) {
    vidaAtualW = Math.min(maxVidaW,vidaAtualW + qntCura)
    console.log('Winstou encheu vida, está com', vidaAtualW, 'De vida atual');
    updateBarW(barraW , vidaAtualW);
}

/* Reaper */

var totalReapers = 100;
var reapers = []
const maxVidaR = 20;
const barrasVidaR = 10;
const quntVidaPorBarraR = maxVidaR / barrasVidaR;
let vidaAtualR = maxVidaR;

for ( let i = 0; i < totalReapers; i++){
    reapers.push(true);
    console.log('Os reapers estão surgindo para eliminar +1 membro da overwatch');
}

const barraR = document.getElementById('lifebarR')

export function updateBarR(barElementR) {
  var aliveCount = reapers.length;
  var segsR      = barElementR.children;
  // cada segmento representa totalReapers / segsR.length de Reapers
  var reapersPerSeg = totalReapers / segsR.length;
  // calcula quantos segmentos “cheios” devemos pintar
  var hpSegsR = Math.min(
    Math.ceil(aliveCount / reapersPerSeg),
    segsR.length
  );

  for (var i = 0; i < segsR.length; i++) {
    segsR[i].classList.remove('hpR');
  }

  for (var i = 0; i < hpSegsR; i++) {
    segsR[i].classList.add('hpR');
  }
}

updateBarR(barraR)

export function comportamentoAtaqueWinston(contagemDano){
    while ( contagemDano > 0 && reapers.length > 0){
        reapers.pop();
        contagemDano--;
    }
    updateBarR(barraR)
}


/*Habilidades Reaper ele irá dar um dano entre 0 e 20 a cada vez que chegar seu turno*/

export function ataqueReaper () {
    console.log ('Reaper se prepara para atacar');
    var danoReaper =  Math.floor(Math.random() * 20) + 1
    vidaAtualW = Math.max(0, vidaAtualW - danoReaper)
    console.log ('Realizar atacou dando', danoReaper, 'no Winston');
    console.log
    updateBarW(barraW , vidaAtualW)
}









