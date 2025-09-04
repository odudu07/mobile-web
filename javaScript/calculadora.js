// Variável
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");

// Função
function soma(event) {
   event.preventDefault(); 
   resultado.innerHTML = Number(num1.value) + Number(num2.value);
   num1.value = "";
   num2.value = "";
}
