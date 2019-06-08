const $heart = window.document.querySelector(".-heart");
$heart.addEventListener("click", handleClickActive);
function handleClickActive() {
  $heart.classList.toggle("-active");
}

let verifica1 = 1;
let verifica2 = 1;
let verifica3 = 1;
let verifica4 = 1;
let verifica5 = 1;

var $star1 = document.getElementById("-star1");
var $star2 = document.getElementById("-star2");
var $star3 = document.getElementById("-star3");
var $star4 = document.getElementById("-star4");
var $star5 = document.getElementById("-star5");
$star1.addEventListener("click", handleClickStar1);
$star2.addEventListener("click", handleClickStar2);
$star3.addEventListener("click", handleClickStar3);
$star4.addEventListener("click", handleClickStar4);
$star5.addEventListener("click", handleClickStar5);

function handleClickStar1() {
  if (verifica1 == 1) {
    document.getElementById($star1);
    $star1.src = "img/star_active.png";
    $star2.src = "img/star.png";
    $star3.src = "img/star.png";
    $star4.src = "img/star.png";
    $star5.src = "img/star.png";
  }
}
function handleClickStar2() {
  if (verifica2 == 1) {
    document.getElementById($star2);
    $star1.src = "img/star_active.png";
    $star2.src = "img/star_active.png";
    $star3.src = "img/star.png";
    $star4.src = "img/star.png";
    $star5.src = "img/star.png";
  }
}
function handleClickStar3() {
  if (verifica3 == 1) {
    document.getElementById($star3);
    $star1.src = "img/star_active.png";
    $star2.src = "img/star_active.png";
    $star3.src = "img/star_active.png";
    $star4.src = "img/star.png";
    $star5.src = "img/star.png";
  }
}
function handleClickStar4() {
  if (verifica4 == 1) {
    document.getElementById($star4);
    $star1.src = "img/star_active.png";
    $star2.src = "img/star_active.png";
    $star3.src = "img/star_active.png";
    $star4.src = "img/star_active.png";
    $star5.src = "img/star.png";
  }
}
function handleClickStar5() {
  if (verifica5 == 1) {
    document.getElementById($star5);
    $star1.src = "img/star_active.png";
    $star2.src = "img/star_active.png";
    $star3.src = "img/star_active.png";
    $star4.src = "img/star_active.png";
    $star5.src = "img/star_active.png";
  }
}

const $buttonCartSecond = window.document.querySelector(".-second");
$buttonCartSecond.addEventListener("click", handleClickCart);

function handleClickCart() {
  console.log("Produto Adcionado");
}
