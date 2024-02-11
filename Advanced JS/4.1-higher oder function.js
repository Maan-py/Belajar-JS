function kerjakaTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
    selesai();
}

function selesai() {
    setTimeout(() => {
        console.log('Selesai mengerjakan tugas!');
    }, 3000);
}

kerjakaTugas('Pemrograman Web', selesai);