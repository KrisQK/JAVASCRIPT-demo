class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`Product Name: ${this.name}, Price: $${this.price.toFixed(2)}`);
  }
  calculateTotal(salseTax) {
    return this.price * (1 + salseTax);
  }
}

const salseTax = 0.05;

const product1 = new Product("Shirt", 1999);
const product2 = new Product("Pants", 1299);
const product3 = new Product("Shoes", 999.09);

product1.displayProduct(); // Output: Product Name: Shirt, Price: $1999
product2.displayProduct(); // Output: Product Name: Pants, Price: $1299
product3.displayProduct(); // Output: Product Name: Shoes, Price: $999.09

const total = product1.calculateTotal(salseTax);

console.log(`Total price with tax is ${total.toFixed(2)}`);
