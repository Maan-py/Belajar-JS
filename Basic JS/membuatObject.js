// Membuat Object
// Object literal
var mhs = {
  nama: "Muhammad Luqmaan",
  umur: 18,
  pendidikan: "S1",
  email: "mluqmaan22@gmail.com",
};

// function declaration
function buatObjectMhs(nama, nim, email, jurusan) {
  let mhs = {};

  mhs.nama = nama;
  mhs.nim = nim;
  mhs.email = email;
  mhs.jurusan = jurusan;

  return mhs;
}

let mhs2 = buatObjectMhs("Muhammad Luqmaan", "12312312312", "@gmail,com", "Informatika");

console.log(mhs2);

// constructor
function Mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama
    this.nim = nim
    this.email = email
    this.jurusan = jurusan
}

let mhs4 = new Mahasiswa("Maaaaaaan", "1231232184", "@yahoo.com")

console.log(mhs4);
