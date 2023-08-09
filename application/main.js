"use strict";
// ----------------------------------------------------------------
const hiddenNemo = "fvgybuhnemofgbhnj";
function findNemo(text) {
  const index = text.indexOf("nemo");
  if (index !== -1) {
    return `Nemo found at index ${index}.`;
  } else {
    return "Nemo not found.";
  }
}

console.log(findNemo(hiddenNemo));
// ----------------------------------------------------------------
const nemo = {
  firstName: {
    surname: {
      text: {
        msg: "nemo",
      },
    },
  },
};

console.log(nemo.firstName.surname.text.msg);
// ----------------------------------------------------------------

const arr = ["not nemo", "not nemo", "nemo", "not nemo", "not nemo", "nemo"];

for (let i = 0; i < arr.length; i++) {
  const nemo = arr[i];
  if (nemo === "nemo") console.log(nemo);
}
// ---------------------------------------------------------------
