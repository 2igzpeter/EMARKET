

    // Set the date we're counting down to
    var countDownDate = new Date("jul 7, 2021 18:37:25").getTime();
    
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
        
      // Output the result in an element with id="demo"
      document.getElementById("chrono").innerHTML = "<div class='timer'><div><span class='num'>"+ days + "</span><small>Days</small></div><div><span class='num'>" + hours + "</span><small>Hours</small></div><div><span class='num'>" + minutes + "</span><small>Min</small></div><div><span class='num'>" +  seconds + " </span><small>Sec</small></div>";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("chrono").innerHTML = "EXPIRED";
      }
    }, 1000);
  

