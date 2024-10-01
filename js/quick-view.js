const indicatorsContainer = document.getElementById("carousel-indicators");
const totalSlides = myProducts[0].imgs.length;

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

const slides = document.getElementById("carousel-inner");
myProducts[0].imgs.map((img, index) => {
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
