const SKUS = ['1942',
'2025',
'1767',
'1728',
'2054',
'1864',
'1824',
'202',
'249',
'2031',
'1632',
'109',
'1485',
'1429',
'1332',
'1404',
'347',
'1232',
'306',
'389',
'1038',
'1103',
'1356',
'1381'];

/** Contador para detener la busqueda y revisión de las "cards" */
let counterSearch = 0;

const createStylesPLP = () => {
    if (document.head.querySelector('#PLPStyle')) return;
    const link = document.createElement('LINK')
    link.rel = "stylesheet";
    link.id = "PLPStyle";
    link.href = "https://cdn.jsdelivr.net/gh/mudi-3D/ensuenoMueblesPLP@latest/index.css";
    document.head.appendChild(link);
};

const searchCards = () => {

    if (counterSearch === 1000) return;

    const allCards = document.querySelectorAll('[data-product_id]')
    console.log(allCards)

    if (allCards.length == 0) {
        counterSearch++;
        requestAnimationFrame(searchCards);
    };

    for (let i = 0; i < allCards.length; i++) {

        let numberSKu = allCards[i].getAttribute("data-product_id");

        if (SKUS.includes(numberSKu)) {
            console.log('enciontramos una card ')
            /** Contenido de la imagen icono identificador 3D  */
            let ImageElement = document.createElement('DIV');
            ImageElement.classList.add('icon3DPLP');

            const father = allCards[i].parentElement;
            father.appendChild(ImageElement);
        }

    };


};

createStylesPLP();

setTimeout(() => {
    if (!(location.href.includes('/producto/'))) { searchCards() }
}, 1500)
