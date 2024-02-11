// spread operator
// memecah iterables menjadi single element
const mhs = ["Riki", "Rahmat", "Rizky"];
console.log(...mhs[0]);

// menggabungkan 2 array
const dosen = ["Ade", "Rahmat", "Rizky"];

// dengan spread operator
const orang = [...mhs, "AJI", ...dosen];

// dengan concate
const orang1 = mhs.concat(dosen);
console.log(orang);

// mengcopy array
const mhs2 = [...mhs];
console.log(mhs2);

// mengubah nodelist menjadi array
const liMhs = document.querySelectorAll("li");
console.log(liMhs[0].textContent);
// const mhs3 = [];

// for (let i = 0; i < liMhs.length; i++) {
//   mhs3.push(liMhs[i].textContent);
// }
// console.log(mhs3);

const mhs3 = [...liMhs].map((m) => m.textContent);
