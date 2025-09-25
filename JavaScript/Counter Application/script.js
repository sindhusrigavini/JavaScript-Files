document.getElementById("heading").style.color = " #1976D2";
function Increment() {
    let value = document.getElementById("counter").textContent;
    value = Number(value) + 1;
    if (value > 0) {
        document.getElementById("counter").style.color = "green";
    }
    else if(value < 0){
        document.getElementById("counter").style.color = "red";
    }   
    else{
        document.getElementById("counter").style.color = "black";
    }
    document.getElementById("counter").textContent = value;
}
function Decrement() {
    let value = document.getElementById("counter").textContent;
    value = Number(value) - 1;
    if (value > 0) {
        document.getElementById("counter").style.color = "green";
    }
    else if(value < 0){
        document.getElementById("counter").style.color = "red";
    }   
    else{
        document.getElementById("counter").style.color = "black";
    }
    document.getElementById("counter").textContent = value;
}
function Reset() {
    document.getElementById("counter").textContent = 0;
    document.getElementById("counter").style.color = "black";
}