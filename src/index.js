// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span") 
  const quantity = product.querySelector(".quantity input")
  let subTotal = Number(price.innerText) * quantity.value
  product.querySelector(".subtotal span").innerText = subTotal  //+ is a short hand for converting to string. same as Number()  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);


  // ITERATION 2
  document.querySelectorAll('.product').forEach((oneProduct) => {
    updateSubtotal(oneProduct);
  });

  // ITERATION 3
  let subTotal = 0
  
  document.querySelectorAll(".subtotal span").forEach((oneProduct) => {
    subTotal += Number(oneProduct.innerText)
  })

  document.querySelector("#total-value span").innerText = subTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

//event clicking the button starts here
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductbBtn = document.getElementById('remove');
  removeProductbBtn.addEventListener('click', removeProduct(Event));  

  //... your code goes here
});
