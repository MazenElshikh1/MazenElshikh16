





let listCart = [];
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}




$(document).ready(function() {
    // Handle checkout button click event
    $('.buttonCheckout').on('click', function() {
      // Retrieve order details
      var fullName = $('#name').val();
      var phoneNumber = $('#phone').val();
      var address = $('#address').val();
      var city = $('#city').val();
  
      // Construct the order message
      var message = 'Order Details:\n';
      message += 'Full Name: ' + fullName + '\n';
      message += 'Phone Number: ' + phoneNumber + '\n';
      message += 'Address: ' + address + '\n';
      message += 'City: ' + city  ;
  
      // Encode the message for URL
      var encodedMessage = encodeURIComponent(message);
  
      // Replace the following WhatsApp number with your desired recipient number
      var whatsappNumber = '+201007276757';
  
      // Construct the WhatsApp URL
      var whatsappURL = 'https://api.whatsapp.com/send?phone=' + whatsappNumber + '&text=' + encodedMessage;
  
      // Open the WhatsApp URL in a new tab/window
      window.open(whatsappURL, '_blank');
    });
  });
