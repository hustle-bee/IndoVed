let itemsAddedToCart = [];
const productRow = document.getElementById('product-row');
const cartCount = document.getElementById('badge-count-icon');
if (itemsAddedToCart.length) {
  cartCount.style.display = 'flex';
}
else {
  cartCount.style.display = 'none';

}

myProducts.forEach(product => {
  const colDiv = document.createElement('div');
  colDiv.classList.add('col-lg-4', 'col-sm-6', 'product-grid');

  colDiv.dataset.productId = product.id;

  colDiv.innerHTML = `
    <div class="product-item" id="product-item" data-product-id="${product.id}">
      <div class="pi-pic">
        <img class="primary-image" src="${product.primaryImage}" alt="${product.collection}"/>
        <div class="sale pp-sale"></div>
        <div class="icon"><i class="icon_heart_alt"></i></div>
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
  const productId = clickedElement.closest('.product-item').dataset.productId;
  const selectedProduct = myProducts.find((product) => product.id == productId);
  if (selectedProduct) {
    itemsAddedToCart.push(selectedProduct)
  }
  if (itemsAddedToCart.length) {
    cartCount.style.display = 'flex';

  }
  cartCount.innerHTML = itemsAddedToCart.length;
}


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
