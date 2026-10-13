(function () {
function nachat() {
  var stranichka = document.getElementById('stranichka');
  if (stranichka == null) return;
  if (stranichka.dataset.gotovo == 'true') return;
  stranichka.dataset.gotovo = 'true';

  document.body.appendChild(stranichka);
  document.documentElement.classList.add('stranica-kino');
  document.documentElement.lang = 'ru';
  document.title = 'Кино в пяти цветах';
  var ekranchik = document.querySelector('meta[name="viewport"]');
  if (ekranchik == null) {
    ekranchik = document.createElement('meta');
    ekranchik.name = 'viewport';
    document.head.appendChild(ekranchik);
  }
  ekranchik.content = 'width=device-width, initial-scale=1';

  var bezDvizheniya = window.matchMedia('(prefers-reduced-motion: reduce)');
  var telefon = window.matchMedia('(max-width: 800px)');
  var dvizhenie = null;
  var knopochki = stranichka.querySelectorAll('.knopki a');
  var kuski = stranichka.querySelectorAll('main > section');

  function gdeMi() {
    if (kuski.length == 0) return;
    var nomerok = 0;
    for (var nomer = 0; nomer < kuski.length; nomer++) {
      var verh = kuski[nomer].getBoundingClientRect().top;
      if (verh <= window.innerHeight / 2) nomerok = nomer;
    }
    for (var nomer = 0; nomer < knopochki.length; nomer++) {
      knopochki[nomer].removeAttribute('aria-current');
      if (knopochki[nomer].hash == '#' + kuski[nomerok].id) {
        knopochki[nomer].setAttribute('aria-current', 'location');
      }
    }
  }

  function dvigat() {
    if (bezDvizheniya.matches) return;
    if (!window.Scrollax) return;

    var chtoDvigat = '[data-scrollax]';
    if (telefon.matches) chtoDvigat = '.fon, .kartinka, .kartinka-vnachale';
    dvizhenie = new window.Scrollax(window, {
      parentSelector: '#stranichka [data-scrollax-parent]',
      elementsSelector: chtoDvigat
    });
    dvizhenie.init();
  }

  function prokrutka() {
    if (bezDvizheniya.matches && typeof window.ssc_removeEvent == 'function') {
      window.ssc_removeEvent('mousewheel', window.ssc_wheel);
      window.ssc_removeEvent('keydown', window.ssc_keydown);
    }
  }

  var zanyato = false;
  function posleProkrutki() {
    gdeMi();
    zanyato = false;
  }
  window.addEventListener('scroll', function () {
    if (zanyato == false) {
      zanyato = true;
      window.requestAnimationFrame(posleProkrutki);
    }
  }, {passive: true});
  window.addEventListener('resize', gdeMi);

  function vseZagruzilos() {
    if (dvizhenie != null) dvizhenie.reload();
    prokrutka();
    gdeMi();
  }
  window.addEventListener('load', vseZagruzilos);
  dvigat();
  prokrutka();
  gdeMi();
}
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', nachat, {once: true});
} else {
  nachat();
}
})();
