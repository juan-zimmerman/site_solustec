document.addEventListener('DOMContentLoaded', () => {

    // ==========================
    // MENU MOBILE
    // ==========================

    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');

            const menuAberto = menu.classList.contains('active');
            toggle.setAttribute('aria-expanded', menuAberto);
        });
    }


    // ==========================
    // GALERIA DOS CASOS REAIS
    // ==========================

    const galerias = [
        [
            './imagens/Caso1Original.png',
            './imagens/Caso1Realizado.png'
        ],
        [
            './imagens/caso2antes.jpeg',
            './imagens/caso2depois.jpeg'
        ],
        [
            './imagens/caso3-antes.jpg',
            './imagens/caso3-depois.jpg'
        ]
    ];

    let galeriaAtual = 0;
    let fotoAtual = 0;

    window.abrirGaleria = function(index) {
        const lightbox = document.getElementById('lightbox');
        const fotoLightbox = document.getElementById('fotoLightbox');

        if (!lightbox || !fotoLightbox) return;
        if (!galerias[index]) return;

        galeriaAtual = index;
        fotoAtual = 0;

        fotoLightbox.src = galerias[galeriaAtual][fotoAtual];
        lightbox.classList.add('ativo');
        document.body.classList.add('sem-scroll');
    };

    window.fecharGaleria = function() {
        const lightbox = document.getElementById('lightbox');

        if (!lightbox) return;

        lightbox.classList.remove('ativo');
        document.body.classList.remove('sem-scroll');
    };

    window.trocarFoto = function(direcao) {
        const fotoLightbox = document.getElementById('fotoLightbox');

        if (!fotoLightbox) return;
        if (!galerias[galeriaAtual]) return;

        fotoAtual += direcao;

        if (fotoAtual < 0) {
            fotoAtual = galerias[galeriaAtual].length - 1;
        }

        if (fotoAtual >= galerias[galeriaAtual].length) {
            fotoAtual = 0;
        }

        fotoLightbox.src = galerias[galeriaAtual][fotoAtual];
    };

    const lightbox = document.getElementById('lightbox');

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                fecharGaleria();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        const lightboxAtivo = document.querySelector('.lightbox.ativo');

        if (!lightboxAtivo) return;

        if (e.key === 'Escape') fecharGaleria();
        if (e.key === 'ArrowLeft') trocarFoto(-1);
        if (e.key === 'ArrowRight') trocarFoto(1);
    });


    // ==========================
    // ANIMAÇÃO AO SCROLL
    // ==========================

    const elementos = document.querySelectorAll('.reveal');

    function revelarElementos() {
        elementos.forEach((elemento) => {
            const posicao = elemento.getBoundingClientRect().top;
            const alturaTela = window.innerHeight;

            if (posicao < alturaTela - 100) {
                elemento.classList.add('ativo');
            }
        });
    }

    window.addEventListener('scroll', revelarElementos);
    window.addEventListener('load', revelarElementos);

    revelarElementos();

});
