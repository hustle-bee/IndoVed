function searchProducts() {
  const query = document.getElementById("searchbar-input").value;
  var searchStr = query.toLowerCase();
  const result = myProducts.filter((product) => {
    return (
      product.category.toLowerCase().includes(searchStr) ||
      product.collection.toLowerCase().includes(searchStr)
    );
  });
  console.log("result: ", result);
}
