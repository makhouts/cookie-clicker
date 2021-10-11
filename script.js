const cookie = document.getElementById("cookie");
const cursorMode = document.getElementById("cursor");
const grandmaMode = document.getElementById("grandma");
const grandmaProd = document.getElementById("grandmaProd");
const farmMode = document.getElementById("farm");
const farmProd = document.getElementById("farmProd");
const result = document.getElementById("cookieCounter");
const audio = document.querySelector("#audio");

let mode = "cursor";
let spells = {
  grandma: 5,
  farm: 2,
};
let count = 0;

cookie.addEventListener("click", () => {
  animations(mode);
  counter();
});

cursorMode.addEventListener("click", () => {
  mode = "cursor";
});

grandmaMode.addEventListener("click", () => {
  if (spells.grandma > 0) {
    spells.grandma--;
    grandmaProd.innerText = `Grandma: ${spells.grandma}`;
    grandmaMode.classList.add("activated");
    mode = "grandma";
  } else {
    alert("The grandma spells are over!");
  }
});

farmMode.addEventListener("click", () => {
  if (spells.farm > 0) {
    spells.farm--;
    farmProd.innerText = `Farm: ${spells.farm}`;
    farmMode.classList.add("activated");
    mode = "farm";
  } else {
    alert("The farm spells are over!");
  }
});

function animations() {
  result.classList.add("animate__headShake");
  cookie.classList.add("click-cookie");
}

function counter(option = "cursor") {
  mode = option;
  if (mode == "cursor") {
    count++;
  } else if (mode == "grandma") {
    const grandma = setInterval(() => {
      count++;
      showResult();
    }, 1000);
    setTimeout(() => {
      clearInterval(grandma);
    }, 320000);
  } else if (mode == "farm") {
    counter = counter + 5;
  }
  showResult();
  setTimeout(() => {
    result.classList.remove("animate__headShake");
    cookie.classList.remove("click-cookie");
  }, 200);
}

function showResult() {
  audio.play();
  result.innerHTML = `${count} cookies`;
}
