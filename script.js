// Image That Loads From the start of the website *Loading screen* its very hard to see but its there
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("preloader");
    
    window.addEventListener("load", function(){
        loader.style.display = "none";
    });
});

// Function that on the bottom of the website in gray background *Today Is* Its from the previours exercises
var dataElement = document.getElementById("dataElement");
var dzisiaj = new Date();
var tekstDaty = "Today Is: " + dzisiaj.toDateString();

dataElement.textContent = tekstDaty;
dataElement.classList.add("footer"); 

var loader = document.getElementById("preloader");
        
         window.addEventListener("load", function(){
        loader.style.display = "none";
        })



        document.addEventListener("DOMContentLoaded", function() {
            // Function That Calculates The days to the end of the year
            function daysUntilEndOfYear() {
                const today = new Date();
                const endOfYear = new Date(today.getFullYear() + 1, 0, 1); 
                const millisecondsInADay = 24 * 60 * 60 * 1000; 
        
                const daysRemaining = Math.floor((endOfYear - today) / millisecondsInADay);
                return daysRemaining;
            }
        
            
            function updateCountdown() {
                const countdownElement = document.getElementById("countdown");
                const daysRemaining = daysUntilEndOfYear();
        
                countdownElement.textContent = `Days until the end of the year: ${daysRemaining}`;
            }
            setInterval(updateCountdown, 1000);
        
        
            updateCountdown();
        });
//Skontaktuj Sie//
           document.getElementById('kontakt-link').addEventListener('click', function(){
      document.getElementById('powiadomienie').style.display = 'block';
    });

    document.addEventListener('click', function(event) {
      var powiadomienie = document.getElementById('powiadomienie');
      var kontaktLink = document.getElementById('kontakt-link');

      if (event.target !== powiadomienie && event.target !== kontaktLink) {
        powiadomienie.style.display = 'none';
      }
    });

//Social Media//
    document.getElementById('KontaktMedia').addEventListener('click', function(){
        document.getElementById('SocialMedia').style.display = 'block';
      });
    document.addEventListener('click', function(event) {
        var SocialMedia = document.getElementById('SocialMedia');
        var KontaktMedia = document.getElementById('KontaktMedia');
  
        if (event.target !== SocialMedia && event.target !== KontaktMedia) {
          SocialMedia.style.display = 'none';
        }
      });




  
    