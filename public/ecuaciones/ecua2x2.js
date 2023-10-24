function resolverSistema2x2() {
    // Obtener los coeficientes de las ecuaciones
    const a11 = parseFloat(document.getElementById("a11").value);
    const a12 = parseFloat(document.getElementById("a12").value);
    const b1 = parseFloat(document.getElementById("b1").value);
    const a21 = parseFloat(document.getElementById("a21").value);
    const a22 = parseFloat(document.getElementById("a22").value);
    const b2 = parseFloat(document.getElementById("b2").value);

    // Calcular el determinante de A
    const detA = a11 * a22 - a12 * a21;

    // Calcular el determinante de A1 y A2
    const detA1 = b1 * a22 - b2 * a12;
    const detA2 = a11 * b2 - a21 * b1;

    // Comprobar los casos
    if (detA !== 0) {
        // Solución única
        const x1 = detA1 / detA;
        const x2 = detA2 / detA;
        document.getElementById("resultado_2x2").innerHTML = `Solución única: Ax = ${x1}, Ay = ${x2}`;
    } else if (detA1 === 0 && detA2 === 0) {
        // Soluciones infinitas
        document.getElementById("resultado_2x2").innerHTML = "Soluciones infinitas";
    } else {
        // Sin solución
        document.getElementById("resultado_2x2").innerHTML = "Sin solución";
    }
}