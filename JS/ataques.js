import { botaoQ, botaoE, botaoW, ataqueReaper } from "./vidas.js";

const ataque1 = document.getElementById('ataque1');
const ataque2 = document.getElementById('ataque2')
const cura = document.getElementById('cura')

function onKeyPress(e) {
    const tecla = e.key.toLowerCase();
    
    if (ataque1.disabled || ataque2.disabled || cura.disabled) {
        return;
    }

    if (tecla === 'q') {
        console.log('Winston utilizou seu ataque leve matando 2 reapers');
        e.preventDefault();
        botaoQ(2);
        ataque1.click();
        desabilitaWinston();
        setTimeout(function() {
        ataqueReaper();
        habilitaWinston();
        }, 2000);

    } else if (tecla === 'w') {
        console.log('Winston utilizou seu ataque pesado matando 4 reapers');
        e.preventDefault();
        botaoW(4);
        ataque2.click();
        desabilitaWinston();
        setTimeout(function() {
        ataqueReaper();
        habilitaWinston();
        }, 2000);

    } else if (tecla === 'e') {
        e.preventDefault();
        botaoE(200);
        console.log('Cura acionada, Winston se curou');
        cura.click();
        desabilitaWinston();
        setTimeout(function() {
        ataqueReaper();
        habilitaWinston();
        }, 2000);
    }
}
document.addEventListener('keydown' , onKeyPress);

export function desabilitaWinston() {
  console.log('Desabilitando skills do Winston, é a vez do Reaper');
  ataque1.disabled = true;
  ataque2.disabled = true;
  cura.disabled    = true;
}

export function habilitaWinston() {
  console.log('Habilitando skills do Winston após Reaper atacar!');
  ataque1.disabled = false;
  ataque2.disabled = false;
  cura.disabled    = false;
}
