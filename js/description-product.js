const $heart = window.document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

// $heart.addEventListener("click", handleClick);

// $stars.forEach(function($star) {
//   $star.addEventListener("click", handleClick);
//   console.log($star);
// });
// $stars[0].addEventListener("click", firstStar);
// $stars[$stars.length - 1].addEventListener("click", lastStar);
// $stars[1].addEventListener("click", middleStars);
// function firstStar() {
//   $stars.forEach(function($star) {
//     $star.classList.remove("-active");
//   });
//   this.classList.add("-active");
// }
// function lastStar() {
//   $stars.forEach(function($star) {
//     $star.classList.add("-active");
//   });
// }

$heart.addEventListener("click", handleClickHeart);

function handleClickHeart() {
  $heart.classList.toggle("-active");
}

$stars.forEach(function($star, index) {
  $star.addEventListener("click", function() {
    handleClickStar(index);
    console.log("star: " + $star + "key: " + key);
  });
});

function handleClickStar(index) {
  $stars.forEach(function($star, $key) {
    $star.classList.remove("-active");
    if ($key <= index) {
      console.log("key: " + $key + " index: " + index);
      $stars.forEach(function($star) {
        $star.classList.add("-active");
      });
    }
    console.log("chave: " + $key);
  });
}
