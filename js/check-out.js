var ordertable = localStorage.getItem("itemsAddedToCart");
if (ordertable) {
  var orderTableProduct = JSON.parse(ordertable);
}

var productTable = document.getElementById("ordertable");
orderTableProduct.forEach((product) => {
  const listItem = document.createElement("li");

  listItem.classList.add("fw-normal");

  listItem.innerHTML = `
   <div class="product-item" id="product-item" data-product-id="${
     product.id
   }" style="display: flex; justify-content: space-between; align-items: center; padding-right:50px;">
     
      <div class="product-details" style="flex: 1; display: flex; align-items: center;">
        <img style="height:200px; margin-right: 20px;" class="primary-image" src="${
          product.primaryImage
        }" alt="${product.collection}"/>
        <div class="pi-text">
          <div class="catagory-name" style=" display:block;text-align:left;">${
            product.category
          }</div>
        </div>
      </div>

      
      <div class="product-actions" style="flex: 1; display: flex; flex-direction: column; align-items: baseline; text-align: center; padding-left:150px;">
        <div class="product-size" style="margin-bottom: 10px;">Size: ${
          product.size || ""
        }</div> 
        <div class="product-price" style="font-size: 15px; margin-bottom: 10px;">${
          product.price
        }</div>
        <div><button class="remove-btn" data-product-id="${
          product.id
        }" style="padding: 5px 10px;">Remove</button></div>
      </div>
    </div>
  `;

  productTable.appendChild(listItem);
});
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("remove-btn")) {
    const productId = parseInt(e.target.getAttribute("data-product-id"));
    const index = e.target.getAttribute("data-index");
    orderTableProduct.splice(index, 1);
    localStorage.setItem("itemsAddedToCart", JSON.stringify(orderTableProduct));
    e.target.closest("li").remove();
    updateCartCount();
    console.log("Item removed from cart");
  }
  updateTotalPrice();
});

function updateTotalPrice() {
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

// Retrieve the cart data from localStorage
