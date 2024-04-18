function get_gender_from_radio()
{
    // Get all radio buttons with name 'gender'
    var calc_radio = document.getElementsByName("gender");
    var actual_gender;

    for (let i = 0; i < calc_radio.length; i++)
        {
            // If the calc_radio is checked, get the value:
            actual_gender = calc_radio[i].value;
        }

    return actual_gender
}

function get_AF()
{
    /*
     Get Activity Factor (AF) based on activity type and return the respective
     value
    */

    // Get the select element
    var selectItem = document.getElementById("activity_List");
    // Get the selected option
    var selected_option = selectItem.value;
    var activity_factor

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
    var name = document.getElementById("name").value;
    var weight = document.getElementById("peso").value;
    var height = document.getElementById("altura").value;
    var age = document.getElementById("idade").value;
    var gender = get_gender_from_radio()
    var AF = get_AF()

    window.alert(`Hello ${name}, weight ${weight}, height ${height}, age ${
        age}, sex ${gender}, AF ${AF}`);

    if (gender == "male")
        {
            var result =
                AF * (66 + ((13.7 * weight) + (5 * height) - (6.8 * age)))
        }
    else
        {
            var result =
                (AF * (655 + ((9.6 * weight) + (1.8 * height) - (4.7 * age))))
        }

    document.getElementById("result").innerHTML =
        `Olá, ${name}, você deve ingerir ${result} Kcal para manter o peso`
}