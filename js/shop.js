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
