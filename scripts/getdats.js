/ Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date
const lastModified = document.lastModified;

// Update the copyright year
document.getElementById("year").textContent = currentYear;

// Update the last modified date
document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;