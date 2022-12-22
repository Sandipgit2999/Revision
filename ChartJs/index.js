class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  getName() {
    return `this is ${this.name}`;
  }
}

let product1 = new Product("soap", 50, "It is good for us");
let product2 = new Product("shirt", 2000, "nice ");

console.log(product1.getName());
console.log(product2);

let arr = [1, 2, 3, 4];

let [a, b, c, d, e, f] = arr;

console.log(a, b, c, d);
