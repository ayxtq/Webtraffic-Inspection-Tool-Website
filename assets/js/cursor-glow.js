// Cursor glow smooth follow
document.addEventListener('DOMContentLoaded', () => {
  const glow = document.getElementById('cursorGlow');
  if (glow) {
    let x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y;
    function animate() {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      glow.style.left = x + 'px';
      glow.style.top  = y + 'px';
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
  }
});