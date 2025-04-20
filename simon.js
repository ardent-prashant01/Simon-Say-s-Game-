let gameseq = [];
let userseq = [];
let h3 = document.querySelector("h3");
let level = 0;
let started = false;
let color = ["red", "yellow", "green", "blue"];

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is started");
    started = true;
    setTimeout(levelUp, 500);
  }
});

let btnflash = function (btn) {
  btn.classList.add("flash");
  setInterval(() => {
    btn.classList.remove("flash");
  }, 500);
};
let userflash = function (btn) {
  btn.classList.add("userflash");
  setInterval(() => {
    btn.classList.remove("userflash");
  }, 500);
};

let levelUp = function () {
  userseq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randidx = Math.floor(Math.random() * 3);
  randColor = color[randidx];
  gameseq.push(randColor);
  btn = document.querySelector(`.${randColor}`);
  btnflash(btn);
};

let check = function (idx) {
  if (gameseq[idx] === userseq[idx]) {
    if (gameseq.length == userseq.length) {
      setTimeout(levelUp, 1000);
      // levelUp();
    }
  } else {
    h3.innerHTML = `Game over!! Your score is<b> ${level}</b><br>Press any key to start`;
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(() => {
      body.style.backgroundColor = "white";
    }, 250);
    restart();
  }
};

let btnpress = function () {
  let btn = this;
  userflash(btn);
  let btncolor = btn.getAttribute("id");
  userseq.push(btncolor);
  check(userseq.length - 1);
};

let btns = document.querySelectorAll(".btn");
for (i of btns) {
  i.addEventListener("click", btnpress);
}

let restart = function () {
  started = false;
  level = 0;
  gameseq = [];
  userseq = [];
};
