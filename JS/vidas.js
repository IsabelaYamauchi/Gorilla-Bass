const STORAGE_KEY = 'estadoDoJogo';

function loadGame() {
  const salvo = localStorage.getItem(STORAGE_KEY);
  if (!salvo) return;          // nada salvo ainda

  try {
    const estado = JSON.parse(salvo);
    vidaAtualW     = estado.vidaAtualW  ?? vidaAtualW;
    contador       = estado.contador    ?? contador;
    reapers        = Array(estado.reapersLeft).fill(true);
  } catch (e) {
    console.warn('Falha ao ler estado do jogo:', e);
  }
}

function saveGame() {
  const estado = {
    vidaAtualW:    vidaAtualW,
    contador:      contador,
    reapersLeft:   reapers.length
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

loadGame();

const overlay   = document.getElementById('gameOverOverlay');
const resultImg = document.getElementById('gameOverImg');

function showGameOver(vitoria) {
  resultImg.src = vitoria
    ? './YouWin.png'
    : './gameOver.png';
  overlay.classList.add('show');
}

function fimJogo() {
  if (vidaAtualW <= 0) {
    showGameOver(false);
  } else if (reapers.length === 0) {
    showGameOver(true);
  }
}

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
loadGame();
updateBarW(barraW , vidaAtualW);


/*Habilidades Winston*/

export function botaoQ(qntDano){
    while ( qntDano > 0 && reapers.length > 0){
        reapers.pop();
        morteReaper();
        qntDano--;
    }
    console.log('2 reapers morreram, faltam ',reapers.length);
    updateBarR(barraR);
    saveGame();
    fimJogo();
}

export function botaoW(qntDano){
    while ( qntDano > 0 && reapers.length > 0){
        reapers.pop();
        morteReaper();
        qntDano--;
    }
    console.log('4 reapers morreram, faltam ',reapers.length);
    updateBarR(barraR);
    saveGame();
    fimJogo();
}

export function botaoE (qntCura) {
    vidaAtualW = Math.min(maxVidaW,vidaAtualW + qntCura)
    console.log('Winstou encheu vida, está com', vidaAtualW, 'De vida atual');
    updateBarW(barraW , vidaAtualW);
    saveGame();
    fimJogo();
}

/* Reaper */

var totalReapers = 100;
var reapers = []
const maxVidaR = 20;
const barrasVidaR = 10;
const quntVidaPorBarraR = maxVidaR / barrasVidaR;
let vidaAtualR = maxVidaR;
loadGame();

for ( let i = 0; i < totalReapers; i++){
    reapers.push(true);
    console.log('Os reapers estão surgindo para eliminar +1 membro da overwatch');
}

const barraR = document.getElementById('lifebarR');

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

updateBarR(barraR);


export function comportamentoAtaqueWinston(contagemDano){
    while ( contagemDano > 0 && reapers.length > 0){
        reapers.pop();
        morteReaper();
        contagemDano--;
    }
    saveGame();
    updateBarR(barraR);
}


/*Habilidades Reaper ele irá dar um dano entre 0 e 100 a cada vez que chegar seu turno*/

export function ataqueReaper () {
    console.log ('Reaper se prepara para atacar');
    var danoReaper =  Math.floor(Math.random() * 100) + 1
    vidaAtualW = Math.max(0, vidaAtualW - danoReaper)
    console.log ('Reaper atacou, dando:', danoReaper, 'no Winston');
    console.log
    updateBarW(barraW , vidaAtualW);
    saveGame();
    fimJogo();
}


/* Contador */

let contador = 0;
const maxReaper = 100
const contagem = document.getElementById('contador')

function updateCounter() {
    contagem.textContent = `${contador}/${maxReaper}`;
    fimJogo();
}
updateCounter();

function morteReaper() {
    if (contador < maxReaper) {
        contador++;
        updateCounter();
    }
    saveGame();
    fimJogo();

}

updateBarW(barraW, vidaAtualW);
updateBarR(barraR);
updateCounter();



document.getElementById('resetGame').addEventListener('click', () => {
  localStorage.removeItem(STORAGE_KEY);
  // recarrega a página ou reseta as variáveis manualmente:
  window.location.reload();
});