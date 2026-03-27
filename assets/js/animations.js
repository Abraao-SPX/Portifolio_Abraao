(function () {
  const animatedElements = document.querySelectorAll(".reveal, .reveal-delay");

  if (!("IntersectionObserver" in window) || animatedElements.length === 0) {
    animatedElements.forEach(function (element) {
      element.classList.add("in-view");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  function observeElements() {
    const newElements = document.querySelectorAll(".reveal:not(.in-view), .reveal-delay:not(.in-view)");
    newElements.forEach(function (element) {
      observer.observe(element);
    });
  }

  // Observe immediately for static elements
  observeElements();

  // Export so dynamically created items can be observed
  window.portfolioAnimations = {
    refresh: observeElements
  };
})();
