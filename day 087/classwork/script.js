let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showImage(index) {
  // Hide all images
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  // Show the image at the current index
  images[index].style.display = 'block';
}

// Show the first image initially
showImage(currentIndex);

// Show the previous image
prevButton.addEventListener('click', function() {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

// Show the next image
nextButton.addEventListener('click', function() {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
});
