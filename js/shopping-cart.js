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

orderTableProduct.forEach((product) => {
  const rowItem = document.createElement("tr");
  console.log(rowItem);
  rowItem.classList.add("fw-normal");
  rowItem.innerHTML = `
  <td >
   <img src="${product.primaryImage}" style="height:200px"   /></td>
    <td>
      <h5>${product.category}</h5>
    </td>
    <td>${product.collection}</td>
   <td >${product.price}</td>
   
  `;
  productTable.appendChild(rowItem);
});
