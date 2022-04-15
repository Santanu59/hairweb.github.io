var manubtn = document.getElementById("manubtn")
var sidenav = document.getElementById("sidenav")
var manu = document.getElementById("manu")

sidenav.style.right = "-250px";

manubtn.onclick = function(){
    if(sidenav.style.right == "-250px"){
        sidenav.style.right = "0";
        // manu.src = "image/close.png"
    }
    else{
        sidenav.style.right = "-250px";
        // manu.src = "image/manu.png";
    }
}