document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    document.querySelectorAll(".parallax-layer").forEach((layer) => {
      const speed = parseFloat(layer.getAttribute("data-speed")) || 0.3;
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

  
  // Set the date we're counting down to
var countDownDate = new Date("Mar 8, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timer"

  // ===========need to fix the timer to display in the format of days:hours:minutes:seconds==========
  // document.getElementById("timer").innerHTML = days + " : " + hours + " : "
  // + minutes + " : " + seconds + "  ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


// =================Navigation Menu=================

document.addEventListener('DOMContentLoaded', function() {
  const navList = document.querySelector(".nav-list");
  const navToggler = document.querySelector(".nav-toggler");
  // console.log(navList.innerHTML);

  navToggler.addEventListener('click', () => {
    navToggler.classList.toggle("open");
    navList.classList.toggle("active");
  });
});