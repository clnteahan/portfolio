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

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

function copyToClipboard(toCopy) {
    if (toCopy != "email") {
        copyTextToClipboard(toCopy)
    }
    else {
        copyTextToClipboard(document.getElementById("emailVal").innerHTML)
    }
}