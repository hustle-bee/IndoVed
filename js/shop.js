let itemsAddedToCart = [];
const storeValue = localStorage.getItem("itemsAddedToCart");
console.log(storeValue);
if (storeValue) {
  const storeItemValue = JSON.parse(storeValue);
  console.log(storeItemValue);
  if (storeItemValue.length) {
    itemsAddedToCart = storeItemValue;
  } else {
    itemsAddedToCart = [];
  }
}

const cartButton = document.getElementById("badge-count-icon");
console.log(cartButton);
if (cartButton) {
  cartButton.innerHTML = itemsAddedToCart.length;
} else {
  itemsAddedToCart = [];
}

const productRow = document.getElementById("product-row");
const cartCount = document.getElementById("badge-count-icon");
if (itemsAddedToCart.length) {
  cartCount.style.display = "flex";
} else {
  cartCount.style.display = "none";
}

myProducts.forEach((product) => {
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-lg-4", "col-sm-6", "product-grid");

  colDiv.dataset.productId = product.id;

  colDiv.innerHTML = `
    <div class="product-item" id="product-item" data-product-id="${product.id}">
      <div class="pi-pic">
        <img class="primary-image" src="${product.primaryImage}" alt="${product.collection}"/>
        <div class="sale pp-sale"></div>
        <div onclick= addItemsToWishList(event) class="icon"><i class="icon_heart_alt"></i></div>
        <ul>
          <li onclick= addItemsToCart(event) class="w-icon active"><a><i class="icon_bag_alt"></i></a></li>
          <li class="quick-view"><a href="#">+ Quick View</a></li>
          <li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>
        </ul>
      </div>
      <div class="pi-text">
        <div class="catagory-name">${product.category}</div>
        <a href="#"><h5 class="product-name">${product.collection}</h5></a>
        <div class="product-price">${product.price}</div>
      </div>
    </div>
  `;
  // item.setAttribute('data-product-id', product.id);
  // Append the new product item to the row
  productRow.appendChild(colDiv);
});

function addItemsToCart(event) {
  // Prevent default action if necessary
  event.preventDefault();

  // Get the clicked element
  const clickedElement = event.currentTarget;

  // Retrieve the product ID from the data attribute
  const productId = clickedElement.closest(".product-item").dataset.productId;
  const selectedProduct = myProducts.find((product) => product.id == productId);
  if (selectedProduct) {
    itemsAddedToCart.push(selectedProduct);
    //store add-items-to-cart in local storage
    localStorage.setItem("itemsAddedToCart", JSON.stringify(itemsAddedToCart));
  }

  if (itemsAddedToCart.length) {
    cartCount.style.display = "flex";
  }
  const cartItem = localStorage.getItem("itemsAddedToCart");
  if (cartItem) {
    const storeItem = JSON.parse(cartItem);
    console.log(storeItem);
    cartCount.innerHTML = storeItem.length;
  }
}

/* Add item to wishlist
 */
let itemsAddedToWishList = [];
let wishlistValue = localStorage.getItem("itemsAddedToWishList");
console.log(wishlistValue);
if (wishlistValue) {
  let wishlistValueItem = JSON.parse(wishlistValue);
  console.log(wishlistValueItem);
  if (wishlistValueItem.length) {
    itemsAddedToWishList = wishlistValueItem;
  } else {
    itemsAddedToWishList = [];
  }
}
const wishlistbtn = document.querySelector("#wishlist-count-icon");
console.log(wishlistbtn);
if (wishlistbtn) {
  wishlistbtn.innerHTML = itemsAddedToWishList.length;
} else {
  itemsAddedToWishList = [];
}

const wishListCount = document.getElementById("wishlist-count-icon");

if (itemsAddedToWishList.length) {
  wishListCount.style.display = "flex";
} else {
  wishListCount.style.display = "none";
}

function addItemsToWishList(event) {
  console.log(event);
  // Prevent default action if necessary
  event.preventDefault();

  // Get the clicked element
  const clickedElement = event.currentTarget;
  // Retrieve the product ID from the data attribute
  const productId = clickedElement.closest(".product-item").dataset.productId;
  console.log(productId);
  const selectedProduct = myProducts.find((product) => product.id == productId);
  console.log(selectedProduct);
  if (selectedProduct) {
    itemsAddedToWishList.push(selectedProduct);
  }
  //store add-items-to-cart in local storage
  localStorage.setItem(
    "itemsAddedToWishList",
    JSON.stringify(itemsAddedToWishList)
  );

  if (itemsAddedToWishList.length) {
    wishListCount.style.display = "flex";
  }
  wishListCount.innerHTML = itemsAddedToWishList.length;
}

