const productContainer = document.querySelector(".productsContainer");
const Api = "https://api.freeapi.app/api/v1/public/randomproducts";
async function fetchProducts() {
  try {
    const response = await fetch(Api);
    const fetchedProducts = await response.json();
    console.log(fetchedProducts.data.data);
    displayProductsOnUi(fetchedProducts.data.data);
    return fetchedProducts.data.data;
  } catch (error) {
    console.log(error);
  }
}
fetchProducts();

function displayProductsOnUi(receivedProducts) {
  productContainer.innerHTML = "";
  receivedProducts.forEach((product) => {
    console.log(receivedProducts);
    const productCardTemplate = `
      <div class="productCard">
         <div class="productImage">
           <img
             src="${product.images[0]}"
             class="productImg"
             alt="${product.title}"
           />
         </div>
         <div class="productDetails">
           <h4 class="productTitle">${product.title}</h4>
           <p class="clamped-text">${product.description}</p>
           <p class="productPrice">${product.price}</p>
           <button  class="addBtn">Add to Cart</button>
         </div>
       </div>
    `;
    productContainer.insertAdjacentHTML("beforeend", productCardTemplate);
  });
}

const addToCartBtn = document.querySelectorAll(".addBtn");
console.log(addToCartBtn);
addToCartBtn.map((button) => {
  console.log(button);
});
