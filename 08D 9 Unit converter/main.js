// call elements from dom
const temperatureInput = document.querySelector(".temperatureInput");
const weightInput = document.querySelector(".weightInput");
const tonne = document.querySelector(".tonne");
const kilograms = document.querySelector(".kilograms");
const grams = document.querySelector(".grams");
const pounds = document.querySelector(".pounds");
const ounces = document.querySelector(".ounces");
const stones = document.querySelector(".stones");
const celcius = document.querySelector(".celcius");
const fahrenheit = document.querySelector(".fahrenheit");
const kelvin = document.querySelector(".kelvin");


// transform temperature
temperatureInput.addEventListener("change", function() {
    let temperature = temperatureInput.value;
    celcius.innerHTML = temperature;
    fahrenheit.innerHTML = (temperature * (9/5)+32);
    kelvin.innerHTML = (temperature + 273.15);

    if(temperature === ""){
        celcius.innerHTML = 0;
        fahrenheit.innerHTML = 0;
        kelvin.innerHTML = 0;
    }
})

// transform weight
weightInput.addEventListener("change", function() {
    let weight = weightInput.value;
    kilograms.innerHTML = weight;
    tonne.innerHTML = weight / 1000;
    grams.innerHTML = weight * 1000;
    pounds.innerHTML = weight * 2.2046;
    ounces.innerHTML = weight * 35.274;
    stones.innerHTML = weight * 6.35;

    if(weight === ""){
        kilograms.innerHTML = 0;
        tonne.innerHTML = 0;
        grams.innerHTML = 0;
        pounds.innerHTML = 0;
        ounces.innerHTML = 0;
        stones.innerHTML = 0;
    }
})
// event listeners
const elements = [tonne, kilograms, grams, pounds, ounces, stones, celcius, fahrenheit, kelvin];

function addClipboardEventListener(element) {
    element.addEventListener("click", function(){
        navigator.clipboard.writeText(element.innerHTML);
        
    });
}

elements.forEach(addClipboardEventListener);