const SKUS = ['1442', '1342', '1337', '1223', '1241', '1110', '1282', '882', '291', '779', '752', '330', '847', '840', '315', '1634', '1629', '1309', '1608', '1602', '1476', '934', '928', '889', '1049', '1043', '1017', '1100', '1093', '1068', '1312', '1323', '1216', '1209', '1193', '1176', '995', '989', '965', '1431', '1369', '1358', '1347', '1150', '1144', '1470', '1457', '1138', '1236', '1363', '1436', '982', '1252', '1200', '1318', '1086', '1036', '921', 'Cama_nido_niño', 'Cama_nido_niña', '1416', '1463', '1492', '1257', '1614', '830', 'Colchon_Kids', '738', '867'];

/** Contador para detener la búsqueda y revisión de las "cards" */
let counterSearch = 0;

const createStylesPLP = () => {
    if (document.head.querySelector('#PLPStyle')) return;
    const link = document.createElement('LINK');
    link.rel = "stylesheet";
    link.id = "PLPStyle";
    link.href = "https://cdn.jsdelivr.net/gh/mudi-3D/ensuenoMueblesPLP@latest/index.css";
    document.head.appendChild(link);
};

const searchCards = () => {
    if (counterSearch >= 1000) return;

    const allCards = document.querySelectorAll('[data-product_id]');
    
    if (allCards.length === 0) {
        counterSearch++;
        requestAnimationFrame(searchCards);
        return;
    }

    allCards.forEach(card => {
        let numberSKu = card.getAttribute("data-product_id");

        if (SKUS.includes(numberSKu)) {
            let existingIcon = card.querySelector('.icon3DPLP');

            if (!existingIcon) {
                console.log('Encontramos una card con SKU:', numberSKu);
                
                /** Contenido de la imagen icono identificador 3D */
                let ImageElement = document.createElement('DIV');
                ImageElement.classList.add('icon3DPLP');

                const father = card.parentElement;
                father.appendChild(ImageElement);
            }
        }
    });

    // Seguir verificando por más tarjetas que se puedan cargar dinámicamente
    counterSearch++;
    requestAnimationFrame(searchCards);
};

createStylesPLP();

// Iniciar la búsqueda de tarjetas con un intervalo en caso de carga diferida
setTimeout(() => {
    if (!location.href.includes('/producto/')) {
        searchCards();
    }
}, 1000);
