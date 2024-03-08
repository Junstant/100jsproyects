const dateInput = document.querySelector(".dateInput");
const dateResult = document.querySelector(".dateResult");
const yearsText = document.querySelector(".yearsText");

//! This isn't useful bcs the amount of lines
// get actual year month day
// const getYear= new Date();
// const parametersYear = {year: 'numeric'};
// const actualYear = parseInt(getYear.toLocaleDateString('EN-US',parametersYear));
// const getMonth= new Date();
// const parametersMonth = {month: 'numeric'};
// const actualMonth = parseInt(getMonth.toLocaleDateString('EN-US',parametersMonth));
// const getDay= new Date();
// const parametersDay = {day: 'numeric'};
// const actualDay = parseInt(getDay.toLocaleDateString('EN-US',parametersDay));
// * This is correct
const currentDate = new Date();
const actualYear = currentDate.getFullYear();
const actualMonth = currentDate.getMonth() + 1; // Se suma 1 ya que los meses son de 0 a 11
const actualDay = currentDate.getDate();

//* this can be better with a function which take the value and split with "-" and map with the function .number and return the value to save it in a let
function dateCalculate(){
 let birth = dateInput.value;
 let birthYear = parseInt(birth.slice(0,4));
 let birthMonth = parseInt(birth.slice(5,7));
 let birthDay = parseInt(birth.slice(8,10));
 if(birth !== ""){
    if((actualMonth === birthMonth) && (actualDay === birthDay)){
         let actualAge = actualYear - birthYear;
         dateResult.innerHTML = actualAge;
         yearsText.innerHTML = "HAPPY BIRTHDAY";
     }
    else if((actualMonth === birthMonth) && (actualDay >= birthDay)){
        let actualAge = actualYear - birthYear;
        dateResult.innerHTML = actualAge;
        yearsText.innerHTML = "YEARS";
    }
    else{
        let actualAge = actualYear - birthYear;
        actualAge--;
        dateResult.innerHTML = actualAge;
        yearsText.innerHTML = "YEARS";
    }
}
else{
    dateResult.innerHTML = ">:(";
    yearsText.innerHTML = "INVALID DATE";
}
}

// *IA solution
/* 
const dateInput = document.querySelector(".dateInput");
const dateResult = document.querySelector(".dateResult");
const yearsText = document.querySelector(".yearsText");

function getCurrentDate() {
    const currentDate = new Date();
    return {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1, // Se suma 1 ya que los meses son de 0 a 11
        day: currentDate.getDate()
    };
}

function parseDate(input) {
    const [year, month, day] = input.split('-').map(Number);
    return { year, month, day };
}

function calculateAge(birthDate, currentDate) {
    let age = currentDate.year - birthDate.year;
    if (
        birthDate.month > currentDate.month ||
        (birthDate.month === currentDate.month && birthDate.day > currentDate.day)
    ) {
        age--;
    }
    return age;
}

function dateCalculate() {
    const birthInput = dateInput.value;
    if (!birthInput) {
        dateResult.innerHTML = ">:(";
        yearsText.innerHTML = "INVALID DATE";
        return;
    }

    const currentDate = getCurrentDate();
    const birthDate = parseDate(birthInput);
    const age = calculateAge(birthDate, currentDate);

    dateResult.innerHTML = age;
    yearsText.innerHTML = (currentDate.month === birthDate.month && currentDate.day === birthDate.day) ? "HAPPY BIRTHDAY" : "YEARS";
}
*/

// ? important, input is a element that's will be defined when u call the function with a value between the parentesis (), and u can use multiple methods like .split .map
/*
function ejemplo(input) {
    const [year, month, day] = input.split('-').map(Number);
    return { year, month, day };
}

const fechaTexto = "2024-03-02";
const fechaObjeto = ejemplo(fechaTexto);

console.log(fechaObjeto);
*/