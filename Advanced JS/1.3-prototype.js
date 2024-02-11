// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
}

Mahasiswa.prototype.tidur = function(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
}

let sandhika = new Mahasiswa("Sandhika", 10);
sandhika.makan(20);
sandhika;

// versi class
class Mahasiswa1 {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}

let dodi = new Mahasiswa1("Dodi", 10);
dodi.makan(20);
dodi;

