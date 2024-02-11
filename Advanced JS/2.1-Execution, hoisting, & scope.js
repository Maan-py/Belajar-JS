// 2.1 EXECUTION CONTEXT, HOISTING, & SCOPE
console.log(nama);
var nama = "Rafi";

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// kalau console.log sebelum variable maka akan undefined

var nama = "Rafi";
var umur = 20;

// kalau console.log sebelum function, maka akan jalan

console.log(sayHello());

function sayHello() {
  return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
}

// function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = "Rafi";
var username = "@rafi";
function cetakURL(username) {
  var instagramURL = "http://instagram.com/";
  return instagramURL + username;
}

console.log(cetakURL(username));

function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }
    c();
  }
  b();
}

a();

function satu() {
  var nama = "Rafi";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Erik";
satu();
dua("Doddy");
console.log(nama);
