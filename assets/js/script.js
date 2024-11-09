function patao(target, url) {
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

btn[0].addEventListener("click", ()=>{
    patao(main, "./pgs/imc.php");
})

btn[1].addEventListener("click", ()=>{
    alert(2);
})

let altura = "";
let peso = "";


function alturafunc(x){
    if(Number.isInteger(parseInt(x.value))){

        if(x.value.includes(",") || x.value.includes(".")){
            x.value = "1";
            return alert("Apenas numeros INTEIROS são permitidos!");
        }

        if (x.value > 269 || x.value < 0 || x.value == 0) {
            x.value = "1";
        }

        altura = parseInt(x.value)/100;
    }else{
        x.value = "1";
        return alert("Apenas numeros são permitidos de medidas humanas!");
    }
}

function pesofunc(x){
    if(Number.isInteger(parseInt(x.value))){

        if(x.value.includes(",")){
            x.value = "1";
            return alert("Apenas pesos com . são permitidos!");
        }

        if (x.value > 500 || x.value < 0 || x.value == 0) {
            x.value = "1";
        }

        peso = parseFloat(x.value);
    }else{
        x.value = "1";
        return alert("Apenas numeros são permitidos de medidas humanas!");
    }
}

let resultado = document.getElementsByClassName("resultado");


function teste(){
    resultado[0].innerText = peso/(altura*altura);
}




/* 
function get_gender_from_radio()
{
    // Get all radio buttons with name 'gender'
    var calc_radio = document.getElementsByName("gender");
    var actual_gender;

    for (let i = 0; i < calc_radio.length; i++)
        {
            // If the calc_radio is checked, get the value:
            if (calc_radio[i].checked)
                {
                    actual_gender = calc_radio[i].value;
                }
        }

    return actual_gender;
}

function get_AF()
{


    // Get the select element
    var selectItem = document.getElementById("activity_List");
    // Get the selected option
    var selected_option = selectItem.value;
    var activity_factor;

    switch (selected_option)
        {
            case "sendentario":
                {
                    return activity_factor = 1;
                }
            case "pouco":
                {
                    return activity_factor = 1.4;
                }
            case "moderadamente":
                {
                    return activity_factor = 1.6;
                }
            case "muito":
                {
                    return activity_factor = 1.9;
                }
            case "extremamente":
                {
                    return activity_factor = 2.5;
                }
                // We don't need default option, because always one of the given
                // cases will be satisfied
        }
}

function calc_tbm()
{
    // var name = document.getElementById("name").value;
    // var weight = document.getElementById("peso").value;
    // var height = document.getElementById("altura").value;
    // var age = document.getElementById("idade").value;
    var name = sanitizeInput(document.getElementById("name").value);
    var weight = sanitizeInput(document.getElementById("peso").value);
    var height = sanitizeInput(document.getElementById("altura").value);
    var age = sanitizeInput(document.getElementById("idade").value);
    var age = document.getElementById("idade").value;
    var gender = get_gender_from_radio();
    var AF = get_AF();

    // Controle de input
    if ((name == "") || (weight == "") || (height == "") || (age == ""))
        {
            window.alert(
                "Parâmetros inválidos, verifique se em algum campo está faltando informação");
        }
    else
        {
            switch (gender)
                {
                    case "male":
                        {
                            var result =
                                (AF * (66 + ((13.7 * weight) + (5 * height) -
                                             (6.8 * age))))
                                    .toFixed(2); // toFixed(2) format the result
                                                 // for 2 decimals
                            break;
                        }
                    case "female":
                        {
                            var result =
                                (AF * (655 + ((9.6 * weight) + (1.8 * height) -
                                              (4.7 * age))))
                                    .toFixed(2); // toFixed(2) format the
                                                 // result for 2 decimals
                            break;
                        }
                    default:
                        window.alert("Você não selecionou o sexo.")
                        break;
                }

            document.getElementById("result").innerHTML = // Output
                `Olá, ${name}, você deve ingerir ${
                    result} Kcal para manter o peso`
        }

    // // Used for debug
    // window.alert(`Hello ${name}, weight ${weight}, height ${height}, age ${
    //     age}, sex ${gender}, AF ${AF}`);
}

function calc_imc()
{
    var altura = document.getElementById("altura_input").value;o
    var peso = document.getElementById("peso_input").value;
    var result;
    var category;

    if ((altura == "") || (peso == ""))
        {
            if (altura == "")
                {
                    window.alert("Favor preencher o campo altura");
                }
            if (peso == "")
                {
                    window.alert("Favor preencher o campo peso");
                }
        }
    else
        {
            result = (peso / altura ** 2).toFixed(2);
            category = Return_Category(result);

            document.getElementById("IMC_result").innerHTML =
                `Seu IMC é <strong>${
                    result}</strong> e você se enquadra na categoria <strong>${
                    category}</strong>`;
        }
}

function Return_Category(result)
{
    var category;

    if (result < 18.5)
        {
            category = "Magreza";
            return category;
        }
    else if (result < 24.9)
        {
            category = "Normal";
            return category
        }
    else if (result < 29.9)
        {
            category = "Sobrepeso";
            return category;
        }
    else if (result < 39.9)
        {
            category = "Obesidade"
            return category
        }
    else
        {
            category = "Obesidade Grave"
            return category
        }
}

function clean()
{
    document.getElementById("altura_input").value = "";
    document.getElementById("peso_input").value = "";
}

function sanitizeInput(input)
{


    // Create a new div element
    var div = document.createElement('div');
    // Create a text node from the input, which automatically encodes special
    // HTML characters
    div.appendChild(document.createTextNode(input));
    // Return the sanitized HTML as a string
    return div.innerHTML;
} */