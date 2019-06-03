const $heart = window.document.querySelector(".-heart");
$heart.addEventListener("click", handleClickActive);
function handleClickActive() {
  $heart.classList.toggle("-active");
}

/*if ($heart.classList.contains("-active")) {
    console.log("Desative o like");
    $heart.classList.remove("-active");
  } else {
    console.log("Ative o like");
    $heart.classList.add("-active");
  }*/

const $buttonCartSecond = window.document.querySelector(".-second");
$buttonCartSecond.addEventListener("click", handleClickCart);

function handleClickCart() {
  console.log("Produto Adcionado");
}
