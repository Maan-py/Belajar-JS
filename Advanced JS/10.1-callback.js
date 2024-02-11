// Calback
// Synchronous Callback
// function halo(nama) {
//     alert(`halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt("Masukkan Nama :");
//     callback(nama);
// }

// tampilkanPesann(nama => console.log(`halo ${nama}`));

// const mhs = [
//     {
//         "nama": "Sandhika Galih",
//         "nrp": "043040023",
//         "jurusan" : "Teknik Informatika"
//     },
//     {
//         "nama": "Doddy Ferdiansyah",
//         "nrp": "033040001",
//         "jurusan"  : "Teknik Industri"
//     },
//     {
//         "nama": "Erik",
//         "nrp": "023040001",
//         "jurusan"  : "Teknik Mesin"
//     }
// ];

// console.log("mulai");
// mhs.forEach
//     (m => {
//         for (let i = 0; i < 1000000; i++) {
//             let date = new Date();
//         }
//         console.log(m.nama)
//     });
// console.log("selesai");

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// getDataMahasiswa(
//   "advanced-js/mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );

// console.log("Selesai");

// JQuery
console.log("mulai");
$.ajax({
  url: "advanced-js/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
    console.log(mhs);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
