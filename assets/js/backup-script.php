<?php

/*function patao(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.withCredentials = true;
    r.onreadystatechange = function() {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML = r.responseText;
    };
    r.send();
}

const main = document.getElementsByTagName("main")[0];
const btn = document.getElementsByTagName("button");

btn[0].addEventListener("click", () => {
    patao(main, "./pgs/imc.php");
});

btn[1].addEventListener("click", () => {
    alert(2);
});

let altura = 0;
let peso = 0;

function alturafunc(x) {
    let value = parseInt(x.value);

    if (isNaN(value) || value <= 0 || value > 269) {
        alert("Altura deve ser um número inteiro entre 1 e 269!");
        x.value = "1";
        return;
    }

    altura = value / 100; // Convertendo para metros
}

function pesofunc(x) {
    let value = parseFloat(x.value);

    if (isNaN(value) || value <= 0 || value > 500) {
        alert("Peso deve ser um número entre 1 e 500!");
        x.value = "1";
        return;
    }

    peso = value; // Mantemos o valor em quilogramas
}

let resultado = document.getElementsByClassName("resultado");
let categoria = "";

function teste() {
    if (altura === 0 || peso === 0) {
        alert("Por favor, insira valores válidos de altura e peso.");
        return;
    }

    let imc = peso / (altura * altura);
    let pesoIdealMin = 18.5 * altura * altura; // Peso mínimo para IMC normal
    let pesoIdealMax = 24.9 * altura * altura; // Peso máximo para IMC normal
    let pesoNecessario = 0;
    let mensagem = "";

    // Usando switch para a categorização do IMC
    switch (true) {
        case (imc < 18.5):
            categoria = "Magreza";
            pesoNecessario = pesoIdealMin - peso; // Calcular quanto precisa ganhar
            mensagem = `Necessita ganhar ${pesoNecessario.toFixed(2)} kg para alcançar a categoria Normal.`;
            break;
        case (imc >= 18.5 && imc <= 24.9):
            categoria = "Normal";
            mensagem = "Você está na faixa de peso normal!";
            break;
        case (imc >= 25 && imc < 30):
            categoria = "Excesso de Peso";
            pesoNecessario = peso - pesoIdealMax; // Calcular quanto precisa perder
            mensagem = `Necessita perder ${pesoNecessario.toFixed(2)} kg para alcançar a categoria Normal.`;
            break;
        case (imc >= 30 && imc < 35):
            categoria = "Obesidade I";
            pesoNecessario = peso - pesoIdealMax;
            mensagem = `Necessita perder ${pesoNecessario.toFixed(2)} kg para alcançar a categoria Normal.`;
            break;
        case (imc >= 35 && imc < 40):
            categoria = "Obesidade II";
            pesoNecessario = peso - pesoIdealMax;
            mensagem = `Necessita perder ${pesoNecessario.toFixed(2)} kg para alcançar a categoria Normal.`;
            break;
        case (imc >= 40):
            categoria = "Risco de vida";
            pesoNecessario = peso - pesoIdealMax;
            mensagem = `Necessita perder ${pesoNecessario.toFixed(2)} kg para alcançar a categoria Normal.`;
            break;
        default:
            categoria = "Valor inválido";
            break;
    }

    // Atualizando o resultado na página com a categoria e a recomendação de peso
    resultado[0].innerText = `${categoria} - IMC: ${imc.toFixed(2)}\n${mensagem}`;
    console.log(mensagem)
}

*/

?>