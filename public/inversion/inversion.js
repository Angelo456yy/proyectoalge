// Declarar variables globales para los valores de la matriz
let a11, a12, a13, a21, a22, a23, a31, a32, a33;

function guardarValoresMatriz() {
    // Obtener y guardar los valores de la matriz
    a11 = parseFloat(document.getElementById("a11").value);
    a12 = parseFloat(document.getElementById("a12").value);
    a13 = parseFloat(document.getElementById("a13").value);
    a21 = parseFloat(document.getElementById("a21").value);
    a22 = parseFloat(document.getElementById("a22").value);
    a23 = parseFloat(document.getElementById("a23").value);
    a31 = parseFloat(document.getElementById("a31").value);
    a32 = parseFloat(document.getElementById("a32").value);
    a33 = parseFloat(document.getElementById("a33").value);
}

function calcularExpresion() {
    // Asegúrate de llamar a la función para guardar los valores de la matriz
    guardarValoresMatriz();

    // Calcular la expresión
    const resultado =
        (a11 * a22 * a33 + a21 * a32 * a13 + a31 * a12 * a23) -
        (a31 * a22 * a13 + a11 * a32 * a23 + a21 * a12 * a33);

    // Mostrar el resultado en el elemento con el identificador "resultadoExpresion"
    document.getElementById("resultadoExpresion").textContent = resultado;
}

function traspuesta() {
    guardarValoresMatriz();
    const matriz = [
        [a11, a21, a31],
        [a12, a22, a32],
        [a13, a23, a33]
    ];

    // Obtén el elemento donde deseas mostrar la matriz traspuesta
    const traspuestaElement = document.getElementById("traspuesta");

    // Crea una cadena de texto legible para mostrar la matriz
    let matrizTexto = "Matriz Traspuesta:<br>";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrizTexto += matriz[i][j];
            if (j < 2) {
                matrizTexto += ", ";
            }
        }
        matrizTexto += "<br>";
    }

    // Establece la cadena de texto en el elemento
    traspuestaElement.innerHTML = matrizTexto;
}
