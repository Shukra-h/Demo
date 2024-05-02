let cart;

const savedCartArray = JSON.parse(localStorage.getItem('cartArray'));

if (Array.isArray(savedCartArray)) {
  cart = savedCartArray;
} else {
  cart = [];
}

let searchId;
const savedSearchId = JSON.parse(localStorage.getItem('idToSearch'));
if (savedSearchId !== '') {
  searchId = savedSearchId;
} else {
  searchId = 10;
}

let currentUser;
function setCurrentUser() {
  const savedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (savedCurrentUser) {
    currentUser = savedCurrentUser;
  } else {
    currentUser = '';
  }
}
setCurrentUser();

let loginStatus;
function setLoginStatus() {
  const savedLoginStatus = JSON.parse(localStorage.getItem('loginStatus'));
  if (savedLoginStatus) {
    loginStatus = savedLoginStatus;
  } else {
    loginStatus = false;
  }
}
setLoginStatus();

let userData = [
  {
    firstName: 'Guest',
    lastName: 'Account',
    email: 'GUEST@EXAMPLE.COM',
    userName: 'Guest',
    password: 'HYPERSPACE',
    profile: '../../Resources/profile/guest.svg',
  },
  {
    firstName: 'Victor',
    lastName: 'Ucheze',
    email: '20220578@NILEUNIVERSITY.EDU.NG',
    userName: 'Purpleacecard',
    password: '20220578',
    profile: '../../Resources/profile/profile8.jpeg',
  },
  {
    firstName: 'Paul',
    lastName: 'Akpanakpudo',
    email: '20221371@NILEUNIVERSITY.EDU.NG',
    userName: 'ErinYaeger',
    password: '20221371',
    profile: '../../Resources/profile/profile13.jpeg',
  },
  {
    firstName: 'Shukrah',
    lastName: 'Abdulraheem',
    email: '20220079@NILEUNIVERSITY.EDU.NG',
    userName: 'Class Rep',
    password: '20220079',
    profile: '../../Resources/profile/profile11.jpeg',
  },
  {
    firstName: 'Joshua',
    lastName: 'Brown',
    email: '20220316@NILEUNIVERSITY.EDU.NG',
    userName: 'Boma',
    password: '20220316',
    profile: '../../Resources/profile/profile7.jpeg',
  },
  {
    firstName: 'Obinna',
    lastName: 'Aziwe',
    email: '20220176@NILEUNIVERSITY.EDU.NG',
    userName: 'Flaming Hero Endeavour',
    password: '20220176',
    profile: '../../Resources/profile/profile1.jpeg',
  },
  {
    firstName: 'Nshii',
    lastName: 'Chidubem',
    email: '20221592@NILEUNIVERSITY.EDU.NG',
    userName: 'Sporty Jinx',
    password: '20221592',
    profile: '../../Resources/profile/profile2.jpeg',
  },
  {
    firstName: 'Ameer',
    lastName: 'Omade',
    email: '20220583@NILEUNIVERSITY.EDU.NG',
    userName: 'FranklinSaint',
    password: '20220583',
    profile: '../../Resources/profile/profile4.jpeg',
  },
  {
    firstName: 'Darien',
    lastName: 'Olowu',
    email: '20221840@NILEUNIVERSITY.EDU.NG',
    userName: '1tbyt',
    password: '20221840',
    profile: '../../Resources/profile/profile3.jpeg',
  },
  {
    firstName: 'Ummusulaim',
    lastName: 'Usman',
    email: '20221020@NILEUNIVERSITY.EDU.NG',
    userName: 'Sulaeym',
    password: '20221020',
    profile: '../../Resources/profile/profile12.jpeg',
  },
  {
    firstName: 'Amangi',
    lastName: 'Junior',
    email: '20222731@NILEUNIVERSITY.EDU.NG',
    userName: 'SkyWalker',
    password: '20222731',
    profile: '../../Resources/profile/profile10.jpeg',
  },
  {
    firstName: 'Fatima',
    lastName: 'Abdullahi',
    email: '20221945@NILEUNIVERSITY.EDU.NG',
    userName: 'EnolaHolmes',
    password: '20221945',
    profile: '../../Resources/profile/profile9.jpeg',
  },
];

let currentCurrencyValue;
const savedCurrencyValue = JSON.parse(localStorage.getItem('currencyValue'));
if (typeof savedCurrencyValue == 'string') {
  currentCurrencyValue = savedCurrencyValue;
} else {
  currentCurrencyValue = 'naira';
}

