// this
var a = 10;
console.log(window.a);

// Membuat object

// cara 1 - function declaration
// function halo() {
//     console.log(this.angka);
//     console.log("Halo");
// }

// this.halo();

// this mengembalikan object global

// cara 2 - object literal
var obj = {
  a: 15,
  nama: "Maan",
};
// obj.halo = function() {
//     console.log(this.a);
//     console.log("halo");
// }

// obj.halo()

// this mengembalikan object yang bersangkutan

// cara 3 - constructor
function Halo() {
  console.log(this);
  console.log("halo");
}

var obj1 = new Halo();
var obj2 = new Halo();
