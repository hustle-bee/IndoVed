function searchProducts() {
  const query = document.getElementById("searchbar-input").value;
  if (query) {
    document.getElementById("sections").style.display = "none";
    var searchStr = query.toLowerCase();
    const result = myProducts.filter((product) => {
      return (
        product.category.toLowerCase().includes(searchStr) ||
        product.collection.toLowerCase().includes(searchStr)
      );
    });
    console.log("result: ", result);
  } else {
    document.getElementById("sections").style.display = "block";
  }
}

const inputElement = document.getElementById("searchbar-input");

inputElement.addEventListener("input", function () {
  const inputValue = inputElement.value;
  if (!inputValue) searchProducts();
});
