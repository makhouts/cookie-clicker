const cookie = document.getElementById("cookie");
const cursorSpell = document.getElementById("cursor");
const grandmaSpell = document.getElementById("grandma");
const grandmaProd = document.getElementById("grandmaProd");
const grandmaPrice = document.getElementById('grandmaPrice')
const farmSpell = document.getElementById("farm");
const farmProd = document.getElementById("farmProd");
const farmPrice = document.getElementById("farmPrice");
const result = document.getElementById("cookieCounter");
const audio = document.querySelector("#audio");


let spells = {
  cursor: {
    price: 15,
    lvl: 0,
    cookiePerSecond: 0
  },
  grandma: {
    price: 100,
    lvl: 0,
    cookiePerSecond: 0
  },
  farm: {
    price: 10000,
    mode: true,
    cookiePerSecond: 0
  },
};

grandmaPrice.innerText = `costs: ${spells.grandma.price}`
farmPrice.innerText = `costs: ${spells.farm.price}`;

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


// cursorSpell.addEventListener("click", () => {
//   if (!cursorSpell.classList.contains('disabled')){
//     spells.
//   }
// });

grandmaSpell.addEventListener('click', ()=>{
  if (!grandmaSpell.classList.contains('disabled')) {
    spells.grandma.cookiePerSecond++
    spells.grandma.lvl++
    count = count - spells.grandma.price;
    setInterval(() => {
      count = count + spells.grandma.cookiePerSecond;
      showResult()
    }, 1000)
    grandmaProd.innerText = `Grandma: ${spells.grandma.lvl} lvl`
    spells.grandma.price = spellPrices(spells.grandma.price)
    grandmaPrice.innerText = `costs: ${spells.grandma.price}`;
  } else {
    alert("Not enough cookies!");
  }
})

farmSpell.addEventListener("click", () => {
  if (!farmSpell.classList.contains('disabled')) {
    let time = 10;
    spells.farm.cookiePerSecond += 2
    spells.farm.mode = true
    count = count - spells.farm.price;
    const farmCycle = setInterval(() => {
      time -= 1
      count *= spells.farm.cookiePerSecond
      farmProd.innerText = `Farm: ${String(time).slice(0, 1)}s`
      showResult()
    }, 1000)
    setTimeout(() => {
      clearInterval(farmCycle)
      if (time >= 1){
        farmProd.innerText = `${String(time).slice(0, 1)}s`
      } else {
        farmProd.innerText = 'Farm: Off'
      }
    }, 10000)
    spells.farm.price = spellPrices()
    farmPrice.innerText = `costs: ${spells.farm.price}`;
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