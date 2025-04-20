/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Cesar Acevedo
      Date:   04/20/25

      Filename: project03-01.js
*/

// initialize menuItems to be an array of the menuItems and
// loop through array and run the function calcTotal when
// the item is clicked
let menuItems = document.getElementsByClassName("menuItem");
for(i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal)
}

// calculate the total by checking if the box was checked
// and add it to orderTotal
function calcTotal() {
  let orderTotal = 0;
  for(i = 0; i < menuItems.length; i++) {
    if(menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  // changes <span> in HTML to the value of orderTotal in
  // the format specified by formatCurrency()
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }