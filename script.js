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

    document.getElementById("lightbox")
.addEventListener("click", function(e){

    if(e.target.id==="lightbox"){
        fecharGaleria();
    }

});
const galerias = [
  [
    "./imagens/Caso1Original.png",
    "./imagens/Caso1Realizado.png"
  ],
  [
    "./imagens/caso2antes.jpeg",
    "./imagens/caso2depois.jpeg"
  ],
  [
    "./imagens/caso3-antes.jpg",
    "./imagens/caso3-depois.jpg"
  ]
];

let galeriaAtual = 0;
let fotoAtual = 0;

window.abrirGaleria = function(index) {
  galeriaAtual = index;
  fotoAtual = 0;

  document.getElementById("fotoLightbox").src = galerias[galeriaAtual][fotoAtual];
  document.getElementById("lightbox").classList.add("ativo");
};

window.fecharGaleria = function() {
  document.getElementById("lightbox").classList.remove("ativo");
};

window.trocarFoto = function(direcao) {
  fotoAtual += direcao;

  if (fotoAtual < 0) {
    fotoAtual = galerias[galeriaAtual].length - 1;
  }

  if (fotoAtual >= galerias[galeriaAtual].length) {
    fotoAtual = 0;
  }

  document.getElementById("fotoLightbox").src = galerias[galeriaAtual][fotoAtual];
};

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