const products = [
  {
    name: 'CeraVe daily moisturizing lotion',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/CeraVe-Daily-Moisturizing-Lotion-for-Dry-Skin.jpg',
    priceNaira: 15000,
    keywords: ['skincare', 'cosmetics', 'lotion', 'beauty', 'moisturizer'],
    category: 'skincare',
    id: 10,
    rating: {
      count: 11250,
      stars: 0,
    },
    priceKobo: 1500000,
    priceCents: 1875,
    quantityLeft: 34,
  },
  {
    name: 'The-ordinary multi-layered serum',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/The-ordinary-multi-layered-support.jpg',
    priceNaira: 3500,
    keywords: ['skincare', 'cosmetics', 'lotion', 'beauty', 'serum'],
    category: 'skincare',
    id: 11,
    rating: {
      count: 13049,
      stars: 4.5,
    },
    priceKobo: 350000,
    priceCents: 437.5,
    quantityLeft: 58,
  },
  {
    name: '3pcs eyebrow razor',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/3pcs-Eyebrow-Razor.jpg',
    priceNaira: 550,
    keywords: ['razor', 'skincare', 'beauty'],
    category: 'skincare',
    id: 12,
    rating: {
      count: 14622,
      stars: 0.5,
    },
    priceKobo: 55000,
    priceCents: 68.75,
    quantityLeft: 17,
  },
  {
    name: 'Maretinol facial oil',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/Maretinol-oil.jpg',
    priceNaira: 3200,
    keywords: ['skincare', 'cosmetics', 'oil', 'beauty'],
    category: 'skincare',
    id: 13,
    rating: {
      count: 1040,
      stars: 0.5,
    },
    priceKobo: 320000,
    priceCents: 400,
    quantityLeft: 16,
  },
  {
    name: 'Dr. loretta mask brush',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/Dr-loretta-Mask-Applicator-Brush.jpg',
    priceNaira: 1200,
    keywords: ['skincare', 'beauty', 'brush'],
    category: 'skincare',
    id: 14,
    rating: {
      count: 7948,
      stars: 0,
    },
    priceKobo: 120000,
    priceCents: 150,
    quantityLeft: 87,
  },
  {
    name: 'Nivea sensitive cleansing lotion and water',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/Nivea-sensitive-cleansing-milk-and-water.jpg',
    priceNaira: 6800,
    keywords: ['skincare', 'cosmetics', 'lotion', 'beauty', 'moisturizer'],
    category: 'skincare',
    id: 15,
    rating: {
      count: 12626,
      stars: 3,
    },
    priceKobo: 680000,
    priceCents: 850,
    quantityLeft: 30,
  },
  {
    name: 'silicon nasal brush',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/1pc-Silicone-Nasal-Brush-&-1pc-Facial-Cleansing-Brush.jpg',
    priceNaira: 800,
    keywords: ['skincare', 'beauty', 'silicon', 'plastic', 'brush'],
    category: 'skincare',
    id: 16,
    rating: {
      count: 3745,
      stars: 3.5,
    },
    priceKobo: 80000,
    priceCents: 100,
    quantityLeft: 18,
  },
  {
    name: 'CeraVe resurfacing retinol serum',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/CeraVe-resurfacing-retinol-serum.jpg',
    priceNaira: 7200,
    keywords: ['skincare', 'serum', 'beauty', 'moisturizer', 'repair'],
    category: 'skincare',
    id: 17,
    rating: {
      count: 17345,
      stars: 1.5,
    },
    priceKobo: 720000,
    priceCents: 900,
    quantityLeft: 37,
  },
  {
    name: 'Rhode skincare collection',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/Rhode-skincare-collection.jpg',
    priceNaira: 25000,
    keywords: ['skincare', 'cosmetics', 'lotion', 'beauty', 'moisturizer'],
    category: 'skincare',
    id: 18,
    rating: {
      count: 3116,
      stars: 1.5,
    },
    priceKobo: 2500000,
    priceCents: 3125,
    quantityLeft: 51,
  },
  {
    name: 'Disposable facial cotton',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/Disposable-Facial-Cosmetic-Cotton-80pcs.jpg',
    priceNaira: 600,
    keywords: ['skincare', 'beauty', 'cotton', 'cleanser', 'tool'],
    category: 'skincare',
    id: 19,
    rating: {
      count: 9750,
      stars: 3.5,
    },
    priceKobo: 60000,
    priceCents: 75,
    quantityLeft: 39,
  },
  {
    name: 'The ordinary niaciamide',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/The-ordinary-niaciamide.jpg',
    priceNaira: 8000,
    keywords: ['skincare', 'cosmetics', 'lotion', 'beauty', 'moisturizer'],
    category: 'skincare',
    id: 20,
    rating: {
      count: 15969,
      stars: 3,
    },
    priceKobo: 800000,
    priceCents: 1000,
    quantityLeft: 40,
  },
  {
    name: 'Neutrogena hydro boost gel',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/Neutrogena-hydro-boost.jpg',
    priceNaira: 17000,
    keywords: ['skincare', 'hydrate', 'gel', 'beauty', 'moisturizer'],
    category: 'skincare',
    id: 21,
    rating: {
      count: 19159,
      stars: 5,
    },
    priceKobo: 1700000,
    priceCents: 2125,
    quantityLeft: 88,
  },
  {
    name: 'CeraVe hydrating cleanser',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/CeraVe-Hydrating-Cleanser-Review.jpg',
    priceNaira: 16000,
    keywords: ['skincare', 'hydrating', 'lotion', 'beauty', 'cleanser'],
    category: 'skincare',
    id: 22,
    rating: {
      count: 15916,
      stars: 0,
    },
    priceKobo: 1600000,
    priceCents: 2000,
    quantityLeft: 58,
  },
  {
    name: 'The ordinary salicylic acid',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/The-ordinary-salicylic-acid.jpg',
    priceNaira: 9700,
    keywords: ['skincare', 'repair', 'lotion', 'beauty', 'salicylic-acid'],
    category: 'skincare',
    id: 23,
    rating: {
      count: 14267,
      stars: 0.5,
    },
    priceKobo: 970000,
    priceCents: 1212.5,
    quantityLeft: 35,
  },
  {
    name: 'Cleance cosmetic cream',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Skincare/Cosmetic-cream-lotion-container-mockup.jpg',
    priceNaira: 7650,
    keywords: ['skincare', 'cosmetics', 'lotion', 'beauty', 'moisturizer'],
    category: 'skincare',
    id: 24,
    rating: {
      count: 17368,
      stars: 3,
    },
    priceKobo: 765000,
    priceCents: 956.25,
    quantityLeft: 9,
  },
  {
    name: 'Samsung galaxy s21 ultra',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Samsung-galaxy-s21-ultra.jpg',
    priceNaira: 1200000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 25,
    rating: {
      count: 7565,
      stars: 3.5,
    },
    priceKobo: 120000000,
    priceCents: 150000,
    quantityLeft: 23,
  },
  {
    name: 'Apple IPhone 15 pro max',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Apple-iphone-15-pro-max.jpg',
    priceNaira: 970000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'ios'],
    category: 'mobile-phones',
    id: 26,
    rating: {
      count: 8381,
      stars: 5,
    },
    priceKobo: 97000000,
    priceCents: 121250,
    quantityLeft: 95,
  },
  {
    name: 'Asus ROG 7',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Asus-ROG-phone-7.jpg',
    priceNaira: 650000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 27,
    rating: {
      count: 13316,
      stars: 0,
    },
    priceKobo: 65000000,
    priceCents: 81250,
    quantityLeft: 64,
  },
  {
    name: 'Nokia C32',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Nokia-C32.jpg',
    priceNaira: 320000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 28,
    rating: {
      count: 3870,
      stars: 1,
    },
    priceKobo: 32000000,
    priceCents: 40000,
    quantityLeft: 1,
  },
  {
    name: 'Xiaomi black shark 5',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Black-Shark-5-Gaming-Phone.jpg',
    priceNaira: 710000,
    keywords: ['Tech', 'mobile', 'gaming', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 29,
    rating: {
      count: 12786,
      stars: 2,
    },
    priceKobo: 71000000,
    priceCents: 88750,
    quantityLeft: 2,
  },
  {
    name: 'Apple Iphone se',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Apple-iphone-se.jpg',
    priceNaira: 110000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'ios'],
    category: 'mobile-phones',
    id: 30,
    rating: {
      count: 13655,
      stars: 1,
    },
    priceKobo: 11000000,
    priceCents: 13750,
    quantityLeft: 48,
  },
  {
    name: 'Nokia magic',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Nokia-magic.jpg',
    priceNaira: 190000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 31,
    rating: {
      count: 9912,
      stars: 4,
    },
    priceKobo: 19000000,
    priceCents: 23750,
    quantityLeft: 40,
  },
  {
    name: 'Google pixel 7 5g',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Google-pixel-7-5g.jpg',
    priceNaira: 680000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 32,
    rating: {
      count: 14014,
      stars: 3.5,
    },
    priceKobo: 68000000,
    priceCents: 85000,
    quantityLeft: 61,
  },
  {
    name: 'Nothing phone 2',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Nothing-Phone-2.jpg',
    priceNaira: 320000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 33,
    rating: {
      count: 17119,
      stars: 3.5,
    },
    priceKobo: 32000000,
    priceCents: 40000,
    quantityLeft: 18,
  },
  {
    name: 'Nokia XR40 pro',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Nokia-XR40-Pro.jpg',
    priceNaira: 540000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 34,
    rating: {
      count: 14197,
      stars: 3,
    },
    priceKobo: 54000000,
    priceCents: 67500,
    quantityLeft: 92,
  },
  {
    name: 'Red magic 8 pro',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Red-magic-8-pro.jpg',
    priceNaira: 410050,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 35,
    rating: {
      count: 135,
      stars: 3.5,
    },
    priceKobo: 41005000,
    priceCents: 51256.25,
    quantityLeft: 40,
  },
  {
    name: 'Samsung galaxy A53',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Samsung-galaxy-A53.jpg',
    priceNaira: 280000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 36,
    rating: {
      count: 9464,
      stars: 3,
    },
    priceKobo: 28000000,
    priceCents: 35000,
    quantityLeft: 16,
  },
  {
    name: 'Nothing phone 1',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Nothing-Phone-1.jpg',
    priceNaira: 150000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 37,
    rating: {
      count: 7658,
      stars: 3.5,
    },
    priceKobo: 15000000,
    priceCents: 18750,
    quantityLeft: 29,
  },
  {
    name: 'One plus note',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/One-plus-note.jpg',
    priceNaira: 170000,
    keywords: ['Tech', 'mobile', 'device', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 38,
    rating: {
      count: 2843,
      stars: 5,
    },
    priceKobo: 17000000,
    priceCents: 21250,
    quantityLeft: 68,
  },
  {
    name: 'Asus ROG 7 ultimate',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Mobile-phones/Asus-ROG-Phone-7-Ultimate.jpg',
    priceNaira: 7005000,
    keywords: ['Tech', 'mobile', 'gaming', 'touch', 'androidOS'],
    category: 'mobile-phones',
    id: 39,
    rating: {
      count: 4021,
      stars: 4,
    },
    priceKobo: 700500000,
    priceCents: 875625,
    quantityLeft: 41,
  },
  {
    name: 'Amazon smart home assistant',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Amazon-smart-home-assistant.jpg',
    priceNaira: 1000000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 40,
    rating: {
      count: 2561,
      stars: 1.5,
    },
    category: 'home-appliances',
    priceKobo: 100000000,
    priceCents: 125000,
    quantityLeft: 24,
  },
  {
    name: 'Washing sharing machine',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/The-washing_sharing-machine.jpg',
    priceNaira: 200000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 41,
    rating: {
      count: 18724,
      stars: 1,
    },
    category: 'home-appliances',
    priceKobo: 20000000,
    priceCents: 25000,
    quantityLeft: 84,
  },
  {
    name: 'Barbecue and kitchen lighter',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances///Barbecue-And-Kitchen-Lighter-.jpg',
    priceNaira: 20000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 42,
    rating: {
      count: 6605,
      stars: 1,
    },
    category: 'home-appliances',
    priceKobo: 2000000,
    priceCents: 2500,
    quantityLeft: 3,
  },
  {
    name: 'Air fryer with dual zone',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Basket-Air-Fryer-with-DualZone-Te.jpg',
    priceNaira: 75000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 43,
    rating: {
      count: 2058,
      stars: 0,
    },
    category: 'home-appliances',
    priceKobo: 7500000,
    priceCents: 9375,
    quantityLeft: 16,
  },
  {
    name: 'Dutch ovens',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Dutch-Ovens.jpg',
    priceNaira: 970000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 44,
    rating: {
      count: 15531,
      stars: 2.5,
    },
    category: 'home-appliances',
    priceKobo: 97000000,
    priceCents: 121250,
    quantityLeft: 73,
  },
  {
    name: 'Eat smart pro scale',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/EatSmart-Precision-Pro-Scale.jpg',
    priceNaira: 23000,
    keywords: ['Home', 'appliances', 'tools', 'weight'],
    id: 45,
    rating: {
      count: 8261,
      stars: 1.5,
    },
    category: 'home-appliances',
    priceKobo: 2300000,
    priceCents: 2875,
    quantityLeft: 36,
  },
  {
    name: 'Electric whisk',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Electric-whisk.jpg',
    priceNaira: 65000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 46,
    rating: {
      count: 9979,
      stars: 3,
    },
    category: 'home-appliances',
    priceKobo: 6500000,
    priceCents: 8125,
    quantityLeft: 3,
  },
  {
    name: 'Food heater',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Food-heater.jpg',
    priceNaira: 20000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 47,
    rating: {
      count: 14628,
      stars: 0.5,
    },
    category: 'home-appliances',
    priceKobo: 2000000,
    priceCents: 2500,
    quantityLeft: 84,
  },
  {
    name: 'Ice maker',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Ice-Maker.jpg',
    priceNaira: 130000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 48,
    rating: {
      count: 12166,
      stars: 3.5,
    },
    category: 'home-appliances',
    priceKobo: 13000000,
    priceCents: 16250,
    quantityLeft: 0,
  },
  {
    name: 'Integrated dishwasher',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Integrated-Dishwasher.jpg',
    priceNaira: 340000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 49,
    rating: {
      count: 16076,
      stars: 2,
    },
    category: 'home-appliances',
    priceKobo: 34000000,
    priceCents: 42500,
    quantityLeft: 3,
  },
  {
    name: 'Kitchen knife set',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Kitchen-Knife-Set.jpg',
    priceNaira: 33000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 50,
    rating: {
      count: 3584,
      stars: 4,
    },
    category: 'home-appliances',
    priceKobo: 3300000,
    priceCents: 4125,
    quantityLeft: 18,
  },
  {
    name: 'Microwave',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Microwave.jpg',
    priceNaira: 52000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 51,
    rating: {
      count: 17299,
      stars: 4,
    },
    category: 'home-appliances',
    priceKobo: 5200000,
    priceCents: 6500,
    quantityLeft: 48,
  },
  {
    name: 'Modern trash can',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Modern-trash-can.jpg',
    priceNaira: 18500,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 52,
    rating: {
      count: 5254,
      stars: 3,
    },
    category: 'home-appliances',
    priceKobo: 1850000,
    priceCents: 2312.5,
    quantityLeft: 60,
  },
  {
    name: 'Phillips espresso machine',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Philips-espresson-machine.jpg',
    priceNaira: 68000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 53,
    rating: {
      count: 3419,
      stars: 5,
    },
    category: 'home-appliances',
    priceKobo: 6800000,
    priceCents: 8500,
    quantityLeft: 83,
  },
  {
    name: 'Smeg toaster',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Home-appliances/Smeg-Toaster.jpg',
    priceNaira: 71000,
    keywords: ['Home', 'appliances', 'tools', 'kitchen'],
    id: 54,
    rating: {
      count: 17325,
      stars: 5,
    },
    category: 'home-appliances',
    priceKobo: 7100000,
    priceCents: 8875,
    quantityLeft: 32,
  },
  {
    name: 'Brooklyn new york los angeles t shirt',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Brooklyn-New-York-Los-Angeles-Women-T-Shirt-Girl-Graphic-P.jpg',
    priceNaira: 6500,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 55,
    rating: {
      count: 12434,
      stars: 1,
    },
    category: 'women-clothing',
    priceKobo: 650000,
    priceCents: 812.5,
    quantityLeft: 45,
  },
  {
    name: 'Cherry print dress',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Cherry-print-dress.jpg',
    priceNaira: 8500,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 56,
    rating: {
      count: 2890,
      stars: 4,
    },
    category: 'women-clothing',
    priceKobo: 850000,
    priceCents: 1062.5,
    quantityLeft: 98,
  },
  {
    name: 'Cozy floral two peice green',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Cozy-Floral-Print-Two-Piece-Green.jpg',
    priceNaira: 12500,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 57,
    rating: {
      count: 13999,
      stars: 2.5,
    },
    category: 'women-clothing',
    priceKobo: 1250000,
    priceCents: 1562.5,
    quantityLeft: 57,
  },
  {
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Crocs-Unisex-Adult-Classic-Clogs.jpg',
    priceNaira: 15000,
    name: 'Crocs®',
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 58,
    rating: {
      count: 11258,
      stars: 2,
    },
    category: 'women-clothing',
    priceKobo: 1500000,
    priceCents: 1875,
    quantityLeft: 6,
  },
  {
    name: 'Frog hoodie cute sweater',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Frog-Hoodie-Large-Front-Pocket-Cute-Sweaters.jpg',
    priceNaira: 9000,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 59,
    rating: {
      count: 11998,
      stars: 4,
    },
    category: 'women-clothing',
    priceKobo: 900000,
    priceCents: 1125,
    quantityLeft: 95,
  },
  {
    name: 'Korean fashion coat',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Korean-Fashion-Coat-Women-Autumn_winter.jpg',
    priceNaira: 11800,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 60,
    rating: {
      count: 3476,
      stars: 1.5,
    },
    category: 'women-clothing',
    priceKobo: 1180000,
    priceCents: 1475,
    quantityLeft: 49,
  },
  {
    name: 'Pullover sweatshirt',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Solid-Color-Pullover-Sweatshirt.jpg',
    priceNaira: 15000,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 61,
    rating: {
      count: 14385,
      stars: 2,
    },
    category: 'women-clothing',
    priceKobo: 1500000,
    priceCents: 1875,
    quantityLeft: 28,
  },
  {
    name: 'Striped long sleeve',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Striped-long-sleeve.jpg',
    priceNaira: 7500,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 62,
    rating: {
      count: 6926,
      stars: 5,
    },
    category: 'women-clothing',
    priceKobo: 750000,
    priceCents: 937.5,
    quantityLeft: 40,
  },
  {
    name: 'Summer dress',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Summer-Dresses.jpg',
    priceNaira: 25000,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 63,
    rating: {
      count: 2949,
      stars: 0,
    },
    category: 'women-clothing',
    priceKobo: 2500000,
    priceCents: 3125,
    quantityLeft: 17,
  },
  {
    name: 'Fluffy sweater',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Sweater-Trends-For-autumn-Fall.jpg',
    priceNaira: 14500,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 64,
    rating: {
      count: 1351,
      stars: 5,
    },
    category: 'women-clothing',
    priceKobo: 1450000,
    priceCents: 1812.5,
    quantityLeft: 16,
  },
  {
    name: 'White shirt and tie aesthetic',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Whie-shirt-and-tie-corporate-aesthetic-fit.jpg',
    priceNaira: 23000,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 65,
    rating: {
      count: 1822,
      stars: 3,
    },
    category: 'women-clothing',
    priceKobo: 2300000,
    priceCents: 2875,
    quantityLeft: 77,
  },
  {
    name: 'Ribbed seamless tank-top',
    imageLocation:
      "../../../Resources/Images/products/Product-categories/Women-clothing/Women's-3-Piece-Medium-Support-Tank-Top-Ribbed-Seamles.jpg",
    priceNaira: 3700,
    keywords: ['Women', 'clothing', 'outdoors', 'underwear'],
    id: 66,
    rating: {
      count: 10475,
      stars: 3,
    },
    category: 'women-clothing',
    priceKobo: 370000,
    priceCents: 462.5,
    quantityLeft: 63,
  },
  {
    name: 'V-neck cropped sweater',
    imageLocation:
      "../../../Resources/Images/products/Product-categories/Women-clothing/Women's-Argyle-Sweater-V-Neck-Cropped-Sweater-Long-S.jpg",
    priceNaira: 32000,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 67,
    rating: {
      count: 4727,
      stars: 3.5,
    },
    category: 'women-clothing',
    priceKobo: 3200000,
    priceCents: 4000,
    quantityLeft: 12,
  },
  {
    name: 'Dress cuff fold buckle',
    imageLocation:
      "../../../Resources/Images/products/Product-categories/Women-clothing/Women's-Dress-Cuff-Fold-Buckle-Free-S.jpg",
    priceNaira: 19000,
    keywords: ['Women', 'clothing', 'casual', 'outdoors'],
    id: 68,
    rating: {
      count: 8993,
      stars: 2,
    },
    category: 'women-clothing',
    priceKobo: 1900000,
    priceCents: 2375,
    quantityLeft: 60,
  },
  {
    name: 'Retro soft leather loafers',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Women-clothing/Women-Retro-Soft-Leather-Loafers.jpg',
    priceNaira: 53000,
    keywords: ['Women', 'clothing', 'fashion', 'outdoors'],
    id: 69,
    rating: {
      count: 1587,
      stars: 0.5,
    },
    category: 'women-clothing',
    priceKobo: 5300000,
    priceCents: 6625,
    quantityLeft: 33,
  },
  {
    name: 'Almond nuts',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Almond-nuts.jpg',
    priceNaira: 2500,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 70,
    rating: {
      count: 10484,
      stars: 4,
    },
    category: 'groceries',
    priceKobo: 250000,
    priceCents: 312.5,
    quantityLeft: 68,
  },
  {
    name: 'Brocoli florets',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Broccoli-Florets.jpg',
    priceNaira: 1300,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 71,
    rating: {
      count: 8378,
      stars: 2.5,
    },
    category: 'groceries',
    priceKobo: 130000,
    priceCents: 162.5,
    quantityLeft: 87,
  },
  {
    name: 'Doritos vegan food',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Doritos-vegan-food.jpg',
    priceNaira: 2700,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 72,
    rating: {
      count: 1890,
      stars: 4.5,
    },
    category: 'groceries',
    priceKobo: 270000,
    priceCents: 337.5,
    quantityLeft: 22,
  },
  {
    name: 'French fries',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/French-fries.jpg',
    priceNaira: 550,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 73,
    rating: {
      count: 804,
      stars: 1,
    },
    category: 'groceries',
    priceKobo: 55000,
    priceCents: 68.75,
    quantityLeft: 88,
  },
  {
    name: 'Heinz wasabi',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Heinz-Wasabioli,-Tarchup,-A.jpg',
    priceNaira: 1200,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 74,
    rating: {
      count: 13573,
      stars: 1.5,
    },
    category: 'groceries',
    priceKobo: 120000,
    priceCents: 150,
    quantityLeft: 95,
  },
  {
    name: 'Kraft natural cheese',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Kraft-natural-cheese.jpg',
    priceNaira: 930,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 75,
    rating: {
      count: 939,
      stars: 3.5,
    },
    category: 'groceries',
    priceKobo: 93000,
    priceCents: 116.25,
    quantityLeft: 80,
  },
  {
    name: 'Lays chips',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Lays-chips.jpg',
    priceNaira: 740,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 76,
    rating: {
      count: 17619,
      stars: 2.5,
    },
    category: 'groceries',
    priceKobo: 74000,
    priceCents: 92.5,
    quantityLeft: 1,
  },
  {
    name: 'Mozzarella sticks',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Mozzarella-sticks.jpg',
    priceNaira: 3800,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 77,
    rating: {
      count: 1575,
      stars: 3.5,
    },
    category: 'groceries',
    priceKobo: 380000,
    priceCents: 475,
    quantityLeft: 81,
  },
  {
    name: 'Pancake syrup',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Pancake-syrup.jpg',
    priceNaira: 4200,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 78,
    rating: {
      count: 8526,
      stars: 1,
    },
    category: 'groceries',
    priceKobo: 420000,
    priceCents: 525,
    quantityLeft: 21,
  },
  {
    name: 'Pringles queijo',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Pringles-Queijo.jpg',
    priceNaira: 3600,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 79,
    rating: {
      count: 5992,
      stars: 2.5,
    },
    category: 'groceries',
    priceKobo: 360000,
    priceCents: 450,
    quantityLeft: 57,
  },
  {
    name: 'Quaker oats',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Quaker-oats.jpg',
    priceNaira: 7500,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 80,
    rating: {
      count: 19964,
      stars: 4,
    },
    category: 'groceries',
    priceKobo: 750000,
    priceCents: 937.5,
    quantityLeft: 0,
  },
  {
    name: 'Maple praline syrup',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Keto-Crispy-Baked-Garlic-Parmesan-Wings.jpg',
    priceNaira: 5000,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 81,
    rating: {
      count: 14030,
      stars: 5,
    },
    category: 'groceries',
    priceKobo: 500000,
    priceCents: 625,
    quantityLeft: 97,
  },
  {
    name: 'Red grapes',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Red-grapes.jpg',
    priceNaira: 2900,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 82,
    rating: {
      count: 16159,
      stars: 2.5,
    },
    category: 'groceries',
    priceKobo: 290000,
    priceCents: 362.5,
    quantityLeft: 26,
  },
  {
    name: 'Thomas bagel',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Thomas-bagel.jpg',
    priceNaira: 4500,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 83,
    rating: {
      count: 5706,
      stars: 5,
    },
    category: 'groceries',
    priceKobo: 450000,
    priceCents: 562.5,
    quantityLeft: 60,
  },
  {
    name: 'Walnuts',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Groceries/Walnuts.jpg',
    priceNaira: 6300,
    keywords: ['food', 'cooking', 'meal', 'delicious'],
    id: 84,
    rating: {
      count: 18989,
      stars: 1,
    },
    category: 'groceries',
    priceKobo: 630000,
    priceCents: 787.5,
    quantityLeft: 85,
  },
  {
    name: "Baseball uniform men's jacket",
    imageLocation:
      "../../../Resources/Images/products/Product-categories/Men-clothing/Baseball-uniform-men's-jacket-spring.jpg",
    priceNaira: 15000,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 85,
    rating: {
      count: 15105,
      stars: 0,
    },
    category: 'men-clothing',
    priceKobo: 1500000,
    priceCents: 1875,
    quantityLeft: 6,
  },
  {
    name: 'Black top and shorts fit',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/black-top-and-shorts-fit.jpg',
    priceNaira: 3500,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 86,
    rating: {
      count: 475,
      stars: 3.5,
    },
    category: 'men-clothing',
    priceKobo: 350000,
    priceCents: 437.5,
    quantityLeft: 75,
  },
  {
    name: 'Hip hop jeans',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/Cargo-pants-Hip-Hop.jpg',
    priceNaira: 7300,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 87,
    rating: {
      count: 14214,
      stars: 0,
    },
    category: 'men-clothing',
    priceKobo: 730000,
    priceCents: 912.5,
    quantityLeft: 53,
  },
  {
    name: 'Casual outdoor jacket',
    imageLocation:
      "../../../Resources/Images/products/Product-categories/Men-clothing/Jacket-Men's-Casual-Outdoor-Wear-Spring.jpg",
    priceNaira: 27000,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 88,
    rating: {
      count: 10660,
      stars: 3.5,
    },
    category: 'men-clothing',
    priceKobo: 2700000,
    priceCents: 3375,
    quantityLeft: 33,
  },
  {
    name: 'Purple drawstring sweatpants',
    imageLocation:
      "../../../Resources/Images/products/Product-categories/Men-clothing/Men's-Sweatpants-Joggers-Trousers-Drawstring-Side-Pockets-Ela.jpg",
    priceNaira: 12000,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 89,
    rating: {
      count: 19755,
      stars: 4.5,
    },
    category: 'men-clothing',
    priceKobo: 1200000,
    priceCents: 1500,
    quantityLeft: 47,
  },
  {
    name: 'Rip frayed rag stitching jeans',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/Men-Cotton-Ripped-Frayed-Rag-Stitching-Jeans.jpg',
    priceNaira: 6500,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 90,
    rating: {
      count: 14370,
      stars: 0.5,
    },
    category: 'men-clothing',
    priceKobo: 650000,
    priceCents: 812.5,
    quantityLeft: 64,
  },
  {
    name: 'Winter fit collection',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/Men-winter-fit.jpg',
    priceNaira: 29000,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 91,
    rating: {
      count: 13729,
      stars: 5,
    },
    category: 'men-clothing',
    priceKobo: 2900000,
    priceCents: 3625,
    quantityLeft: 92,
  },
  {
    name: 'Reflective loose fit jacket',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/Mens-Lightweight-Fashion-Loose-Fit-Reflective.jpg',
    priceNaira: 17000,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 92,
    rating: {
      count: 828,
      stars: 3.5,
    },
    category: 'men-clothing',
    priceKobo: 1700000,
    priceCents: 2125,
    quantityLeft: 39,
  },
  {
    name: 'Nike hoodie',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/Nike-hoodie.jpg',
    priceNaira: 20000,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 93,
    rating: {
      count: 6332,
      stars: 0,
    },
    category: 'men-clothing',
    priceKobo: 2000000,
    priceCents: 2500,
    quantityLeft: 78,
  },
  {
    name: 'Beige cargo pants',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/Pants-for-Men.jpg',
    priceNaira: 17500,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 94,
    rating: {
      count: 10700,
      stars: 5,
    },
    category: 'men-clothing',
    priceKobo: 1750000,
    priceCents: 2187.5,
    quantityLeft: 17,
  },
  {
    name: 'Patchwork printed sweatshirt',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/Patchwork-Printed-Sweatshirts-for-Men.jpg',
    priceNaira: 8300,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 95,
    rating: {
      count: 8918,
      stars: 5,
    },
    category: 'men-clothing',
    priceKobo: 830000,
    priceCents: 1037.5,
    quantityLeft: 16,
  },
  {
    name: 'Rick and morty sneakers',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/Rick-and-morty.jpg',
    priceNaira: 32000,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 96,
    rating: {
      count: 7561,
      stars: 0.5,
    },
    category: 'men-clothing',
    priceKobo: 3200000,
    priceCents: 4000,
    quantityLeft: 73,
  },
  {
    name: 'White t shirt with mountain design',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/White-T-shirt-with-mountain-design.jpg',
    priceNaira: 17900,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 97,
    rating: {
      count: 10087,
      stars: 3.5,
    },
    category: 'men-clothing',
    priceKobo: 1790000,
    priceCents: 2237.5,
    quantityLeft: 30,
  },
  {
    name: 'Winter bomber jacket',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/Winter-Outdoor-Thick-Bomber-jacket.jpg',
    priceNaira: 37000,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 98,
    rating: {
      count: 7056,
      stars: 3.5,
    },
    category: 'men-clothing',
    priceKobo: 3700000,
    priceCents: 4625,
    quantityLeft: 70,
  },
  {
    name: 'Winter stripe sweater',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Men-clothing/Winter-Stripe-Sweater-Thick.jpg',
    priceNaira: 17800,
    keywords: ['mens', 'clothing', 'casual', 'outdoors'],
    id: 99,
    rating: {
      count: 15910,
      stars: 4.5,
    },
    category: 'men-clothing',
    priceKobo: 1780000,
    priceCents: 2225,
    quantityLeft: 32,
  },
  {
    name: 'Play station 5',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Play-station-5.jpg',
    priceNaira: 560000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 100,
    rating: {
      count: 14303,
      stars: 0,
    },
    category: 'gaming',
    priceKobo: 56000000,
    priceCents: 70000,
    quantityLeft: 8,
  },
  {
    name: 'Stereo gaming headset',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/BENGOO-G9000-Stereo-Gaming-Headset-for-PS4-PC-Xbox-One-PS5-Controll.jpg',
    priceNaira: 15000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 101,
    rating: {
      count: 12747,
      stars: 3.5,
    },
    category: 'gaming',
    priceKobo: 1500000,
    priceCents: 1875,
    quantityLeft: 13,
  },
  {
    name: 'Computer case',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Computer-case.jpg',
    priceNaira: 78000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 102,
    rating: {
      count: 4316,
      stars: 2,
    },
    category: 'gaming',
    priceKobo: 7800000,
    priceCents: 9750,
    quantityLeft: 44,
  },
  {
    name: 'Crystal controller holder',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Crystal-Controller-Holder.jpg',
    priceNaira: 24000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 103,
    rating: {
      count: 7104,
      stars: 1,
    },
    category: 'gaming',
    priceKobo: 2400000,
    priceCents: 3000,
    quantityLeft: 26,
  },
  {
    name: 'Custom joy con',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Custom-Joy-Con-LED.jpg',
    priceNaira: 80000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 104,
    rating: {
      count: 19218,
      stars: 0.5,
    },
    category: 'gaming',
    priceKobo: 8000000,
    priceCents: 10000,
    quantityLeft: 11,
  },
  {
    name: 'Divoom gamer setup',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Divoom-gamer-girl-cute-set-up.jpg',
    priceNaira: 110500,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 105,
    rating: {
      count: 18554,
      stars: 2,
    },
    category: 'gaming',
    priceKobo: 11050000,
    priceCents: 13812.5,
    quantityLeft: 55,
  },
  {
    name: 'Dock-cover pro™',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Dock-Cover-Transparent.jpg',
    priceNaira: 27000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 106,
    rating: {
      count: 6384,
      stars: 3.5,
    },
    category: 'gaming',
    priceKobo: 2700000,
    priceCents: 3375,
    quantityLeft: 26,
  },
  {
    name: 'Neon game sign',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Game-Vs-PNG-Transparent,-Neon-Game-Hall-Vs-Game-Sign,-Confrontation.jpg',
    priceNaira: 3400,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 107,
    rating: {
      count: 15673,
      stars: 1.5,
    },
    category: 'gaming',
    priceKobo: 340000,
    priceCents: 425,
    quantityLeft: 11,
  },
  {
    name: 'Gaming headphones stand desk',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Gaming-Headphone-Stand-for-Desk.jpg',
    priceNaira: 21000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 108,
    rating: {
      count: 4727,
      stars: 4.5,
    },
    category: 'gaming',
    priceKobo: 2100000,
    priceCents: 2625,
    quantityLeft: 35,
  },
  {
    name: 'Gaming setup',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Gaming-setup.jpg',
    priceNaira: 340000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 109,
    rating: {
      count: 7321,
      stars: 0.5,
    },
    category: 'gaming',
    priceKobo: 34000000,
    priceCents: 42500,
    quantityLeft: 4,
  },
  {
    name: 'Gaming VR glasses',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Gaming-VR-glasses.jpg',
    priceNaira: 243000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 110,
    rating: {
      count: 2421,
      stars: 1.5,
    },
    category: 'gaming',
    priceKobo: 24300000,
    priceCents: 30375,
    quantityLeft: 79,
  },
  {
    name: 'Headset holder',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Headset-holder.jpg',
    priceNaira: 12000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 111,
    rating: {
      count: 3480,
      stars: 2.5,
    },
    category: 'gaming',
    priceKobo: 1200000,
    priceCents: 1500,
    quantityLeft: 17,
  },
  {
    name: 'Hyperkin armor 3 wired keyboard',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Hyperkin-Armor3-NuType-Wired-Keyboard-for-Nintendo-Switch,-S.jpg',
    priceNaira: 52000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 112,
    rating: {
      count: 12889,
      stars: 2,
    },
    category: 'gaming',
    priceKobo: 5200000,
    priceCents: 6500,
    quantityLeft: 5,
  },
  {
    name: 'Meta quest 2',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Meta-Quest-2.jpg',
    priceNaira: 500000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 113,
    rating: {
      count: 457,
      stars: 1,
    },
    category: 'gaming',
    priceKobo: 50000000,
    priceCents: 62500,
    quantityLeft: 31,
  },
  {
    name: 'Purple reclining gaming chair',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Gaming/Purple-Gaming-Chair,-Reclining.jpg',
    priceNaira: 76000,
    keywords: ['gaming', 'fun', 'intense', 'realistic'],
    id: 114,
    rating: {
      count: 4273,
      stars: 4.5,
    },
    category: 'gaming',
    priceKobo: 7600000,
    priceCents: 9500,
    quantityLeft: 10,
  },
  {
    name: '101 essays that will change the way you think',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/101-essays-that-will-change-the-way-you-think.jpg',
    priceNaira: 8000,
    keywords: ['hange', 'the', 'way', 'you', 'think'],
    id: 115,
    rating: {
      count: 6045,
      stars: 0,
    },
    category: 'books',
    priceKobo: 800000,
    priceCents: 1000,
    quantityLeft: 9,
  },
  {
    name: 'eloquence',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/Eloquence-book.jpg',
    priceNaira: 10500,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 116,
    rating: {
      count: 6471,
      stars: 2,
    },
    category: 'books',
    priceKobo: 1050000,
    priceCents: 1312.5,
    quantityLeft: 66,
  },
  {
    name: 'Forbidden knowledge',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/Forbidden-knowledge.jpg',
    priceNaira: 3700,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 117,
    rating: {
      count: 11312,
      stars: 2.5,
    },
    category: 'books',
    priceKobo: 370000,
    priceCents: 462.5,
    quantityLeft: 30,
  },
  {
    name: 'How to be better at almost everything',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/How-to-be-better-at-almost-everything.jpg',
    priceNaira: 6700,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 118,
    rating: {
      count: 19179,
      stars: 0,
    },
    category: 'books',
    priceKobo: 670000,
    priceCents: 837.5,
    quantityLeft: 86,
  },
  {
    name: 'How to make people do what you want',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/How-to-make-people-do-what-they-want.jpg',
    priceNaira: 6500,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 119,
    rating: {
      count: 6720,
      stars: 4,
    },
    category: 'books',
    priceKobo: 650000,
    priceCents: 812.5,
    quantityLeft: 43,
  },
  {
    name: 'How to own your mind',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/How-to-own-your-mind.jpg',
    priceNaira: 17200,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 120,
    rating: {
      count: 6710,
      stars: 5,
    },
    category: 'books',
    priceKobo: 1720000,
    priceCents: 2150,
    quantityLeft: 95,
  },
  {
    name: 'How to think strategically',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/How-To-Think-Strategically.jpg',
    priceNaira: 12000,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 121,
    rating: {
      count: 9906,
      stars: 2.5,
    },
    category: 'books',
    priceKobo: 1200000,
    priceCents: 1500,
    quantityLeft: 41,
  },
  {
    name: 'Hyperfocus',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/Hyper-focus.jpg',
    priceNaira: 6300,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 122,
    rating: {
      count: 17548,
      stars: 4,
    },
    category: 'books',
    priceKobo: 630000,
    priceCents: 787.5,
    quantityLeft: 68,
  },
  {
    name: 'Lead yourself first',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/Lead-Yourself-First.jpg',
    priceNaira: 7900,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 123,
    rating: {
      count: 3147,
      stars: 2,
    },
    category: 'books',
    priceKobo: 790000,
    priceCents: 987.5,
    quantityLeft: 61,
  },
  {
    name: 'Magnetic charisma',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/Magnetic-charisma.jpg',
    priceNaira: 3400,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 124,
    rating: {
      count: 9290,
      stars: 2.5,
    },
    category: 'books',
    priceKobo: 340000,
    priceCents: 425,
    quantityLeft: 56,
  },
  {
    name: 'Mindset',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/Mindset.jpg',
    priceNaira: 4200,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 125,
    rating: {
      count: 4702,
      stars: 3,
    },
    category: 'books',
    priceKobo: 420000,
    priceCents: 525,
    quantityLeft: 74,
  },
  {
    name: "Personality isn't permanent",
    imageLocation:
      "../../../Resources/Images/products/Product-categories/Books/Personality-isn't-permanent.jpg",
    priceNaira: 27000,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 126,
    rating: {
      count: 19129,
      stars: 2,
    },
    category: 'books',
    priceKobo: 2700000,
    priceCents: 3375,
    quantityLeft: 80,
  },
  {
    name: 'persuasion influence people',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/Persuasion-influence-people.jpg',
    priceNaira: 13000,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 127,
    rating: {
      count: 365,
      stars: 2.5,
    },
    category: 'books',
    priceKobo: 1300000,
    priceCents: 1625,
    quantityLeft: 97,
  },
  {
    name: "Seeing what others don't",
    imageLocation:
      "../../../Resources/Images/products/Product-categories/Books/Seeing-what-others-don't.jpg",
    priceNaira: 15000,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 128,
    rating: {
      count: 11176,
      stars: 1.5,
    },
    category: 'books',
    priceKobo: 1500000,
    priceCents: 1875,
    quantityLeft: 24,
  },
  {
    name: 'Words that change minds',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Books/Words-that-change-minds.jpg',
    priceNaira: 6800,
    keywords: ['books', 'learn', 'idea', 'pages'],
    id: 129,
    rating: {
      count: 9371,
      stars: 2,
    },
    category: 'books',
    priceKobo: 680000,
    priceCents: 850,
    quantityLeft: 42,
  },
  {
    name: 'African fashion sneakers',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/African-fashion-sneakers.jpg',
    priceNaira: 7600,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 130,
    rating: {
      count: 15297,
      stars: 3,
    },
    category: 'sneakers',
    priceKobo: 760000,
    priceCents: 950,
    quantityLeft: 31,
  },
  {
    name: 'Nike air jordan orange and blue',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Nike-air-jordan-1-orange-and-blue.jpg',
    priceNaira: 27000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 131,
    rating: {
      count: 6064,
      stars: 1,
    },
    category: 'sneakers',
    priceKobo: 2700000,
    priceCents: 3375,
    quantityLeft: 39,
  },
  {
    name: 'Paul Auratn sneakers',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Paul-Auratn-sneakers.jpg',
    priceNaira: 73000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 132,
    rating: {
      count: 13894,
      stars: 1.5,
    },
    category: 'sneakers',
    priceKobo: 7300000,
    priceCents: 9125,
    quantityLeft: 35,
  },
  {
    name: 'Nike air jordan blue',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Air-jordan-dark-blue.jpg',
    priceNaira: 93000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 133,
    rating: {
      count: 11690,
      stars: 3,
    },
    category: 'sneakers',
    priceKobo: 9300000,
    priceCents: 11625,
    quantityLeft: 68,
  },
  {
    name: 'Aqua marine air jordan sneakers',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Aqua-marine-air-jordan-sneakers.jpg',
    priceNaira: 43000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 134,
    rating: {
      count: 9799,
      stars: 2,
    },
    category: 'sneakers',
    priceKobo: 4300000,
    priceCents: 5375,
    quantityLeft: 18,
  },
  {
    name: 'Black and white sport sneakers',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Black-and-white-sport-sneakers.jpg',
    priceNaira: 45000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 135,
    rating: {
      count: 14688,
      stars: 3.5,
    },
    category: 'sneakers',
    priceKobo: 4500000,
    priceCents: 5625,
    quantityLeft: 41,
  },
  {
    name: 'Corunda fabric sneakers',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Cordura-fabric-sneakers.jpg',
    priceNaira: 52000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 136,
    rating: {
      count: 19236,
      stars: 0,
    },
    category: 'sneakers',
    priceKobo: 5200000,
    priceCents: 6500,
    quantityLeft: 54,
  },
  {
    name: 'Olive-green fashion sneakers',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Fashion-olive-green-sneakers.jpg',
    priceNaira: 24000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 137,
    rating: {
      count: 9719,
      stars: 2,
    },
    category: 'sneakers',
    priceKobo: 2400000,
    priceCents: 3000,
    quantityLeft: 53,
  },
  {
    name: 'Maroon red fashion sneakers',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Maroon-red-fashion-sneakers.jpg',
    priceNaira: 12000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 138,
    rating: {
      count: 6844,
      stars: 3.5,
    },
    category: 'sneakers',
    priceKobo: 1200000,
    priceCents: 1500,
    quantityLeft: 55,
  },
  {
    name: 'Nike air jordan 4 black cat',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Nike-air-jordan-4-Black-cat.jpg',
    priceNaira: 150000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 139,
    rating: {
      count: 460,
      stars: 2,
    },
    category: 'sneakers',
    priceKobo: 15000000,
    priceCents: 18750,
    quantityLeft: 27,
  },
  {
    name: 'Nike air jordan kids rainbow',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Nike-air-kids-rainbow.jpg',
    priceNaira: 74000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 140,
    rating: {
      count: 12371,
      stars: 2,
    },
    category: 'sneakers',
    priceKobo: 7400000,
    priceCents: 9250,
    quantityLeft: 74,
  },
  {
    name: 'Nike air max tavas',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Nike-air-max-tavas.jpg',
    priceNaira: 49000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 141,
    rating: {
      count: 16649,
      stars: 4,
    },
    category: 'sneakers',
    priceKobo: 4900000,
    priceCents: 6125,
    quantityLeft: 74,
  },
  {
    name: 'Nike air jordan velvet red',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Nike-velvet-red-sneakers.jpg',
    priceNaira: 795000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 142,
    rating: {
      count: 2784,
      stars: 4,
    },
    category: 'sneakers',
    priceKobo: 79500000,
    priceCents: 99375,
    quantityLeft: 47,
  },
  {
    name: 'Y3KVB sneakers',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Y3KVB-sneakers.jpg',
    priceNaira: 30000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 143,
    rating: {
      count: 15556,
      stars: 2,
    },
    category: 'sneakers',
    priceKobo: 3000000,
    priceCents: 3750,
    quantityLeft: 86,
  },
  {
    name: 'Sky blue fashion brand sneakers',
    imageLocation:
      '../../../Resources/Images/products/Product-categories/Sneakers/Sky-blue-fashion-brand-sneakers.jpg',
    priceNaira: 36000,
    keywords: ['sneakers', 'fashion', 'trend', 'comfy'],
    id: 144,
    rating: {
      count: 14552,
      stars: 4.5,
    },
    category: 'sneakers',
    priceKobo: 3600000,
    priceCents: 4500,
    quantityLeft: 51,
  },
  {
    id: 145,
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
    keywords: ['socks', 'sports', 'apparel'],
    priceKobo: 872000,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/athletic-cotton-socks-6-pairs.jpg',
  },
  {
    id: 146,
    name: 'Intermediate Size Basketball',
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
    keywords: ['sports', 'basketballs'],
    priceKobo: 1676000,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/intermediate-composite-basketball.jpg',
  },
  {
    id: 147,
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
    keywords: ['tshirts', 'apparel', 'mens'],
    type: 'clothing',
    sizeChartLink: 'images/clothing-size-chart.png',
    priceKobo: 639200,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  },
  {
    id: 148,
    name: '2 Slot Toaster - Black',
    rating: {
      stars: 5,
      count: 2197,
    },
    priceCents: 1899,
    keywords: ['toaster', 'kitchen', 'appliances'],
    priceKobo: 1519200,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/black-2-slot-toaster.jpg',
  },
  {
    id: 149,
    name: '6 Piece White Dinner Plate Set',
    rating: {
      stars: 4,
      count: 37,
    },
    priceCents: 2067,
    keywords: ['plates', 'kitchen', 'dining'],
    priceKobo: 1653600,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/6-piece-white-dinner-plate-set.jpg',
  },
  {
    id: 150,
    name: '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set',
    rating: {
      stars: 4.5,
      count: 175,
    },
    priceCents: 3499,
    keywords: ['kitchen', 'cookware'],
    priceKobo: 2799200,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/6-piece-non-stick-baking-set.webp',
  },
  {
    id: 151,
    name: 'Plain Hooded Fleece Sweatshirt',
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceCents: 2400,
    keywords: ['hoodies', 'sweaters', 'apparel'],
    priceKobo: 1920000,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/plain-hooded-fleece-sweatshirt-yellow.jpg',
  },
  {
    id: 152,
    name: 'Luxury Towel Set - Graphite Gray',
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceCents: 3599,
    keywords: ['bathroom', 'washroom', 'restroom', 'towels', 'bath towels'],
    priceKobo: 2879200,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/luxury-tower-set-6-piece.jpg',
  },
  {
    id: 153,
    name: 'Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz',
    rating: {
      stars: 4.5,
      count: 305,
    },
    priceCents: 2899,
    keywords: ['bathroom', 'cleaning'],
    priceKobo: 2319200,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/liquid-laundry-detergent-plain.jpg',
  },
  {
    id: 154,
    name: 'Waterproof Knit Athletic Sneakers - Gray',
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
    keywords: ['shoes', 'running shoes', 'footwear'],
    priceKobo: 2712000,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/knit-athletic-sneakers-gray.jpg',
  },
  {
    id: 155,
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235,
    },
    priceCents: 2070,
    keywords: ['robe', 'swimsuit', 'swimming', 'bathing', 'apparel'],
    type: 'clothing',
    sizeChartLink: 'images/clothing-size-chart.png',
    priceKobo: 1656000,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/women-chiffon-beachwear-coverup-black.jpg',
  },
  {
    id: 156,
    name: 'Round Sunglasses',
    rating: {
      stars: 4.5,
      count: 30,
    },
    priceCents: 1560,
    keywords: ['accessories', 'shades'],
    priceKobo: 1248000,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/round-sunglasses-black.jpg',
  },
  {
    id: 157,
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562,
    },
    priceCents: 2499,
    keywords: ['footwear', 'sandals', 'womens', 'beach', 'summer'],
    priceKobo: 1999200,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/women-beach-sandals.jpg',
  },
  {
    id: 158,
    name: 'Blackout Curtains Set 4-Pack - Beige',
    rating: {
      stars: 4.5,
      count: 232,
    },
    priceCents: 4599,
    keywords: ['bedroom', 'curtains', 'home'],
    priceKobo: 3679200,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/blackout-curtain-set-beige.webp',
  },
  {
    id: 159,
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160,
    },
    priceCents: 1699,
    keywords: ['shorts', 'apparel', 'mens'],
    priceKobo: 1359200,
    category: 'top-category',
    imageLocation:
      '../../Resources/Images/products/Top-categories/men-slim-fit-summer-shorts-gray.jpg',
  },
  {
    id: 160,
    name: 'Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter',
    rating: {
      stars: 5,
      count: 846,
    },
    priceCents: 3074,
    keywords: ['water boiler', 'appliances', 'kitchen'],
    priceKobo: 2459200,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/electric-glass-and-steel-hot-water-kettle.webp',
  },
  {
    id: 161,
    name: 'Ultra Soft Tissue 2-Ply - 18 Box',
    rating: {
      stars: 4,
      count: 99,
    },
    priceCents: 2374,
    keywords: ['kleenex', 'tissues', 'kitchen', 'tissues box', 'napkins'],
    priceKobo: 1899200,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/facial-tissue-2-ply-18-boxes.jpg',
  },
  {
    id: 162,
    name: 'Straw Lifeguard Sun Hat',
    rating: {
      stars: 4,
      count: 215,
    },
    priceCents: 2200,
    keywords: ['hats', 'straw hats', 'summer', 'apparel'],
    priceKobo: 1760000,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/straw-sunhat.webp',
  },
  {
    id: 163,
    name: 'Sterling Silver Sky Flower Stud Earrings',
    rating: {
      stars: 4.5,
      count: 52,
    },
    priceCents: 1799,
    keywords: ['jewelry', 'accessories', 'womens'],
    priceKobo: 1439200,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/sky-flower-stud-earrings.webp',
  },
  {
    id: 164,
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 4.5,
      count: 2465,
    },
    priceCents: 1374,
    keywords: ['hooded', 'hoodies', 'sweaters', 'womens', 'apparel'],
    type: 'clothing',
    sizeChartLink: 'images/clothing-size-chart.png',
    priceKobo: 1099200,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/women-stretch-popover-hoodie-black.jpg',
  },
  {
    id: 165,
    name: 'Bathroom Bath Rug Mat 20 x 31 Inch - Grey',
    rating: {
      stars: 4.5,
      count: 119,
    },
    priceCents: 1250,
    keywords: ['bathmat', 'bathroom', 'home'],
    priceKobo: 1000000,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/bathroom-rug.jpg',
  },
  {
    id: 166,
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326,
    },
    priceCents: 2640,
    keywords: ['shoes', 'flats', 'womens', 'footwear'],
    priceKobo: 2112000,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/women-knit-ballet-flat-black.jpg',
  },
  {
    id: 167,
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556,
    },
    priceCents: 1599,
    keywords: ['tshirts', 'shirts', 'apparel', 'mens'],
    type: 'clothing',
    sizeChartLink: 'images/clothing-size-chart.png',
    priceKobo: 1279200,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/men-golf-polo-t-shirt-blue.jpg',
  },
  {
    id: 168,
    name: 'Trash Can with Foot Pedal - Brushed Stainless Steel',
    rating: {
      stars: 4.5,
      count: 2286,
    },
    priceCents: 8300,
    keywords: ['garbage', 'bins', 'cans', 'kitchen'],
    priceKobo: 6640000,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/trash-can-with-foot-pedal-50-liter.jpg',
  },
  {
    id: 169,
    name: 'Duvet Cover Set with Zipper Closure',
    rating: {
      stars: 4,
      count: 456,
    },
    priceCents: 2399,
    keywords: ['bedroom', 'bed sheets', 'sheets', 'covers', 'home'],
    priceKobo: 1919200,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/duvet-cover-set-blue-twin.jpg',
  },
  {
    id: 170,
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83,
    },
    priceCents: 1250,
    keywords: ['hats', 'winter hats', 'beanies', 'tuques', 'apparel', 'womens'],
    priceKobo: 1000000,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/women-chunky-beanie-gray.webp',
  },
  {
    id: 171,
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017,
    },
    priceCents: 2290,
    keywords: ['pants', 'apparel', 'mens'],
    priceKobo: 1832000,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/men-chino-pants-beige.jpg',
  },
  {
    id: 172,
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229,
    },
    priceCents: 3890,
    keywords: ['shoes', 'running shoes', 'footwear', 'mens'],
    priceKobo: 3112000,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/men-athletic-shoes-green.jpg',
  },
  {
    id: 173,
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42,
    },
    priceCents: 1690,
    keywords: ['sunglasses', 'glasses', 'accessories', 'shades'],
    priceKobo: 1352000,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/men-navigator-sunglasses-brown.jpg',
  },
  {
    id: 174,
    name: 'Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces',
    rating: {
      stars: 4.5,
      count: 511,
    },
    priceCents: 6797,
    keywords: ['cooking set', 'kitchen'],
    priceKobo: 5437600,
    category: 'new-to-hyperspace',
    imageLocation:
      '../../Resources/Images/products/New-to-hyperspace/non-stick-cooking-set-15-pieces.webp',
  },
  {
    id: 175,
    name: 'Vanity Mirror with Heavy Base - Chrome',
    rating: {
      stars: 4.5,
      count: 130,
    },
    priceCents: 1649,
    keywords: ['bathroom', 'washroom', 'mirrors', 'home'],
    priceKobo: 1319200,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/vanity-mirror-silver.jpg',
  },
  {
    id: 176,
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248,
    },
    priceCents: 2400,
    keywords: ['pants', 'sweatpants', 'jogging', 'apparel', 'womens'],
    priceKobo: 1920000,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/women-french-terry-fleece-jogger-camo.jpg',
  },
  {
    id: 177,
    name: 'Double Oval Twist French Wire Earrings - Gold',
    rating: {
      stars: 4.5,
      count: 117,
    },
    priceCents: 2400,
    keywords: ['accessories', 'womens'],
    priceKobo: 1920000,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/double-elongated-twist-french-wire-earrings.webp',
  },
  {
    id: 178,
    name: 'Round Airtight Food Storage Containers - 5 Piece',
    rating: {
      stars: 4,
      count: 126,
    },
    priceCents: 2899,
    keywords: ['boxes', 'food containers', 'kitchen'],
    priceKobo: 2319200,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/round-airtight-food-storage-containers.jpg',
  },
  {
    id: 179,
    name: 'Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black',
    rating: {
      stars: 4.5,
      count: 1211,
    },
    priceCents: 2250,
    keywords: ['coffeemakers', 'kitchen', 'appliances'],
    priceKobo: 1800000,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/coffeemaker-with-glass-carafe-black.jpg',
  },
  {
    id: 180,
    name: 'Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels',
    rating: {
      stars: 4.5,
      count: 363,
    },
    priceCents: 3099,
    keywords: ['bedroom', 'home'],
    priceKobo: 2479200,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/blackout-curtains-black.jpg',
  },
  {
    id: 181,
    name: '100% Cotton Bath Towels - 2 Pack, Light Teal',
    rating: {
      stars: 4.5,
      count: 93,
    },
    priceCents: 2110,
    keywords: ['bathroom', 'home', 'towels'],
    priceKobo: 1688000,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/cotton-bath-towels-teal.webp',
  },
  {
    id: 182,
    name: 'Waterproof Knit Athletic Sneakers - Pink',
    rating: {
      stars: 4,
      count: 89,
    },
    priceCents: 3390,
    keywords: ['shoes', 'running shoes', 'footwear', 'womens'],
    priceKobo: 2712000,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/knit-athletic-sneakers-pink.webp',
  },
  {
    id: 183,
    name: 'Countertop Blender - 64oz, 1400 Watts',
    rating: {
      stars: 4,
      count: 3,
    },
    priceCents: 10747,
    keywords: ['food blenders', 'kitchen', 'appliances'],
    priceKobo: 8597600,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/countertop-blender-64-oz.jpg',
  },
  {
    id: 184,
    name: '10-Piece Mixing Bowl Set with Lids - Floral',
    rating: {
      stars: 5,
      count: 679,
    },
    priceCents: 3899,
    keywords: ['mixing bowls', 'baking', 'cookware', 'kitchen'],
    priceKobo: 3119200,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/floral-mixing-bowl-set.jpg',
  },
  {
    id: 185,
    name: '2-Ply Kitchen Paper Towels - 30 Pack',
    rating: {
      stars: 4.5,
      count: 1045,
    },
    priceCents: 5799,
    keywords: ['kitchen', 'kitchen towels', 'tissues'],
    priceKobo: 4639200,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/kitchen-paper-towels-30-pack.jpg',
  },
  {
    id: 186,
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157,
    },
    priceCents: 2400,
    keywords: ['sweaters', 'hoodies', 'apparel', 'mens'],
    priceKobo: 1920000,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/men-cozy-fleece-zip-up-hoodie-red.jpg',
  },
  {
    id: 187,
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83,
    },
    priceCents: 1250,
    keywords: ['hats', 'winter hats', 'beanies', 'tuques', 'apparel', 'womens'],
    priceKobo: 1000000,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/women-chunky-beanie-gray.webp',
  },
  {
    id: 188,
    name: 'Luxury Towel Set - Graphite Gray',
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceCents: 3599,
    keywords: ['bathroom', 'washroom', 'restroom', 'towels', 'bath towels'],
    priceKobo: 2879200,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/luxury-tower-set-6-piece.jpg',
  },
  {
    id: 189,
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
    keywords: ['tshirts', 'apparel', 'mens'],
    type: 'clothing',
    sizeChartLink: 'images/clothing-size-chart.png',
    priceKobo: 639200,
    category: 'trending',
    imageLocation:
      '../../Resources/Images/products/Trending/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  },
];
