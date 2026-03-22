const watchSections = document.querySelectorAll('.watch-animate');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.45 }
);

watchSections.forEach((section) => observer.observe(section));

const mapVideo = document.querySelector('.map-video');
if (mapVideo) {
  const tryPlay = () => {
    const playPromise = mapVideo.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // Mobile autoplay can be blocked; keep muted/inline to maximize success.
      });
    }
  };

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      tryPlay();
    }
  });

  tryPlay();
}
