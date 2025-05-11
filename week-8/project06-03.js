"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Cesar Acevedo
      Date: 05/11/25

      Filename: project06-03.js
*/

let images = document.querySelectorAll("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

for(let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    if(this.parentElement.id === "photo_bucket") {
      let newItem = document.createElement("Li");
      photoList.appendChild(newItem);
      newItem.appendChild(this);
    } else {
      let oldItem = this.parentElement;
      photoBucket.appendChild(this);
      oldItem.parentElement.removeChild(oldItem);
    }
  }
}
