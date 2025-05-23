/* Winston */

const maxLifeW = 1000;
const limiteArmor = 750;
const barrasVida = 20;
const quntVidaPorBarra = maxLifeW / barrasVida;

let vidaAtualW = maxLifeW;
const barW = document.getElementById('lifebarW')



function updateBar(barElement , life) {
    const segs = barElement.children;

const hpSegs = Math.min (
    Math.ceil(Math.min(life, limiteArmor) / quntVidaPorBarra),
    barrasVida
)

const armorSegs = life > limiteArmor
    ? Math.ceil((life - limiteArmor) / quntVidaPorBarra)
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

updateBar(barW , vidaAtualW);






