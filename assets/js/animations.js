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

  animatedElements.forEach(function (element) {
    observer.observe(element);
  });
})();

