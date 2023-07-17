```javascript
let pricingData = {
  basic: 10,
  premium: 20,
  enterprise: 30
};

let calculatorContainer = document.getElementById('calculatorContainer');

function calculatePrice(plan, quantity) {
  return pricingData[plan] * quantity;
}

function updatePricing() {
  let plan = document.getElementById('plan').value;
  let quantity = document.getElementById('quantity').value;
  let price = calculatePrice(plan, quantity);
  
  let priceElement = document.getElementById('price');
  priceElement.textContent = 'Total Price: $' + price;
}

calculatorContainer.addEventListener('input', updatePricing);
```