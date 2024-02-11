const angka = [-1, 8, 10, 1, 2, -5, -4, 3, 7, 9];

// mencari angka >= 3
// for
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}

console.log(newAngka);

// filter
const newAngka2 = angka.filter((a) => a >= 3);
console.log(newAngka2);

// map
// kalikan semua angka dengan 2
const newAngka3 = angka.map((a) => a * 2);
console.log(newAngka3);

// reduce
// jumlahkan seluruh elemen pada array\
// 0 adalah nilai awal
// accumulator adalah hasil dari prosesnya
// currentValue adalah nilai dari elemen array yang sedang di proses
// 0 + -1 + 8 + 9 + 1 + 2 + -5 + -4 + 3 + 7 + 9
const newAngka4 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(newAngka4);

// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, cur) => acc + cur, 0);

console.log(hasil);