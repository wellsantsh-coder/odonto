class TestimonialsSlider {
  constructor(section) {
    this.section = section;
    this.track = section.querySelector('.testimonials-track');
    this.cards = section.querySelectorAll('.testimonial-card');

    if (!this.track || !this.cards.length) return;

    this.init();
  }

  init() {
    this.cloneCards();
    this.setAnimationDistance();
  }

  /*
  Duplicate cards to create infinite loop effect
  */

  cloneCards() {
    const cards = Array.from(this.cards);

    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.classList.add('testimonial-clone');
      this.track.appendChild(clone);
    });
  }

  /*
  Adjust animation distance dynamically
  so the loop stays seamless
  */

  setAnimationDistance() {
    const trackWidth = this.track.scrollWidth / 2;

    this.track.style.setProperty('--testimonials-distance', `${trackWidth}px`);
  }
}

export default function initTestimonials() {
  const sections = document.querySelectorAll('.testimonials');

  if (!sections.length) return;

  sections.forEach((section) => {
    new TestimonialsSlider(section);
  });
}
