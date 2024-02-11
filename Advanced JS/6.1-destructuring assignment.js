const coba = ["satu", "dua", "tiga", "empat", "lima"];

const [a, b, c, d, e] = coba;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const mhs = {
  nama: "Sandhika",
  umur: 33,
  email: "Sandhika@gmail.com",
};

const { nama, umur, email } = mhs;
console.log(nama);
console.log(umur);
console.log(email);

// Destructuring variable / assignment

// Destructuring array
const perkenalan = ["Halo", "nama", "saya", "Sandhika"];

const [salam, , , name] = perkenalan;
console.log(name);

// swap items
let aa = 1;
let bb = 2;

[aa, bb] = [bb, aa];

console.log(bb);

// return value pada function
function coba1() {
  return [1, 2];
}

const [a1, b1] = coba1();
console.log(a1);

// Rest parameter
// tanpa destructuring assignment
const [a3, b3] = [1, 2, 3];

// dengan destructuring assignment
//...values akan mengambil nilai yang tersisa
const [a4, ...values] = [1, 2, 3, 4, 5];

console.log(values);

// Destructuring object
// const mhs1 = {
//   nama: "Sandhika",
//   umur: 33,
// };

// const { nama, umur } = mhs1;
// console.log(n);

// Assigment tanpa deklarasi object
({ nama3, umur3 } = { nama3: "Sandhikawww", umur3: 33 });
console.log(nama3);

// Assign ke variabel baru
const mhs1 = {
  nama4: "Sandhikawwwww",
  umur4: 33,
};

const { nama4: n, umur4: u } = mhs1;
console.log(n);

// Memberikan default value
const mhs2 = {
  nama5: "Sandhikawwwww",
  umur5: 33,
};

const { nama5: n5, umur5: u5, email5: e5 = "awjkwajiwawaowoak@gmail.com" } = mhs2;

console.log(e5);

// Rest parameter
const mhs3 = {
  nama6: "Sandhikawwwww",
  umur6: 33,
  email6: "awokoawokwak@gmail.com",
};

const { nama6, ...value6 } = mhs3;

console.log(value6);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs4 = {
  id: 123,
  nama7: "Sandhikawwwww",
  umur7: 33,
  email7: "owakwak@gmail,com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs4));
