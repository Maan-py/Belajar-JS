// Destructuring

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a - b , a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2, 3[0]);
// const kali = penjumlahanPerkalian(2, 3[1]);
// console.log(kali);

// const [jumlah, kurang, kali, bagi] = penjumlahanPerkalian(2, 3);
// console.log(bagi);

function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}

const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
console.log(kali);

// Destructuring function arguments
const mhs1 = {
  nama: "Sandhika",
  umur: 33,
  email: "sandhika@ac.id",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs({ nama, umur, email }) {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan email saya adalah ${email}`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: {tugas, uts, uas} }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun. dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));
