/* Every project/talk banner shows a small, fast .webp first. Once that has painted, quietly
 * fetch the full-quality .png (same basename, see `data-hq`) in the background and swap it in
 * when it's ready — full quality on a fast connection, no extra wait on a slow one. */
(function () {
  function upgrade(img) {
    var hq = img.getAttribute("data-hq");
    if (!hq) return;
    var full = new Image();
    full.onload = function () {
      img.src = hq;
    };
    full.src = hq;
  }

  function init() {
    var imgs = document.querySelectorAll("img[data-hq]");
    imgs.forEach(function (img) {
      if (img.complete) {
        upgrade(img);
      } else {
        img.addEventListener("load", function () { upgrade(img); }, { once: true });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
