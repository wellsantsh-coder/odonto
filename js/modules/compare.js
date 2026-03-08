class ImageCompare {
  constructor(container) {
    this.container = container;
    this.overlay = container.querySelector('.compare-overlay');
    this.slider = container.querySelector('.compare-slider');

    this.dragging = false;

    this.init();
  }

  init() {
    this.events();
  }

  events() {
    this.container.addEventListener('pointerdown', (e) => {
      this.dragging = true;
      this.move(e.clientX);
      this.container.setPointerCapture(e.pointerId);
    });

    this.container.addEventListener('pointermove', (e) => {
      if (!this.dragging) return;
      this.move(e.clientX);
    });

    this.container.addEventListener('pointerup', () => {
      this.dragging = false;
    });

    this.container.addEventListener('pointerleave', () => {
      this.dragging = false;
    });
  }

  move(x) {
    const rect = this.container.getBoundingClientRect();

    let position = x - rect.left;

    if (position < 0) position = 0;
    if (position > rect.width) position = rect.width;

    const percent = (position / rect.width) * 100;

    this.overlay.style.width = percent + '%';
    this.slider.style.left = percent + '%';
  }
}

export default function initImageCompare() {
  const containers = document.querySelectorAll('.js-compare');

  containers.forEach((container) => {
    new ImageCompare(container);
  });
}
