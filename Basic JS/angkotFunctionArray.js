let penumpang = [];
let tambahPenumpang = function (namaPenumpang) {
  if (penumpang.length === 0) {
    penumpang.unshift(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(`${namaPenumpang} sudah ada di dalam angkot`);
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function(namaPenumpang, penumpang) {
  if(penumpang.length === 0) {
    console.log(`Angkot masih kosong`);
    return penumpang;
  } else {
    for(let i = 0; i < penumpang.length; i++) {
      if(penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if(i == penumpang.length - 1) {
        console.log(`Tidak ada nama ${namaPenumpang} di dalam angkot`);
        return penumpang;
      }
    }
  }
}

// console.log(penumpang);
// hapusPenumpang("Sandhika", penumpang)
// console.log(penumpang);
// hapusPenumpang("Sandhikas", penumpang);
// console.log(penumpang);

// tambahPenumpang("Maan", penumpang);
// tambahPenumpang("Hahah", penumpang);

// console.log(penumpang);
// tambahPenumpang("Wahyu", penumpang);
// console.log(penumpang);

// tambahPenumpang("Sandhika", penumpang);
// console.log(penumpang);
