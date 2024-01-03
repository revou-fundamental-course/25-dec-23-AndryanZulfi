btnLuas = document.querySelector(".btn #btn-luas");
btnKeliling = document.querySelector(".btn #btn-keliling");
cardLuas = document.querySelector(".card-luas");
cardkeliling = document.querySelector(".card-keliling");

btnKeliling.addEventListener("click", function (event) {
  event.preventDefault();
  cardLuas.classList.add("hidden");
  cardkeliling.classList.add("visible");
});

btnLuas.addEventListener("click", function (event) {
  event.preventDefault();
  cardkeliling.classList.remove("visible");
  cardLuas.classList.remove("hidden");
});

// Luas
var alas = document.querySelector("form #alas");
var tinggi = document.querySelector("form #tinggi");
var btnResultLuas = document.querySelector(".fr-luas .button-result");
var rumus = document.querySelector(".result-luas ul li:nth-child(2)");
const hasilLuas = document.querySelector(".result-luas ul li:nth-child(3)");

btnResultLuas.addEventListener("click", function (event) {
  if (alas.value && tinggi.value != "") {
    event.preventDefault();
    var result = 0.5 * Number(alas.value) * Number(tinggi.value);
    rumus.innerHTML = `L = 1/2 x ${alas.value} x ${tinggi.value}`;
    hasilLuas.innerHTML = `L = ${result}`;
  } else {
    alert("Masukan Alas dan Tinggi!!!");
  }
});

// Keliling
var sisi1 = document.querySelector(".fr-keliling #S1");
var sisi2 = document.querySelector(".fr-keliling #S2");
var sisi3 = document.querySelector(".fr-keliling #S3");
var btnResultKeliling = document.querySelector(".fr-keliling .button-result");
var hasilKeliling = document.querySelector(".result-keliling ul li:nth-child(3)");
var rumusKeliling = document.querySelector(".result-keliling ul li:nth-child(2)");

btnResultKeliling.addEventListener("click", function (event) {
  event.preventDefault();
  if (sisi1.value && sisi2.value && sisi3.value != "") {
    var result = Number(sisi1.value) * Number(sisi2.value) * Number(sisi3.value);
    rumusKeliling.innerHTML = `K = ${sisi1.value} x ${sisi2.value} x ${sisi3.value}`;
    hasilKeliling.innerHTML = `K = ${result}`;
    console.log(result);
  } else {
    alert("Masukkan Semua Sisinya!!!");
  }
});

// reset
var btnResetLuas = document.querySelector(".reset-luas");
var btnResetKeliling = document.querySelector(".reset-keliling");

btnResetLuas.addEventListener("click", function (event) {
  event.preventDefault();
  alas.value = null;
  tinggi.value = null;
  rumus.innerHTML = `L = 1/2 x ? x ?`;
  hasilLuas.innerHTML = `L = ?`;
});

btnResetKeliling.addEventListener("click", function (event) {
  event.preventDefault();
  sisi1.value = null;
  sisi2.value = null;
  sisi3.value = null;
  rumusKeliling.innerHTML = `K = ? x ? x ?`;
  hasilKeliling.innerHTML = `K = ?`;
});
