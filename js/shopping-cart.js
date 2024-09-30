var ordertable = localStorage.getItem("itemsAddedToWishList");
console.log(ordertable);
if (ordertable) {
  var orderTableProduct = JSON.parse(ordertable);
}
console.log(orderTableProduct);

var productTable = document
  .getElementsByClassName("cart-table")[0]
  .getElementsByTagName("tbody")[0];
console.log(productTable);

orderTableProduct.forEach((product, index) => {
  const rowItem = document.createElement("tr");
  console.log(rowItem);
  rowItem.classList.add("fw-normal");
  rowItem.innerHTML = `
    <td><img src="${product.primaryImage}" style="height:200px" /></td>
    <td><h5>${product.category}</h5></td>
    <td>${product.collection}</td>
    <td>${product.price}</td>
    <td><button class="remove-btn" style="display: block;" data-index="${index}">Remove</button></td>
  `;
  console.log(rowItem.innerHTML);
  productTable.appendChild(rowItem);
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("remove-btn")) {
    const index = e.target.getAttribute("data-index");
    orderTableProduct.splice(index, 1);
    localStorage.setItem(
      "itemsAddedToWishList",
      JSON.stringify(orderTableProduct)
    );
    e.target.parentElement.parentElement.remove();
    console.log("Item removed from cart");
  }
});

if (orderTableProduct) {
  let total = 0;
  orderTableProduct.forEach((product) => {
    let price = parseInt(product.price.replace("RS.", ""));
    total += price;
  });
  document.getElementsByClassName(
    "cart-total"
  ).textContent = `Total RS: ${total}`;
}
