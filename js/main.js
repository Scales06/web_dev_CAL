let slideIndex = 0; // Initial slide index
let timer; // Timer for automatic slide change

// Start the carousel
showSlides();

// Function to display slides
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Deactivate all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Wrap around to the first slide
    }

    // Display the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Set the timer for automatic slide change
    timer = setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Function to manually navigate to the next or previous slide
function plusSlides(n) {
    clearTimeout(timer); // Clear the timer to prevent conflicts
    slideIndex += n - 1; // Adjust slide index
    showSlides(); // Show the updated slide
}

// Function to set a specific slide based on its index
function currentSlide(n) {
    clearTimeout(timer); // Clear the timer to prevent conflicts
    slideIndex = n - 1; // Set the current slide index
    showSlides(); // Show the updated slide
}
