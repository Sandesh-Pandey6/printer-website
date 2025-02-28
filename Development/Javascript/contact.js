// Function to validate the form
function validateForm() {
    // Get values from the input fields
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var number = document.getElementById('Number').value;
    var message = document.getElementById('Message').value;
    
    // Check if any of the fields are empty
    if (name === '' || email === '' || number === '' || message === '') {
        // Display an alert if any field is empty
        alert('Please Fill Out All the Details Of The Form.');
    } else {
        // Display an alert if the form was submitted successfully
        alert('Form Submitted Successfully !!');
    }
}
