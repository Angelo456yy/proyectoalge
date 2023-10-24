function calcularDeterminanteYTraspuestaYAdjuntaYInversa() {
    // Declaración de variables para los elementos de la matriz
    const a11 = parseFloat(document.getElementById("a11").value);
    const a12 = parseFloat(document.getElementById("a12").value);
    const a13 = parseFloat(document.getElementById("a13").value);
    const a21 = parseFloat(document.getElementById("a21").value);
    const a22 = parseFloat(document.getElementById("a22").value);
    const a23 = parseFloat(document.getElementById("a23").value);
    const a31 = parseFloat(document.getElementById("a31").value);
    const a32 = parseFloat(document.getElementById("a32").value);
    const a33 = parseFloat(document.getElementById("a33").value);

    // Verificar si los campos de entrada están vacíos
    if (
        isNaN(a11) || isNaN(a12) || isNaN(a13) ||
        isNaN(a21) || isNaN(a22) || isNaN(a23) ||
        isNaN(a31) || isNaN(a32) || isNaN(a33)
    ) {
        alert('Tiene que ingresar los datos para que aparezca el resultado');
        return; // No se ejecuta la función si algún campo de entrada está vacío o no es un número.
    }

    // Creación de la matriz
    const matriz = [
        [a11, a12, a13],
        [a21, a22, a23],
        [a31, a32, a33]
    ];

    // Cálculo del determinante
    const det =
        a11 * a22 * a33 +
        a12 * a23 * a31 +
        a13 * a21 * a32 -
        a13 * a22 * a31 -
        a12 * a21 * a33 -
        a11 * a23 * a32;

    // Visualización del determinante
    document.getElementById("determinante").textContent = det;

    if (det !== 0) {
        // Cálculo de la matriz traspuesta
        const matrizTraspuesta = [];
        for (let i = 0; i < matriz[0].length; i++) {
            matrizTraspuesta[i] = [];
            for (let j = 0; j < matriz.length; j++) {
                matrizTraspuesta[i][j] = matriz[j][i];
            }
        }

        // Visualización de la matriz traspuesta
        const matrizTraspuestaElement = document.getElementById("matrizTraspuesta");
        matrizTraspuestaElement.innerHTML = "";
        for (let i = 0; i < matrizTraspuesta.length; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < matrizTraspuesta[i].length; j++) {
                const cell = document.createElement("td");
                cell.textContent = matrizTraspuesta[i][j];
                row.appendChild(cell);
            }
            matrizTraspuestaElement.appendChild(row);
        }

        // Cálculo de la matriz adjunta
        const matrizAdjunta = calcularMatrizAdjunta(matriz);

        // Visualización de la matriz adjunta
        const matrizAdjuntaElement = document.getElementById("matrizAdjunta");
        matrizAdjuntaElement.innerHTML = "";
        for (let i = 0; i < matrizAdjunta.length; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < matrizAdjunta[i].length; j++) {
                const cell = document.createElement("td");
                cell.textContent = matrizAdjunta[i][j];
                row.appendChild(cell);
            }
            matrizAdjuntaElement.appendChild(row);
        }

        // Cálculo de la matriz inversa
        const matrizInversa = dividirMatrizPorEscalar(matrizAdjunta, det);

        // Visualización de la matriz inversa
        const matrizInversaElement = document.getElementById("matrizInversa");
        matrizInversaElement.innerHTML = "";
        for (let i = 0; i < matrizInversa.length; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < matrizInversa[i].length; j++) {
                const cell = document.createElement("td");
                cell.textContent = matrizInversa[i][j];
                row.appendChild(cell);
            }
            matrizInversaElement.appendChild(row);
        }
    } else {
        // Manejo del caso en que el determinante es 0
        document.getElementById("matrizTraspuesta").textContent = "No se puede calcular la matriz traspuesta ya que el  determinante es = 0.";
        document.getElementById("matrizAdjunta").textContent = "No se puede calcular la matriz adjunta  ya que el  determinante es = 0.";
        document.getElementById("matrizInversa").textContent = "No se puede calcular la matriz inversa  ya que el  determinante es = 0.";
    }
}

// Funciones auxiliares (calcularMatrizAdjunta, calcularCofactor, calcularDeterminante, dividirMatrizPorEscalar) se mantienen igual que en la respuesta anterior.

function calcularMatrizAdjunta(matriz) {
    const matrizCofactores = [];
    for (let i = 0; i < matriz.length; i++) {
        matrizCofactores[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
            const cofactor = calcularCofactor(matriz, i, j);
            matrizCofactores[i][j] = cofactor;
        }
    }
    
    // Calcular la matriz adjunta tomando la traspuesta de la matriz de cofactores
    const matrizAdjunta = [];
    for (let i = 0; i < matrizCofactores.length; i++) {
        matrizAdjunta[i] = [];
        for (let j = 0; j < matrizCofactores[i].length; j++) {
            matrizAdjunta[i][j] = matrizCofactores[j][i];
        }
    }
    
    return matrizAdjunta;
}

function calcularCofactor(matriz, fila, columna) {
    const submatriz = [];
    for (let i = 0; i < matriz.length; i++) {
        if (i !== fila) {
            submatriz.push([]);
            for (let j = 0; j < matriz[i].length; j++) {
                if (j !== columna) {
                    submatriz[submatriz.length - 1].push(matriz[i][j]);
                }
            }
        }
    }
    
    const signo = (fila + columna) % 2 === 0 ? 1 : -1;
    const submatrizDeterminante = calcularDeterminante(submatriz);
    
    return signo * submatrizDeterminante;
}

function calcularDeterminante(matriz) {
    if (matriz.length === 2) {
        return (matriz[0][0] * matriz[1][1]) - (matriz[0][1] * matriz[1][0]);
    } else {
        let det = 0;
        for (let j = 0; j < matriz[0].length; j++) {
            const cofactor = calcularCofactor(matriz, 0, j);
            det += matriz[0][j] * cofactor;
        }
        return det;
    }
}

function dividirMatrizPorEscalar(matriz, escalar) {
    const resultado = [];
    for (let i = 0; i < matriz.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
            resultado[i][j] = matriz[i][j] / escalar;
        }
    }
    return resultado;
}
