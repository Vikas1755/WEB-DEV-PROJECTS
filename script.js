function calc(opr){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    switch(opr){
        case '+': document.getElementById("res").textContent = "RESULT:"+(num1+num2).toString();
            break;
        case '-': document.getElementById("res").textContent = "RESULT:"+(num1-num2).toString();
            break;
        case '*': document.getElementById("res").textContent = "RESULT:"+(num1*num2).toString();
            break;
        case '/': document.getElementById("res").textContent = "RESULT:"+(num1/num2).toString();
            break;
        case '^': document.getElementById("res").textContent = "RESULT:"+(Math.pow(num1,num2)).toString();
            break;
        case '#': document.getElementById("res").textContent = "RESULT:"+(Math.sqrt(num1)).toString();
            break;
            default:
                document.getElementById("res").textContent = "error";
    }
}