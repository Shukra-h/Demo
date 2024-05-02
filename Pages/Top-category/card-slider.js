const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carousel = document.querySelector('.carrousel');

// Function to scroll the carousel to the left (one card)
function scrollLeft() {
  carousel.scrollBy({ left: -cardWidth, behavior: 'auto' });
}

// Function to scroll the carousel to the right (one card)
function scrollRight() {
  carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
}

// Calculate and store the width of a single card
const cardWidth = carousel.querySelector('.card').offsetWidth;

// Add click event listeners to buttons
prevBtn.addEventListener('click', scrollLeft);
nextBtn.addEventListener('click', scrollRight);
