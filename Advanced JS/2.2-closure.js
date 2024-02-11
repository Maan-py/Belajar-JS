function init() {
  // let nama = "Sandhika";
  return function (nama) {
    console.log(nama);
  };
}

let panggilNama = init();
panggilNama("Sandhika");
panggilNama("Galih");

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatMalam = ucapkanSalam("Malam");

selamatPagi("Sandhika");
selamatMalam("Galih");


// Closure

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

// let a = add();

console.log(add());
console.log(add());
console.log(add());
