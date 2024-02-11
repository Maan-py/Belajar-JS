const videos = Array.from(document.querySelectorAll("ul li"));

const jsLanjutan = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(":").map((waktu) => parseInt(waktu));
    return parts[0] * 60 + parts[1];
  })
  .reduce((total, detik) => total + detik, 0);

const jam = Math.floor(jsLanjutan / 3600);
const menit = Math.floor(jsLanjutan % 3600 / 60);
const detik = jsLanjutan % 60;

const pJumlahVideo = document.querySelector(".jumlah-video");
pJumlahVideo.textContent = `${videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length} video`; 

const pDurasiVideo = document.querySelector(".total-durasi");
pDurasiVideo.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;