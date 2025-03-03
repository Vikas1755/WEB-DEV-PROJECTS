let list = document.querySelector("#list");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let div = document.querySelector("div");
let body = document.querySelector("body");

let items = {};

list.addEventListener("click",function(){
    if(Object.keys(items).length === 0){
        div.innerHTML = "<h1><b>LIST IS EMPTY<b></h1>"
    }
    else{
        div.innerHTML = "";
        for(let item in items){
            div.innerHTML += `${item}.&nbsp&nbsp${items[item]}<br><hr>`;
        }
    }
});

add.addEventListener("click",function(){
    let ele = prompt("enter task:");
    items[Object.keys(items).length+1]=ele;
    div.innerHTML="";
    for(let item in items){
        div.innerHTML += `${item}.&nbsp&nbsp${items[item]}<br><hr>`;
    }
})

remove.addEventListener("click",function(){
    if(Object.keys(items).length == 0){
        div.innerHTML = "<h1><b>LIST IS EMPTY<b></h1>"
    }
    else{
        let num = prompt("enter item number to be deleted");
        delete items[num];
        div.innerHTML="";
        for(let item in items){
            div.innerHTML += `${item}.&nbsp&nbsp${items[item]}<br><hr>`;
        }
    }
})