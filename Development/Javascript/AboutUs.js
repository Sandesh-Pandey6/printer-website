// Global variables to track the current display state and the ID of the currently displayed panel
let display = 0;//Check Current Display State
let currentPanel = null;//

// Function To Show a Specific portion On The Basis Of Its ID
function showPanel(id) {
    // Hide all elements with the class "content"
    const elements = document.getElementsByClassName("content");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    
    // Display the selected panel
    document.getElementById(id).style.display = "block";
    
    // Update the currentPanel variable with the ID of the displayed panel
    currentPanel = id;
}

// Function to hide the currently displayed panel
function hidePanel() {
    // Display all elements with the class "content"
    const elements = document.getElementsByClassName("content");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }

    // Check if there is a currently displayed panel, and hide it
    if (currentPanel) {
        document.getElementById(currentPanel).style.display = "none";
        currentPanel = null; // Reset the currentPanel variable
    }
}
