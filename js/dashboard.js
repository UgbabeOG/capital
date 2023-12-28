// Get the logout button element
const logoutButton = document.getElementById("logout-link");
const period = document.querySelector(".period");
const now = new Date(),
 options = { year: 'numeric', month: 'long', day: 'numeric' };currentDate = now.toLocaleDateString(undefined, options);
period.textContent = currentDate;
// Logout function
function logout() {
  const logoutButton = document.getElementById("logout-link");

    // Create a container for the buffering animation
    const bufferingContainer = document.createElement("div");
    bufferingContainer.classList.add("logout-container");

    // Create the buffering element
    const bufferingElement = document.createElement("div");
    bufferingElement.classList.add("logout-buffering");

    // Append the buffering element to the container
    bufferingContainer.appendChild(bufferingElement);

    // Replace the logout link with the buffering container
    logoutButton.replaceWith(bufferingContainer);

    // Disable the logout link to prevent multiple clicks
    bufferingElement.disabled = true;
 

 // Simulate the logout process with a delay
 setTimeout(() => {


  // Redirect to the index.html page
  window.location.href = "/index.html"; // Replace with the actual logout page URL
}, 500); // Delay the redirect to simulate the logout process duration
}
// Add event listener to the logout button
logoutButton.addEventListener("click", logout);

// Automatically logout after page refresh
window.addEventListener("unload", logout);

// Automatically logout after 5 minutes of inactivity
var timeout = setTimeout(logout, 5 * 60 * 1000);

// Reset the timeout on user activity
window.addEventListener("mousemove", resetTimeout);
window.addEventListener("keypress", resetTimeout);

// Function to reset the timeout
function resetTimeout() {
  clearTimeout(timeout);
  timeout = setTimeout(logout, 5 * 60 * 1000);
}
