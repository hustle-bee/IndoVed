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

const cartCount = document.getElementById("badge-count-icon");
if (itemsAddedToCart.length) {
  cartCount.style.display = "flex";
} else {
  cartCount.style.display = "none";
}

myProducts.forEach((product) => {
  const productRow = document.getElementById("product-row");
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-lg-4", "col-sm-6", "product-grid");

  colDiv.dataset.productId = product.id;

  colDiv.innerHTML = `
    <div class="product-item" id="product-item" data-product-id="${product.id}">
      <div class="pi-pic">
        <img class="primary-image" src="${product.primaryImage} ${product.collection}"/>
        <div class="sale pp-sale"></div>
        <div onclick= addItemsToWishList(event) class="icon"><i class="icon_heart_alt icon-heart-background" ></i></div>
        <ul>
          <li class="quick-view"><a href="quick-view.html?product=${product.id}">+ Quick View</a></li>
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
  productRow.appendChild(colDiv);
});

function addItemsToCart(event) {
  event.preventDefault();

  const clickedElement = event.currentTarget;

  const productId = clickedElement.closest(".product-item").dataset.productId;
  const selectedProduct = myProducts.find((product) => product.id == productId);
  if (selectedProduct) {
    itemsAddedToCart.push(selectedProduct);
    localStorage.setItem("itemsAddedToCart", JSON.stringify(itemsAddedToCart));
    // let cart = localStorage.getItem("itemsAddedToCart");
    // if (cart) {
    //   let productItem = JSON.parse(cart);
    //   return cart;
    // }
  }

  if (itemsAddedToCart.length) {
    cartCount.style.display = "flex";
    cartCount.innerHTML = itemsAddedToCart.length;
  }
  const cartItem = localStorage.getItem("itemsAddedToCart");
  if (cartItem) {
    const storeItem = JSON.parse(cartItem);
    cartCount.innerHTML = storeItem.length;
  }
}

/* Add item to wishlist
 */
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

function addItemsToWishList(event) {
  event.preventDefault();

  const clickedElement = event.currentTarget;
  const productId = clickedElement.closest(".product-item").dataset.productId;
  const selectedProduct = myProducts.find((product) => product.id == productId);
  if (selectedProduct) {
    itemsAddedToWishList.push(selectedProduct);
  }
  localStorage.setItem(
    "itemsAddedToWishList",
    JSON.stringify(itemsAddedToWishList)
  );

  if (itemsAddedToWishList.length) {
    wishListCount.style.display = "flex";
  }
  wishListCount.innerHTML = itemsAddedToWishList.length;
}

function filterCollection(selectedValue) {
  const filterProducts = myProducts.filter((element) => {
    return element.collection == selectedValue.toUpperCase();
  });

  if (filterProducts.length) {
    const productRow = document.getElementById("product-row");
    productRow.innerHTML = "";
    filterProducts.forEach((product) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-lg-4", "col-sm-6", "product-grid");

      colDiv.dataset.productId = product.id;

      colDiv.innerHTML = `
    <div class="product-item" id="product-item" data-product-id="${product.id}">
      <div class="pi-pic">
        <img class="primary-image" src="${product.primaryImage} ${product.collection}"/>
        <div class="sale pp-sale"></div>
        <div onclick= addItemsToWishList(event) class="icon"><i class="icon_heart_alt icon-heart-background" ></i></div>
        <ul>
          <li class="quick-view"><a href="quick-view.html?product=${product.id}">+ Quick View</a></li>
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
      productRow.appendChild(colDiv);
    });
  }
}

function filterCategory(selectedValue) {
  let allProducts = [...myProducts];
  let filterProducts = myProducts.filter((element) => {
    return element.category == selectedValue;
  });
  if (filterProducts.length) {
    const productRow = document.getElementById("product-row");
    productRow.innerHTML = "";
    filterProducts.forEach((product) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-lg-4", "col-sm-6", "product-grid");

      colDiv.dataset.productId = product.id;

      colDiv.innerHTML = `
    <div class="product-item" id="product-item" data-product-id="${product.id}">
      <div class="pi-pic">
        <img class="primary-image" src="${product.primaryImage} ${product.collection}"/>
        <div class="sale pp-sale"></div>
        <div onclick= addItemsToWishList(event) class="icon"><i class="icon_heart_alt icon-heart-background" ></i></div>
        <ul>
          <li class="quick-view"><a href="quick-view.html?product=${product.id}">+ Quick View</a></li>
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

      productRow.appendChild(colDiv);
    });
    allProducts = filterProducts;
  }
}

// collection filter on load
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const collectionFilter = getQueryParam("collection");

if (collectionFilter) {
  filterCollection(collectionFilter);
}

// set it this block at end of the file to remove all params after all operations done
window.addEventListener("load", function () {
  if (window.location.search.length > 0) {
    const urlWithoutParams =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;

    window.history.replaceState(null, "", urlWithoutParams);
  }
});
