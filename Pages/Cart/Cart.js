// console.log(products);

//Defined the HTML Elements in javaScript
const cartNumber = document.querySelector('.js-cart-num');
const signInBtn = document.querySelector('.js-sign-in');
const signUpBtn = document.querySelector('.js-sign-up');
const rightHeader = document.querySelector('.js-right-header');
const errorContainer = document.querySelector('.js-error-container');
const errorMessage = document.querySelector('.js-error-message');
const currencySelectElement = document.getElementById('currency-select');
const cartItemsDiv = document.querySelector('.js-cart-items');
const itemCount = document.querySelector('.js-item-count');
const shippingFeeDiv = document.querySelector('.js-shipping-fee');
const totalBeforeTaxDiv = document.querySelector('.js-total-before-tax');
const estimatedTaxDiv = document.querySelector('.js-estimated-tax');
const orderTotalDiv = document.querySelector('.js-order-total');
const itemsPayment = document.querySelector('.js-total-items-payment');
const placeOrderButton = document.querySelector('.js-place-order-button');
let deleteDiv = document.querySelectorAll('.js-delete-div');
const mainSection = document.querySelector('#js-main-section');
let deliveryOptionInput = document.querySelectorAll(
  '.js-delivery-option-input'
);
let shippingFee;
let cartItem;
//sets the currency value to the last chosen value
currencySelectElement.value = currentCurrencyValue;

//The cart array is in the main products.js page to make it accessible to all script.js files

//A function that converts the currency of the items on the page to the items
function changeCurrencyUnit() {
  //If the select element's value in the HTML file is naira it converts every price value to naira and vice versa
  if (currencySelectElement.value == 'naira') {
    createItemCards();
    currentCurrencyValue = currencySelectElement.value;
    localStorage.setItem('currencyValue', JSON.stringify(currentCurrencyValue));
  } else if (currencySelectElement.value == 'dollar') {
    createItemCards();
    currentCurrencyValue = currencySelectElement.value;
    localStorage.setItem('currencyValue', JSON.stringify(currentCurrencyValue));
  }
}

