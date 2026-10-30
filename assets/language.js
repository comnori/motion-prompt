/* Shared language selection for the gallery and examples. No dependencies. */
(function () {
  'use strict';
  var supported = ['ja', 'en', 'ko'];
  function valid(lang) { return supported.indexOf(lang) !== -1; }
  function resolve(search, saved) {
    var requested = new URLSearchParams(search).get('lang');
    if (valid(requested)) return requested;
    if (valid(saved)) return saved;
    return 'ko';
  }
  function setUrl(lang) {
    var url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  }
  function links(lang) {
    document.querySelectorAll('[data-href-ja]').forEach(function (a) {
      a.href = a.getAttribute('data-href-' + lang) || a.getAttribute('data-href-en');
    });
    document.querySelectorAll('[data-page-link]').forEach(function (a) {
      var url = new URL(a.getAttribute('data-page-link'), document.baseURI);
      url.searchParams.set('lang', lang);
      a.href = url.href;
    });
  }
  window.MP_LANGUAGE = { supported: supported, valid: valid, resolve: resolve, setUrl: setUrl, links: links };
})();
