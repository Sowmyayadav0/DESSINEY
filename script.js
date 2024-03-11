function processPayment() {
    var paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    var paymentDetails = document.getElementById('payment-details');
  
    if (paymentMethod === "cod") {
      paymentDetails.innerHTML = "<p>You chose Cash on Delivery. Payment will be collected when the product is delivered.</p>";
      window.location.href="cash.html"
    } else if (paymentMethod === "online") {
      paymentDetails.innerHTML = "<p>You chose Online Payment. Redirecting to payment gateway...</p>";
      window.location.href="payment.html"
      // Code to redirect to an online payment gateway goes here
    } else {
      paymentDetails.innerHTML = "<p>Please select a payment method.</p>";
    }
  }
  