function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
  
    // Add leading zeros if necessary
    hour = hour.toString().padStart(2, '0');
    min = min.toString().padStart(2, '0');
    sec = sec.toString().padStart(2, '0');
  
    document.getElementById("hour").textContent = hour;
    document.getElementById("min").textContent = min;
    document.getElementById("sec").textContent = sec;
  }
  
  // Update the clock immediately
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  