/*Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
Per fare questo bonus potremmo aver bisogno di del metodo string.includes()*/


const lamp = document.getElementById('bulb')
const lampBtn = document.getElementById('button')

function turnOn() {

console.log(lamp.src)

    if (lamp.src === '../bonus/assets/img/white_lamp.png') {

        lamp.src = '../bonus/assets/img/yellow_lamp.png'
        console.log('lampada accesa')

    } else {
        
        lamp.src = '../bonus/assets/img/white_lamp.png'
        console.log('lampada spenta')
    }

}

lampBtn.addEventListener('click', turnOn);