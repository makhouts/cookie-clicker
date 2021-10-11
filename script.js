const cookie = document.getElementById("cookie");
// const multiplyBtn = document.getElementById("MULTIPLY_BTN_ID");
const result = document.getElementById("cookieCounter");
const audio = document.querySelector('#audio');
let count = 0;

cookie.addEventListener("click", () => {
  cookie.classList.add("click-cookie");
  audio.play();
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
