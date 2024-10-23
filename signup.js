// Function to display the specified section and hide others
function display(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Loop through sections and toggle visibility
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block'; // Show the selected section
        } else {
            section.style.display = 'none'; // Hide other sections
        }
    });
}

// Function to initialize the page
function init() {
    // Hide the signup section by default
    document.getElementById('sectionSignuppage').style.display = 'none';
}

// Call init function on page load
window.onload = init;
