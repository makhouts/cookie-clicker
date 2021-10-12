const cookie = document.getElementById("cookie");
const cursorSpell = document.getElementById("cursor");
const grandmaSpell = document.getElementById("grandma");
const grandmaProd = document.getElementById("grandmaProd");
const grandmaPrice = document.getElementById('grandmaPrice')
const farmSpell = document.getElementById("farm");
const farmProd = document.getElementById("farmProd");
const result = document.getElementById("cookieCounter");
const audio = document.querySelector("#audio");

let cursorBoolean = false;
let spells = {
  grandma: {
    price: 100,
    lvl: 0
  },
  farm: {
    price: 700,
    lvl: 0
  },
};
grandmaPrice.innerText = `costs: ${spells.grandma.price}`;
let count = 0;
let grandmaHelp = 0;
let farmHelp = 0;

cookie.addEventListener("click", () => {
  count++
  animations();
  showResult()
  setOption(grandmaSpell, farmSpell)
});

setInterval(()=>{
  setOption(grandmaSpell, farmSpell)
}, 1000)

function setOption(a, b){
  if (count >= spells.grandma.price){
    a.classList.remove('disabled')
  } else {
    a.classList.add('disabled')
  }
  if (count >= spells.farm.price){
    b.classList.remove('disabled')
  } else {
    b.classList.add('disabled')
  }
}


cursorSpell.addEventListener("click", () => {
  cursorBoolean = true;
});

grandmaSpell.addEventListener('click', ()=>{
  if (!grandmaSpell.classList.contains('disabled') && !grandmaSpell.classList.add('activated')) {
    grandmaHelp++
    spells.grandma.lvl++
    count = count - spells.grandma.price;
    setInterval(() => {
      count = count + grandmaHelp;
      showResult()
    }, 1000)
    grandmaSpell.classList.add('activated')
    grandmaProd.innerText = `Grandma: ${spells.grandma.lvl} lvl`
    grandmaPrice.innerText = `costs: ${spells.grandma.price}`;
  } else {
    alert("Not enough cookies!");
  }
})

farmSpell.addEventListener("click", () => {
  if (!farmSpell.classList.contains('disabled')) {
    count = count - 10;
    setInterval(() => {
      count = count + 8;
    }, 1000)
  } else {
    alert("Not enough cookies!");
  }
});

function animations() {
  result.classList.add("animate__headShake");
  cookie.classList.add("click-cookie");
  setTimeout(() => {
    result.classList.remove("animate__headShake");
    cookie.classList.remove("click-cookie");
  }, 200);
}

function showResult() {
  audio.play();
  result.innerHTML = `${count} cookies`;
}

function spellPrices(value){
 return Math.round(value * 1.15)
}