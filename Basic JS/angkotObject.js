function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Angkot masih kosong");
      return false;
    }

    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Sandhika", ["Panam", "Pandau"], [], 0);
var angkot2 = new Angkot("Walke", ["Harapan Raya", "Duri"], [], 0);

angkot1.penumpangNaik("Doddy");
angkot1.penumpangTurun("Doddy", 5000);
console.log(angkot1);
angkot1.penumpangTurun("Doddy", 5000);
console.log(angkot1);
