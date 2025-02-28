
// Get elements with classes 'innerinfo1' and 'section1'
var div1 = document.getElementsByClassName('innerinfo1')[0];
var div2 = document.getElementsByClassName('section1')[0];

// Variable to check current display condition
var display = 0;

// Function to toggle between div1 and div2
function hideShow() {
    if (display == 1) {
        // If div2 is currently displayed, hide it and show div1
        div1.style.display = 'block';
        div2.style.display = 'none';
        display = 0; // Update the display state
    } else {
        // If div1 is currently displayed, hide it and show div2
        div1.style.display = 'none';
        div2.style.display = 'block';
        display = 1; // Update the display Condition
    }
}

// Event listener for clicks on the element with class 'section1'
document.querySelector('.section1').addEventListener('click', function () {
    hideShow(); // Call the hideShow function when 'section1' is clicked
});

// Event listener for clicks on the element with class 'cross'
document.querySelector('.cross').addEventListener('click', function () {
    hideShow(); // Call the hideShow function when 'cross' is clicked
});
