const d = new Date();
const birthDate = 20060809;
var currentDateRange;
var firstText;

window.addEventListener('load', function () {
    beginHomeJs();
})

function beginHomeJs() {
    firstText = document.getElementById("firstText");
    currentDateRange = configureDate(d) - birthDate;

    var colinAge = getAge(currentDateRange);

    firstText.innerHTML = firstText.innerHTML.replace("**1**", colinAge);
}

function configureDate(date) {
    var toReturn = null;

    toReturn = date.getFullYear() * 100;
    toReturn = (toReturn + d.getMonth() + 1) * 100;
    toReturn += date.getDate();

    return toReturn;
}

function getAge(dateRange) {
    var mathDate = dateRange / 10000;
    mathDate = Math.floor(mathDate);

    return mathDate;
}