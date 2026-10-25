(function () {
  "use strict";

  var SITE = window.SITE || {};
  var $ = function (sel, root) { return (root || document).querySelector(sel); };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var ARROW = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>';
  var CHEVRON = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>';
  var TROPHY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4"/></svg>';

  /* ---------- Stats ---------- */
  function renderStats() {
    var pubs = SITE.publications || { journal: [], conference: [] };
    var st = SITE.students || { phd: [], msc: [], bsc: [] };
    var courses = SITE.courses || { undergraduate: [], graduate: [] };
    var items = [
      [pubs.journal.length, "Journal papers"],
      [pubs.conference.length, "Conference papers"],
      [st.phd.length + st.msc.length + st.bsc.length, "Students supervised"],
      [courses.undergraduate.length + courses.graduate.length, "Courses taught"]
    ];
    $("#stats").innerHTML = items.map(function (it) {
      return "<div><dt>" + esc(it[1]) + "</dt><dd>" + it[0] + "</dd></div>";
    }).join("");
  }

  /* ---------- Timeline ---------- */
  function renderTimeline() {
    var list = SITE.timeline || [];
    $("#timeline").innerHTML = list.map(function (t, i) {
      return '<li class="' + (i === list.length - 1 ? "now" : "") + '">' +
        '<span class="tl-years">' + esc(t.years) + "</span>" +
        "<span><span class=\"tl-title\">" + esc(t.title) + '</span><span class="tl-place">' + esc(t.place) + "</span></span>" +
        "</li>";
    }).join("");
  }

  /* ---------- Research ---------- */
  function renderResearch() {
    $("#research-grid").innerHTML = (SITE.research || []).map(function (r, i) {
      return '<article class="r-card reveal" id="r-' + esc(r.id) + '">' +
        '<div class="r-media"><img src="' + esc(r.image) + '" alt="" loading="lazy"></div>' +
        '<div class="r-body">' +
        '<span class="r-num">' + String(i + 1).padStart(2, "0") + "</span>" +
        "<h3>" + esc(r.title) + "</h3>" +
        '<p class="r-lead">' + esc(r.lead) + "</p>" +
        '<details class="r-more"><summary>Read more</summary><p>' + esc(r.body) + "</p></details>" +
        "</div></article>";
    }).join("");
  }

  /* ---------- Publications ---------- */
  var pubState = { filter: "all", query: "" };
  var allPubs = [];

  function buildPubs() {
    var p = SITE.publications || { journal: [], conference: [] };
    p.journal.forEach(function (x, i) { allPubs.push(Object.assign({ kind: "journal", tag: "J" + (i + 1), order: i }, x)); });
    p.conference.forEach(function (x, i) { allPubs.push(Object.assign({ kind: "conference", tag: "C" + (i + 1), order: i }, x)); });
  }

  function highlight(text, q) {
    var safe = esc(text);
    if (!q) return safe;
    var re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return safe.replace(re, "<mark>$1</mark>");
  }

  function authorsHtml(a, q) {
    return highlight(a, q).replace(/B\. Ahi/g, "<b>B. Ahi</b>");
  }

  function renderPubFilter() {
    var counts = {
      all: allPubs.length,
      journal: allPubs.filter(function (p) { return p.kind === "journal"; }).length,
      conference: allPubs.filter(function (p) { return p.kind === "conference"; }).length
    };
    var labels = { all: "All", journal: "Journal", conference: "Conference" };
    var el = $("#pub-filter");
    el.innerHTML = Object.keys(labels).map(function (k) {
      return '<button type="button" role="tab" data-filter="' + k + '" aria-selected="' + (pubState.filter === k) + '">' +
        labels[k] + ' <span class="count">' + counts[k] + "</span></button>";
    }).join("");
    el.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-filter]");
      if (!b) return;
      pubState.filter = b.getAttribute("data-filter");
      el.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-selected", x === b); });
      renderPubs();
    });
  }

  function renderPubs() {
    var q = pubState.query.trim();
    var ql = q.toLowerCase();
    var list = allPubs.filter(function (p) {
      if (pubState.filter !== "all" && p.kind !== pubState.filter) return false;
      if (!ql) return true;
      return [p.title, p.authors, p.venue, p.details, String(p.year)].join(" ").toLowerCase().indexOf(ql) !== -1;
    });

    if (!list.length) {
      $("#pub-list").innerHTML = '<p class="pub-empty">No publications match “' + esc(q) + "”.</p>";
      return;
    }

    var byYear = {};
    list.forEach(function (p) { (byYear[p.year] = byYear[p.year] || []).push(p); });
    var years = Object.keys(byYear).sort(function (a, b) { return b - a; });

    $("#pub-list").innerHTML = years.map(function (y) {
      var items = byYear[y].sort(function (a, b) {
        if (a.kind !== b.kind) return a.kind === "journal" ? -1 : 1;
        return b.order - a.order;
      });
      return '<div class="pub-year"><div class="pub-year-label">' + y + '</div><ol class="pub-items">' +
        items.map(function (p) {
          return '<li class="pub">' +
            '<span class="pub-tag' + (p.kind === "conference" ? " conf" : "") + '" title="' + (p.kind === "journal" ? "Journal paper" : "Conference paper") + '">' + p.tag + "</span>" +
            "<div>" +
            '<span class="pub-title">' + highlight(p.title, q) + "</span>" +
            '<span class="pub-authors">' + authorsHtml(p.authors, q) + "</span>" +
            '<span class="pub-venue"><em>' + highlight(p.venue, q) + "</em>" + (p.details ? ", " + highlight(p.details, q) : "") + "</span>" +
            (p.award ? '<span class="award">' + TROPHY + esc(p.award) + "</span>" : "") +
            "</div></li>";
        }).join("") +
        "</ol></div>";
    }).join("");
  }

  /* ---------- Teaching ---------- */
  function renderTeaching() {
    var c = SITE.courses || { undergraduate: [], graduate: [] };
    function group(title, list) {
      return '<div class="course-group reveal"><h3><span>' + title + "</span><span>" + list.length + " courses</span></h3>" +
        '<ul class="course-list">' + list.map(function (x) {
          return '<li class="course"><span class="course-name">' + esc(x.name) + "</span>" +
            (x.lab ? '<span class="course-lab">Lab</span>' : "") +
            '<span class="course-code">' + esc(x.code) + "</span></li>";
        }).join("") + "</ul></div>";
    }
    $("#teaching-grid").innerHTML = group("Undergraduate", c.undergraduate) + group("Graduate", c.graduate);
  }

  /* ---------- Lab ---------- */
  var people = [];

  function personCard(p, featured, inCarousel) {
    var idx = people.push(p) - 1;
    return '<button type="button" class="person' + (inCarousel ? "" : " reveal") + (featured ? " featured" : "") + '" data-person="' + idx + '">' +
      '<span class="person-photo"><img src="' + esc(p.photo) + '" alt="" loading="lazy"></span>' +
      '<span class="person-info">' +
      '<span class="person-name">' + esc(p.name) + "</span>" +
      '<span class="person-years">' + esc(p.years) + "</span>" +
      (featured && p.summary ? '<span class="person-excerpt">' + esc(p.summary) + "</span>" : "") +
      '<span class="person-more">' + (featured ? "Read research summary" : "Read summary") + " →</span>" +
      "</span></button>";
  }

  function renderLab() {
    var st = SITE.students || { phd: [], msc: [], bsc: [] };
    var html = "";
    function head(title, n, extra) {
      return '<div class="lab-group-head"><h3>' + title + "</h3><span>" + n + "</span>" + (extra || "") + "</div>";
    }
    var carouselNav = '<div class="carousel-nav">' +
      '<button type="button" class="icon-btn" data-carousel-prev aria-label="Previous students"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg></button>' +
      '<button type="button" class="icon-btn" data-carousel-next aria-label="Next students"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></button>' +
      "</div>";
    if (st.phd.length) {
      html += '<div class="lab-group">' + head("Ph.D. students", st.phd.length) +
        st.phd.map(function (p) { p.label = "Research summary"; return personCard(p, st.phd.length === 1); }).join("") + "</div>";
    }
    if (st.msc.length) {
      html += '<div class="lab-group carousel" data-carousel>' + head("M.Sc. students", st.msc.length, carouselNav) +
        '<div class="carousel-track" tabindex="0" aria-label="M.Sc. students">' +
        st.msc.map(function (p) { p.label = "Thesis summary"; return personCard(p, false, true); }).join("") + "</div></div>";
    }
    if (st.bsc.length) {
      html += '<div class="lab-group">' + head("B.Sc. projects", st.bsc.length) + '<ul class="bsc-list">' +
        st.bsc.map(function (p) {
          var idx = people.push({ name: p.name, years: p.year, summary: p.summary, label: "Project summary" }) - 1;
          return '<li><button type="button" class="bsc-row" data-person="' + idx + '">' +
            '<span class="bsc-name">' + esc(p.name) + '</span><span class="bsc-year">' + esc(p.year) + "</span>" + CHEVRON + "</button></li>";
        }).join("") + "</ul></div>";
    }
    $("#lab-groups").innerHTML = html;
  }

  /* ---------- Carousel ---------- */
  function setupCarousels() {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll("[data-carousel]").forEach(function (root) {
      var track = root.querySelector(".carousel-track");
      var paused = false, visible = true, timer = null;

      function stepSize() {
        var card = track.firstElementChild;
        if (!card) return track.clientWidth;
        var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        return card.getBoundingClientRect().width + gap;
      }
      function atEnd() { return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4; }
      function next() {
        if (atEnd()) track.scrollTo({ left: 0, behavior: "smooth" });
        else track.scrollBy({ left: stepSize(), behavior: "smooth" });
      }
      function prev() {
        if (track.scrollLeft <= 4) track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
        else track.scrollBy({ left: -stepSize(), behavior: "smooth" });
      }

      root.querySelector("[data-carousel-next]").addEventListener("click", function () { next(); restart(); });
      root.querySelector("[data-carousel-prev]").addEventListener("click", function () { prev(); restart(); });
      track.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") { e.preventDefault(); next(); restart(); }
        if (e.key === "ArrowLeft") { e.preventDefault(); prev(); restart(); }
      });

      // Autoplay: only when the track overflows, is on screen and nobody is interacting
      function tick() {
        if (!paused && visible && !document.hidden && track.scrollWidth > track.clientWidth + 4) next();
      }
      function restart() {
        if (reduce) return;
        clearInterval(timer);
        timer = setInterval(tick, 3500);
      }
      root.addEventListener("mouseenter", function () { paused = true; });
      root.addEventListener("mouseleave", function () { paused = false; });
      root.addEventListener("focusin", function () { paused = true; });
      root.addEventListener("focusout", function () { paused = false; });
      track.addEventListener("pointerdown", function () { paused = true; });
      track.addEventListener("touchend", function () { setTimeout(function () { paused = false; }, 4000); }, { passive: true });
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(track);
      }
      restart();
    });
  }

  /* ---------- Links ---------- */
  function renderLinks() {
    $("#links-grid").innerHTML = (SITE.links || []).map(function (l) {
      return '<a class="link-row reveal" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' +
        '<span class="link-type">' + esc(l.type) + "</span>" +
        '<span class="link-title">' + esc(l.title) + "</span>" + ARROW +
        '<p class="link-text">' + esc(l.text) + "</p></a>";
    }).join("");
  }

  /* ---------- Modal ---------- */
  function setupModal() {
    var modal = $("#summary-modal");
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-person]");
      if (!t) return;
      var p = people[+t.getAttribute("data-person")];
      if (!p) return;
      $("#modal-label").textContent = p.label || "Summary";
      $("#modal-name").textContent = p.name;
      $("#modal-meta").textContent = p.years || "";
      $("#modal-text").textContent = p.summary || "";
      if (typeof modal.showModal === "function") modal.showModal();
      else modal.setAttribute("open", "");
      modal.scrollTop = 0;
    });
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest("[data-close]")) close();
    });
    function close() {
      if (typeof modal.close === "function") modal.close();
      else modal.removeAttribute("open");
    }
  }

  /* ---------- Step response ---------- */
  function setupScope() {
    var svg = $("#scope-plot");
    if (!svg) return;
    var W = 320, H = 150, T = 18, YMAX = 1.8;
    var X = function (t) { return (t / T) * W; };
    var Y = function (y) { return H - 4 - (y / YMAX) * (H - 8); };

    var grid = "";
    for (var t = 0; t <= T; t += 3) grid += '<line x1="' + X(t) + '" x2="' + X(t) + '" y1="0" y2="' + H + '"/>';
    [0, 0.5, 1.5].forEach(function (v) { grid += '<line x1="0" x2="' + W + '" y1="' + Y(v) + '" y2="' + Y(v) + '"/>'; });
    $("#scope-grid").innerHTML = grid;
    var ref = $("#scope-ref");
    ref.setAttribute("y1", Y(1));
    ref.setAttribute("y2", Y(1));

    function step(z, t) {
      if (z < 1) {
        var wd = Math.sqrt(1 - z * z);
        return 1 - Math.exp(-z * t) / wd * Math.sin(wd * t + Math.acos(z));
      }
      if (z === 1) return 1 - (1 + t) * Math.exp(-t);
      var r = Math.sqrt(z * z - 1), s1 = -z + r, s2 = -z - r;
      return 1 + (s2 * Math.exp(s1 * t) - s1 * Math.exp(s2 * t)) / (s1 - s2);
    }

    var curve = $("#scope-curve");
    var read = $("#scope-read");
    var input = $("#zeta");

    function draw(z) {
      var d = "";
      for (var i = 0; i <= 240; i++) {
        var tt = (i / 240) * T;
        d += (i ? "L" : "M") + X(tt).toFixed(2) + " " + Y(step(z, tt)).toFixed(2);
      }
      curve.setAttribute("d", d);
      var os = z < 1 ? Math.exp(-Math.PI * z / Math.sqrt(1 - z * z)) * 100 : 0;
      read.textContent = "ζ = " + z.toFixed(2) + " · overshoot " + os.toFixed(1) + "%";
    }

    draw(parseFloat(input.value));
    var len = curve.getTotalLength ? curve.getTotalLength() : 600;
    curve.style.strokeDasharray = len;
    curve.style.setProperty("--len", len);
    curve.classList.add("draw");
    curve.addEventListener("animationend", function () {
      curve.classList.remove("draw");
      curve.style.strokeDasharray = "";
    });

    input.addEventListener("input", function () {
      curve.classList.remove("draw");
      curve.style.strokeDasharray = "";
      draw(parseFloat(input.value));
    });
  }

  /* ---------- Chrome ---------- */
  function setupTheme() {
    var btn = $("#theme-toggle");
    var root = document.documentElement;
    var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    function current() {
      var t = root.getAttribute("data-theme");
      if (t) return t;
      return mq && mq.matches ? "dark" : "light";
    }
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  function setupNav() {
    var nav = $("#nav");
    var btn = $("#menu-toggle");
    var bar = $(".topbar");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    function onScroll() { bar.classList.toggle("scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (!("IntersectionObserver" in window)) return;
    var links = {};
    nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.toggle("active", k === en.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }

  function setupReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Init ---------- */
  renderStats();
  renderTimeline();
  renderResearch();
  buildPubs();
  renderPubFilter();
  renderPubs();
  renderTeaching();
  renderLab();
  renderLinks();
  setupCarousels();
  setupModal();
  setupScope();
  setupTheme();
  setupNav();
  setupReveal();

  $("#pub-search").addEventListener("input", function (e) {
    pubState.query = e.target.value;
    renderPubs();
  });
  $("#year").textContent = new Date().getFullYear();
})();
