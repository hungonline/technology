(function () {
  // === VARIABLES ===
  const timeline = document.querySelector(".timeline ol"),
    items = document.querySelectorAll(".timeline li .content"),
    arrows = document.querySelectorAll(".timeline .arrows .arrow"),
    arrowPrev = document.querySelector(".timeline .arrow__prev"),
    arrowNext = document.querySelector(".timeline .arrow__next"),
    firstItem = document.querySelector(".timeline li:first-child"),
    lastItem = document.querySelector(".timeline li:last-child"),
    scrollAmount = 280,
    disabledClass = "disabled";

  // === INIT ===
  window.addEventListener("load", () => {
    setEqualHeights(items);
    initTimelineScroll(arrows, timeline);
    enableSwipe(timeline, arrowPrev, arrowNext);
    enableKeyboard(arrowPrev, arrowNext);
  });

  // === Set all item heights equal ===
  function setEqualHeights(elements) {
    const maxHeight = Math.max(...Array.from(elements, el => el.offsetHeight));
    elements.forEach(el => el.style.height = `${maxHeight}px`);
  }

  // === Check if element is in viewport ===
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // === Enable/Disable arrow button ===
  function toggleArrowState(button, isDisabled) {
    button.classList.toggle(disabledClass, isDisabled);
    button.disabled = isDisabled;
  }

  // === Handle timeline scroll animation ===
  function initTimelineScroll(arrowElements, timelineElement) {
    let currentOffset = 0;

    arrowElements.forEach(arrow => {
      arrow.addEventListener("click", () => {
        toggleArrowState(arrowPrev, true);
        toggleArrowState(arrowNext, true);

        const direction = arrow.classList.contains("arrow__prev") ? 1 : -1;
        currentOffset += direction * scrollAmount;
        timelineElement.style.transform = `translateX(${currentOffset}px)`;

        // Re-check which arrows should be active
        setTimeout(() => {
          toggleArrowState(arrowPrev, isInViewport(firstItem));
          toggleArrowState(arrowNext, isInViewport(lastItem));
        }, 1100);
      });
    });
  }

  // === Swipe Support (Touch) ===
  function enableSwipe(timelineEl, prevBtn, nextBtn) {
    const hammer = new Hammer(timelineEl);
    hammer.on("swipeleft", () => nextBtn.click());
    hammer.on("swiperight", () => prevBtn.click());
  }

  // === Keyboard Navigation Support ===
  function enableKeyboard(prevBtn, nextBtn) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        window.scrollTo(0, timeline.offsetTop);
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
      }
    });
  }
})();
