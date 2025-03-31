const sliderTrack = document.querySelector('.works_body');
const sliderContainer = document.querySelector('.works_container');

const boxes = document.querySelectorAll('.works_box');
boxes.forEach(box => {
  const clone = box.cloneNode(true);
  sliderTrack.appendChild(clone);
});

let isMoving = false;

sliderContainer.addEventListener('mousemove', (e) => {
  if (!isMoving) {
    requestAnimationFrame(() => {
      const containerRect = sliderContainer.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const trackWidth = sliderTrack.scrollWidth;
      const visibleWidth = containerRect.width;
      const trackMovement = (mouseX / visibleWidth) * (trackWidth - visibleWidth);

      sliderTrack.style.transition = 'transform 0.1s ease-in-out';
      sliderTrack.style.transform = `translateX(-${trackMovement}px)`;

      if (trackMovement >= trackWidth - visibleWidth) {
        sliderTrack.style.transition = 'none';
        sliderTrack.style.transform = 'translateX(0px)';
      }

      isMoving = false;
    });
    isMoving = true;
  }
});

sliderContainer.addEventListener('mouseleave', () => {
  sliderTrack.style.transition = 'transform 0.2s ease-out';
  sliderTrack.style.transform = 'translateX(0px)';
});
