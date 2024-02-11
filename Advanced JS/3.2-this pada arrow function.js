// // Constructor function
// const Mahasiswa = function () {
//   this.nama = "Sofyan";
//   this.umur = 33;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const sofyan = new Mahasiswa();

// // Arrow function
// const Mahasiswa1 = function () {
//   this.nama = "Sofyan";
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const sofyan1 = new Mahasiswa();
// console.log(sofyan1);

// // Object literal
// const mhs1 = {
//   nama: "Sofyan",
//   umur: 33,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   },
// };

// mhs1.sayHello();

// // const Mahasiswa3 = function () {
// //   this.nama = "Sofyan";
// //   this.umur = 33;
// //   this.sayHello = function () {
// //     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// //   };

// //   setInterval(() => {
// //     console.log(this.umur++);
// //   }, 500);
// // };

// // const sofyan3 = new Mahasiswa3();
// // console.log(sofyan3);

const box = document.querySelector(".box");

box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
