// cara untuk membuat object pada javascript
// 1. Object Literal
let mahasiswa = {
  nama: "Sandhika",
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan sebanyak ${porsi} porsi!`);
  },
};

let mahasiswa2 = {
  nama: "Doddy",
  energi: 20,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan sebanyak ${porsi} porsi!`);
  },
};

// 2. Function Declaration
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan sebanyak ${porsi} porsi!`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain selama ${jam} jam!`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = methodMahasiswa.makan;
  mahasiswa.main = methodMahasiswa.main;

  return mahasiswa;
}

let sandhika = Mahasiswa("Sandhika", 10);
sandhika;

// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energi, jam) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan sebanyak ${porsi} porsi!`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain selama ${jam} jam!`);
  };
}

let sandhika2 = new Mahasiswa("Sandhika", 20, 1);
sandhika2;

// 4. Object.create()
