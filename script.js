

//for responsive nav bar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-bar");
const navigationItems = document.querySelectorAll(".nav-bar a")

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

const header = document.querySelector('.header');
window.onscroll = function () {
  navEffect();

}

function navEffect() {
  if (document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20) {
    header.classList.add("effect");
  }
  else {
    header.classList.remove('effect');
  }

}

const cards = document.getElementsByClassName('card-slide');
var cardIndex = 1;

displayCard(cardIndex);

function changeCard(n) {
  displayCard(cardIndex += n);
}

function displayCard(n) {
  var i;

  if (n > cards.length) {
    cardIndex = 1;
  }
  if (n < 1) {
    cardIndex = cards.length;
  }

  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";

  }

  cards[cardIndex - 1].style.display = "block";
}


