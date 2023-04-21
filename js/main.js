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