const $heart = window.document.querySelector(".-heart");
$heart.addEventListener("click", handleClick);
function handleClick() {
  console.log("Gostei");
}

const $addButonCart = window.document.querySelector(".-second");
$addButonCart.addEventListener("click", handleClickCart);

function handleClickCart() {
  alert("Produto Adcionado ao Carrinho");
}
