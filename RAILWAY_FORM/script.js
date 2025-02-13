let addNew = document.querySelector(".add");
let count = 5;

function addPassenger(){
    let pass = document.querySelector(".passenger");
    let html = pass.innerHTML;
    
    let passTable = document.querySelector(".passengerTable");

    let newRow = document.createElement("tr");
    newRow.innerHTML = html;

    passTable.append(newRow);
}

addNew.addEventListener("click",addPassenger);

let addNewChild = document.querySelector(".addChild");
let countChild = 3;

function addChildren(){
    let child = document.querySelector("#singleChild");
    let html = child.innerHTML;
    
    
    let childTable = document.querySelector("#allChildTable");

    let newRow = document.createElement("tr");
    newRow.innerHTML = html;

    childTable.append(newRow);
}

addNewChild.addEventListener("click",addChildren);