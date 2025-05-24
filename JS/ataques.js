import { botaoQ, botaoE, botaoW, ataqueReaper } from "./vidas.js";

const ataque1 = document.getElementById('ataque1');
const ataque2 = document.getElementById('ataque2')
const cura = document.getElementById('cura')

function onKeyPress(e) {
    const tecla = e.key.toLowerCase();
    console.log('tecla');

    if (tecla === 'q') {
        console.log('botaoQ');
        e.preventDefault();
        botaoQ(2);
        ataque1.click();
        ataqueReaper()

    } else if (tecla === 'w') {
        e.preventDefault();
        botaoW(4);
        ataque2.click();

    } else if (tecla ==='e') {
        e.preventDefault();
        botaoE(500);
        console.log('botao');
        cura.click();
    }
}
document.addEventListener('keydown' , onKeyPress);

/* Reaper */



