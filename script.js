<<<<<<< HEAD
const incrementBtn = document.getElementById("cookie");
const multiplyBtn = document.getElementById("MULTIPLY_BTN_ID");
const result = document.getElementById("RESULT_ID");
let count = 0;

let status = `${count} cookies`

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
=======
const cookie = document.getElementById("cookie");
// const multiplyBtn = document.getElementById("MULTIPLY_BTN_ID");
const result = document.getElementById("cookieCounter");
let count = 0;

<<<<<<< HEAD
let status = `${count} cookies`;

incrementBtn.addEventListener("click", () => {
=======
cookie.addEventListener("click", () => {
  cookie.classList.add("click-cookie");
>>>>>>> 0146aec71d318dea3aeb55920454d9d02c6a515d
  counter(1);
});

// multiplyBtn.addEventListener("click", () => {
//   counter(2);
// });

function counter(value) {
  count = count + value;
  result.innerHTML = `${count} cookies`;
  setTimeout(() => {
    cookie.classList.remove("click-cookie");
  }, 200);
}
<<<<<<< HEAD
=======
console.log("testg");
>>>>>>> 0146aec71d318dea3aeb55920454d9d02c6a515d
>>>>>>> main
