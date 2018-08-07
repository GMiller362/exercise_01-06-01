/* 
 snoot.js 
 Form Validation code for snoot.html

 Author: Grace Wood-Miller
 Date:   8.6.18
*/ 
 
"use strict";
// function to remove select list defaults
function removeSelectDefault() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("select lists: " + emptyBoxes.length);
}

// page load event handlers 
if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefault, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefault);
}