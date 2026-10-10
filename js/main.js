(function () {
  var lb = document.getElementById('lb');
  var big = lb.querySelector('img');
  function openLb(src, alt) {
    big.src = src;
    big.alt = alt || '';
    lb.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('open');
    document.documentElement.style.overflow = '';
    big.removeAttribute('src');
  }
  Array.prototype.forEach.call(document.querySelectorAll('.pc-photo-wrap'), function (wrap) {
    var img = wrap.querySelector('img');
    if (!img || !img.getAttribute('data-full')) return;
    wrap.setAttribute('role', 'button');
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('aria-label', 'Ampliar foto: ' + (img.alt || ''));
    wrap.addEventListener('click', function () { openLb(img.getAttribute('data-full'), img.alt); });
    wrap.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(img.getAttribute('data-full'), img.alt); }
    });
  });
  lb.addEventListener('click', function (e) { if (e.target !== big) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
})();
