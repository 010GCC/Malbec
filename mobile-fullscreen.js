/* Malbec mobile viewport helpers (v1.16.1) */
(function () {
  function hookResize() {
    var gameWindow = document.getElementById('game-window');
    var canvas = document.getElementById('gameCanvas');
    if (!gameWindow || !canvas) return;
    function resize() {
      var W = Math.max(1, gameWindow.clientWidth | 0);
      var H = Math.max(1, gameWindow.clientHeight | 0);
      if (canvas.width !== W || canvas.height !== H) {
        canvas.width = W;
        canvas.height = H;
      }
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
    }
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('orientationchange', function () { setTimeout(resize, 50); });
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', resize);
    }
    setTimeout(resize, 100);
    setTimeout(resize, 500);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hookResize);
  } else {
    hookResize();
  }
})();
