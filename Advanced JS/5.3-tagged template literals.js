// tagged template
const name = "Sandhika Galih";
const umur = 33;

function highlight(strings, ...values) {
//   let result = "";
//   strings.forEach((str, i) => {
//     result += `${str}${values[i] ||  ""}`;
//   });
//   return result;

    // reduce
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

const str = highlight`Halo, nama saya ${name}, dan saya ${umur} tahun.`;

console.log(str);
