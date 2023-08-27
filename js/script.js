let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});
// Get all the "Add to Cart" buttons on the page
let addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add an event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Get the name and price of the item from the data attributes of the button
    let name = event.target.dataset.name;
    let price = event.target.dataset.price;

    // Add the item to the cart
    addToCart(name, price);
  });
});
