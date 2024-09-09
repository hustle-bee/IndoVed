//add to cart count

let itemsAddedToCart = [];
const storeValue = localStorage.getItem("itemsAddedToCart");
if (storeValue) {
  const storeItemValue = JSON.parse(storeValue);
  if (storeItemValue.length) {
    itemsAddedToCart = storeItemValue;
  } else {
    itemsAddedToCart = [];
  }
}

const cartButton = document.getElementById("badge-count-icon");
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

//wishlist count

let itemsAddedToWishList = [];
let wishlistValue = localStorage.getItem("itemsAddedToWishList");
if (wishlistValue) {
  let wishlistValueItem = JSON.parse(wishlistValue);
  if (wishlistValueItem.length) {
    itemsAddedToWishList = wishlistValueItem;
  } else {
    itemsAddedToWishList = [];
  }
}

const wishlistbtn = document.querySelector("#wishlist-count-icon");
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
