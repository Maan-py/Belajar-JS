// rest parameter
// merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

function myFunc(a, b, ...myArgs) {
    return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
}

console.log(myFunc(1, 2, 3, 4, 5));

function jumlahkan(...angka) {
    let total = 0;
    for (const a of angka) {
        total += a;
    }
    return total;
}

console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
const kelompok1 = ['Dody', 'Dwi', 'Dewi', 'Dini', 'Dodi'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);

// object destructuring
const team = {
    pm: 'Dody',
    frontEnd1: 'Dwi',
    frontEnd2: 'Dewi',
    backEnd: 'Dini',
    ux: 'Dodi',
    devOps: 'Doni'
}

const { pm, ...myTeam } = team;
console.log(pm);

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('string', 1, 2, 'Dody', false, 10, true, 'Dwi'));

