const $search = document.querySelector("[type=search]");
const $searchIcon = document.querySelector(".icons");

$searchIcon.addEventListener("click", () => {
  $search.classList.toggle("-active");
  $searchIcon.classList.toggle("-active");
});
