class Product{
  constructor(name,price){
    this.name=name;
    this.price=price;
  }
  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }
  calculateTotal(salestax){
    return this.price + (this.price *salestax);
  }
 
}
const salestax=0.05;
const product1 =new Product("shirt",19.99);
const product2 =new Product("Pants",22.50);
const product3 =new Product("underwear",100.00);

product1.displayProduct();

const total=product1.calculateTotal(salestax);
product2.displayProduct();

const total2=product2.calculateTotal(salestax);

console.log(`Total price(with tax): $${total.toFixed(2)}`);
console.log(`Total price(with tax): $${total2.toFixed(2)}`);