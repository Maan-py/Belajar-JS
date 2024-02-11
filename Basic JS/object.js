// const mahasiswa = {
//   nama: "Maan",
//   lulus: true,
//   IPSemester: [2.9, 3.1, 3.25, 2.88, 3.04],
//   IPKumulatif: function () {
//     let total = 0;
//     let ips = this.IPSemester;
//     for (let i = 0; i < ips.length; i++) {
//       total += ips[i];
//     }
//     return total / ips.length;
//   },
// };

// console.log(mahasiswa.IPKumulatif());

var mhs = {
    nama : "Muhammad luqmaan",
    umur : 18,
    ips : [3.80, 3.90, 3.95, 4.00],
    alamat : {
        jalan : "Jalan-jalan",
        kota : "Kota wisata",
        provinsi : "Jawa Selatan"
    }
} 

console.log(mhs.alamat.jalan);