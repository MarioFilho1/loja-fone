const $menu = document.querySelector(".menu");
const $content = $menu.querySelector(".content");
console.log($menu);
$menu.addEventListener("click", handleClickMenu);

function handleClickMenu() {
  $menu.classList.toggle("-active");
  $content.classList.toggle("-active");
  console.log("1");
}
