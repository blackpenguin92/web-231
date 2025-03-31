/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Cesar Acevedo
      Date: 03/30/25

      Filename: project02-02.js
 */

// Verify form was filled out
function verifyForm() {
  //variables
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  //check if all fields are filled
  name && email && phone ? window.alert("Thank you!") : window.alert("Please fill in all fields");
}

// Run check on submission
document.getElementById("submit").onclick = verifyForm;