
function boerCalc(weight, height, gender) {
    if (gender === 'male') {
        return (0.407 * weight) + (0.267 * height) - 19.2;
    } else if (gender === 'female') {
        return (0.252 * weight) + (0.473 * height) - 48.3;
    } else {
        return `invalid gender`;
    }
}

function jamesCalc(weight, height, gender) {
    if (gender === 'male') {
        return (1.1 * weight) - (128 * Math.pow((weight / height), 2));
    } else if (gender === 'female') {
        return (1.07 * weight) - (148 * Math.pow((weight / height), 2));
    } else {
        return `invalid gender`;
    }
}

function humeCalc(weight, height, gender) {
    if (gender === 'male') {
        return (0.3281 * weight) + (0.33929 * height) - 29.5336;
    } else if (gender === 'female') {
        return (0.29569 * weight) + (0.41813 * height) - 43.2933;
    } else {
        return `invalid gender`;
    }
}

function getGender() {
    if (document.getElementById('male').checked) {
        return 'male';
    } else if (document.getElementById('female').checked) {
        return 'female';
    } else {
        return '';
    }
}

function calculateBodyFatPercentage(lbm, weight) {
    return (100 - ((lbm / weight) * 100)).toFixed(0);
}

function displayResults(lbm, bodyFatPercentage, elementId) {
    const lbmElement = document.getElementById(elementId + "bodyMass");
    const bodyFatElement = document.getElementById(elementId + "bodyFat");

    lbmElement.innerHTML = `${lbm} KG`;
    bodyFatElement.innerHTML = `${bodyFatPercentage}%`;
}

function calc() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const gender = getGender();

    const boerLbm = boerCalc(weight, height, gender).toFixed(1);
    const jamesLbm = jamesCalc(weight, height, gender).toFixed(1);
    const humeLbm = humeCalc(weight, height, gender).toFixed(1);

    const boerBodyFat = calculateBodyFatPercentage(boerLbm, weight);
    const jamesBodyFat = calculateBodyFatPercentage(jamesLbm, weight);
    const humeBodyFat = calculateBodyFatPercentage(humeLbm, weight);

    displayResults(boerLbm, boerBodyFat, "boar");
    displayResults(jamesLbm, jamesBodyFat, "james");
    displayResults(humeLbm, humeBodyFat, "hume");

}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var table = document.getElementById("tables");
    table.classList.toggle("table-dark");

    var table = document.getElementById("calcBtn");
    table.classList.toggle("btn-dark");


}