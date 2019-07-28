const $search = document.querySelector("[type=search]");
const $searchIcon = document.querySelector(".icon-search");

$searchIcon.addEventListener("click", () => {
  $search.classList.toggle("-active");
  $searchIcon.classList.toggle("-active");
});
