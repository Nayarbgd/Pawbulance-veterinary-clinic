import { useEffect, RefObject } from "react";

const POOL_SIZE = 8;
const MIN_DIST_SQ = 900; // 30px  (avoids Math.sqrt)
const FADE_MS = 1800;

// Paw SVG: one palm oval + four toe ovals — flat, no shading, brand-muted color
const PAW_SVG = `<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="9"    cy="13"  rx="4.5" ry="3.5" fill="#94a3b8"/>
  <ellipse cx="3.5"  cy="8.5" rx="2"   ry="2.5" fill="#94a3b8"/>
  <ellipse cx="7.2"  cy="5.8" rx="2"   ry="2.5" fill="#94a3b8"/>
  <ellipse cx="10.8" cy="5.8" rx="2"   ry="2.5" fill="#94a3b8"/>
  <ellipse cx="14.5" cy="8.5" rx="2"   ry="2.5" fill="#94a3b8"/>
</svg>`;

export function usePawTrail(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Skip entirely on touch / mobile — check both pointer capability and width
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.innerWidth < 768) return;

    // ── Build object pool (done once, never during mousemove) ─────────────
    const pool: HTMLDivElement[] = [];
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < POOL_SIZE; i++) {
      const el = document.createElement("div");
      // All positioning via transform — GPU-accelerated, no top/left
      el.style.cssText =
        "position:absolute;top:0;left:0;width:18px;height:18px;" +
        "pointer-events:none;will-change:transform,opacity;opacity:0;" +
        "transform-origin:9px 9px;z-index:20;";
      el.innerHTML = PAW_SVG;
      container.appendChild(el);
      pool.push(el);
      timers.push(0 as unknown as ReturnType<typeof setTimeout>);
    }

    let poolIdx = 0;
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;
    let isLeft = false;
    let rafId: number | null = null;

    // ── Spawn from pool ───────────────────────────────────────────────────
    function spawnPaw(x: number, y: number, angle: number) {
      const i = poolIdx;
      const el = pool[i];

      clearTimeout(timers[i]);

      // 1. Snap to new position (no transition so it's instant)
      const scaleX = isLeft ? 1 : -1;
      el.style.transition = "none";
      el.style.transform = `translate(${x - 9}px,${y - 9}px) rotate(${angle}rad) scaleX(${scaleX})`;
      el.style.opacity = "0.85";

      // 2. Force a single reflow so the browser commits the snap state
      void el.offsetHeight;

      // 3. Start CSS fade — the browser handles this on the compositor thread
      el.style.transition = `opacity ${FADE_MS}ms ease-out`;
      el.style.opacity = "0";

      timers[i] = setTimeout(() => {
        // slot is implicitly available again via round-robin
      }, FADE_MS + 100);

      poolIdx = (poolIdx + 1) % POOL_SIZE;
      isLeft = !isLeft;
    }

    // ── RAF tick — runs at most once per frame ────────────────────────────
    function tick() {
      rafId = null;
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;

      // Squared distance — no Math.sqrt
      if (dx * dx + dy * dy >= MIN_DIST_SQ) {
        // +π/2 because the paw SVG points upward by default
        const angle = Math.atan2(dy, dx) + Math.PI * 0.5;
        spawnPaw(mouseX, mouseY, angle);
        lastX = mouseX;
        lastY = mouseY;
      }
    }

    // ── Event listeners — passive so scroll is never blocked ─────────────
    function onMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      // Only schedule one RAF per frame
      if (rafId === null) rafId = requestAnimationFrame(tick);
    }

    function onMouseLeave() {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    container.addEventListener("mousemove", onMouseMove, { passive: true });
    container.addEventListener("mouseleave", onMouseLeave, { passive: true });

    // ── Cleanup ───────────────────────────────────────────────────────────
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
      timers.forEach(clearTimeout);
      pool.forEach((el) => {
        if (el.parentNode === container) container.removeChild(el);
      });
    };
  }, []); // runs once on mount — ref.current is stable by then
}
