// document.addEventListener("DOMContentLoaded", () => {
//   let num1Element = document.getElementById("num1");
//   let num2Element = document.getElementById("num2");
//   let addBtn = document.getElementById("addBtn");
//   let result = document.getElementById("result");

//   addBtn.addEventListener("click", (e) => {
//     e.target.value = parseInt(num1Element.value) + parseInt(num2Element.value);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  let defaultElement = document.getElementById("defValue");
  let addition = document.getElementById("addBtn");
  let subtract = document.getElementById("subBtn");
  let currentValue = 0;

  const add = () => {
    currentValue++;
    defaultElement.innerHTML = currentValue;
  };

  const sub = () => {
    currentValue--;
    defaultElement.innerHTML = currentValue;
  };

  addition.addEventListener("click", add);

  subtract.addEventListener("click", sub);
});
