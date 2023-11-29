
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("preloader");
    
    window.addEventListener("load", function(){
        loader.style.display = "none";
    });
});


var dataElement = document.getElementById("dataElement");
var dzisiaj = new Date();
var tekstDaty = "Today Is: " + dzisiaj.toDateString();

dataElement.textContent = tekstDaty;
dataElement.classList.add("footer"); 

var loader = document.getElementById("preloader");
        
         window.addEventListener("load", function(){
        loader.style.display = "none";
        })