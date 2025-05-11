"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Cesar Acevedo
      Date: 05/11/25

      Filename: project06-03.js
*/

// declare variable
let useShip = document.getElementById("useShip");
// add eventlistener
useShip.addEventListener("click", copyShippingToBilling);

// copy shipping info to billing when checked
function copyShippingToBilling() {
  if(useShip.checked) {
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }
}

// declare variable
let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

// ran the code at first with showValidationErrors() and was not working would only do the bubble errors
// after a lot of looking removed the () from the eventlistener and it finally worked.
// add eventlistener to form elements
for(let i =0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// overrides default error validation and shows text instead
function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}
