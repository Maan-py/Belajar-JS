// for..of
// creates a loop iterating over iterable objects
// including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables

const mhs = ["Riki", "Rahmat", "Rizky"];
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

const mh1 = mhs.forEach((m) => console.log(m));
console.log(mh1);

for (const m of mhs) {
  console.log(m);
}

// string
const nama = "Riki Rahmat";
for (const n of nama) {
  console.log(n);
}

mhs.forEach((m, i) => {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
});

for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

// NodeList
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => console.log(n.textContent));

// arguments
function jumlahkanAngka() {
  //   return arguments.reduce((a, i) => a + i);
  // arguments.forEach((a) => console.log(a));
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
// creates a loop only iterating over enumerable, non-Symbol properties.
// including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables  

const mhs1 = {
  nama: "Riki Rahmat",
  umur: 23,
  email: "awkokowakowakowakokowakowakowakowa@ac.i"
};

for(m in mhs1) {
  console.log(m[m]);
}
