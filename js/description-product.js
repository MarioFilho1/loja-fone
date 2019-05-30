const $addButonCart = window.document.querySelector(".action.-last");
$addButonCart.addEventListener("click", handleClickCart);

function handleClickCart() {
  $addButonCart.innerHTML = "Cesta-->(10)";
}
