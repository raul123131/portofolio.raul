window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 300 + i * 300);
    });

    document.querySelectorAll('.circle').forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        // Ambele cercuri cu aceeași rază
        const radius = 41;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (circumference * percent / 100);

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100");
        svg.setAttribute("height", "100");

        // Cercul gri (fundal)
        const bg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        bg.setAttribute("cx", "50");
        bg.setAttribute("cy", "50");
        bg.setAttribute("r", radius);
        bg.setAttribute("stroke", "#222c3c");
        bg.setAttribute("stroke-width", "7");
        bg.setAttribute("fill", "none");
        svg.appendChild(bg);

        // Cercul albastru (progres)
        const fg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        fg.setAttribute("cx", "50");
        fg.setAttribute("cy", "50");
        fg.setAttribute("r", radius);
        fg.setAttribute("stroke", "#00e0fe");
        fg.setAttribute("stroke-width", "7");
        fg.setAttribute("fill", "none");
        fg.setAttribute("stroke-dasharray", circumference);
        fg.setAttribute("stroke-dashoffset", circumference);
        fg.style.transition = "stroke-dashoffset 1.2s cubic-bezier(.4,2,.6,1)";
        svg.appendChild(fg);

        circle.innerHTML = "";
        circle.appendChild(svg);

        setTimeout(() => {
            fg.setAttribute("stroke-dashoffset", offset);
        }, 400);

        // Text procentaj
        const text = document.createElement('div');
        text.className = 'circle-text';
        text.innerText = percent + '%';
        circle.appendChild(text);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  // Efectul pentru "web developed"
  const text = "web developed";
  const el = document.getElementById("typewriter");
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 80);
    }
  }
  type();

  // Efectul pentru "About Me" doar la scroll
  const aboutText = "Despre mine";
  const aboutEl = document.getElementById("about-typewriter");
  let j = 0;
  let aboutStarted = false;

  const aboutDescText = "Sunt un designer web calificat cu peste 7 luni de zile de experiență în industrie. Pasiunea mea constă în crearea de designuri web captivante și implementarea acestora prin dezvoltare frontend. Mă mândru să fiu la curent cu tendințele actuale în design și să-mi folosesc creativitatea pentru a produce site-uri web atractive din punct de vedere vizual și ușor de utilizat. De-a lungul carierei mele, am dezvoltat o înțelegere profundă a principiilor experienței utilizatorului (UX) și interfeței utilizator (UI). Punându-mă în pielea utilizatorilor finali, mă străduiesc să creez experiențe de navigare intuitive și fluide. Cred că un site web bine conceput nu ar trebui doar să arate atractiv din punct de vedere vizual, ci și să ofere o interacțiune fluidă și plăcută pentru vizitatori. Atunci când încep un proiect nou, cercetez și analizez temeinic publicul țintă și cerințele specifice ale clientului. Acest lucru îmi permite să adaptez designurile mele pentru a satisface așteptările acestora și să ofer o prezență online unică, care se aliniază cu identitatea brandului lor.";
  const aboutDescEl = document.getElementById("about-desc-typewriter");
  let k = 0;

  function typeAbout() {
    if (aboutEl && j <= aboutText.length) {
      aboutEl.textContent = aboutText.slice(0, j);
      j++;
      setTimeout(typeAbout, 80);
    } else if (aboutDescEl && k <= aboutDescText.length) {
      // După titlu, începe descrierea
      aboutDescEl.textContent = aboutDescText.slice(0, k);
      k++;
      setTimeout(typeAbout, 10); // Poți ajusta viteza aici (10ms = mai rapid)
    }
  }

  function revealAboutTypewriter() {
    const aboutSection = document.querySelector('.about-section');
    if (!aboutSection || aboutStarted) return;
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      aboutStarted = true;
      typeAbout();
      window.removeEventListener('scroll', revealAboutTypewriter);
    }
  }
  window.addEventListener('scroll', revealAboutTypewriter);
});

// Smooth scroll pentru link-urile din meniu
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Evidențiază link-ul activ din meniu la scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top <= 80 && rect.bottom > 80) {
      current = section.id;
    }
  });
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

