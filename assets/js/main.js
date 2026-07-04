/* ==========================================================================
   Hybrid main script
   - Basically Basic: off-canvas sidebar + search toggle (vanilla)
   - Academic Pages: light/dark theme toggle + Plotly/Mermaid rendering
   Loaded as a classic script after theme.js (which defines
   plotlyDarkLayout / plotlyLightLayout as globals).
   ========================================================================== */

'use strict';

(function () {
  var html = document.documentElement;

  /* --------------------------------------------------------------------
     Off-canvas sidebar + search toggle (Basically Basic)
     -------------------------------------------------------------------- */
  var menuItems = document.querySelectorAll('#sidebar li');
  var docElemStyle = document.documentElement.style;
  var transitionProp = typeof docElemStyle.transition === 'string' ? 'transition' : 'WebkitTransition';

  function animateMenuItems() {
    for (var i = 0; i < menuItems.length; i++) {
      var item = menuItems[i];
      item.style[transitionProp + 'Delay'] = (i * 75) + 'ms';
      item.classList.toggle('is--moved');
    }
  }

  var myWrapper = document.querySelector('.wrapper');
  var myMenu = document.querySelector('.sidebar');
  var myToggle = document.querySelector('.toggle');
  var myInitialContent = document.querySelector('.initial-content');
  var mySearchContent = document.querySelector('.search-content');
  var mySearchToggle = document.querySelector('.search-toggle');

  function toggleClassMenu() {
    if (!myMenu) { return; }
    myMenu.classList.add('is--animatable');
    if (!myMenu.classList.contains('is--visible')) {
      myMenu.classList.add('is--visible');
      if (myToggle) { myToggle.classList.add('open'); }
      if (myWrapper) { myWrapper.classList.add('is--pushed'); }
    } else {
      myMenu.classList.remove('is--visible');
      if (myToggle) { myToggle.classList.remove('open'); }
      if (myWrapper) { myWrapper.classList.remove('is--pushed'); }
    }
  }

  if (myMenu) {
    myMenu.addEventListener('transitionend', function () {
      myMenu.classList.remove('is--animatable');
    }, false);
  }
  if (myToggle) {
    myToggle.addEventListener('click', function () { toggleClassMenu(); animateMenuItems(); }, false);
  }

  function toggleClassSearch() {
    if (!mySearchContent) { return; }
    mySearchContent.classList.toggle('is--visible');
    if (myInitialContent) { myInitialContent.classList.toggle('is--hidden'); }
    setTimeout(function () {
      var input = document.querySelector('.search-content input');
      if (input) { input.focus(); }
    }, 400);
  }
  if (mySearchToggle) {
    mySearchToggle.addEventListener('click', toggleClassSearch, false);
  }

  /* --------------------------------------------------------------------
     Light / dark theme toggle (Academic Pages)
     Works with the CSS custom-property bridge in _sass/theme/_default.scss.
     -------------------------------------------------------------------- */
  var mql = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function computedTheme() {
    var explicit = html.getAttribute('data-theme');
    if (explicit === 'dark' || explicit === 'light') { return explicit; }
    return (mql && mql.matches) ? 'dark' : 'light';
  }

  function syncIcon(theme) {
    var icon = document.getElementById('theme-icon');
    if (!icon) { return; }
    if (theme === 'dark') {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    syncIcon(theme);
    redrawPlotly();
  }

  function toggleTheme() {
    var next = computedTheme() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', next); } catch (e) {}
    applyTheme(next);
  }

  // Reflect the current (possibly OS-derived) theme on load.
  syncIcon(computedTheme());

  var toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) { toggleBtn.addEventListener('click', toggleTheme); }

  // Follow OS changes until the user makes an explicit choice.
  if (mql) {
    mql.addEventListener('change', function (e) {
      var stored;
      try { stored = localStorage.getItem('theme'); } catch (err) { stored = null; }
      if (stored !== 'dark' && stored !== 'light') {
        syncIcon(e.matches ? 'dark' : 'light');
        redrawPlotly();
      }
    });
  }

  /* --------------------------------------------------------------------
     Accent-color picker (preview tool; gated by `accent_picker` in _config.yml).
     Sets a single CSS custom property on :root; the -light/-dark/-alpha shades
     are derived from it via color-mix() in _sass/theme/_default.scss. The choice
     is persisted to localStorage and re-applied before paint in _includes/head.html.
     -------------------------------------------------------------------- */
  var accentPicker = document.querySelector('.accent-picker');
  if (accentPicker) {
    var accentInput = document.getElementById('accent-input');

    function applyAccent(color) {
      html.style.setProperty('--global-accent-color', color);
      if (accentInput) { accentInput.value = color; }
      redrawPlotly();
    }

    function setAccent(color) {
      try { localStorage.setItem('accent', color); } catch (e) {}
      applyAccent(color);
    }

    function clearAccent() {
      try { localStorage.removeItem('accent'); } catch (e) {}
      html.style.removeProperty('--global-accent-color');
      redrawPlotly();
    }

    // Reflect any stored choice in the custom-color input on load.
    try {
      var storedAccent = localStorage.getItem('accent');
      if (storedAccent && accentInput) { accentInput.value = storedAccent; }
    } catch (e) {}

    accentPicker.querySelectorAll('.accent-swatch').forEach(function (btn) {
      btn.addEventListener('click', function () { setAccent(btn.getAttribute('data-accent')); });
    });
    if (accentInput) {
      accentInput.addEventListener('input', function () { setAccent(accentInput.value); });
    }
    var accentReset = document.getElementById('accent-reset');
    if (accentReset) { accentReset.addEventListener('click', clearAccent); }
  }

  /* --------------------------------------------------------------------
     Plotly charts from ```plotly fenced code blocks (Academic Pages)
     -------------------------------------------------------------------- */
  var plotlyElements = document.querySelectorAll('pre>code.language-plotly');

  function plotlyThemeFor(jsonData) {
    var theme = (computedTheme() === 'dark') ? plotlyDarkLayout : plotlyLightLayout;
    if (jsonData.layout) {
      jsonData.layout.template = jsonData.layout.template ? Object.assign({}, theme, jsonData.layout.template) : theme;
    } else {
      jsonData.layout = { template: theme };
    }
    return jsonData;
  }

  if (plotlyElements.length > 0) {
    document.addEventListener('readystatechange', function () {
      if (document.readyState !== 'complete') { return; }
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/plotly.js@3.6.0/dist/plotly.min.js';
      script.async = true;
      script.onload = function () {
        plotlyElements.forEach(function (elem) {
          var jsonData = plotlyThemeFor(JSON.parse(elem.textContent));
          elem.parentElement.classList.add('hidden');
          var chartElement = document.createElement('div');
          elem.parentElement.after(chartElement);
          Plotly.react(chartElement, jsonData.data, jsonData.layout);
        });
      };
      document.head.appendChild(script);
    });
  }

  function redrawPlotly() {
    if (typeof Plotly === 'undefined') { return; }
    plotlyElements.forEach(function (elem) {
      var jsonData = plotlyThemeFor(JSON.parse(elem.textContent));
      var chartElement = elem.parentElement.nextElementSibling;
      if (chartElement) { Plotly.react(chartElement, jsonData.data, jsonData.layout); }
    });
  }

  /* --------------------------------------------------------------------
     Mermaid diagrams from ```mermaid fenced code blocks (Academic Pages)
     -------------------------------------------------------------------- */
  var mermaidElements = document.querySelectorAll('pre>code.language-mermaid');
  if (mermaidElements.length > 0) {
    document.addEventListener('readystatechange', function () {
      if (document.readyState !== 'complete') { return; }
      var moduleScript = document.createElement('script');
      moduleScript.type = 'module';
      moduleScript.textContent =
        "import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';" +
        "mermaid.initialize({startOnLoad:true, theme:'default'});" +
        "await mermaid.run({querySelector:'code.language-mermaid'});";
      document.body.appendChild(moduleScript);
    });
  }
})();
