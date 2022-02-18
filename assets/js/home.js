const d = new Date();
const birthDate = 20060809;
var currentDateRange = configureDate(d) - birthDate;
var firstText = document.getElementById("firstText");

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

var colinAge = getAge(currentDateRange);

firstText.innerHTML = firstText.innerHTML.replace("[{1}]", colinAge);

var gitImg = document.getElementById("gitImg")

function newTab(url) {
    window.open(url, "_blank");
}