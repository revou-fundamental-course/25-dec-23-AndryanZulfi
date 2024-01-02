var alas = document.querySelector("form #alas");
var tinggi = document.querySelector("form #tinggi");
var btnResult = document.querySelector("form .button-result");
var rumus = document.querySelector(".result ul li:nth-child(2)");
const hasil = document.querySelector(".result ul li:nth-child(3)");

btnResult.addEventListener("click", function (event) {
  if (alas.value && tinggi.value != "") {
    event.preventDefault();
    var result = 0.5 * Number(alas.value) * Number(tinggi.value);
    rumus.innerHTML = `L = 1/2 x ${alas.value} x ${tinggi.value}`;
    hasil.innerHTML = `L = ${result}`;

    console.log("result", result);
  }
  if (tinggi.value === "") {
    alert("Anda Belum Memasukkan Tinggi!!!");
  }
  if (alas.value === "") {
    alert("Anda Belum Memasukkan Alas!!!");
  }
});

console.log("javascript");
