const primaryImage = document.getElementsByClassName("primary-image");

const category = document.getElementsByClassName("catagory-name");

const price = document.getElementsByClassName("product-price");

const collection = document.getElementsByClassName("product-name");

for (let i = 0; i < myProducts.length; i++) {
  let imageObj = primaryImage[i];
  imageObj.src = myProducts[i].primaryImage;

  let categoryObj = category[i];
  categoryObj.innerText = myProducts[i].category;

  let priceObj = price[i];
  priceObj.innerText = myProducts[i].price;

  let collectionObj = collection[i];

  collectionObj.innerText = myProducts[i].collection;
}

function primaryImageFunction() {
  const primaryImage = document.getElementsByClassName("primary-image");

  const category = document.getElementsByClassName("catagory-name");

  const price = document.getElementsByClassName("product-price");

  const collection = document.getElementsByClassName("product-name");

  for (let i = 9; i < myProducts.length; i++) {
    let imageObj = primaryImage[i];
    imageObj.src = myProducts[i].primaryImage;

    let categoryObj = category[i];
    categoryObj.innerText = myProducts[i].category;

    let priceObj = price[i];
    priceObj.innerText = myProducts[i].price;

    let collectionObj = collection[i];

    collectionObj.innerText = myProducts[i].collection;
  }
}

function filterCollection(selectedValue) {
  const filterProducts = myProducts.filter((element) => {
    return element.collection == selectedValue.toUpperCase();
  });
  //myProducts = [];
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
