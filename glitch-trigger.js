
// Automatically trigger the glitch effect on scroll or keypress
(function() {
  function triggerGlitch() {
    document.body.classList.add("glitch-now");
    setTimeout(() => {
      document.body.classList.remove("glitch-now");
    }, 2000);
  }

  // Trigger glitch when user scrolls or presses any key
  window.addEventListener('scroll', triggerGlitch, { once: true });
  window.addEventListener('keydown', triggerGlitch, { once: true });
})();
