"use strict";

let textArray = [];
let inputText = document.getElementById('input-text');
let buttonUpperCase = document.getElementById('upper-case');
let buttonLowerCase = document.getElementById('lower-case');
let buttonProperCase = document.getElementById('proper-case');
let buttonSentenceCase = document.getElementById('sentence-case');

buttonUpperCase.addEventListener("click", () => {
    inputText.value = inputText.value.toUpperCase();
});

buttonLowerCase.addEventListener("click", () => {
    inputText.value = inputText.value.toLowerCase();
});

buttonProperCase.addEventListener("click", () => {
    textArray = inputText.value.toLowerCase().split(' ');
    for (let i = 0; i < textArray.length; i++) {
        textArray[i] = textArray[i][0].toUpperCase() + textArray[i].slice(1);
    }
    inputText.value = textArray.join(' ');
});

buttonSentenceCase.addEventListener("click", () => {
    textArray = inputText.value.toLowerCase().split('. ');
    for (let i = 0; i < textArray.length; i++) {
        textArray[i] = textArray[i][0].toUpperCase() + textArray[i].slice(1);
    }
    inputText.value = textArray.join(". ");
});

