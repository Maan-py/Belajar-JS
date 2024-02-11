// multiline string
// tanpa template literals
const str = "This is a\n multiline string";

// dengan template literals
const str1 = `This is a
multiline string`;

// multiline string with variables (embedded expressions)
const name = "John";
const age = 30;
const str2 = `Hello ${name}, welcome to the club`;

// multiline string with expressions
const str3 = `Hello ${name}, welcome to the club. Your age is ${age}`;

// multiline string with expressions and functions (expression interpolation)

// tanpa template literals
const str5 = "Hello " + name + ", welcome to the club. Your age is " + (age + 10);

// dengan template literals
const str4 = `Hello ${name}, welcome to the club. Your age is ${age + 10}`;

// multiline string (html fragments)
const mhs = {
  nama: "John",
  umur: 30,
  nrp: "123456789",
  email: `sandhikagalih@unpas.id`,
};

// tanpa template literals
let el = "";
el += '<div class="mhs">';
el += "<h2>" + mhs.nama + "</h2>";
el += '<span class="nrp">' + mhs.nrp + "</span>";
el += "</div>";

// dengan template literals
const el1 = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

// embedded expressions
const x = 13;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);
