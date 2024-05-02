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

let enter;
function authorizeUser() {
  const emailValue = String(emailInput.value).toUpperCase();
  const passwordValue = String(passwordInput.value).toUpperCase();
  // console.log(emailValue, passwordValue);
  userData.forEach((user, index) => {
    if (user.email == emailValue && user.password == passwordValue) {
      currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      loginStatus = true;
      localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
      validateUser();
    }
  });
}

function validateUser(user) {
  errorMessage.innerHTML =
    '<img src="../../Resources/SVG/icons/checkmark.png" width="50px" height="50px">Verified';
  errorContainer.style = 'display: flex;';
  setTimeout(() => {
    errorContainer.style = 'display: none;';
    errorMessage.innerHTML = '';
  }, 3000);
  // console.log(currentUser);
  // console.log(loginStatus);
  modifyPage();
}

function modifyPage() {
  if (loginStatus == true) {
    inputContainer.innerHTML = '';
    let elementDiv = document.createElement('div');
    elementDiv.style =
      'display: flex; flex-direction: column; justify-content: center; align-items: center;';

    let element = document.createElement('img');
    element.src = currentUser.profile;
    element.style =
      'width: 80px; height: 80px; border-radius: 60px; box-shadow: 0px 0px 20px rgba(0,0,0, 0.5)';
    elementDiv.appendChild(element);

    element = document.createElement('h3');
    element.innerText = currentUser.userName;
    element.style = 'margin: 20px 0px;';
    elementDiv.appendChild(element);

    element = document.createElement('marquee');
    element.innerHTML = `${currentUser.firstName} ${currentUser.lastName}`;
    element.behavior = 'alternate';
    element.scrollAmount = '8';
    element.style = 'margin: 0px 0px 20px; font-weight: bold;';
    elementDiv.appendChild(element);

    element = document.createElement('p');
    element.innerHTML = '&rsaquo;Logged in&lsaquo;';
    element.style = 'margin: 5px 0px; font-weight: bold;';
    elementDiv.appendChild(element);

    let linkElement = document.createElement('a');
    linkElement.href = '../../index.html';

    element = document.createElement('button');
    element.innerText = 'Continue to shop';
    element.style =
      'margin: 10px 0px; padding: 10px; background: rebeccapurple; color: white; font-size: 16px; font-weight: bold; border-radius: 10px';
    linkElement.appendChild(element);
    elementDiv.appendChild(linkElement);

    element = document.createElement('button');
    element.innerText = 'Logout';
    element.onclick = logOut;
    element.style =
      'margin: 10px 0px; padding: 10px; background: #222; color: red; font-size: 16px; font-weight: bold; border-radius: 10px';
    elementDiv.appendChild(element);

    inputContainer.appendChild(elementDiv);
  } else {
    inputContainer.innerHTML = `
      <input type="email" name="email" class="sign-in-input" id="js-email" placeholder="Email">
      <input type="password" name="password" class="sign-in-input" id="js-password" placeholder="password">
      <p href="" class="sign-in-forgot-password js-forgot-password">Forgot password&quest;</p>
      <button class="sign-in-button js-sign-in-button">Sign In</button>
      <p class="sign-in-help">New to <span class="title-accent-colour">Hyper</span>SPACE? <a
          href="../Sign-up/Sign-up.html">Join now</a></p>
          `;
  }
}

function resetListeners() {
  emailInput = document.getElementById('js-email');
  passwordInput = document.getElementById('js-password');
  forgotPasswordText = document.querySelector('.js-forgot-password');
  resetFPListener();
  signInButton = document.querySelector('.js-sign-in-button');
  signInButton.addEventListener('click', authorizeUser);
}

function logOut() {
  loginStatus = false;
  currentUser = '';
  localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  modifyPage();
  resetListeners();
}

function resetFPListener() {
  forgotPasswordText.addEventListener('click', () => {
    errorMessage.innerHTML = `<b>Contact your Administrator in Nile university,</b>
    <br>
    Info: Make sure there's no space before and after your email/password<br>
    Hint: try your student email as youy email and your student id as your password<br>You can use the guest account!<br>
    Username: guest@example.com<br>
    password: hyperspace`;
    errorContainer.style = 'display: flex;';
    setTimeout(() => {
      errorContainer.style = 'display: none;';
      errorMessage.innerHTML = '';
    }, 3000);
  });
}
resetFPListener();

if (loginStatus == true) {
  modifyPage();
} else {
  resetListeners();
}
