// --- Cursor customizado ---
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
 
    document.addEventListener('mousemove', (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
      // O ring segue com pequeno delay via CSS transition
      ring.style.left = e.clientX + 'px';
      ring.style.top  = e.clientY + 'px';
    });

    // --- Navbar scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // --- Scroll Reveal ---
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Delay escalonado para cards em sequência
          const delay = entry.target.closest('.skills-grid, .projects-grid')
            ? Array.from(entry.target.parentElement.children).indexOf(entry.target) * 80
            : 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
 
    reveals.forEach(el => observer.observe(el));
 
    // --- Barras de habilidade ---
    const skillBars = document.querySelectorAll('.skill-bar');
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const target = bar.dataset.width;
          setTimeout(() => {
            bar.style.width = target + '%';
          }, 200);
          barObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });
 
    skillBars.forEach(bar => barObserver.observe(bar));
    