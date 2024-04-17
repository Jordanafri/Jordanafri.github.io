const boxes = document.querySelectorAll('.box');
  const prevArrow = document.getElementById('prev');
  const nextArrow = document.getElementById('next');
  const displayedImage = document.getElementById('displayedImage');
  let currentIndex = 0;

  function toggleSelected(index) {
    boxes.forEach(b => b.classList.remove('select'));
    boxes[index].classList.add('select');
    // Update the image source based on the selected box
    displayedImage.src = `image${index + 1}.jpg`; // Assuming image filenames are image1.jpg, image2.jpg, etc.
  }

  prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
    toggleSelected(currentIndex);
  });

  nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % boxes.length;
    toggleSelected(currentIndex);
  });

  boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
      currentIndex = index;
      toggleSelected(currentIndex);
    });
  });