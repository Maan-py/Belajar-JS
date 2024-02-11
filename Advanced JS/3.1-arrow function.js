// 1 parameter
let arrowFunction = (nama) => {
    console.log(`Halo ${nama}!`);
}

arrowFunction("Fikri"); // Output: Halo Fikri!

// 2 parameter
const tampilNama = (nama, waktu) => {
    console.log(`Selamat ${waktu}, ${nama}!`);
}

tampilNama("Fikri", "Malam"); // Output: Selamat Malam, Fikri!

// 1 parameter dan tanpa return (implisit return)
const tampilNama2 = nama => `Halo ${nama}!`;
console.log(tampilNama2("Fikri")); // Output: Halo Fikri!

// tanpa parameter
const tampilNama3 = () => `Hello World!`;
console.log(tampilNama3()); // Output: Hello World!

// contoh lain
let mahasiswa = ["Fikri", "Aulia", "Rahman"];

// tanpa arrow function
let jumlahHuruf = mahasiswa.map(function(nama) {
    return nama.length;
})

console.log(jumlahHuruf);

// dengan arrow function mereturn array
let jumlahHuruf2 = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf2);

// dengan arrow function mereturn object
let jumlahHuruf3 = mahasiswa.map(nama => ({nama: nama, jumlahHuruf: nama.length}));

console.log(jumlahHuruf3);


