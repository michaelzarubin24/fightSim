"use strict";

// 1. Find form---------------------------------------------------------------------------------------------
let form = document.querySelector("form");
console.log(["find form"], form);

// 2. Print every child of form to console------------------------------------------------------------------
let inputFirstName = document.getElementsByName("name")[0];
console.log(["direct input call"], inputFirstName);
const kekInput = document.getElementById("kek");
console.log(["direct kekinput call"], kekInput);
const select = document.querySelector("select");
console.log(["direct select call"], select);
const button = document.getElementById("btn");
console.log(["direct button call"], button);

// 3. Find inputs without direct calls----------------------------------------------------------------------
console.log(["find using children"], form.children[0], form.children[1]);

// 4, 5, 7 Validation---------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const nameInput = document.querySelector('input[name="name"]');
  const surnameInput = document.querySelector('input[name="surname"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const nameValue = nameInput.value.trim();
    const surnameValue = surnameInput.value.trim();

    if (nameValue.length > 4 && surnameValue.length > 5) {
      // Validation successful
      // nameInput.style.background && surnameInput.style.background = "lightblue"; ?????????????
      nameInput.style.background = "lightblue";
      surnameInput.style.background = "lightblue";
      alert("Validation successful! Congratulations!");
    } else {
      // Validation failed
      if (nameValue.length <= 4) {
        nameInput.style.background = "red";
        console.log(
          ["Name validation failed"],
          "Name must have more than 4 characters."
        );
        nameInput.focus();
      }
      if (surnameValue.length <= 5) {
        surnameInput.style.background = "red";
        console.log(
          ["Surname validation failed"],
          "Surname must have more than 5 characters."
        );
        surnameInput.focus();
      }
    }
  });
});
// 6. Side must be dark
const side = document.getElementById("side");
console.log(["find side"], side);
side.style.background = "grey";
