let inpAns = document.getElementById("inp-change");
let box = document.getElementById("cont");
let head = document.getElementById("head");
let para = document.getElementById("para");

inpAns.addEventListener("keyup", () =>{
    box.style.backgroundColor = inpAns.value;
    box.style.borderRadius = inpAns.value;
    if(inpAns.value === "red" || inpAns.value === "crimson" ||  inpAns.value === "burlywood"){
        head.style.color = "#fff";
        para.style.color = "#fff";
        para.innerHTML = "How " + inpAns.value;
    }else{
        head.style.color = "black";
        para.style.color = "black";
        para.innerHTML = "How " + inpAns.value; 
    }

})