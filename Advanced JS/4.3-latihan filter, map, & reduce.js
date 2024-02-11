// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya yang JAVASCRIPT LANJUTAN
const jsLanjutan = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing-masing video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi float, ubah menit menjadi detik
  .map((waktu) => {
    // 10:30 -> [10, 30] split
    const parts = waktu
      .split(":")
      // ubah string ke float
      .map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((total, detik) => total + detik, 0);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjutan / 3600); // 7261 / 3600 = 2.0169444444444446 = 2

const menit = Math.floor((jsLanjutan % 3600) / 60); // 7261 % 3600 = 61/60 = 1.0166666666666666 = 1

const detik = jsLanjutan % 60; // 7261 % 60 = 1

// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `Total durasi video adalah ${jam} jam, ${menit} menit, ${detik} detik`;

const pJmlVideo = document.querySelector(".jumlah-video");
const jmlVideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
pJmlVideo.textContent = `${jmlVideo} video`;
