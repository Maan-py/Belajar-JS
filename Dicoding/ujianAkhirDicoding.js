const firstString = "Hello";
const secondString = "JavaScript";

console.log(firstString + secondString);

const stock = 0;
const milkNeeded = 25;

if (stock > milkNeeded) {
  stock = stock - milkNeeded;
  console.log("Processing your order...");
} else {
  console.log("Out of Stock!");
}

console.log("Thank you");

const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// TODO: Kode untuk menambahkan item Charlie pada index ke-2

phoneticAlphabet.splice(2, 0, "Charlie");

console.log(phoneticAlphabet);

const artistsAndSongs = {
  Keyakizaka46: ["Silent Majority"],
  Blackpink: ["How You Like That", "Ice Cream"],
  JKT48: ["Rapsodi", "Heavy Rotation"],
  Twice: ["What is Love?"],
};

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
delete artistsAndSongs["Keyakizaka46"];
artistsAndSongs["Blackpink"].push("Rose - Gone");

console.log(artistsAndSongs);

const capital = {
  Jakarta: "Indonesia",
  London: "England",
  Tokyo: "Japan",
};
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);

function multiply(num) {
  total = num * num;
}

const result = multiply(3);

console.log(result);

// const sayHello = function () {
//   console.log("hello");
// };

const sayHello = () => {};

// function car({ brand, maxSpeed, wheelCount }) {
//   this.brand = brand;
//   this.maxSpeed = maxSpeed;
//   this.wheelCount = wheelCount;
// }

// const myCar = new car({ brand: "Toyota", maxSpeed: 200, wheelCount: 4 });
// console.log(myCar);

class Car {}
const car = new Car();
console.log(typeof Car);

try {
  const arr = [1, 2, 3, 4];
  for (let i = 0; i <= 4; i++) {
    console.log(arr[i]);
  }
} catch (e) {
  console.log("Out of bounds");
}