// Countdown Timer JavaScript

// Set the date for the next festival (June 15, 2025)
const targetDate = new Date('May 15, 2025 11:00:00').getTime();

// DOM elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Update the countdown every second
const countdownInterval = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();
  
  // Calculate the time difference between now and the target date
  const timeDifference = targetDate - now;
  
  // If the target date has passed, clear the interval and display a message
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    
    // You could add additional functionality here for when the event starts
    return;
  }
  
  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
  // Display the countdown
  daysElement.textContent = days < 10 ? '0' + days : days;
  hoursElement.textContent = hours < 10 ? '0' + hours : hours;
  minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
  
  // Add a pulsing animation to the values that just changed
  if (seconds === 0) {
    secondsElement.classList.add('pulse');
    
    if (minutes === 0) {
      minutesElement.classList.add('pulse');
      
      if (hours === 0) {
        hoursElement.classList.add('pulse');
        
        if (days === 0) {
          daysElement.classList.add('pulse');
        }
      }
    }
  }
  
  // Remove pulse animation after it completes
  setTimeout(() => {
    secondsElement.classList.remove('pulse');
    minutesElement.classList.remove('pulse');
    hoursElement.classList.remove('pulse');
    daysElement.classList.remove('pulse');
  }, 2000);
  
}, 1000);