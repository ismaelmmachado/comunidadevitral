(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  var dropdowns = document.querySelectorAll('.nav-dropdown');
  var year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  dropdowns.forEach(function (dd) {
    var label = dd.querySelector('.dd-label');
    if (label) {
      label.addEventListener('click', function (e) {
        e.preventDefault();
        dd.classList.toggle('open');
      });
    }
  });

  document.addEventListener('click', function (e) {
    dropdowns.forEach(function (dd) {
      if (!dd.contains(e.target)) {
        dd.classList.remove('open');
      }
    });
  });
})();
