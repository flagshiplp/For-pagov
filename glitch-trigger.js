(function () {
  function triggerGlitch() {
    document.body.classList.add("glitch-now");
    setTimeout(() => {
      document.body.classList.remove("glitch-now");
    }, 600); // match your CSS animation duration
  }

  // 🔁 User interaction: scroll or keypress
  window.addEventListener('scroll', triggerGlitch, { passive: true });
  window.addEventListener('keydown', triggerGlitch, { passive: true });

  // 🌀 Ambient glitching: random interval loop
  function randomGlitchLoop() {
    const nextDelay = Math.floor(Math.random() * 25000) + 10000; // 10–35s
    setTimeout(() => {
      triggerGlitch();
      randomGlitchLoop(); // recurse
    }, nextDelay);
  }

  randomGlitchLoop();
})();
