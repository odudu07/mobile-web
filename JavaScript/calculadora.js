// variavel
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");

// funçoes
function soma(event) {
    event.preventDefault();
    resultado.innerHTML = Number (num1.value) + Number(num2.value);
    num1.value = "";
    num2.value = ""
}

 // funçoes
function sub(event) {
    event.preventDefault();
    resultado.innerHTML = Number (num1.value) - Number(num2.value);
    num1.value = "";
    num2.value = ""
}
// funçoes
function mult(event) {
    event.preventDefault();
    resultado.innerHTML = Number (num1.value) * Number(num2.value);
    num1.value = "";
    num2.value = ""
}
// funçoes
function div(event) {
    event.preventDefault(); 
    resultado.innerHTML = Number (num1.value) / Number(num2.value);
    num1.value = "";
    num2.value = ""
}
