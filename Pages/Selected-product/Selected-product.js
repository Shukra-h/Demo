const cartNumber = document.querySelector('.js-cart-num');
const signInBtn = document.querySelector('.js-sign-in');
const signUpBtn = document.querySelector('.js-sign-up');
const rightHeader = document.querySelector('.js-right-header');
const errorContainer = document.querySelector('.js-error-container');
const errorMessage = document.querySelector('.js-error-message');
const productCardImage = document.querySelector('.js-product-card-image');
const productCardName = document.querySelector('.js-product-card-name');
const productCardPrice = document.querySelector('.js-product-card-price');
const productRatingImage = document.querySelector('.js-rating-image');
const plusButton = document.querySelector('.js-plus-btn');
const minusButton = document.querySelector('.js-minus-btn');
const counterNum = document.querySelector('.js-product-counter-num');
const addToCartButton = document.querySelector('.js-add-to-cart-button');

let selectedItem;
products.forEach((item) => {
  if (item.id == searchId) {
    selectedItem = item;
  }
});
// console.log(selectedItem);

function fillInfo() {
  let imageSource;
  let ratingSource;
  if (searchId < 145) {
    imageSource = String(selectedItem.imageLocation).replace('../', '');
  } else {
    imageSource = String(selectedItem.imageLocation);
  }
  productCardImage.src = imageSource;
  // console.log('abcabc'.slice(3, undefined));
  productCardName.innerHTML = selectedItem.name;
  //Change currency unit
  changeCurrencyUnit(selectedItem);
  //Update rating stars
  ratingSource = `../../Resources/Images/ratings/rating-${String(
    selectedItem.rating.stars * 10
  ).padStart(2, '0')}.png`;
  productRatingImage.src = ratingSource;
}
fillInfo();

function changeCurrencyUnit(item) {
  //If the select element's value in the HTML file is naira it converts every price value to naira and vice versa
  if (currentCurrencyValue == 'naira') {
    productCardPrice.innerText = ` N${(item.priceKobo / 100).toFixed(2)}`;
  } else if (currentCurrencyValue == 'dollar') {
    productCardPrice.innerText = ` $${(item.priceCents / 100).toFixed(2)}`;
  }
}

//The add button for increasing the value of the quantity for the product
const quantityLimit = selectedItem.quantityLeft;

plusButton.addEventListener('click', () => {
  //If the quantity count is more than the quantity in the products.js file for the product it doesn't increment anymore
  if (Number(counterNum.innerText) >= quantityLimit) {
    return;
  }
  counterNum.innerText = Number(counterNum.innerText) + 1;
});

//The subrtact button for decreasing the value of the quantity for the product
minusButton.addEventListener('click', () => {
  //If the quantity count is less than or equal to 1, it doesn't decrement anymore
  if (Number(counterNum.innerText) <= 1) {
    return;
  }
  counterNum.innerText = Number(counterNum.innerText) - 1;
});

//Adds an event listener to each button, on button click the product gets added to the cart array in the products.js file
addToCartButton.addEventListener('click', (event) => {
  //If cart is empty, the product gets aded to the cart array
  if (cart == '') {
    // changes the cart number on the cart basket
    /*cartNumber.innerText =
      Number(cartNumber.innerText) + Number(counterNum[index].innerText);*/
    //I found an easier way to do it (moved below the push method)
    cartPusher(index);
    //The new cart increment way
    cartCount();
    //Saves the cart to local storage
    localStorage.setItem('cartArray', JSON.stringify(cart));
    resetCounter(index);
    // console.log(button.id);
    return;
  }
  //If a duplicate is detected the duplicate doesn't get added to the cart
  for (item of cart) {
    // console.log(item);
    if (item['id'] == selectedItem.id) {
      console.error('Item is already in cart');
      return;
    }
  }
  // changes the cart number on the cart basket
  /*cartNumber.innerText =
      Number(cartNumber.innerText) + Number(counterNum[index].innerText);*/
  //I found an easier way to do it(moved below the push method)
  cartPusher();
  //The new way to increment cart
  cartCount();
  //Saves the cart to local storage
  localStorage.setItem('cartArray', JSON.stringify(cart));
  resetCounter();
});

//Function to push items to cart
function cartPusher() {
  cart.push({
    id: selectedItem['id'],
    name: selectedItem['name'],
    category: selectedItem['category'],
    priceCents: selectedItem['priceCents'],
    priceKobo: selectedItem['priceKobo'],
    quantity: Number(counterNum.innerText),
  });
}

//Function to display the total number of items in the cart
function cartCount() {
  let count = 0;
  cart.forEach((item) => {
    count += item.quantity;
  });
  cartNumber.innerText = count;
}
cartCount();

//Clean up codes
function resetCounter() {
  counterNum.innerHTML = `<img src="../../Resources/svg/icons/checkmark.png" width="15px"> Added`;
  setTimeout(() => {
    counterNum.innerHTML = 1;
  }, 3000);
}
function updateAccount() {
  if (loginStatus == true) {
    signInBtn.style = 'display: none;';
    signUpBtn.style = 'display: none;';

    let elementA = document.createElement('a');
    elementA.href = '../../../Pages/Sign-in/Sign-in.html';

    let element = document.createElement('img');
    element.style =
      'width: 30px; height: 30px; border-radius: 30px; border: 1px solid black';
    elementA.appendChild(element);

    element.src = `${currentUser.profile}`;
    rightHeader.appendChild(elementA);
  }
}
updateAccount();
