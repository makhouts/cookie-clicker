const cookie = document.getElementById("cookie");
// const multiplyBtn = document.getElementById("MULTIPLY_BTN_ID");
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
}
console.log("testg");
