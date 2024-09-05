"use strict";
// Main title
let mainTitle = document.getElementById("main-title");
// Main Input
let mainInput = document.getElementById("main-input");
let mainInputValue = Number(mainInput.value);
let cResult = 0;
let fResult = 0;
let kResult = 0;
// Main Buttons
let convertButton = document.getElementById("convert-button");
let resetButton = document.getElementById("reset-button");
let changeButton = document.getElementById("change-button");
// Result Section
let resultSection = document.querySelector(".result-section");
let resultTitle = document.createElement("h2");
let result1Element = document.createElement("h3");
let result2Element = document.createElement("h3");
let clearButton = document.createElement("button");
clearButton.innerHTML = "Clear";
// Flags ( Starting type )
let isCelsius = true;
let isFahrenheit = false;
let isKelvin = false;
function changeContent(isC, isF, isK) {
    if (isC) {
        mainTitle.innerHTML = "Converter °C to °F and K";
        document.title = "Temp Conversion (°C to °F and K)";
        mainInput.setAttribute("placeholder", "Enter temp in °C");
    }
    if (isF) {
        mainTitle.innerHTML = "Converter °F to °C and K";
        document.title = "Temp Conversion (°F to °C and K)";
        mainInput.setAttribute("placeholder", "Enter temp in °F");
    }
    if (isK) {
        mainTitle.innerHTML = "Converter K to °C and °F";
        document.title = "Temp Conversion (K to °C and °F)";
        mainInput.setAttribute("placeholder", "Enter temp in K");
    }
}
function setResultSection(c, f, k, mainValue) {
    clearResults();
    // Results text
    result1Element.classList.add("result-text");
    result2Element.classList.add("result-text");
    if (isCelsius) {
        result1Element.innerHTML = `${mainValue} °C = ${f} °F`;
        result2Element.innerHTML = `${mainValue} °C = ${k} K`;
    }
    else if (isFahrenheit) {
        result1Element.innerHTML = `${mainValue} °F = ${c} °C`;
        result2Element.innerHTML = `${mainValue} °F = ${k} K`;
    }
    else if (isKelvin) {
        result1Element.innerHTML = `${mainValue} K = ${c} °C`;
        result2Element.innerHTML = `${mainValue} K = ${f} °F`;
    }
    // Appending to DOM
    resultSection.append(result1Element);
    resultSection.append(result2Element);
    // Clear Button
    clearButton.addEventListener("click", function () {
        mainInput.value = "";
        clearResults();
    });
    resultSection.append(clearButton);
}
function clearResults() {
    resultSection.innerHTML = "";
    // Result Title Section
    resultTitle.innerHTML = "Results";
    resultSection.append(resultTitle);
}
convertButton.addEventListener("click", function () {
    mainInputValue = Number(mainInput.value);
    if (isCelsius) {
        cResult = mainInputValue;
        fResult = (cResult * 9 / 5) + 32;
        kResult = (cResult + 273.15);
    }
    else if (isFahrenheit) {
        fResult = mainInputValue;
        cResult = (fResult - 32) * (5 / 9);
        kResult = (cResult + 273.15);
    }
    else if (isKelvin) {
        kResult = mainInputValue;
        cResult = kResult - 273.15;
        fResult = (cResult * 9 / 5) + 32;
    }
    setResultSection(cResult, fResult, kResult, mainInputValue);
});
resetButton.addEventListener("click", function () {
    mainInput.value = "";
    isCelsius = true;
    isFahrenheit = false;
    isKelvin = false;
    changeContent(isCelsius, isFahrenheit, isKelvin);
    clearResults();
});
changeButton.addEventListener("click", function () {
    mainInput.value = "";
    clearResults();
    if (isCelsius) {
        isCelsius = false;
        isFahrenheit = true;
        isKelvin = false;
    }
    else if (isFahrenheit) {
        isCelsius = false;
        isFahrenheit = false;
        isKelvin = true;
    }
    else if (isKelvin) {
        isCelsius = true;
        isFahrenheit = false;
        isKelvin = false;
    }
    changeContent(isCelsius, isFahrenheit, isKelvin);
    // Log Section
    // console.log("C: " + isCelsius);
    // console.log("F: " + isFahrenheit);
    // console.log("K: " + isKelvin);
    // console.log("---------");
});
