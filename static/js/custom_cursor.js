document.addEventListener('DOMContentLoaded', function () {
    // Check if cursor already exists to prevent duplicates
    if (document.querySelector('.custom-cursor')) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dotX = e.clientX;
        dotY = e.clientY;
    });

    function animateCursor() {
        const delay = 0.15;
        cursorX += (mouseX - cursorX) * delay;
        cursorY += (mouseY - cursorY) * delay;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Universal interactive elements selector
    const interactiveSelectors = [
        'a', 'button', 'input', 'textarea',
        '.btn', '.card', '.form-control',
        '.feature-card', '.stat-card', '.guide-point',
        '.service-card', '.contact-card', '.team-card',
        '.mission-card', '.vision-card', '.timeline-content',
        '.nav-link', '.dropdown-item', '.page-link'
    ].join(', ');

    const interactiveElements = document.querySelectorAll(interactiveSelectors);

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-hover');
        });
    });

    // Handle dynamically added elements (optional, using delegation if needed, but simple listeners are fine for now)
    document.addEventListener('mousedown', () => {
        cursor.classList.add('cursor-click');
        cursorDot.classList.add('cursor-click');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('cursor-click');
        cursorDot.classList.remove('cursor-click');
    });

    // Particle Trail (Disabled here, handled by global Canvas Sparkle System)
    /* 
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.85) {
            const p = document.createElement('div');
            ...
        }
    });
    */

    // Parallax Effect (Home Page Hero) - only if .hero exists
    const hero = document.querySelector('.hero');
    if (hero) {
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            document.querySelectorAll('.hero::before, .hero::after').forEach((el, index) => {
                const speed = (index + 1) * 0.5;
                el.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
            });
        });
    }
});
