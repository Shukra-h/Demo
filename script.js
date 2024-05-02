//Defined the HTML Elements in javaScript
const cartNumber = document.querySelector('.js-cart-num');
const signInBtn = document.querySelector('.js-sign-in');
const signUpBtn = document.querySelector('.js-sign-up');
const rightHeader = document.querySelector('.js-right-header');
const errorContainer = document.querySelector('.js-error-container');
const errorMessage = document.querySelector('.js-error-message');
const currencySelectElement = document.getElementById('currency-select');
const switchImage1 = document.querySelector('.js-image-switch-1');
const switchImage2 = document.querySelector('.js-image-switch-2');
const switchImage3 = document.querySelector('.js-image-switch-3');
const bannerImage = document.querySelector('.js-banner-picture');
const searchButton1 = document.querySelector('.js-search-1');
const searchButton2 = document.querySelector('.js-search-2');
const searchBar = document.querySelector('.js-search-input');
const searchResult = document.querySelector('.js-search-result');
let searchOption = document.querySelectorAll('.js-search-option');

function extend() {
  searchButton1.style = 'display: none;';
  searchButton2.style = 'display: block;';
  searchResult.classList.remove('disabled');
  searchBar.classList.add('extend');
}

function retract() {
  searchButton1.style = 'display: block;';
  searchButton2.style = 'display: none;';
  searchResult.classList.add('disabled');
  searchBar.classList.remove('extend');
  searchResult.innerHTML = '';
}

function updateAccount() {
  if (loginStatus == true) {
    signInBtn.style = 'display: none;';
    signUpBtn.style = 'display: none;';

    let elementA = document.createElement('a');
    elementA.href = 'Pages/Sign-in/Sign-in.html';

    let element = document.createElement('img');
    element.style =
      'width: 30px; height: 30px; border-radius: 30px; border: 1px solid black';
    elementA.appendChild(element);

    element.src = String(currentUser.profile).slice(6);
    rightHeader.appendChild(elementA);
  }
}

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

const skincareImages = [
  'Resources/Images/Banners/Skincare/Skincare1.jpg',
  'Resources/Images/Banners/Skincare/Skincare2.jpg',
  'Resources/Images/Banners/Skincare/Skincare3.jpg',
];
const mobilePhonesImages = [
  'Resources/Images/Banners/Phones/Phone1.jpg',
  'Resources/Images/Banners/Phones/Phone2.jpg',
  'Resources/Images/Banners/Phones/Phone3.jpg',
];
const homeAppliancesImages = [
  'Resources/Images/Banners/Home-appliance/Homeappliance1.jpg',
  'Resources/Images/Banners/Home-appliance/Homeappliance2.jpg',
  'Resources/Images/Banners/Home-appliance/Homeappliance3.jpg',
];

let currentImageIndex1 = 1;
let currentImageIndex2 = 1;
let currentImageIndex3 = 1;

let one, two, three;
function beginInterval() {
  one = setInterval(() => {
    switchImages1(switchImage1, skincareImages, currentImageIndex1);
  }, 3000);

  two = setInterval(() => {
    switchImages2(switchImage2, mobilePhonesImages, currentImageIndex2);
  }, 5000);

  three = setInterval(() => {
    switchImages3(switchImage3, homeAppliancesImages, currentImageIndex3);
  }, 7000);
}
beginInterval();

function switchImages1(element, array) {
  if (currentImageIndex1 > 2) {
    currentImageIndex1 = 0;
  }
  element.src = array[currentImageIndex1];
  currentImageIndex1++;
  clearInterval(one);
}

function switchImages2(element, array) {
  if (currentImageIndex2 > 2) {
    currentImageIndex2 = 0;
  }
  element.src = array[currentImageIndex2];
  currentImageIndex2++;
  clearInterval(two);
}

function switchImages3(element, array) {
  if (currentImageIndex3 > 2) {
    currentImageIndex3 = 0;
  }
  element.src = array[currentImageIndex3];
  currentImageIndex3++;
  clearInterval(three);
  beginInterval();
}

function searchItems() {
  searchResult.innerHTML = '';
  const query = String(searchBar.value).toUpperCase();
  products.forEach((item, index) => {
    const productName = String(item.name).toUpperCase();
    if (productName.includes(query)) {
      console.log(item);
      searchResult.innerHTML += `<a href="pages/Selected-product/Selected-product.html" class="link-style"><div id="${item.id}" class="search-option js-search-option">${item.name}</div></a>`;
      searchOption = document.querySelectorAll('.js-search-option');
      resetListners();
    }
  });
}

searchBar.addEventListener('input', searchItems);

function resetListners() {
  searchOption.forEach((option, index) => {
    option.addEventListener('click', (event) => {
      console.log(event);
      searchId = event.target.id;
      localStorage.setItem('idToSearch', JSON.stringify(searchId));
    });
  });
}
updateAccount();
