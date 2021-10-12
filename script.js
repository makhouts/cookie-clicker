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
  audio.play()
  animations();
  showResult()
  setOption(cursorSpell, grandmaSpell, farmSpell)
});

setInterval(()=>{
  showResult()
  setOption(cursorSpell, grandmaSpell, farmSpell)
}, 100)

function setOption(a, b, c){
  if (count >= spells.cursor.price){
    a.classList.remove('disabled')
  } else {
    a.classList.add('disabled')
  }
  if (count >= spells.grandma.price){
    b.classList.remove('disabled')
  } else {
    b.classList.add('disabled')
  }
  if (count >= spells.farm.price){
    c.classList.remove('disabled')
  } else {
    c.classList.add('disabled')
  }
}


cursorSpell.addEventListener("click", () => {
  if (!cursorSpell.classList.contains('disabled')){
    spells.cursor.cookiePerSecond++
    spells.cursor.lvl++
    count -= spells.cursor.price;
    setInterval(() => {
      count += spells.cursor.cookiePerSecond
      showResult()
    }, 10000);
    cursorProd.innerText = `Cursor: ${spells.cursor.lvl} lvl`
    spells.cursor.price = spellPrices(spells.cursor.price)
    cursorPrice.innerText = `costs: ${spells.cursor.price}`;
  } else {
    alert("Not enough cookies!");
  }
  }
)

grandmaSpell.addEventListener('click', ()=>{
  if (!grandmaSpell.classList.contains('disabled')) {
    spells.grandma.cookiePerSecond++
    spells.grandma.lvl++
    count -= spells.grandma.price;
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
    let time = 3;
    spells.farm.cookiePerSecond += 2
    spells.farm.mode = true
    count -= spells.farm.price;
    const farmCycle = setInterval(() => {
      time -= 1
      count *= spells.farm.cookiePerSecond
      farmProd.innerText = `Farm: ${time}s`
      showResult()
    }, 1000)
    setTimeout(() => {
      clearInterval(farmCycle)
      if (time >= 1){
        farmProd.innerText = `${time}s`
      } else {
        farmProd.innerText = 'Farm: Off'
      }
    }, 3000)
    spells.farm.price = spellPrices(null, spells.farm.price)
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
  result.innerHTML = `${count} cookies`;
}

function spellPrices(value = null, superSpell = null){
  if (superSpell != null){
    return Math.round(superSpell * 20)
  } else if (value != null){
    return Math.round(value * 1.15)
  }
}