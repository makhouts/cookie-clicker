<<<<<<< HEAD
const cookie = document.getElementById("cookie");
const multiplyBtn = document.getElementById("MULTIPLY_BTN_ID");
const result = document.getElementById("cookieCounter");
let count = 0;

cookie.addEventListener("click", () => {
  counter(1);
});

// multiplyBtn.addEventListener("click", () => {
//   counter(2);
// });

function counter(value) {
  count = count + value;
  result.innerHTML = `${count} cookies`;
=======
const incrementBtn = document.getElementById("INCREMENT_BTN_ID");
const multiplyBtn = document.getElementById("MULTIPLY_BTN_ID");
const result = document.getElementById("RESULT_ID");
let count = 0;

incrementBtn.addEventListener("click", () => {
  counter(1);
});

multiplyBtn.addEventListener("click", () => {
  counter(2);
});

function counter(value) {
  count = count + value;
  result.innerHTML = `Count: ${count}`;
>>>>>>> 16a8f4839fcfd809cca4b66e5af506306394cb2e
}
