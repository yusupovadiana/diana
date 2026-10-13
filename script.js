/* The same script runs locally and in the HTML editor of a Blogger page. */
(function () {
  'use strict';
  var root = document.getElementById('cinema-story');
  if (!root) return;
  // Remove this page from the Blogger theme's narrow content column.
  document.body.appendChild(root);
  document.documentElement.classList.add('cinema-page');
  document.documentElement.lang = 'ru';
  document.title = 'Кино в пяти цветах';
  var viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    viewport = document.createElement('meta');
    viewport.name = 'viewport';
    document.head.appendChild(viewport);
  }
  viewport.content = 'width=device-width, initial-scale=1';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobile = window.matchMedia('(max-width: 800px)');
  var parallax = null;
  var links = Array.prototype.slice.call(root.querySelectorAll('.film-nav a'));
  var sections = Array.prototype.slice.call(root.querySelectorAll('main > section'));
  function markCurrent() {
    var current = sections[0];
    var midpoint = window.innerHeight * 0.5;
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= midpoint) current = section;
    });
    links.forEach(function (link) {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  // Keep small-screen text in its natural flow; illustrations still move.
  function startParallax() {
    if (parallax) { parallax.destroy(); parallax = null; }
    root.querySelectorAll('[data-scrollax]').forEach(function (element) {
      element.style.transform = '';
      element.style.opacity = '';
    });
    if (!reducedMotion.matches && window.Scrollax) {
      parallax = new window.Scrollax(window, {
        parentSelector: '#cinema-story [data-scrollax-parent]',
        elementsSelector: mobile.matches ? '.cover, .poster, .hero-art' : '[data-scrollax]'
      });
      parallax.init();
    }
  }
  // Native anchors preserve keyboard navigation, URL hashes and browser history.
  var scheduled = false;
  window.addEventListener('scroll', function () {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(function () { markCurrent(); scheduled = false; });
    }
  }, {passive: true});
  window.addEventListener('resize', markCurrent);
  [mobile, reducedMotion].forEach(function (query) {
    if (query.addEventListener) query.addEventListener('change', startParallax);
    else query.addListener(startParallax);
  });
  // Honour reduced motion for the legacy wheel-scrolling library as well.
  function syncLegacyScroll() {
    if (typeof window.ssc_removeEvent === 'function') {
      if (reducedMotion.matches) {
        window.ssc_removeEvent('mousewheel', window.ssc_wheel);
        window.ssc_removeEvent('keydown', window.ssc_keydown);
      }
    }
  }
  window.addEventListener('load', function () {
    if (parallax) parallax.reload();
    syncLegacyScroll();
    markCurrent();
  });
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', syncLegacyScroll);
  startParallax();
  markCurrent();
})();
