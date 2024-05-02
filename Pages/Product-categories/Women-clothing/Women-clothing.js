// console.log(products);

//Defined the HTML Elements in javaScript
const cartNumber = document.querySelector('.js-cart-num');
const signInBtn = document.querySelector('.js-sign-in');
const signUpBtn = document.querySelector('.js-sign-up');
const rightHeader = document.querySelector('.js-right-header');
const errorContainer = document.querySelector('.js-error-container');
const errorMessage = document.querySelector('.js-error-message');
const currencySelectElement = document.getElementById('currency-select');
const productCardImages = document.querySelectorAll('.js-product-card-image');
const productCardName = document.querySelectorAll('.js-product-card-name');
const productCardPrice = document.querySelectorAll('.js-product-card-price');
const productRatingImage = document.querySelectorAll('.js-rating-image');
const plusButton = document.querySelectorAll('.js-plus-btn');
const minusButton = document.querySelectorAll('.js-minus-btn');
const counterNum = document.querySelectorAll('.js-product-counter-num');
const addToCartButton = document.querySelectorAll('.js-add-to-cart-button');

//sets the currency value to the last chosen value
currencySelectElement.value = currentCurrencyValue;

//The cart array is in the main products.js page to make it accessible to all script.js files

//Retrieves an array of items with the category women-clothing from the products.js file
let womenClothing = products.filter((product, index) => {
  if (product.category === 'women-clothing') {
    return true;
  }
});
// console.log(womenClothing);
// console.log(productCardImages);

//A function that converts the currency of the items on the page to the items
function changeCurrencyUnit(item, index) {
  //If the select element's value in the HTML file is naira it converts every price value to naira and vice versa
  if (currencySelectElement.value == 'naira') {
    productCardPrice[index].innerText = ` N${(item.priceKobo / 100).toFixed(
      2
    )}`;
    currentCurrencyValue = currencySelectElement.value;
    localStorage.setItem('currencyValue', JSON.stringify(currentCurrencyValue));
  } else if (currencySelectElement.value == 'dollar') {
    productCardPrice[index].innerText = ` $${(item.priceCents / 100).toFixed(
      2
    )}`;
    currentCurrencyValue = currencySelectElement.value;
    localStorage.setItem('currencyValue', JSON.stringify(currentCurrencyValue));
  }
}

//Filled the page with the actual product data from the products.js file
womenClothing.forEach((item, index) => {
  // console.log(productCardImages[index].src);
  //Updates the image location
  productCardImages[index].src = item.imageLocation;
  //Updates the product name
  productCardName[index].innerText = item.name;
  //Calls the function to change the currency value based on the select element value
  changeCurrencyUnit(item, index);
  //Updates the rating stars
  productRatingImage[
    index
  ].src = `../../../Resources/Images/ratings/rating-${String(
    item.rating.stars * 10
  ).padStart(2, '0')}.png`;
  //Attaches the product id from each product to each add to cart button
  addToCartButton[index].id = womenClothing[index].id;
});

//Adds an event listener to the select element on the site settings to detect the change of the select element value to update the page prices
currencySelectElement.addEventListener('change', () => {
  womenClothing.forEach((item, index) => {
    changeCurrencyUnit(item, index);
  });
});

//The add button for increasing the value of the quantity for the product
plusButton.forEach((btn, index) => {
  const quantityLimit = womenClothing[index].quantityLeft;

  btn.addEventListener('click', () => {
    //If the quantity count is more than the quantity in the products.js file for the product it doesn't increment anymore
    if (Number(counterNum[index].innerText) >= quantityLimit) {
      return;
    }
    counterNum[index].innerText = Number(counterNum[index].innerText) + 1;
  });
});

//The subrtact button for decreasing the value of the quantity for the product
minusButton.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    //If the quantity count is less than or equal to 1, it doesn't decrement anymore
    if (Number(counterNum[index].innerText) <= 1) {
      return;
    }
    counterNum[index].innerText = Number(counterNum[index].innerText) - 1;
  });
});

//Adds an event listener to each button, on button click the product gets added to the cart array in the products.js file
addToCartButton.forEach((button, index) => {
  button.addEventListener('click', (event) => {
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
      if (item['id'] == button.id) {
        console.error('Item is already in cart❗');
        errorMessage.innerHTML = 'Item is already in cart❗';
        errorContainer.style = 'display: flex;';
        setTimeout(() => {
          errorContainer.style = 'display: none;';
          errorMessage.innerHTML = '';
        }, 3000);
        return;
      }
    }
    // changes the cart number on the cart basket
    /*cartNumber.innerText =
      Number(cartNumber.innerText) + Number(counterNum[index].innerText);*/
    //I found an easier way to do it(moved below the push method)
    cartPusher(index);
    //The new way to increment cart
    cartCount();
    //Saves the cart to local storage
    localStorage.setItem('cartArray', JSON.stringify(cart));
    resetCounter(index);
  });
});

//Function to push items to cart
function cartPusher(index) {
  cart.push({
    id: womenClothing[index]['id'],
    name: womenClothing[index]['name'],
    category: womenClothing[index]['category'],
    priceCents: womenClothing[index]['priceCents'],
    priceKobo: womenClothing[index]['priceKobo'],
    quantity: Number(counterNum[index].innerText),
    imageLocation: womenClothing[index]['imageLocation'],
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
function resetCounter(index) {
  counterNum[
    index
  ].innerHTML = `<img src="../../../Resources/svg/icons/checkmark.png" width="15px"> Added`;
  setTimeout(() => {
    counterNum[index].innerHTML = 1;
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

    element.src = `../${currentUser.profile}`;
    rightHeader.appendChild(elementA);
  }
}
updateAccount();
