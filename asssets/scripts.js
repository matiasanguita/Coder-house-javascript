document.addEventListener("DOMContentLoaded", function() {
    // Event listener para el calculo de temperaturas
    document.getElementById("calcButton").addEventListener("click", function() {
        let tempInput = parseFloat(document.getElementById("tempInput").value);
        let gradoSelect = document.getElementById("gradoSelect").value;
        if (Number.isNaN(tempInput)) {
            document.getElementById("tempOutput").textContent = "Por favor, ingrese un número válido.";
            return;
        }

        let resultado = calculatorTemp(gradoSelect, tempInput);
        
        if (resultado !== null && !isNaN(resultado)) {
            document.getElementById("tempOutput").textContent = `La temperatura es: ${Number(resultado.toFixed(2))}`;
        } else {
            document.getElementById("tempOutput").textContent = "Hubo algún error en el cálculo";
        }
    });

    // Event listener para la sumatoria
    document.getElementById("sumButton").addEventListener("click", function() {
        let sumInput = parseInt(document.getElementById("sumIn").value);
        if (Number.isNaN(sumInput)) {
            document.getElementById("sumOutput").textContent = "Por favor, ingrese un número válido.";
            return;
        }

        let resultado = sumatorio(sumInput);
        document.getElementById("sumOutput").textContent = `El resultado de la sumatoria es: ${resultado.toFixed(2)}`;
    });
});

function calculatorTemp(grados, temperatura) {
    if (grados === "kelvin") {
        return temperatura + 273;
    } else if (grados === "fahrenheit") {
        return (temperatura * 9 / 5) + 32;
    } else if (grados === "rankine") {
        return (temperatura * 9 / 5) + 491;
    } else {
        console.log("Hubo algún error");
        return null;
    }
}

function sumatorio(termino) {

        let resultado = 0;
        for (let i = 0; i <= termino; i++) {
            resultado += i;
        }
        return resultado;

}

