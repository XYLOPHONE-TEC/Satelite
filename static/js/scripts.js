

function updateClock() {
    let  targetDate = new Date('2023-07-30T12:30:00').getTime();
    
    let now = new Date().getTime();
    let distance = targetDate - now;
    let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));;
    let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));;
    let sec = Math.floor((distance % (1000 * 60)) / 1000);
    let days= Math.floor(distance / (1000 * 60 * 60 * 24));


    //to string and added a zero if necessary
     hour =hour.toString().padStart(2, "0");
      min = min.toString().padStart(2, "0");
      sec = sec.toString().padStart(2, "0");
      days = days.toString().padStart(2, "0");
  
    // Add leading zeros if necessary
    console.log(distance)
    document.getElementById("hours").textContent = hour;
    document.getElementById("min").textContent = min;
    document.getElementById("sec").textContent = sec;
    document.getElementById("days").textContent=days;


    
  }
  
  // Update the clock immediately
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  