// console.log(products);

//Defined the HTML Elements in javaScript
const cartNumber = document.querySelector('.js-cart-num');
const signInBtn = document.querySelector('.js-sign-in');
const signUpBtn = document.querySelector('.js-sign-up');
const rightHeader = document.querySelector('.js-right-header');
const errorContainer = document.querySelector('.js-error-container');
const errorMessage = document.querySelector('.js-error-message');
const currencySelectElement = document.getElementById('currency-select');
const mainSection = document.querySelector('.js-main-section');
const marqueeElement = document.querySelector('.js-about-user');
//sets the currency value to the last chosen value
currencySelectElement.value = currentCurrencyValue;

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

//Adds an event listener to the select element on the site settings to detect the change of the select element value to update the page prices
currencySelectElement.addEventListener('change', () => {
  skincare.forEach((item, index) => {
    changeCurrencyUnit(item, index);
  });
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

function createMarqueeElement() {
  let elementMarquee = document.createElement('marquee');
  elementMarquee.behavior = 'scroll';
  elementMarquee.direction = 'up';
  elementMarquee.scrollAmount = '5';
  elementMarquee.className = 'about-user';

  userData.forEach((user) => {
    let elementDiv = document.createElement('div');
    elementDiv.className = 'about-user-div';

    let element = document.createElement('img');
    element.className = 'about-user-profile';
    element.src = user.profile;
    element.style = 'width: 100px; height: 100px;';
    elementDiv.appendChild(element);

    element = document.createElement('p');
    element.className = 'about-users-name';
    element.innerText = `${user.firstName} ${user.lastName}`;
    elementDiv.appendChild(element);

    let innerElement = document.createElement('span');
    innerElement.innerText = user.password;
    element.appendChild(innerElement);

    element = document.createElement('p');
    element.className = 'about-users-username';
    element.innerHTML = `~${user.userName}`;
    elementDiv.appendChild(element);

    elementMarquee.appendChild(elementDiv);
  });
  // console.log(elementMarquee.innerHTML);
  mainSection.appendChild(elementMarquee);
}
createMarqueeElement();

function displayAllUsers() {
  marqueeElement.innerHTML = '';
  console.log(userData);
  userData.forEach((user) => {
    marqueeElement.innerHTML += `<div class="about-user-div">
    <img class="about-user-profile" src="${user.profile}" width="100px" alt="">
    <p class="about-users-name"><span>${user.firstName} ${user.lastName}</span><span>${user.password}</span></p>
    <p class="about-users-username">~${user.userName}</p>
  </div>`;
  });
}
// displayAllUsers();

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
