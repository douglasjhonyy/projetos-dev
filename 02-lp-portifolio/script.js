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

    