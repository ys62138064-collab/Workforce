/* ============================================================
   画笔与算法的较量 — 交互脚本
   1) 顶部阅读进度条
   2) 滚动渐显动画
   3) 返回顶部按钮
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 阅读进度条 ---------- */
  const progressBar = document.getElementById('progressBar');

  function updateProgress() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const ratio = max > 0 ? (doc.scrollTop || document.body.scrollTop) / max : 0;
    progressBar.style.width = (ratio * 100).toFixed(2) + '%';
  }

  /* ---------- 返回顶部 ---------- */
  const backTop = document.getElementById('backTop');

  function toggleBackTop() {
    backTop.classList.toggle('show', window.scrollY > 600);
  }

  window.addEventListener('scroll', function () {
    updateProgress();
    toggleBackTop();
  }, { passive: true });

  backTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  updateProgress();
  toggleBackTop();

  /* ---------- 滚动渐显 ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- 目录锚点平滑滚动（兼容旧浏览器） ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
