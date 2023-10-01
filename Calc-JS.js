function reset() {
    document.getElementById("display").innerHTML = "0";
}

function display(y) {
    var x = document.getElementById("display");
    if (x.innerHTML == "0") {
        x.innerHTML = y;
    } else if(y == "+" || y == "-" || y == "x" || y == "/" || y == ".") {
        if (!(x.innerHTML.includes("+")) && !(x.innerHTML.includes("-")) 
        && !(x.innerHTML.includes("x")) && !(x.innerHTML.includes("/"))
        && !(x.innerHTML.includes("."))) {
            x.innerHTML += y;
        }
    } else {
        x.innerHTML += y;
    }
}

function calc() {
    var x = document.getElementById("display");
    var y = 0, total = 0;

    if (x.innerHTML.includes("+")) {
        y = x.innerHTML.split("+");
        total = parseFloat(y[0]) + parseFloat(y[1]);
    } else if (x.innerHTML.includes("-")) {
        y = x.innerHTML.split("-");
        total = parseFloat(y[0]) - parseFloat(y[1]);
    } else if (x.innerHTML.includes("x")) {
        y = x.innerHTML.split("x");
        total = parseFloat(y[0]) * parseFloat(y[1]);
    } else if (x.innerHTML.includes("/")) {
        y = x.innerHTML.split("/");
        total = parseFloat(y[0]) / parseFloat(y[1]);
    }
    x.innerHTML = total.toFixed(2);
}