//Adds an event listener to the select element on the site settings to detect the change of the select element value to update the page prices
currencySelectElement.addEventListener('change', () => {
  createItemCards();
  resetElementsDefinition();
  fillOrderSummary();
  resetDeleteDivEventListener();
  resetDeleiveryOptionListener();
  cartCount();
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

function updateAccount() {
  if (loginStatus == true) {
    signInBtn.style = 'display: none;';
    signUpBtn.style = 'display: none;';

    let elementA = document.createElement('a');
    elementA.href = '../../Pages/Sign-in/Sign-in.html';

    let element = document.createElement('img');
    element.style =
      'width: 30px; height: 30px; border-radius: 30px; border: 1px solid black';
    elementA.appendChild(element);

    element.src = `${currentUser.profile}`;
    rightHeader.appendChild(elementA);
  }
}
updateAccount();

function findMatchingProduct(cartStuff) {
  products.forEach((item) => {
    if (item.id == cartStuff.id) {
      // console.log('Breached');
      // console.log(item);
      cartItem = item;
      // console.log(cartItem);
    }
  });
}

function fillInfo() {
  let imageSource;
  let ratingSource;
  if (searchId < 145) {
    imageSource = String(selectedItem.imageLocation).replace('../', '');
  } else {
    imageSource = String(selectedItem.imageLocation);
  }
}

function createItemCards() {
  cartItemsDiv.innerHTML = '';
  let price;
  let imageSource;
  cart.forEach((item, index) => {
    findMatchingProduct(item);
    // console.log(cartItem);
    if (currencySelectElement.value == 'naira') {
      price = `N${item.priceKobo / 100}`;
    } else {
      price = `$${item.priceCents / 100}`;
    }

    if (item.id < 145) {
      imageSource = String(cartItem.imageLocation).replace('../', '');
    } else {
      imageSource = String(cartItem.imageLocation);
    }
    cartItemsDiv.innerHTML += `
    <article class="cart-item-container">
        <div class="delivery-date">
          Delivery date: Wednesday, June 15
        </div>
  
        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${imageSource}">
  
          <div class="cart-item-details">
            <div class="product-name">
            ${cartItem.name}
            </div>
            <div class="product-price">
            ${price}
            </div>
            <div class="product-rating">
            <img class="product-rating-image" width="90px"
            src="../../Resources/Images/ratings/rating-${String(
              cartItem.rating.stars * 10
            ).padStart(2, '0')}.png"><span class="cart-item-rating-count">(${
      cartItem.rating.count
    }+ Reviews)</span>
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${item.quantity}</span>
              </span>
            </div>
            <div class="delete-div js-delete-div">
              <span class="delete-quantity-link link-primary">
                Delete
              </span>
            </div>
          </div>
  
          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
  
            <div class="delivery-option">
              <input type="radio" class="delivery-option-input js-delivery-option-input"
                name="delivery-option-${index}" data-feeid="0">
              <div>
                <div class="delivery-option-date">
                  Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                  FREE Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio" checked class="delivery-option-input js-delivery-option-input"
                name="delivery-option-${index}" data-feeid="1">
              <div>
                <div class="delivery-option-date">
                  Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                  $4.99 - Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio" class="delivery-option-input js-delivery-option-input"
                name="delivery-option-${index}" data-feeid="2">
              <div>
                <div class="delivery-option-date">
                  Monday, June 13
                </div>
                <div class="delivery-option-price">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  });
}
// createItemCards();
function fillPage() {
  if (loginStatus === true) {
    createItemCards();
    resetElementsDefinition();
    fillOrderSummary();
    resetDeleteDivEventListener();
    resetDeleiveryOptionListener();
    cartCount();
    if (cart == '') {
      mainSection.style = 'grid-template-columns: 1fr;';
    }
  } else {
    errorMessage.innerHTML = `<h3 style="margin-bottom: 20px;">Login to your account</h3>
    <p style="text-align: justify;">If you do not have an account, You can login with the guest account, just tap the forgot password link to see the guest account details</p>
    <a href="../Sign-in/Sign-in.html"><button class="error-button1">Sign in</button></a>`;
    errorContainer.style = 'display: flex;';
  }
}
fillPage();

function resetElementsDefinition() {
  deliveryOptionInput = document.querySelectorAll('.js-delivery-option-input');
  deleteDiv = document.querySelectorAll('.js-delete-div');
}

function resetDeleiveryOptionListener() {
  deliveryOptionInput.forEach((element) => {
    element.addEventListener('change', () => {
      calculateShippingFee();
      fillOrderSummary();
    });
  });
}
resetDeleiveryOptionListener();

function calculateShippingFee() {
  let totalShipping = 0;
  deliveryOptionInput.forEach((element) => {
    let feeId = element.dataset.feeid;
    // console.log(feeId);
    if (element.checked == true && feeId == 0) {
      // console.log('0');
      // totalShipping += 0;
    } else if (element.checked == true && feeId == 1) {
      // console.log('1');
      if (currencySelectElement.value == 'naira') {
        totalShipping += 4000;
      } else {
        totalShipping += 4.99;
      }
    } else if (element.checked == true && feeId == 2) {
      // console.log('2');
      if (currencySelectElement.value == 'naira') {
        totalShipping += 8000;
      } else {
        totalShipping += 9.99;
      }
    }
  });
  shippingFee = totalShipping.toFixed(2);
}

function fillOrderSummary() {
  calculateShippingFee();
  let total = 0;
  let tax;
  let formattedItemsPayment;
  let formattedShippingFee;
  let formattedTotalBeforeTax;
  let formattedEstimatedTax;
  let formattedOrderTotal;
  cart.forEach((item) => {
    itemCount.innerText = `Items (${cart.length})`;
    if (currencySelectElement.value == 'naira') {
      total += Number(item.priceKobo) / 100;
    } else {
      total += Number(item.priceCents) / 100;
    }
  });
  tax = total * 0.1;
  formattedItemsPayment = total.toFixed(2);
  formattedShippingFee = shippingFee;
  formattedTotalBeforeTax = total + Number(shippingFee);
  formattedEstimatedTax = tax.toFixed(2);
  formattedOrderTotal = (total + Number(shippingFee) + tax).toFixed(2);
  if (currencySelectElement.value == 'naira') {
    itemsPayment.innerText = `N${Number(formattedItemsPayment).toLocaleString(
      'en-US'
    )}`;
    shippingFeeDiv.innerText = `N${Number(formattedShippingFee).toLocaleString(
      'en-US'
    )}`;
    totalBeforeTaxDiv.innerText = `N${Number(
      formattedTotalBeforeTax
    ).toLocaleString('en-US')}`;
    estimatedTaxDiv.innerText = `N${Number(
      formattedEstimatedTax
    ).toLocaleString('en-US')}`;
    orderTotalDiv.innerText = `N${Number(formattedOrderTotal).toLocaleString(
      'en-US'
    )}`;
  } else {
    itemsPayment.innerText = `$${Number(formattedItemsPayment).toLocaleString(
      'en-US'
    )}`;
    shippingFeeDiv.innerText = `$${Number(formattedShippingFee).toLocaleString(
      'en-US'
    )}`;
    totalBeforeTaxDiv.innerText = `$${Number(
      formattedTotalBeforeTax
    ).toLocaleString('en-US')}`;
    estimatedTaxDiv.innerText = `$${Number(
      formattedEstimatedTax
    ).toLocaleString('en-US')}`;
    orderTotalDiv.innerText = `$${Number(formattedOrderTotal).toLocaleString(
      'en-US'
    )}`;
  }
  // console.log(formattedShippingFee);
  // console.log(formattedItemsPayment, formattedShippingFee, formattedTotalBeforeTax, formattedEstimatedTax, formattedOrderTotal);
}
// fillOrderSummary();

function redirectToPage() {
  placeOrderButton.innerHTML = `Order placed <img src="../../Resources/SVG/Icons/Checkmark.png" width="20px" style="margin-left: 10px;">`;
  cart = [];
  localStorage.removeItem('cartArray');
  setTimeout(() => {
    countDown(5);
  }, 1000);
  setTimeout(() => {
    window.location.href = '../../index.html';
  }, 8000);
}

function countDown(value) {
  let timer = setInterval(() => {
    if (value == 0) {
      clearInterval(timer);
    }
    // console.log(value);
    placeOrderButton.innerHTML = `Redirecting in (${value})s`;
    value -= 1;
  }, 1000);
}

placeOrderButton.addEventListener('click', () => {
  if (cart == '') {
    errorMessage.innerText = 'The cart is empty';
    errorContainer.style = 'display: flex;';
    setTimeout(() => {
      errorContainer.style = 'display: none';
    }, 2000);
  }
  redirectToPage();
});

function resetDeleteDivEventListener() {
  deleteDiv.forEach((element, index) => {
    element.addEventListener('click', () => {
      cart.splice(index, 1);
      localStorage.setItem('cartArray', JSON.stringify(cart));
      fillPage();
    });
  });
}
