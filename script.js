function calcIMC() {

    let peso = Number(document.getElementById("peso"));

    let altura = Number(document.getElementById("altura"));

    let resultElement = document.getElementById("result");

    let imc = peso / (altura ** 2);

    document.getElementById("calc").addEventListener("click");
    resultElement.textContent = `Resultado: ${imc}`;
};

