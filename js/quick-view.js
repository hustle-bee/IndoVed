// get selected product
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product");

const selectedProduct = myProducts.filter(
  (product) => product.id == productId
)[0];

// create carousel indicator
const indicatorsContainer = document.getElementById("carousel-indicators");
const totalSlides = selectedProduct.imgs.length;

for (let i = 0; i < totalSlides; i++) {
  const indicatorButton = document.createElement("button");
  indicatorButton.type = "button";
  indicatorButton.setAttribute("data-bs-target", "#carouselExampleIndicators");
  indicatorButton.setAttribute("data-bs-slide-to", i);
  indicatorButton.setAttribute("aria-label", `Slide ${i + 1}`);

  if (i === 0) {
    indicatorButton.classList.add("active");
    indicatorButton.setAttribute("aria-current", "true");
  }

  indicatorsContainer.appendChild(indicatorButton);
}

// create image slides of product
const slides = document.getElementById("carousel-inner");
selectedProduct.imgs.map((img, index) => {
  const childSlide = document.createElement("div");
  childSlide.classList.add("carousel-item");
  if (index === 0) {
    childSlide.classList.add("active");
  }
  childSlide.innerHTML = `<img
                    src=${img}
                    class="d-block w-100"
                  />`;
  slides.appendChild(childSlide);
});
