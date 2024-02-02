class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    return `Product: ${this.name}\nPrice: $${this.price.toFixed(2)}`;
  }

  calculateTotal(salestax) {
    return this.price + (this.price * salestax);
  }
}

const salestax = 0.05;
const products = [
  new Product("shirt", 19.99),
  new Product("Pants", 22.50),
  new Product("underwear", 100.00)
];

// Create a single array for all product and total information
const productInfoArray = [];

// Iterate through each product and generate display and total information
for (const product of products) {
  productInfoArray.push(product.displayProduct());
  productInfoArray.push(`Total price (with tax): $${product.calculateTotal(salestax).toFixed(2)}\n`);
}

// Concatenate all information into a single string
const outputString = productInfoArray.join("\n");

// Create a single h1 element for all information
const outputElement = document.createElement("h1");
outputElement.innerText = outputString;
document.body.appendChild(outputElement);