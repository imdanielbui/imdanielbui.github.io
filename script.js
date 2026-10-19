/* ==========================================================================
   20.10 · A little letter for you
   ==========================================================================
   PHẦN 1 (ngay bên dưới) là nơi DUY NHẤT bạn cần sửa để cá nhân hóa.
   Phần còn lại là logic, không cần đụng tới.
   ========================================================================== */

const CONFIG = {
  /* ---- Tên ---------------------------------------------------------- */
  senderName: "Khánh Dzi Sến Súa",        // ← ĐỔI: tên bạn, hiện ở cuối thư
  recipientName: "Trúc Iu Ơiiiii",              // ← ĐỔI: "em" hoặc tên/biệt danh, hiện ở "Gửi em,"

  /* ---- Tiêu đề màn hình đầu ----------------------------------------- */
  title: "Nhớ nhung dịu dàng mà anh mong.",  // ← ĐỔI: hiện ở tab trình duyệt, nên ngắn gọn

  /* ---- Nội dung thư: mỗi dòng trong ngoặc [ ] là một đoạn ------------- */
  letterParagraphs: [
    "Chúc em bié tui có một ngày 20/10 thật dịu dàng, được yêu thương và làm những điều khiến em cảm thấy thật vui nheee.",
    "Chỉ muốn em bíe biết rằng anh luôn trân trọng những điều tí xíu ở em — cách em kể chiện, voice chat, những lúc em cười, những lúc được thấy em ăn ngon và cả những ngày em kể cho anh những điều khiến em bận lòng nữaa.",
    "Anh mong là em luôn nhớ chăm sóc bản thân, cho mình thời gian nghỉ ngơi và đừng quên rằng em luôn luôn xứng đáng với những điều tử tế ý.",
    "Cảm ơn em bíe nhiều lắm vì đã xuất hiện trong những ngày của anh. Anh tự hào về em lắm ý. Mong rằng chúng mình sẽ có thêm nhiều những khoảnh khắc và hiện diện cùng nhau nữa hen."
  ],

  /* ---- Ảnh kỷ niệm (cuộn phim) --------------------------------------
     Thêm ảnh: copy một khối { ... }, đổi đường dẫn, chú thích, mô tả.
     Bớt ảnh: xóa khối tương ứng.
     • image  : đường dẫn tương đối tới ảnh trong assets/photos/
     • caption: chú thích nhỏ hiện dưới ảnh
     • alt    : mô tả ảnh cho người dùng trình đọc màn hình
     Nếu chưa có file ảnh, khung giữ chỗ "Ảnh mẫu" sẽ hiện thay thế. */
  memories: [
    { image: "./assets/photos/tuiminh1.png", caption: "Một ngày thật đáng nhớ của tụi mình",         alt: "Ảnh kỷ niệm thứ nhất của hai người" },
    { image: "./assets/photos/chuplen.jpg", caption: "Khoảnh khắc anh muốn giữ lại chụp lén đc ẻm, mà bằng máy ẻm=))shiba",   alt: "Ảnh kỷ niệm thứ hai của hai người" },
    { image: "./assets/photos/truciutd.jpg", caption: "Lần đầu được em gửi ảnh nè", alt: "Ảnh kỷ niệm thứ ba của hai người" },
    { image: "./assets/photos/truciumvang.jpg", caption: "Trông ẻm cứ đáng iu sao sao ý.",            alt: "Ảnh kỷ niệm thứ tư" },
    { image: "./assets/photos/truciuuu.jpg", caption: "Có thể là say đắm đúiii luôn ý.",              alt: "Ảnh kỷ niệm thứ năm" },
    { image: "./assets/photos/truciu.png", caption: "Tí hon thướt tha dịu dàng còn tui thì mong là con màu vàng!",    alt: "Ảnh kỷ niệm thứ sáu." }
  ],

  /* ---- Nhạc nền (để "" nếu không dùng nhạc) --------------------------
     Chỉ dùng bài bạn có quyền sử dụng. */
  musicPath: "./assets/audio/khongilakhongthe.mp3",

  /* ---- Câu chữ giao diện (tùy chọn) ----------------------------------
     {senderName} và {recipientName} sẽ tự thay bằng tên ở trên. */
  texts: {
    invitationIntro: "Những ngày chớm đông ở Bảo Lộc anh biết Sài Gòn vẫn còn lì lắm mới chịu lạnh, nhưng biết sao được lòng anh đã đong đầy....",
    invitationButton: "Em chạm đây nè ♡",

    envelopeHeading: "Một lá thư dành riêng cho em bíe",
    envelopePaperLabel: "Mến gửi {recipientName} ♡",
    envelopeHint: "Em chạm vào bì thư nhee ♡",
    openLetterButton: "Đọc hoi đọc hoiii♡",
    noReadButton: "Hong đọc đâu 😝",
    noReadTease: "Ủa thoyy… muốn đọc liền màaa đúng hong..iem bíe phảii đọcc♡",
    openLetterAfterTease: "Đọc liền nè ♡",

    letterTitle: "Một lá thư nhỏ",
    letterGreeting: "Mến gửi {recipientName},",
    letterClosing: "Thương em lắmmm,",
    signature: "{senderName} ♡",
    foldButton: "Gấp thư lại ♡",

    filmTitle: "Những đìu anh muốn giữ lại",
    filmDescription: "Có những khoảnh khắc rất đời thường, nhưng vì là có em nên thành đặc biệtt.",
    filmPause: "Tạm dừng",
    filmResume: "Chạy tiếp",
    scrollCue: "Còn một lời nhắn nhỏ nữa",

    finalWish: "Hy vọng sau này, tụi mình sẽ có thêm thật nhiều khung hình để cất giữ.",
    finalWishAside: "(Nói nhỏ nè....Anhhh... mún tụi mình chụp chungggg...manifest mạnh cấp 13 dật cấp 14 tầm nhìn xa ai cũng phải thấy:))))",
    rereadButton: "Đọc lại lá thư ♡",
    footer: "Made with a little love ♡ · 20.10",

    musicOn: "game on",
    musicOff: "game off",
    musicMissing: "Bài nhạc chưa sẵn sàng, mình cứ đọc thư trong yên lặng nhé ♡",
    musicBlocked: "Trình duyệt chưa cho phát nhạc. Bạn thử chạm lại một lần nữa nhé ♡"
  }
};

