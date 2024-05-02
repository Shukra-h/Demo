//Defined the HTML Elements in javaScript
const cartNumber = document.querySelector('.js-cart-num');
const signInBtn = document.querySelector('.js-sign-in');
const signUpBtn = document.querySelector('.js-sign-up');
const rightHeader = document.querySelector('.js-right-header');
const errorContainer = document.querySelector('.js-error-container');
const errorMessage = document.querySelector('.js-error-message');
let emailInput = document.getElementById('js-email');
let passwordInput = document.getElementById('js-password');
let signInButton = document.querySelector('.js-sign-in-button');
let forgotPasswordText = document.querySelector('.js-forgot-password');
const inputContainer = document.querySelector('.js-sign-in-input-container');
const currencySelectElement = document.getElementById('currency-select');
currencySelectElement.value = currentCurrencyValue;

//A function that converts the currency of the items on the page to the items
function changeCurrencyUnit() {
  //If the select element's value in the HTML file is naira it converts every price value to naira and vice versa
  if (currencySelectElement.value == 'naira') {
    currentCurrencyValue = currencySelectElement.value;
    localStorage.setItem('currencyValue', JSON.stringify(currentCurrencyValue));
  } else if (currencySelectElement.value == 'dollar') {
    currentCurrencyValue = currencySelectElement.value;
    localStorage.setItem('currencyValue', JSON.stringify(currentCurrencyValue));
  }
}

currencySelectElement.addEventListener('change', () => {
  changeCurrencyUnit();
});

//Function to display the total number of items in the cart
function cartCount() {
  let count = 0;
  cart.forEach((item) => {
    count += item.quantity;
  });
  cartNumber.innerText = count;
}
cartCount();
