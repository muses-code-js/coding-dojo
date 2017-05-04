(function () {
  'use strict';


  const $ = el => selector => (el || document).querySelector(selector);
  const $$ = el => selector => Array.prototype.slice.apply((el || document).querySelectorAll(
    selector));


  var codes = {},
    timers = {};

  function typeText(id, $element, callback) {
    var TIMEOUT = 5,
      code;
    if (!!timers[id]) {
      clearTimeout(timers[id]);
      timers[id] = null;
    }
    if (!codes[id]) {
      codes[id] = $element.innerText.trim();
    }
    code = codes[id].split('');
    $element.innerHTML = '';
    $element.style.display = 'block';

    function typeChar() {
      if (code.length < 1) {
        return callback();
      }
      var char = code.shift();
      if (char === '\t') {
        char = '  ';
      }
      $element.innerHTML = [$element.innerHTML, char].join('');
      timers[id] = setTimeout(
        typeChar,
        (char === '\n') ?
        TIMEOUT * 5 + TIMEOUT * 5 * Math.random() :
        TIMEOUT + TIMEOUT * Math.random()
      );
    }

    return typeChar();
  }

  function processScript($script) {
    var $pre,
      $code;
    $pre = document.createElement('pre');
    $code = document.createElement('code');
    $code.classList.add('hljs');
    $code.classList.add($script.dataset.lang);
    $code.innerText = $script.innerText.trim();
    $pre.appendChild($code);

    $script.parentNode.replaceChild($pre, $script);

    return $code;
  }


  document.body.addEventListener("impress:stepenter", event => {
    return $$(event.target)('script[data-lang]')
      .map(processScript)
      .forEach($code => hljs.highlightBlock($code));
  }, false);


  document.body.addEventListener("impress:stepenter", event => {
    $$()('#nav a').forEach($a => {
      if ($a.dataset.id === event.target.dataset.id) {
        $a.classList.add('active');
      } else {
        $a.classList.remove('active');
      }
    });
  }, false);


  let lastX = 0;
  let lastY = 0;

  $$()('section').forEach((section, sectionIndex) => {
    console.log(`section`, section)
    lastX = 0;
    lastY = sectionIndex * 900;
    const bgColor = `rgba(
      ${Math.round(Math.random() * 1000) % 150},
      ${Math.round(Math.random() * 700) % 150},
      ${Math.round(Math.random() * 500) % 150},
      0.1)`;


    $$(section)('article').forEach((article, articleIndex) => {
      const id = section.id;
      section.removeAttribute(id);

      if (articleIndex === 0) {
        article.id = id;
      }
      article.dataset.id = id;
      article.classList.add('step');

      if (article.classList.contains('same')) {
        article.dataset.x = lastX;
        article.dataset.y = lastY;
      } else {
        lastX = lastX + 1200;
        article.dataset.x = article.dataset.x || lastX;
        article.dataset.y = article.dataset.y || lastY;
      }

      $()('#impress').appendChild(article);

      const bg = document.createElement('div');
      bg.classList.add('bg');
      bg.style.backgroundColor = bgColor;
      bg.style.zIndex = -1;

      article.appendChild(bg)
    });

    section.parentNode.removeChild(section);
  });


  $$()('[id].step').forEach(step => {
    const $a = document.createElement('a');
    const $li = document.createElement('li');
    const $h = $(step)('h1, h2, h3');

    $li.appendChild($a);
    $a.title = $h && $h.innerHTML || step.id;
    $a.dataset.id = step.dataset.id;
    $a.href = ['#', step.dataset.id].join('');
    $a.innerHTML = step.dataset.id;
    return document.querySelector('#nav').appendChild($li);
  });

  impress().init();
}());
