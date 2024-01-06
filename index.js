const cart = document.querySelector('.cart-icon');
const boxCart = document.querySelector('.box-cart');
const aside = document.querySelector('aside');
const addToCart = document.querySelector('.add-btn-cart');
const setCounter = document.querySelector('.set-counter');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const alert = document.querySelector('.alert');
const cartCounter = document.querySelector('.cart-counter');
const fullCart = document.querySelector('.full-cart');
const emptyCart = document.querySelector('.empty-cart');
const cartContent = document.querySelector('.cart-content');
const deleteCartContent = document.querySelector('.basket-cart');
const productQuantity = document.querySelector('.quantity');
const totalPrice = document.querySelector('.total-price');
const itemPrice = document.querySelector('.item-price');
const images = document.querySelectorAll('.single-pic img');
const mainPic = document.querySelector('.main-pic img');
const customBorderImg = document.querySelectorAll('.single-pic span');
const mainPic2 = document.querySelector('.main-pic2 img');
const [rightArrow, leftArrow] = document.querySelectorAll(
  '.main-pic2 iconify-icon'
);
const overlay = document.querySelector('.overlay');
const prueba = document.querySelector('.prueba');
const close = document.querySelector('.close-icon');
let count = 1;
const imagesSource = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg',
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg',
];

cart.addEventListener('click', function () {
  boxCart.classList.toggle('box-cart-display');
});
aside.addEventListener('click', function () {
  boxCart.classList.add('box-cart-display');
});
addToCart.onclick = function () {
  if (setCounter.textContent === '0') {
    alert.style.display = 'block';
    setTimeout(function () {
      alert.style.display = 'none';
    }, 2000);
  } else {
    cartCounter.textContent = '1';
    productQuantity.textContent = setCounter.textContent;
    totalPrice.textContent = `${
      +productQuantity.textContent * +itemPrice.textContent
    }`;
  }
};
increaseBtn.addEventListener('click', () => {
  setCounter.textContent = +setCounter.textContent + 1;
});
decreaseBtn.addEventListener('click', () =>
  setCounter.textContent === '0'
    ? ''
    : (setCounter.textContent = +setCounter.textContent - 1)
);

// control cart BOX Design

cart.addEventListener('click', function () {
  if (cartCounter.textContent !== '0') {
    emptyCart.style.display = 'none';
  } else {
    emptyCart.style.display = 'block';
    fullCart.style.display = 'none';
  }
});
deleteCartContent.addEventListener('click', function () {
  emptyCart.style.display = 'block';
  fullCart.style.display = 'none';
  cartCounter.textContent = '0';
});

// Control overlay

mainPic.addEventListener('click', function () {
  overlay.style.display = 'block';
  prueba.style.display = 'block';
});

close.onclick = function () {
  overlay.style.display = 'none';
  prueba.style.display = 'none';
};

images.forEach((img) => {
  img.addEventListener('click', function () {
    images.forEach((img) => img.classList.remove('selected-pic'));
    img.classList.add('selected-pic');
  });
});

customBorderImg.forEach((border) =>
  border.addEventListener('click', function () {
    customBorderImg.forEach((border) =>
      border.classList.remove('selected-pic-border')
    );
    border.classList.add('selected-pic-border');
  })
);

for (let i = 0; i < imagesSource.length; i++) {
  images[i].addEventListener('click', function () {
    mainPic.src = imagesSource[i];
    mainPic2.src = imagesSource[i];
  });
}
rightArrow.onclick = function () {
  if (count > 7) {
    count = 0;
  }
  mainPic2.src = imagesSource[count];
  count++;
};

leftArrow.onclick = function () {
  if (count < 0) {
    count = 7;
  }
  mainPic2.src = imagesSource[count];
  count--;
};
