window.sr = ScrollReveal();

sr.reveal('#mision', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('#vision-texto', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
});

sr.reveal('#valores-texto', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
});

sr.reveal('#footer-content', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});

// sr.reveal('#contacto', {
//     duration: 3000,
//     origin: 'top',
//     distance: '-100px'
// });

/* ------------------------------------------------------------ */
/* ---------------------- MENU RESPONSIVE --------------------- */
/* ------------------------------------------------------------ */


(function() {
    const listElements = document.querySelectorAll('.menu_item--show');
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburger');

    const addClick = () => {
        listElements.forEach(element => {
            element.addEventListener('click', () => {
                let submenu = element.children[1]
                let height = 0;

                element.classList.toggle('menu_item--active')

                if(submenu.clientHeight === 0) {
                    height = submenu.scrollHeight
                }
                submenu.style.height = `${height}px`
            })
        })
    }

    const deleteStyleHeight = () => {
        listElements.forEach(element => {
            if(element.children[1].getAttribute('style')) {
                element.children[1].removeAttribute('style')
                element.classList.remove('menu_item--active')
            }
        })
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth > 800) {
            deleteStyleHeight();
            if(list.classList.contains('menu_links--show'))
            list.classList.remove('menu_links--show')
        } else {
            addClick();
        }
    });

    if(window.innerWidth <= 800) {
        addClick()
    }

    menu.addEventListener('click', () => list.classList.toggle('menu_links--show'))

})();



/* --------------------- Seccion TECNOLOGIAS ------------------ */

sr.reveal('#tcn', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});


/* --------------------- Seccion INDIVIDUOS ------------------ */

sr.reveal('#one', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.text_item', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
});
sr.reveal('.img', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
});

/* --------------------- Seccion SELECCION DE PERSONAL ------------------ */

sr.reveal('#info', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('#revelamiento-', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
});

sr.reveal('#revelamiento- img', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('#revelamiento- p', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
});


sr.reveal('#banner h1', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

/* --------------------- TESTIMONIOS ------------------ */


const carouselImages = document.querySelector(".carousel-images");
const carouselPrevButton = document.querySelector(".carousel-button-prev");
const carouselNextButton = document.querySelector(".carousel-button-next");
let currentIndex = 0;

carouselPrevButton.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselImages.children.length - 1;
    }
    carouselImages.style.transform = `translateX(-${currentIndex * 33.33}%)`;
});

carouselNextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= carouselImages.children.length) {
        currentIndex = 0;
    }
    carouselImages.style.transform = `translateX(-${currentIndex * 33.33}%)`;
});



sr.reveal('#testi- p', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('carousel', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
});

/*----------SECCION EMPRESAS------- */

sr.reveal('#empresass', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
});
sr.reveal('#empresas', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
});