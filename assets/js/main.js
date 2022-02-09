
const age = document.getElementById("age");
let htmlField = document.getElementById("allow");
let htmlFieldShisha = document.getElementById("shisha");
let htmlFieldWeather = document.getElementById("weatherConditions");

function checkAge() {
    if (age.value >= 18) {
        htmlField.innerHTML = `<p>Volljährig</p>`;
    } else {
        htmlField.innerHTML = `<p>Minderjährig</p>`;
    }
}

function weather(weatherQ) {

    let wConditions;

    if (weatherQ >= 8) {
        wConditions = "super";
    } else if (weatherQ >= 6) {
        wConditions = "gut";
    } else if (weatherQ >= 3) {
        wConditions = "okay";
    }
    else {
        wConditions = "schlecht";
    }

    htmlFieldWeather.innerHTML = `Die Wettersituation ist: ${wConditions}`;
}

function greaterThan(shishaAge) {
    shishaAge.event.preventDefault();
    if (document.getElementById("input").value >= 18) {
        htmlFieldShisha.innerHTML = `<p>Ja. Du kannst Shisha rauchen</p>`;
    } else {
        htmlFieldShisha.innerHTML = `<p>Du farfst noch nicht Shisha rauchen</p>`;
    }
}

