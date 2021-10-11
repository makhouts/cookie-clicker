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
}
