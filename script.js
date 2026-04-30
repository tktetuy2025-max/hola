function sumar() {
    // Obtener valores de los inputs
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    // Sumar
    let suma = num1 + num2;
    // Mostrar resultado
    document.getElementById("resultado").innerHTML = "Resultado: " + suma;
}
 
function restar(){
  // Obtener valores de los inputs
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);
    // Sumar
    let restar = num1 - num2;
    // Mostrar resultado
    document.getElementById("resultado").innerHTML = "Resultado: " + restar;

}
function multiplicar() {
    // Obtener valores de los inputs
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);

    // Multiplicar
    let multi = num1 * num2;

    // Mostrar resultado
    document.getElementById("resultado").innerHTML = "Resultado: " + multi;
}

function dividir() {
    // Obtener valores de los inputs
    let num1 = Number(document.getElementById("numero1").value);
    let num2 = Number(document.getElementById("numero2").value);

    // Dividir
    let div = num1 / num2;

    // Mostrar resultado
    document.getElementById("resultado").innerHTML = "Resultado: " + div;
}