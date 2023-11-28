
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("preloader");
    
    window.addEventListener("load", function(){
        loader.style.display = "none";
    });
});


var data = new Date();

var alertText = "Aktualna data i godzina: " + data;

alert(alertText);
