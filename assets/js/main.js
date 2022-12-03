

// Here is four important function for this calculator


function clr() {
    document.getElementById("result").value = "";
}

function solve() {

    let x =  document.getElementById("result").value;
    let y = eval(x); 
    document.getElementById("result").value = y;
    
}

function numbtn(val) {
    document.getElementById("result").value+=val;
}