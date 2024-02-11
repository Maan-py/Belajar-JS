// Manipulasi array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "a";
// arr[1] = 1;
// arr[2] = true;

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Sandhika", "Galih", "Array"];
// arr[1] = undefined
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Sandhika", "Galih", "Array", "Maan"];

// for(var i = 0; i < arr.length; i++) {
//     console.log(`Mahasiswa ke-${i + 1} : ${arr[i]}`);
// }

// Method pada array

var arr = ["Sandhika", "Galih", "Array", "Maan"];
// 1. join
// Menampilkan array

// console.log(arr.join(", "));

// 2. push & pop
// push - Menambahkan elemen terakhir
// pop - Menghapus elemen terakhir

// arr.push("Awikwok");
// arr.pop();
// console.log(arr.join(", "));

// 3. unshift & shift
// unshift - Menambahkan elemen pertama
// shift - Menghapus elemen pertama

// arr.unshift("Doddy");
// console.log(arr);
// arr.shift();
// console.log(arr);

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ....)
// arr.splice(2, 0, "Maman");
// arr.splice(1, 2, "Doddy")
// console.log(arr);

// 5. slice
// slice(indexAwal, indexAkhir)
// let arr2 = arr.slice(1, 3);
// console.log(arr);
// console.log(arr2);

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let nama = ["Maan", "Maman", "Awikwok"];

// 6. forEach
// for(let i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function(e, i) {
//     console.log(`Mahasiswa ke-${i + 1} : ${e}`);
// })

// 7. map
// Untuk return
angka2 = angka.map(function(e) {
    return e * 2;
})

console.log(angka2);

// 8. sort
let angkaTidakUrut = [2, 5, 0, 8 , 1, 4];
console.log(angkaTidakUrut.join(", "));
let angkaUrut = angkaTidakUrut.sort();
console.log(angkaUrut);

console.log(angka2.sort()); // tidak urut
console.log(angka2.sort(function(a, b) {
    return a - b;
}));

// 9. filter
var adaGak = angka.filter(function(e) {
    return e > 5;
})

console.log(adaGak.join(" - "));


// 10. find
// Hanya me-return satu elemen
var findAngka = angka.find(function(e) {
    return e > 5;
})

console.log(findAngka);