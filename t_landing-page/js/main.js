// window.addEventListener("scroll", function () {
//   if (window.pageYOffset >= 200) {
//     document.querySelector("nav").classList.add("nav-fixed");
//   } else {
//     document.querySelector("nav").classList.remove("nav-fixed");
//   }
// });

// CLICK NO MENU HAMBURGUER PARA ABRIR MODAL

// adiciona evento listner ao menu hamburguer e chama a função que adiciona a class is open ao menu list
const getMenuHamburguer = document.getElementById("menu-hamburguer");
const getMenuList = document.getElementById("nav-menu-list");
getMenuHamburguer.addEventListener("click", () => {
  getMenuList.classList.toggle("is-open");
  getMenuHamburguer.classList.toggle("is-active");
});

// busca os botoes de signin e signup
const btnSignIn = document.getElementById("btn-signin");
const btnSignUp = document.getElementById("btn-signup");

// condição para tamanho do ecra
if (window.matchMedia("(max-width: 599px)").matches) {
  // cria os elementos <li> e adiciona a <ul> chamada pelo ID no getMenuHamburguer
  const createItemList1 = document.createElement("li");
  const createItemList2 = document.createElement("li");
  getMenuList.append(createItemList1, createItemList2);

  // adiciona cada botao, mencionado anteriormente, dentro de uma li
  createItemList1.append(btnSignIn);
  createItemList2.append(btnSignUp);
} else {
}

// CAROUSSEL ARTICLES, CARD INFO

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 6,
  loop: true,
  grabCursor: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    1100: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
