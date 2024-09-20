const $ = (el) => document.querySelector(el);
const $back = $(".back");
const $front = $(".front");
const $containerImg = $(".container-img");

function start() {
  $back.classList.add("active");
  $front.classList.add("active");
}

function end() {
  $back.classList.remove("active");
  $front.classList.remove("active");
}

$containerImg.addEventListener("mouseenter", start);
$containerImg.addEventListener("touchstart", start, { passive: true });

$containerImg.addEventListener("mouseleave", end);
$containerImg.addEventListener("touchend", end, { passive: true });
