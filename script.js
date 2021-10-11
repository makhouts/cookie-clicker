const cookie = document.getElementById("cookie");
const cursorMode = document.getElementById("cursor");
const grandmaMode = document.getElementById("grandma");
const farmMode = document.getElementById("farm");
const result = document.getElementById("cookieCounter");

let mode = "cursor";
const audio = document.querySelector("#audio");
let count = 0;

cookie.addEventListener("click", () => {
  result.classList.add("animate__headShake");
  cookie.classList.add("click-cookie");
  audio.play();
  counter(1);
});

cursorMode.addEventListener("click", () => {
  setMode("cursor");
});

grandmaMode.addEventListener("click", () => {
  setMode("grandma");
});

farmMode.addEventListener("click", () => {
  setMode("farm");
});

function counter(value) {
  count = count + value;
  result.innerHTML = `${count} cookies`;
  setTimeout(() => {
    result.classList.remove("animate__headShake");
    cookie.classList.remove("click-cookie");
  }, 200);
}

function setMode(mode) {
  mode = mode;
  if (mode == "cursor") {
    console.log(mode);
  } else if (mode == "grandma") {
    console.log(mode);
  } else {
    console.log(mode);
  }
}
