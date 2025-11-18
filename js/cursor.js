// ===== Shooting-star Cursor Trail (流星效果) =====
(() => {
    const canvas = document.getElementById('cursorCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height, dpr;
    let particles = [];

    function resize() {
        dpr = window.devicePixelRatio || 1;
        width = window.innerWidth * dpr;
        height = window.innerHeight * dpr;
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
    }
    window.addEventListener('resize', resize);
    resize();

    document.addEventListener('pointermove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * dpr;
        const y = (e.clientY - rect.top) * dpr;

        for (let i = 0; i < 2; i++) {
            particles.push({
                x, y,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                life: 1,
                size: 1.8 + Math.random() * 2
            });
        }
    });

    function step() {
        ctx.clearRect(0, 0, width, height);
        ctx.globalCompositeOperation = 'lighter';

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.life -= 0.02;
            if (p.life <= 0) {
                particles.splice(i, 1);
                continue;
            }

            p.x += p.vx * 6;
            p.y += p.vy * 6;

            const alpha = p.life;
            const r = p.size * 6;

            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
            g.addColorStop(0, `rgba(125, 211, 252, ${alpha})`);
            g.addColorStop(0.4, `rgba(56, 189, 248, ${alpha * 0.9})`);
            g.addColorStop(1, `rgba(56, 189, 248, 0)`);

            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.globalCompositeOperation = 'source-over';
        requestAnimationFrame(step);
    }

    step();
})();
