// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  let finalPrice = price * quantity;
  subtotal.innerHTML = finalPrice;
  return finalPrice = subtotal;
}




function calculateAll() {
// ITERATION 2
  const manyProduct = document.querySelectorAll('.product')
  for (let i = 0; i < manyProduct.length; i++){
  updateSubtotal(manyProduct[i]);
}

// ITERATION 3
  let sum = 0;
  let finalSubtotal = document.querySelectorAll('.subtotal span')
  for (let i = 0; i < finalSubtotal.length; i++){
    sum += Number((finalSubtotal[i].innerText))
  }
  let finalPrice = document.querySelector('h2 span');
  finalPrice.innerHTML = String(sum);
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let remove = event.querySelector("btn btn-remove");
  console.log(remove);
  return remove;
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
