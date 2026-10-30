/* Motion Prompt — "Examples" page (found.html). Plain JS, no dependencies.
   Reads examples/found.json (post IDs, URLs and our own one-line introductions only).
   Every post is shown as an X embed: widgets.js is loaded once, and each post is drawn with
   twttr.widgets.createTweet() as its card comes near the viewport. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var root = document.documentElement;
  var WIDGETS = 'https://platform.twitter.com/widgets.js';

  var I18N = {
    ko: {
      sourceLink: "원본 프로젝트",
      deploymentLink: "개인 배포 안내",
      personalEdition: "개인 배포: comnori",
      "navLabel": "사이트 메뉴",
      "navFound": "사례",
      "langLabel": "언어",
      "themeToDark": "어두운 테마로 전환",
      "themeToLight": "밝은 테마로 전환",
      "author": "원작",
      "authorName": "Shohei Ohtaki",
      "whyLink": "원작자가 만든 이유",
      "makeLink": "내 분야와 언어로 만들기",
      "addLink": "원본 프로젝트에 기여하기",
      "listLink": "용어 목록 (GitHub)",
      "removeP1": "원본 프로젝트의 게시물 삭제·수정 문의는 ",
      "removeLink": "원본 GitHub 이슈 양식",
      "removeP2": "으로 접수됩니다.",
      "thanks1": "움직이는 예제를 보고 프롬프트를 복사하는 방식은",
      "thanks2": "에서 영감을 얻었습니다. 감사합니다.",
      "title": "사례 — Motion Prompt · comnori",
      "description": "다양한 분야의 용어를 움직이는 예제와 함께 공유하는 사람들의 사례를 살펴보세요.",
      "skip": "사례 목록으로 이동",
      "navGallery": "갤러리",
      "eyebrow": "발견한 사례",
      "h1": "이름과 예제로 공통 언어를 만드는 사람들",
      "lead": "AI에게 요청할 때 쓰는 용어를 움직이는 예제나 요약표와 함께 공개한 게시물입니다. 분야도 언어도 표현 방식도 다양합니다. 작성자가 직접 만든 예제가 있는 게시물을 선정하며, 게시물의 내용과 권리는 각 작성자에게 있습니다.",
      "leadNote": "여기에 소개되었다고 해서 작성자가 이 사이트를 지지한다는 뜻은 아닙니다. 사례와 소개는 원본 프로젝트의 자료를 바탕으로 제공합니다.",
      "noteH": "게시물 임베드 안내",
      "noteP": "각 게시물은 X(구 Twitter)의 임베드로 표시됩니다. 페이지를 열면 X 서버에서 게시물을 불러오고 X 쿠키가 사용됩니다. X는 조회 기록을 수집하여 광고에 활용할 수 있습니다. 불러올 때 개인화에 사용하지 않도록 요청하는 dnt 설정을 적용합니다.",
      "notePrivacy": "X 개인정보 처리방침",
      "noteCookies": "X 쿠키 안내",
      "listH": "사례 목록",
      "loadListFailed": "목록을 불러오지 못했습니다.",
      "count": "게시물 {n}개",
      "postLang": {
        "ja": "일본어",
        "en": "영어",
        "ko": "한국어"
      },
      "postLangLabel": "게시물 언어: {l}",
      "viewOnX": "X에서 보기",
      "viewOnXLabel": "{a}의 게시물을 X에서 보기",
      "loading": "불러오는 중…",
      "gone": "이 게시물을 표시할 수 없습니다. 삭제되었을 수 있습니다.",
      "failed": "X에서 불러오지 못했습니다. 광고 차단 기능 등으로 차단되었을 수 있습니다. “X에서 보기”로 열 수 있습니다.",
      "shown": "{a}의 게시물을 표시했습니다",
      "moreH": "원본 프로젝트의 추천·문의 안내",
      "recH": "원본 프로젝트에 게시물 추천",
      "recP": "용어와 예제를 함께 공개한 게시물을 원본 프로젝트에 추천할 수 있습니다. 아래 링크는 원본 저장소의 이슈 양식입니다. 이 개인 페이지는 원본 사례 목록을 함께 제공합니다.",
      "recLink": "원본 프로젝트에 사례 추천",
      "rmH": "원본 프로젝트의 게시물 삭제·수정",
      "rmP": "원본 프로젝트에 실린 게시물이나 소개 문구에 관한 요청은 아래 원본 저장소의 이슈 양식으로 접수됩니다.",
      "rmLink": "원본 프로젝트에 삭제·수정 요청"
    },
    ja: {
      sourceLink: "原作プロジェクト",
      deploymentLink: "個人版について",
      personalEdition: "個人版の運営: comnori",
      description: 'AIに頼むための名前を、動く見本や早見表と一緒にまとめて公開している人たちのポストです。分野も言語も見た目もそれぞれ違います。投稿者が自分で作った見本のあるポストを選んでいて、ポストの内容と権利は各投稿者にあります。',
      title: "見つけた事例｜Motion Prompt · comnori",
      skip: '事例の一覧へ移動', navLabel: 'サイト内', navGallery: '見本', navFound: '事例', langLabel: '言語',
      themeToDark: 'ダークモードに切り替える', themeToLight: 'ライトモードに切り替える',
      eyebrow: '見つけた事例',
      h1: '名前と見本で、共通言語を作っている人たち',
      lead: 'AIに頼むための名前を、動く見本や早見表と一緒にまとめて公開している人たちのポストです。分野も言語も見た目もそれぞれ違います。投稿者が自分で作った見本のあるポストを選んでいて、ポストの内容と権利は各投稿者にあります。',
      leadNote: "紹介されていることは、投稿者がこのサイトを支持しているという意味ではありません。事例と紹介文は原作プロジェクトの資料に基づいています。",
      noteH: '埋め込みについて',
      noteP: 'このページは、各ポストをX（旧Twitter）の埋め込みで表示しています。開くとXのサーバーから読み込まれ、XのCookieが使われます。Xはその閲覧を記録し、広告に使うことがあります。読み込むときは、パーソナライズに使わないよう求める設定（dnt）を付けています。',
      notePrivacy: 'Xのプライバシーポリシー', noteCookies: 'XのCookieについて',
      listH: '事例の一覧', loadListFailed: '一覧を読み込めませんでした。',
      count: '{n}件',
      postLang: { ja: '日本語', en: '英語' },
      postLangLabel: 'ポストの言語: {l}',
      viewOnX: 'Xで見る',
      viewOnXLabel: '{a} のポストをXで見る',
      loading: '読み込み中です…',
      gone: 'このポストは表示できません（削除された可能性があります）。',
      failed: 'Xから読み込めませんでした。広告ブロックなどで止められている可能性があります。「Xで見る」から開けます。',
      shown: '{a} のポストを表示しました',
      moreH: "原作プロジェクトへの推薦・お問い合わせ",
      recH: "原作プロジェクトにポストを推薦",
      recP: "名前と見本を公開しているポストを、原作プロジェクトに推薦できます。下のリンクは原作リポジトリの Issue フォームです。この個人版でも原作の事例一覧を紹介しています。",
      recLink: "原作に事例を推薦する",
      rmH: "原作プロジェクトの掲載削除・訂正",
      rmP: "原作プロジェクトのポストや紹介文に関する依頼は、下の原作リポジトリの Issue フォームで受け付けています。",
      rmLink: "原作に削除・訂正を依頼する",
      author: "原作者", authorName: '大滝昇平',
      whyLink: "原作者が作った理由", makeLink: '自分の分野・自分の言語で作る', addLink: "原作プロジェクトへの貢献", listLink: '名前の一覧（GitHub）',
      removeP1: "原作プロジェクトの掲載削除・訂正は、", removeLink: "原作の GitHub Issue フォーム", removeP2: "で受け付けています。",
      thanks1: '動く見本を並べて、プロンプトをコピーして使う形は', thanks2: 'から着想を得ました。ありがとうございます。',
    },
    en: {
      sourceLink: "Original project",
      deploymentLink: "About this personal edition",
      personalEdition: "Personal edition hosted by comnori",
      description: 'Posts by people who publish names to use with AI, together with moving samples or cheat sheets. The fields, languages and looks all differ. We pick posts whose samples the author made, and each post and its rights belong to its author.',
      title: "Examples — Motion Prompt · comnori",
      skip: 'Skip to the examples', navLabel: 'Site', navGallery: 'Gallery', navFound: 'Examples', langLabel: 'Language',
      themeToDark: 'Switch to dark mode', themeToLight: 'Switch to light mode',
      eyebrow: 'Examples we found',
      h1: 'People building a common language with names and samples',
      lead: 'Posts by people who publish names to use with AI, together with moving samples or cheat sheets. The fields, languages and looks all differ. We pick posts whose samples the author made, and each post and its rights belong to its author.',
      leadNote: "Being listed does not mean the author supports this site. Examples and introductions are based on material from the original project.",
      noteH: 'About the embeds',
      noteP: "This page shows each post as an X (formerly Twitter) embed. When you open it, the posts load from X's servers and X cookies are used. X may record the view and use it for ads. The embeds are loaded with the setting that asks X not to use them for personalization (dnt).",
      notePrivacy: 'X Privacy Policy', noteCookies: 'How X uses cookies',
      listH: 'Examples', loadListFailed: 'Could not load the list.',
      count: '{n} posts',
      postLang: { ja: 'Japanese', en: 'English' },
      postLangLabel: 'Post language: {l}',
      viewOnX: 'View on X',
      viewOnXLabel: 'View the post by {a} on X',
      loading: 'Loading…',
      gone: 'This post cannot be shown. It may have been deleted.',
      failed: 'Could not load from X. A content blocker may have stopped it. You can still open it with "View on X".',
      shown: 'Showing the post by {a}',
      moreH: "Suggestions and contact for the original project",
      recH: "Suggest a post to the original project",
      recP: "You can suggest posts that share names and samples to the original project. The link below opens its issue form. This personal edition also presents the original project’s example list.",
      recLink: "Suggest an example to the original project",
      rmH: "Removals and corrections in the original project",
      rmP: "Requests about posts or introductions in the original project go to its issue form below.",
      rmLink: "Request a correction in the original project",
      author: "Original author", authorName: 'Shohei Ohtaki',
      whyLink: "Why the original author made this", makeLink: 'Make one for your own field or language', addLink: "Contribute to the original project", listLink: 'Name lists (GitHub)',
      removeP1: "Removal or correction requests for the original project go to the ", removeLink: "original GitHub issue form", removeP2: ".",
      thanks1: 'The format — moving samples with a prompt you can copy — was inspired by', thanks2: '. Thank you.',
    },
  };

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode etc. */ } },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } },
  };
  var darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : { matches: false };
  var state = { lang: MP_LANGUAGE.valid(root.lang) ? root.lang : 'ko', data: null };
  var cards = [];   // { item, el, box, status, shown, token }

  function t(key, vars) {
    var s = I18N[state.lang][key];
    if (s == null) s = I18N.ja[key];
    if (s == null) s = key;
    if (vars && typeof s === 'string') Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }
  function h(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function say(msg) { var l = $('#live'); l.textContent = ''; setTimeout(function () { l.textContent = msg; }, 30); }
  function isDark() {
    var a = root.getAttribute('data-theme');
    return a ? a === 'dark' : darkQuery.matches;
  }

  // ------------------------------------------------------------------ X widgets
  var widgetsPromise = null;
  function loadWidgets() {
    if (widgetsPromise) return widgetsPromise;
    widgetsPromise = new Promise(function (resolve, reject) {
      if (window.twttr && window.twttr.widgets && window.twttr.widgets.createTweet) { resolve(window.twttr); return; }
      var done = false;
      var timer = setTimeout(function () { if (!done) { done = true; reject(new Error('timeout')); } }, 15000);
      var s = document.createElement('script');
      s.id = 'x-wjs'; s.async = true; s.charset = 'utf-8'; s.src = WIDGETS;
      s.onload = function () {
        if (!window.twttr || !window.twttr.ready) { done = true; clearTimeout(timer); reject(new Error('no twttr')); return; }
        window.twttr.ready(function (tw) { if (done) return; done = true; clearTimeout(timer); resolve(tw); });
      };
      s.onerror = function () { if (done) return; done = true; clearTimeout(timer); reject(new Error('blocked')); };
      document.head.appendChild(s);
    });
    widgetsPromise.catch(function () { widgetsPromise = null; var old = $('#x-wjs'); if (old) old.remove(); });
    return widgetsPromise;
  }

  function setStatus(c, key) {
    c.statusKey = key || null;
    c.status.textContent = key ? t(key) : '';
    c.status.hidden = !key;
    c.status.classList.toggle('is-warn', key === 'gone' || key === 'failed');
  }
  function show(c) {
    var token = (c.token || 0) + 1;
    c.token = token;
    c.shown = true;
    c.box.innerHTML = '';
    c.box.hidden = false;
    c.el.classList.add('is-open');
    setStatus(c, 'loading');
    return loadWidgets().then(function (tw) {
      if (c.token !== token) return;
      return tw.widgets.createTweet(c.item.id, c.box, {
        lang: state.lang, theme: isDark() ? 'dark' : 'light', dnt: true, conversation: 'none', align: 'center',
      }).then(function (el) {
        if (c.token !== token) return;
        if (el) { setStatus(c, null); c.el.classList.remove('is-gone'); }
        else { c.box.innerHTML = ''; c.box.hidden = true; setStatus(c, 'gone'); c.el.classList.add('is-gone'); }
      });
    }).catch(function () {
      if (c.token !== token) return;
      c.box.innerHTML = ''; c.box.hidden = true;
      setStatus(c, 'failed');
    });
  }
  function redrawShown() { cards.forEach(function (c) { if (c.shown) show(c); }); }

  // ------------------------------------------------------------------ list
  function authorHandle(item) { return item.author.replace(/^@/, ''); }
  function build() {
    var wrap = $('#themes');
    wrap.innerHTML = '';
    cards = [];
    var data = state.data;
    data.themes.forEach(function (th) {
      var items = data.items.filter(function (it) { return it.theme === th.slug; });
      if (!items.length) return;
      var hid = 'th-' + th.slug;
      var list = h('ul', { class: 'ex-list' });
      items.forEach(function (it) {
        var handle = authorHandle(it);
        var link = h('a', { class: 'ex-x', href: it.url, rel: 'noopener', 'aria-label': t('viewOnXLabel', { a: it.author }), text: t('viewOnX') });
        var status = h('p', { class: 'ex-status', role: 'status' });
        status.hidden = true;
        var box = h('div', { class: 'ex-embed' });
        box.hidden = true;
        var langName = (t('postLang') || {})[it.lang] || it.lang;
        var li = h('li', { class: 'ex' }, [
          h('div', { class: 'ex-head' }, [
            h('a', { class: 'ex-author', href: 'https://x.com/' + encodeURIComponent(handle), rel: 'noopener', text: it.author }),
            h('span', { class: 'ex-lang', title: t('postLangLabel', { l: langName }), 'aria-label': t('postLangLabel', { l: langName }), text: String(it.lang).toUpperCase() }),
          ]),
          h('p', { class: 'ex-intro', text: (it.intro && (it.intro[state.lang] || it.intro.en || it.intro.ja)) || '' }),
          h('div', { class: 'ex-act' }, [link]),
          status,
          box,
        ]);
        var c = { item: it, el: li, box: box, status: status, shown: false, token: 0 };
        cards.push(c);
        list.appendChild(li);
      });
      wrap.appendChild(h('section', { class: 'ex-theme', 'aria-labelledby': hid }, [
        h('div', { class: 'pack-h' }, [
          h('h3', { id: hid, text: th[state.lang] || th.en }),
          h('span', { text: t('count', { n: items.length }) }),
        ]),
        list,
      ]));
    });
    observe();
  }

  // Draw each embed as its card comes near the viewport, so the page opens fast but reads as fully embedded.
  var io = null;
  function observe() {
    if (io) io.disconnect();
    if (!('IntersectionObserver' in window)) { cards.forEach(show); return; }
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var c = cards.filter(function (x) { return x.el === e.target; })[0];
        if (c && !c.shown) show(c);
      });
    }, { rootMargin: '1200px 0px' });
    cards.forEach(function (c) { io.observe(c.el); });
  }

  // ------------------------------------------------------------------ text, language, theme
  function applyText() {
    var lang = state.lang;
    root.lang = lang;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = t('description');
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = t('title');
    var ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = t('description');
    var locales = { ja: 'ja_JP', en: 'en_US', ko: 'ko_KR' };
    document.querySelector('meta[property="og:locale"]').content = locales[lang];
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(function (n, i) { n.content = Object.keys(locales).filter(function (l) { return l !== lang; }).map(function (l) { return locales[l]; })[i]; });
    document.title = t('title');
    $$('[data-t]').forEach(function (n) { n.textContent = t(n.getAttribute('data-t')); });
    $$('[data-t-attr]').forEach(function (n) {
      n.getAttribute('data-t-attr').split(',').forEach(function (pair) {
        var kv = pair.split(':'); n.setAttribute(kv[0].trim(), t(kv[1].trim()));
      });
    });
    $$('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });
    MP_LANGUAGE.links(lang);
    applyTheme();
  }
  function applyTheme() { $('#theme').setAttribute('aria-label', t(isDark() ? 'themeToLight' : 'themeToDark')); }
  $$('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang');
      if (!MP_LANGUAGE.valid(lang)) return;
      store.set('mp-lang', lang);
      MP_LANGUAGE.setUrl(lang);
      if (lang === state.lang) return;
      state.lang = lang;
      applyText();
      if (state.data) build();  // rebuild redraws the embeds in the new language
    });
  });
  $('#theme').addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store.set('mp-theme', next);
    applyTheme();
    redrawShown();
  });
  if (darkQuery.addEventListener) darkQuery.addEventListener('change', function () {
    applyTheme();
    if (!root.getAttribute('data-theme')) redrawShown();
  });

  // ------------------------------------------------------------------ start
  applyText();
  fetch('examples/found.json', { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) {
      state.data = data;
      build();
    })
    .catch(function () { $('#f-empty').hidden = false; });
})();
