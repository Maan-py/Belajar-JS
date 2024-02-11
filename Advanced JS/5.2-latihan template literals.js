//1. html fragments
const mhs = {
  nama: "John",
  umur: 30,
  nrp: "123456789",
  email: `john@unpas.ac.id`,
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

//2. looping
const mhs1 = [
  {
    nama: "John",
    email: "john@unpas",
  },
  {
    nama: "Jane",
    email: "jane123@unpas",
  },
  {
    nama: "Bob",
    email: "bob@unpas",
  },
];

const el1 = `<div class="mhs">
    ${mhs1
      .map(
        (m) => `<ul>
        <li>${m.nama}</li>
        <li>${m.email}</li>
    </ul>`
      )
      .join("")}
</div>`;

//3. conditionals
// ternary
const lagu = {
  judul: "Tetap Dalam Jiwa",
  penyanyi: "Isyana Sarasvati",
  feat: "Rayi Putra",
};

const el2 = `<div class="lagu">
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
    </ul>
</div>`;

console.log(el);
