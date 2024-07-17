// Function to increase quantity
function increaseQuantity(element) {
  var input = element.previousElementSibling;
  var value = parseInt(input.value);
  input.value = value + 1;
}

// Function to decrease quantity
function decreaseQuantity(element) {
  var input = element.nextElementSibling;
  var value = parseInt(input.value);
  if (value > 1) {
    input.value = value - 1;
  }
}

// Function to remove item
function removeItem(element) {
  var item = element.closest(".order-item");
  item.remove();
}

// Show credit card info if credit card payment method is selected
document.getElementById("credit-card").addEventListener("change", function () {
  document.getElementById("credit-card-info").style.display = "block";
});

// Hide credit card info if PayPal payment method is selected
document.getElementById("paypal").addEventListener("change", function () {
  document.getElementById("credit-card-info").style.display = "none";
});
