let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let body = document.querySelector("body");
let res = document.querySelector("#res");

red.addEventListener("click",function(){
    plrLst.push("red");
})
blue.addEventListener("click",function(){
    plrLst.push("blue");
})
green.addEventListener("click",function(){
    plrLst.push("green");
})
yellow.addEventListener("click",function(){
    plrLst.push("yellow");
})

let lev = 0;
let sysLst = [];
let plrLst = [];
let colors = ["red", "blue", "green", "yellow"];
let flag = false;

document.addEventListener("keypress", function () {
  if(flag==true){
    if((arraysMatch(sysLst,plrLst))){
      score();
    }
  }
  lev++;
  h3.innerText = `LEVEL:${lev}`;
  main(lev);
});

function changeColor(color) {
  color.classList.add("white");
  setTimeout(() => {
    color.classList.remove("white");
  }, 700);
}

function random() {
  let num = Math.floor(Math.random() * 4);
  return num;
}

function main(lvl) {
  flag=true;
  plrLst.length=0;
  let rand = random();
  let val = colors[rand];
  sysLst.push(val);
  console.log(sysLst);
  setTimeout(() => {
    let color = document.querySelector(`.${sysLst[sysLst.length - 1]}`);
    changeColor(color);
  }, 1000);
}

function User(){
    plrLst.length=0;
}

function arraysMatch(arr1, arr2) {
  if(arr1.length === arr2.length){
    for(let i=0;i<arr1.length;i++){
      if(arr1[i]===arr2[i]) {
        body.style.backgroundColor = "greenyellow";
        setTimeout(()=>{
          body.style.backgroundColor = "white";
        },800)
        return false};
    }   
  }
  return true;
}

function score(){
    console.log("inside");
    body.style.backgroundColor = "red";
    setTimeout(()=>{
      body.style.backgroundColor = "white";
    },100);
    sysLst.length=0;
    h3.innerText = "YOU LOST... GAME RESETED...";
    res.classList.add("dis");
    res.innerHTML = `<p>GAME RESET<br>LAST SCORE:${lev-1}</p>
                    <button id="btn" onclick="location.reload()">RESET</button>`;
    lev=0;
    flag=false;
}
