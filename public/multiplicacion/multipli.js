function multiplyMatrices() {
    const matrixA = [];
    const matrixB = [];

    for (let i = 0; i < 3; i++) {
        matrixA.push([]);
        matrixB.push([]);
        for (let j = 0; j < 3; j++) {
            matrixA[i][j] = parseFloat(document.getElementById("a_" + i + "_" + j).value);
            matrixB[i][j] = parseFloat(document.getElementById("b_" + i + "_" + j).value);
        }
    }

    const resultMatrix = new Array(3);
    for (let i = 0; i < 3; i++) {
        resultMatrix[i] = new Array(3);
        for (let j = 0; j < 3; j++) {
            resultMatrix[i][j] = 0;
            for (let k = 0; k < 3; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
// Mostrar el resultado en la página
let resultHtml = "<p>Resultado de la multiplicación:</p><table style='border-collapse: collapse;'>";
for (let i = 0; i < 3; i++) {
    resultHtml += "<tr>";
    for (let j = 0; j < 3; j++) {
        resultHtml += "<td style='border: 1px solid #000; padding: 5px;'>" + resultMatrix[i][j] + "</td>";
    }
    resultHtml += "</tr>";
}
resultHtml += "</table>";
document.getElementById("matrix-result").innerHTML = resultHtml;}