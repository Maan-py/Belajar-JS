// menangkap pilihan player
let ulangi;

while (ulangi != false) {
  let p = prompt("Masukkan pilihan (Gajah, Orang, Semut)");

  // menangkap pilihan komputer

  // membangkitkan bilangan random
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "Gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "Orang";
  } else {
    comp = "Semut";
  }

  let hasil;
  // menentukan rules
  if (p === comp) {
    hasil = "Seri";
  } else if (p === "Gajah") {
    hasil = comp === "Orang" ? "Menang" : "Kalah";
  } else if (p === "Orang") {
    hasil = comp === "Semut" ? "Menang" : "Kalah";
  } else if (p === "Semut") {
    hasil = comp === "Gajah" ? "Menang" : "Kalah";
  } else {
    hasil = "Pilih pilihan yang sesuai!";
  }

  // tampilkan hasilnya
  console.log(comp);
  alert(`Kamu memilih ${p}, sedangkan komputer memilih ${comp}, maka hasilnya ${hasil}`);

  ulangi = confirm("Ulangi?");
}