//filter the collection
function filterCollection(selectedValue) {
  const filterProducts = myProducts.filter((element) => {
    return element.collection == selectedValue.toUpperCase();
  });

  console.log("filterProducts", filterProducts);
  if (filterProducts.length) {
    const productRow = document.getElementById("product-row");
    console.log("productRow", productRow);
    productRow.innerHTML = "";
    myProducts = filterProducts;
    console.log("myProducts", myProducts);
    filterProducts.forEach((product) => {
      const singleProduct = `
      <div class="col-lg-4 col-sm-6">
                  <div class="product-item">
                    <div class="pi-pic">
                      <img class="primary-image" src="${product.primaryImage}" alt="">
                      <div class="sale pp-sale"></div>
                      <div class="icon">
                        <i class="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li class="w-icon active">
                          <a href="#"><i class="icon_bag_alt"></i></a>
                        </li>
                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                        <li class="w-icon">
                          <a href="#"><i class="fa fa-random"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">${product.category}</div>
                      <a href="#">
                        <h5 class="product-name">${product.collection}</h5>
                      </a>
                      <div class="product-price">${product.price}</div>
                    </div>
                  </div>
                </div>`;

      productRow.insertAdjacentHTML("beforeend", singleProduct);
    });
  }
}

function filterCategory(selectedValue) {
  let allProducts = [...myProducts];
  let filterProducts = myProducts.filter((element) => {
    return element.category == selectedValue;
  });
  console.log("filterProducts", filterProducts);
  if (filterProducts.length) {
    const productRow = document.getElementById("product-row");
    console.log("productRow", productRow);
    productRow.innerHTML = "";
    //myProducts = filterProducts;
    console.log("myProducts", myProducts);
    filterProducts.forEach((product) => {
      const singleProductCategory = `
      <div class="col-lg-4 col-sm-6">
                  <div class="product-item">
                    <div class="pi-pic">
                      <img class="primary-image" src="${product.primaryImage}" alt="">
                      <div class="sale pp-sale"></div>
                      <div class="icon">
                        <i class="icon_heart_alt"></i>
                      </div>
                      <ul>
                        <li class="w-icon active">
                          <a href="#"><i class="icon_bag_alt"></i></a>
                        </li>
                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                        <li class="w-icon">
                          <a href="#"><i class="fa fa-random"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">${product.category}</div>
                      <a href="#">
                        <h5 class="product-name">${product.collection}</h5>
                      </a>
                      <div class="product-price">${product.price}</div>
                    </div>
                  </div>
                </div>`;

      productRow.insertAdjacentHTML("beforeend", singleProductCategory);
    });
    allProducts = filterProducts;
  }
}
//add-to-cart
var categoryName = document.querySelectorAll(".catagory-name");
var cost = document.querySelectorAll(".product-price");
var image = document.querySelectorAll(".primary-image");
var collectionName = document.querySelectorAll(".product-name");
const cart = [];
const addToCart = () => {
  for (var i = 0; i < 1; i++) {
    cart.push(categoryName[i].innerText);
    cart.push(cost[i].innerText);
    cart.push(image[i].src);
    cart.push(collectionName[i].innerHTML);
  }
  console.log(cart);
};
//update cart-count
function updateCartCount() {
  let cartCountElement = document.querySelector(".icon_bag_alt");
  cartCountElement.textContent = cart.length;
  return cart.length;
}
console.log(updateCartCount());

//placeholder search
function filterProducts() {
  var input, filter, productList, products, productName, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  productList = document.querySelector(".product-list");
  products = productList.getElementsByClassName("product-item");

  for (i = 0; i < products.length; i++) {
    productName = products[i].getElementsByClassName("product-name")[0];
    txtValue = productName.textContent || productName.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      products[i].parentElement.style.display = "";
    } else {
      products[i].parentElement.style.display = "none";
    }
  }
}

//add-to-wishlist
var categoryName = document.querySelectorAll(".catagory-name");
var cost = document.querySelectorAll(".product-price");
var image = document.querySelectorAll(".primary-image");
var collectionName = document.querySelectorAll(".product-name");
const wishlist = [];
const addToWishList = () => {
  for (var i = 0; i < 1; i++) {
    wishlist.push(categoryName[i].innerText);
    wishlist.push(cost[i].innerText);
    wishlist.push(image[i].src);
    wishlist.push(collectionName[i].innerHTML);
  }
  console.log(wishlist);
};

//update wishlist-count
function updateWishListCount() {
  const wishListCountElement = document.querySelector(".icon_heart_alt");
  wishListCountElement.textContent = wishlist.length;
  return wishlist.length;
}

//change wishlist icon colour
const button = document.querySelector(".icon .icon_heart_alt");
button.addEventListener("click", () => {
  button.style.color = "red";
});
