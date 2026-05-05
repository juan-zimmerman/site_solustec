document.addEventListener('DOMContentLoaded', () => {

    // MENU MOBILE
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

    // ANIMAÇÃO AO SCROLL
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

});