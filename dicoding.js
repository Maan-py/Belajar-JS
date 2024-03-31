const restaurant = {
	name : "Bakso Mang Dicoding",
  	city : "Bandungs",
  	"favorite drink" : "Es Teh",
  	favoriteFood : "Bakso ikan",
  	isVegan : false
}

const name = restaurant.name;
const favoriteDrink = restaurant["favorite drink"];

console.log(favoriteDrink);

const evenNumber = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i);
  }
}

console.log(evenNumber);