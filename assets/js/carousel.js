let index = 0;
const images = document.querySelectorAll(".carousel-image");

function rotateImages() {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}

setInterval(rotateImages, 4000);

