const $menu = document.querySelector(".menu");
const $content = $menu.querySelector(".content");
$menu.addEventListener("click", handleClickMenu);

function handleClickMenu() {
  $menu.classList.toggle("-active");
  $content.classList.toggle("-active");
}
