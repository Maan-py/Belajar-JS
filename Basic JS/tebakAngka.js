let angka = Math.floor(Math.random(1) * 10 + 1);
let kesempatan = 3;

let hasil;

while (kesempatan != 0) {
  let tebakan = prompt("Tebak angka 1- 10");
  if (tebakan === angka) {
    hasil = "Anda BENAR!";
    kesempatan = 0;
    alert(`${hasil}`);
  } else if (tebakan < angka) {
    hasil = "Angka terlalu KECIL!";
    kesempatan--;
    alert(`${hasil}, Kesempatan tinggal ${kesempatan}`);
  } else {
    hasil = "Angka terlalu BESAR!";
    kesempatan--;
    alert(`${hasil}, Kesempatan tinggal ${kesempatan}`);
  }
  console.log(angka);
}
