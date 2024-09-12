var ordertable = localStorage.getItem("itemsAddedToCart");
if (ordertable) {
  var orderTableProduct = JSON.parse(ordertable);
}

var productTable = document.getElementById("ordertable");
orderTableProduct.forEach((product) => {
  const listItem = document.createElement("li");

  listItem.classList.add("fw-normal");

  listItem.innerHTML = `
    <div class="product-item" id="product-item" data-product-id="${product.id}">
             <img style="height:200px" class="primary-image" src="${product.primaryImage}" alt="${product.collection}"/>

      <div class="pi-text" style="display:flex; justify-content:space-between; align-items:center;" >
        <div class="catagory-name" style=" display:block;text-align:left;padding:5px; margin:left; ">${product.category}</div>
        <div class="product-price" style=" text-align:right; font-size:15px ;">${product.price}</div>
      </div>
    </div>
  `;
  productTable.appendChild(listItem);
});

if (orderTableProduct) {
  let total = 0;
  orderTableProduct.forEach((product) => {
    let price = parseInt(product.price.replace("RS.", ""));
    total += price;
  });
  document.getElementById("total-price").textContent = `Total RS: ${total}`;
}

// order placed pop up
const openPopupBtn = document.getElementById("openPopupBtn");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

openPopupBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopupBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  popup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

// order place failed pop up
const openOrderFailedPopupBtn = document.getElementById(
  "openOrderFailedPopupBtn"
);
const orderPlaceFailedPopup = document.getElementById("orderPlaceFailedPopup");
const closeOrderFailedPopupBtn = document.getElementById(
  "closeOrderFailedPopupBtn"
);

openOrderFailedPopupBtn.addEventListener("click", () => {
  orderPlaceFailedPopup.style.display = "flex";
});

closeOrderFailedPopupBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  orderPlaceFailedPopup.style.display = "none";
});

function closeOrderFailedPopup(event) {
  event.stopPropagation();
  orderPlaceFailedPopup.style.display = "none";
}

window.addEventListener("click", (event) => {
  if (event.target === orderPlaceFailedPopup) {
    orderPlaceFailedPopup.style.display = "none";
  }
});
