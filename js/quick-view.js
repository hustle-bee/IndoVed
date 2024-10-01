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
          <li onclick= addItemsToCart(event) class="w-icon active"><a><i class="icon_bag_alt"></i></a></li>
          <li class="quick-view"><a href="quick-view.html">+ Quick View</a></li>
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
