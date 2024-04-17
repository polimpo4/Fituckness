function get_gender_from_radio(input)
{
    // Get all radio buttons with name 'gender'
    var calc_radio = document.getElementsByName("gender");
    var actual_gender;

    for (let i = 0; i < calc_radio.length; i++)
        {
            // If the calc_radio is checked, get the value:
            actual_gender = calc_radio[i].value;
            break;
        }

    return actual_gender
}

function calc_tbm()
{
    var name = document.getElementById("name").value;
    var weight = document.getElementById("peso").value;
    var height = document.getElementById("altura").value;
    var age = document.getElementById("idade").value;
    // Get the select element
    var selectItem = document.getElementById("activity_List");
    // Get the selected option
    var selected_option = selectItem.value;
    var gender = get_gender_from_radio()

    window.alert("Hello " + name + weight + height + age + selected_option +
                 gender)
}