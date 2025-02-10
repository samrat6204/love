// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the button and the surprise message container
    const ctaButton = document.getElementById("ctaButton");
    const surpriseMessage = document.getElementById("surpriseMessage");
  
    // When the "Be Mine" button is clicked, show the surprise message
    ctaButton.addEventListener("click", function () {
      surpriseMessage.style.display = "block";  // Show the surprise message
      surpriseMessage.classList.add("fadeIn"); // Add fadeIn animation class
      ctaButton.disabled = true; // Disable the button after click
      ctaButton.style.cursor = "not-allowed"; // Change cursor to show button is disabled
    });
  });



  