/* ==========================================================================
   PHẦN 2 · LOGIC (không cần sửa)
   ========================================================================== */
(() => {
  'use strict';

  /* ---------- Tiện ích ------------------------------------------------ */
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const prefersReducedMotion = () => reduceMotionQuery.matches;
  /* Khi giảm chuyển động, mọi lần chờ đều bằng 0 để không bắt người dùng đợi. */
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, prefersReducedMotion() ? 0 : ms));

  const resolvePath = (path) => path.split('.').reduce((obj, key) => (obj == null ? undefined : obj[key]), CONFIG);
  const fill = (text) => String(text).replace(/\{(\w+)\}/g, (match, key) => (typeof CONFIG[key] === 'string' ? CONFIG[key] : match));
  const T = (key) => fill(CONFIG.texts[key] ?? '');

  /* ---------- Phần tử chính ------------------------------------------- */
  const scenes = {
    invitation: $('#scene-invitation'),
    envelope: $('#scene-envelope'),
    film: $('#scene-film')
  };
  const startBtn = $('#start-btn');
  const envelope = $('#envelope');
  const envelopeHit = $('#envelope-hit');
  const envelopeHint = $('#envelope-hint');
  const envelopeChoices = $('#envelope-choices');
  const envelopeTease = $('#envelope-tease');
  const openLetterBtn = $('#open-letter-btn');
  const noReadBtn = $('#no-read-btn');
  const envelopeHeading = $('#envelope-heading');
  const filmTitle = $('#film-title');
  const rereadBtn = $('#reread-btn');
  const scrollCue = $('#scroll-cue');
  const finalSection = $('#final');

  const state = {
    scene: 'invitation',
    envelopeStatus: 'closed',   // closed | opening | open
    filmSeen: false
  };

  /* ---------- Gán chữ từ CONFIG vào HTML ------------------------------ */
  function bindTexts() {
    $$('[data-text]').forEach((el) => {
      const value = resolvePath(el.dataset.text);
      if (typeof value === 'string') el.textContent = fill(value);
    });
    const paragraphs = $('#letter-paragraphs');
    paragraphs.replaceChildren();
    (CONFIG.letterParagraphs || []).forEach((text) => {
      const p = document.createElement('p');
      p.textContent = fill(text);
      paragraphs.appendChild(p);
    });
  }

  /* ---------- Điều khiển cảnh ----------------------------------------- */
  async function showScene(name, { focusTarget = null, fade = 600 } = {}) {
    const previous = scenes[state.scene];
    const next = scenes[name];
    if (!next || previous === next) return;

    document.body.dataset.stage = name;
    previous.inert = true;
    previous.classList.remove('is-active');
    await sleep(fade);

    previous.hidden = true;
    next.hidden = false;
    next.inert = false;
    window.scrollTo(0, 0);
    void next.offsetWidth;                // ép trình duyệt tính layout để transition chạy
    next.classList.add('is-active');
    state.scene = name;

    if (focusTarget) focusTarget.focus({ preventScroll: true });
  }

  /* ---------- Scene 01 → 02 ------------------------------------------- */
  async function startExperience() {
    startBtn.disabled = true;
    await showScene('envelope', { focusTarget: envelopeHit });
    await sleep(1400);
    if (state.envelopeStatus === 'closed') envelopeHint.classList.add('is-visible');
  }

  /* ---------- Scene 02 · Phong bì ------------------------------------- */
  async function openEnvelope() {
    if (state.envelopeStatus !== 'closed') return;
    state.envelopeStatus = 'opening';
    envelopeHit.disabled = true;
    envelopeHint.classList.remove('is-visible');
    envelope.classList.add('is-open');

    await sleep(1750);                     // nắp mở (0.8s) + thư trượt lên (0.55s trễ + 1.1s)
    state.envelopeStatus = 'open';
    envelopeChoices.classList.add('is-visible');
    openLetterBtn.focus({ preventScroll: true });
  }

  function teaseReading() {
    noReadBtn.hidden = true;
    envelopeTease.textContent = T('noReadTease');
    envelopeTease.hidden = false;
    requestAnimationFrame(() => envelopeTease.classList.add('is-visible'));
    openLetterBtn.textContent = T('openLetterAfterTease');
    openLetterBtn.focus({ preventScroll: true });
  }

  /* ---------- Scene 03 · Thư (dialog) --------------------------------- */
  const letterDialog = $('#letter-dialog');
  const letterBody = $('#letter-body');
  const letterClose = $('#letter-close');
  const letterFold = $('#letter-fold');
  const dock = $('#dock');
  const hasNativeModal = typeof letterDialog.showModal === 'function';

  let letterIsOpen = false;
  let letterIsClosing = false;
  let lastFocused = null;
  let pointerStartedOnBackdrop = false;

  function openLetter(trigger) {
    if (letterIsOpen) return;
    letterIsOpen = true;
    letterIsClosing = false;
    lastFocused = trigger || document.activeElement;
    letterDialog.classList.remove('is-closing');

    if (hasNativeModal) {
      letterDialog.showModal();
    } else {                               // dự phòng cho trình duyệt rất cũ
      letterDialog.setAttribute('open', '');
      document.addEventListener('keydown', fallbackKeydown);
      letterClose.focus();
    }
    letterDialog.appendChild(dock);        // giữ nút nhạc bấm được khi thư mở
    letterBody.scrollTop = 0;
    document.body.classList.add('is-letter-open');
  }

  async function closeLetter() {
    if (!letterIsOpen || letterIsClosing) return;
    letterIsClosing = true;
    letterDialog.classList.add('is-closing');
    await sleep(240);

    if (hasNativeModal && letterDialog.open) {
      letterDialog.close();                // sự kiện "close" sẽ gọi finishClose
    } else {
      letterDialog.removeAttribute('open');
      finishClose();
    }
  }

  function finishClose() {
    if (!letterIsOpen) return;
    letterIsOpen = false;
    letterIsClosing = false;
    letterDialog.classList.remove('is-closing');
    document.removeEventListener('keydown', fallbackKeydown);
    document.body.appendChild(dock);
    document.body.classList.remove('is-letter-open');

    if (!state.filmSeen) {
      state.filmSeen = true;
      playFarewell();
    } else if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus({ preventScroll: true });
    }
  }

  /* Phím Tab / Escape khi không có <dialog> gốc */
  function fallbackKeydown(event) {
    if (event.key === 'Escape') { event.preventDefault(); closeLetter(); return; }
    if (event.key !== 'Tab') return;
    const focusables = $$('button, [href], [tabindex]:not([tabindex="-1"])', letterDialog).filter((el) => !el.disabled);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  /* ---------- Scene 03 → 04 · Chuyển từ phong bì sang cuộn phim ------- */
  async function playFarewell() {
    openLetterBtn.classList.remove('is-visible');
    envelope.classList.remove('is-open');  // thư tụt xuống, nắp gập lại
    await sleep(1300);
    scenes.envelope.classList.add('is-leaving');   // phong bì thu nhỏ, trượt xuống
    await sleep(900);
    await showScene('film', { focusTarget: filmTitle, fade: 80 });
  }

  /* ---------- Scene 04 · Cuộn phim ------------------------------------ */
  const film = (() => {
    const SPEED = 30;                      // px mỗi giây
    const viewport = $('#film-viewport');
    const track = $('#film-track');
    const baseSet = $('#film-set');
    const toggle = $('#film-toggle');
    const memories = Array.isArray(CONFIG.memories) ? CONFIG.memories : [];

    const flags = { hover: false, focus: false, drag: false, user: false, inView: true, pageVisible: !document.hidden };
    let manual = prefersReducedMotion();
    let setWidth = 0;
    let offset = 0;
    let rafId = 0;
    let lastTime = 0;
    let cloneCount = 0;
    let dragStartX = 0;
    let dragStartOffset = 0;
    let dragPointerId = null;
    let dragging = false;

    const cameraIcon = () => {
      const ns = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      const path = document.createElementNS(ns, 'path');
      path.setAttribute('d', 'M4 8h3l1.5-2h7L17 8h3v11H4zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'currentColor');
      path.setAttribute('stroke-width', '1.5');
      path.setAttribute('stroke-linejoin', 'round');
      svg.appendChild(path);
      return svg;
    };

    function createPlaceholder(memory, decorative) {
      const box = document.createElement('div');
      box.className = 'placeholder';
      if (!decorative) {
        box.setAttribute('role', 'img');
        box.setAttribute('aria-label', 'Chỗ dành cho ảnh thật: ' + (memory.alt || memory.caption || ''));
      }
      const title = document.createElement('span');
      title.className = 'placeholder__title';
      title.textContent = 'Ảnh mẫu';
      const note = document.createElement('span');
      note.className = 'placeholder__note';
      note.textContent = 'Thay bằng ảnh thật của hai người';
      box.append(cameraIcon(), title, note);
      return box;
    }

    /* Mỗi khung hình được tạo từ hàm này (kể cả bản sao) để xử lý ảnh lỗi nhất quán */
    function createFrame(memory, decorative) {
      const figure = document.createElement('figure');
      figure.className = 'frame';
      if (decorative) figure.setAttribute('aria-hidden', 'true');

      const photo = document.createElement('div');
      photo.className = 'frame__photo';

      if (memory.image) {
        const img = new Image();
        img.width = 480;                   // tỉ lệ 4:5, tránh nhảy layout
        img.height = 600;
        img.decoding = 'async';
        img.loading = 'lazy';
        img.draggable = false;
        img.alt = decorative ? '' : (memory.alt || memory.caption || '');
        img.addEventListener('error', () => photo.replaceChildren(createPlaceholder(memory, decorative)), { once: true });
        img.src = memory.image;
        photo.appendChild(img);
      } else {
        photo.appendChild(createPlaceholder(memory, decorative));
      }

      const caption = document.createElement('figcaption');
      caption.textContent = memory.caption || '';
      figure.append(photo, caption);
      return figure;
    }

    function createSet(decorative) {
      const set = document.createElement('div');
      set.className = 'film__set';
      if (decorative) { set.dataset.clone = 'true'; set.setAttribute('aria-hidden', 'true'); }
      memories.forEach((memory) => set.appendChild(createFrame(memory, decorative)));
      return set;
    }

    function wrapOffset() {
      if (setWidth > 0) offset = ((offset % setWidth) + setWidth) % setWidth;
    }

    function render() {
      track.style.transform = manual ? 'none' : 'translate3d(' + (-offset).toFixed(2) + 'px,0,0)';
    }

    function shouldRun() {
      return !manual && setWidth > 0 && flags.inView && flags.pageVisible &&
        !flags.hover && !flags.focus && !flags.drag && !flags.user;
    }

    function tick(timestamp) {
      rafId = 0;
      if (!shouldRun()) { lastTime = 0; return; }
      if (lastTime) {
        const delta = Math.min(timestamp - lastTime, 64);
        offset += (SPEED * delta) / 1000;
        wrapOffset();
        render();
      }
      lastTime = timestamp;
      rafId = requestAnimationFrame(tick);
    }

    function kick() {
      if (!rafId && shouldRun()) { lastTime = 0; rafId = requestAnimationFrame(tick); }
    }

    /* Tính lại số bản sao cần thiết để dải phim luôn phủ kín màn hình */
    function layout() {
      const viewportWidth = viewport.clientWidth;
      if (!viewportWidth || !memories.length) return;

      viewport.classList.toggle('is-manual', manual);
      toggle.hidden = manual;

      setWidth = baseSet.getBoundingClientRect().width;
      const wanted = manual || !setWidth ? 0 : Math.ceil(viewportWidth / setWidth);

      if (wanted !== cloneCount) {
        $$('.film__set[data-clone]', track).forEach((node) => node.remove());
        for (let i = 0; i < wanted; i += 1) track.appendChild(createSet(true));
        cloneCount = wanted;
      }
      wrapOffset();
      render();
      kick();
    }

    function setUserPaused(paused) {
      flags.user = paused;
      toggle.textContent = paused ? T('filmResume') : T('filmPause');
      toggle.setAttribute('aria-pressed', String(paused));
      kick();
    }

    function bindDrag() {
      viewport.addEventListener('pointerdown', (event) => {
        if (manual || (event.pointerType === 'mouse' && event.button !== 0)) return;
        dragPointerId = event.pointerId;
        dragStartX = event.clientX;
        dragStartOffset = offset;
        dragging = false;
        flags.drag = true;
      });
      viewport.addEventListener('pointermove', (event) => {
        if (event.pointerId !== dragPointerId) return;
        const dx = event.clientX - dragStartX;
        if (!dragging && Math.abs(dx) > 4) {
          dragging = true;
          viewport.classList.add('is-dragging');
          try { viewport.setPointerCapture(event.pointerId); } catch (error) { /* bỏ qua */ }
        }
        if (dragging) {
          offset = dragStartOffset - dx;
          wrapOffset();
          render();
        }
      });
      const endDrag = (event) => {
        if (event.pointerId !== dragPointerId) return;
        dragPointerId = null;
        dragging = false;
        flags.drag = false;
        viewport.classList.remove('is-dragging');
        kick();
      };
      viewport.addEventListener('pointerup', endDrag);
      viewport.addEventListener('pointercancel', endDrag);
    }

    function bindPauseSources() {
      viewport.addEventListener('pointerenter', (event) => { if (event.pointerType === 'mouse') { flags.hover = true; } });
      viewport.addEventListener('pointerleave', () => { flags.hover = false; kick(); });
      viewport.addEventListener('focusin', () => { flags.focus = viewport.matches(':focus-visible'); });
      viewport.addEventListener('focusout', () => { flags.focus = false; kick(); });

      viewport.addEventListener('keydown', (event) => {
        if (manual || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')) return;
        event.preventDefault();
        const step = memories.length ? setWidth / memories.length : 200;
        offset += event.key === 'ArrowRight' ? step : -step;
        wrapOffset();
        render();
      });

      document.addEventListener('visibilitychange', () => { flags.pageVisible = !document.hidden; kick(); });

      if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
          flags.inView = entries[entries.length - 1].isIntersecting;
          kick();
        }).observe(viewport);
      }

      toggle.addEventListener('click', () => setUserPaused(!flags.user));
    }

    function init() {
      if (!memories.length) {
        $('#film').hidden = true;
        return;
      }
      baseSet.replaceChildren(...memories.map((memory) => createFrame(memory, false)));
      setUserPaused(false);
      bindDrag();
      bindPauseSources();

      if ('ResizeObserver' in window) {
        let pending = 0;
        new ResizeObserver(() => {
          cancelAnimationFrame(pending);
          pending = requestAnimationFrame(layout);
        }).observe(viewport);
      } else {
        window.addEventListener('resize', layout);
      }

      const onMotionChange = () => {
        manual = prefersReducedMotion();
        offset = 0;
        viewport.scrollLeft = 0;
        cloneCount = -1;                   // buộc dựng lại bản sao
        layout();
      };
      if (reduceMotionQuery.addEventListener) reduceMotionQuery.addEventListener('change', onMotionChange);
      else if (reduceMotionQuery.addListener) reduceMotionQuery.addListener(onMotionChange);
    }

    return { init, layout, kick };
  })();

  /* ---------- Scene 05 · Lời cuối ------------------------------------- */
  function initFinalReveal() {
    if (!('IntersectionObserver' in window)) { finalSection.classList.add('is-visible'); return; }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        finalSection.classList.add('is-visible');
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(finalSection);
  }

  /* ---------- Thông báo nhỏ ------------------------------------------- */
  const toastEl = $('#toast');
  let toastTimer = 0;
  function showToast(message) {
    clearTimeout(toastTimer);
    toastEl.textContent = message;
    toastEl.classList.add('is-visible');
    toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 4200);
  }

  /* ---------- Nhạc nền ------------------------------------------------ */
  const music = (() => {
    const button = $('#music-toggle');
    const label = $('#music-label');
    let audio = null;
    let playing = false;

    function setPlaying(value) {
      playing = value;
      button.classList.toggle('is-playing', value);
      label.textContent = value ? T('musicOff') : T('musicOn');
    }

    function discardAudio() {
      if (audio) { audio.pause(); audio.removeAttribute('src'); audio = null; }
      setPlaying(false);
    }

    async function start() {
      if (!CONFIG.musicPath) { showToast(T('musicMissing')); return; }
      if (!audio) {
        audio = new Audio();               // chỉ tạo khi người dùng bấm: không tải trước
        audio.preload = 'none';
        audio.loop = true;
        audio.volume = 0.7;
        audio.addEventListener('error', () => { if (playing) { discardAudio(); showToast(T('musicMissing')); } });
        audio.src = CONFIG.musicPath;
      }
      setPlaying(true);
      try {
        await audio.play();
      } catch (error) {
        if (error && error.name === 'AbortError') return;   // người dùng đã tắt giữa chừng
        const blocked = error && error.name === 'NotAllowedError';
        discardAudio();
        showToast(blocked ? T('musicBlocked') : T('musicMissing'));
      }
    }

    function stop() {
      if (audio) audio.pause();
      setPlaying(false);
    }

    function init() {
      setPlaying(false);
      button.addEventListener('click', () => (playing ? stop() : start()));
    }
    return { init, start };
  })();

  /* ---------- Gắn sự kiện + khởi động --------------------------------- */
  function bindEvents() {
    startBtn.addEventListener('click', () => {
      music.start();
      startExperience();
    });
    envelopeHit.addEventListener('click', openEnvelope);
    openLetterBtn.addEventListener('click', () => openLetter(openLetterBtn));
    noReadBtn.addEventListener('click', teaseReading);
    rereadBtn.addEventListener('click', () => openLetter(rereadBtn));
    letterClose.addEventListener('click', closeLetter);
    letterFold.addEventListener('click', closeLetter);

    letterDialog.addEventListener('cancel', (event) => { event.preventDefault(); closeLetter(); });
    letterDialog.addEventListener('close', finishClose);

    /* Bấm vào vùng nền mờ để đóng. Chỉ đóng khi cả nhấn xuống lẫn thả ra đều ở nền
       (tránh đóng nhầm khi người dùng bôi đen chữ rồi thả chuột ra ngoài). */
    letterDialog.addEventListener('pointerdown', (event) => { pointerStartedOnBackdrop = event.target === letterDialog; });
    letterDialog.addEventListener('click', (event) => {
      if (event.target === letterDialog && pointerStartedOnBackdrop) closeLetter();
      pointerStartedOnBackdrop = false;
    });

    scrollCue.addEventListener('click', () => {
      finalSection.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' });
    });
  }

  /* Mở thẳng cảnh cuộn phim khi chỉnh ảnh: index.html#film */
  function jumpToFilmIfRequested() {
    if (location.hash !== '#film') return;
    state.filmSeen = true;
    state.envelopeStatus = 'open';
    startBtn.disabled = true;
    scenes.invitation.hidden = true;
    scenes.film.hidden = false;
    state.scene = 'film';
    document.body.dataset.stage = 'film';
    requestAnimationFrame(() => scenes.film.classList.add('is-active'));
  }

  function init() {
    bindTexts();
    bindEvents();
    film.init();
    music.init();
    initFinalReveal();

    if (location.hash === '#film') {
      jumpToFilmIfRequested();
    } else {
      document.body.dataset.stage = 'invitation';
      requestAnimationFrame(() => {
        document.body.classList.add('is-ready');
        scenes.invitation.classList.add('is-active');
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
