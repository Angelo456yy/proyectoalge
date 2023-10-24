function resolverSistema() {
    // Obtener los coeficientes de las ecuaciones
    const a11 = parseFloat(document.getElementById("a11").value);
    const a12 = parseFloat(document.getElementById("a12").value);
    const a13 = parseFloat(document.getElementById("a13").value);
    const b1 = parseFloat(document.getElementById("b1").value);
    const a21 = parseFloat(document.getElementById("a21").value);
    const a22 = parseFloat(document.getElementById("a22").value);
    const a23 = parseFloat(document.getElementById("a23").value);
    const b2 = parseFloat(document.getElementById("b2").value);
    const a31 = parseFloat(document.getElementById("a31").value);
    const a32 = parseFloat(document.getElementById("a32").value);
    const a33 = parseFloat(document.getElementById("a33").value);
    const b3 = parseFloat(document.getElementById("b3").value);

    // Calcular el determinante de A
    const detA = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32
                - a13 * a22 * a31 - a11 * a23 * a32 - a12 * a21 * a33;

    // Calcular los determinantes de A1, A2 y A3
    const detA1 = b1 * a22 * a33 + a12 * a23 * b3 + a13 * b2 * a32
                     - a13 * a22 * b3 - b1 * a23 * a32 - a12 * b2 * a33;

    const detA2 = a11 * b2 * a33 + b1 * a23 * a31 + a13 * a21 * b3
                     - a13 * b2 * a31 - a11 * a23 * b3 - b1 * a21 * a33;

    const detA3 = a11 * a22 * b3 + a12 * b2 * a31 + b1 * a21 * a32
                     - b1 * a22 * a31 - a11 * b2 * a32 - a12 * a21 * b3;

    // Comprobar si el sistema tiene solución única
    if (detA !== 0) {
        const x1 = detA1 / detA;
        const x2 = detA2 / detA;
        const x3 = detA3 / detA;
        document.getElementById("resultado").innerHTML = `Solución única: Ax = ${x1}, Ay = ${x2}, Az = ${x3}`;
    } else {
        document.getElementById("resultado").innerHTML = "Sin solución o soluciones infinitas (determinante de A es igual a 0).";
    }
}