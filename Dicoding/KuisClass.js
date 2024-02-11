class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  isMammal = true;
  eat() {
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  isMammal = false;
  fly() {
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);
console.log(myRabbit);
console.log(myEagle);

function car({ brand, maxSpeed, wheelCount }) {
  this.brand = brand;
  this.maxSpeed = maxSpeed;
  this.wheelCount = wheelCount;
}

const myCar = new car({ brand: "Toyota", maxSpeed: 200, wheelCount: 4 });
console.log(myCar);

// functional programing
const books = [
  { title: "The Da Vinci Code", author: "Dan Brown", sales: 5094805 },
  { title: "The Ghost", author: "Robert Harris", sales: 807311 },
  { title: "White Teeth", author: "Zadie Smith", sales: 815586 },
  { title: "Fifty Shades of Grey", author: "E. L. James", sales: 3758936 },
  { title: "Jamie's Italy", author: "Jamie Oliver", sales: 906968 },
  { title: "I Can Make You Thin", author: "Paul McKenna", sales: 905086 },
  { title: "Harry Potter and the Deathly Hallows", author: "J.K Rowling", sales: 4475152 },
];

const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`);

console.log(greatAuthors);
