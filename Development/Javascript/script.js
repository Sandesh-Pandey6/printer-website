// Function for copying coupon code on button click
var cpnBtn = document.getElementById("cpnBtn");
var cpnCode = document.getElementById("cpnCode");

cpnBtn.addEventListener('click', function () {
    // Copy the coupon code to the clipboard
    navigator.clipboard.writeText(cpnCode.innerHTML);

    // Update button text to indicate that text has been copied Successfully.
    cpnBtn.innerHTML = 'COPIED';

    // Change button text Back To Previous after a delay
    setTimeout(function () {
        cpnBtn.innerHTML = "COPY CODE";
    }, 3000);
});

// Similar functionality for another coupon code
var cpnBtn1 = document.getElementById("cpnBtn1");
var cpnCode1 = document.getElementById("cpnCode1");

cpnBtn1.addEventListener('click', function () {
    navigator.clipboard.writeText(cpnCode1.innerHTML);
    cpnBtn1.innerHTML = 'COPIED';
    setTimeout(function () {
        cpnBtn1.innerHTML = "COPY CODE";
    }, 3000);
});




// Image slider functional

const slides = document.querySelectorAll(".slide");
var counter = 0;

// Position each slide horizontally
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

// Function to navigate to the next slide
function goNext() {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    } else {
        counter = 0;
        slideImage();
    }
}

// Function to navigate to the previous slide
function goPrev() {
    if (counter != 0) {
        counter--;
        slideImage();
    } else {
        counter = slides.length - 1;
        slideImage();
    }
}

// Function to update the slider based on the current counter value
function slideImage() {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    );
}

// Set interval to automatically move to the next slide every 10 seconds
setInterval(goNext, 10000);

