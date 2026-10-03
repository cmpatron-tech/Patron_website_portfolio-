// --- DOM Element References ---
const navToggleBtn = document.getElementById('nav-toggle');
const navMenuLinks = document.getElementById('nav-links');
const navLinksList = document.querySelectorAll('.nav-link');
const currentYearSpan = document.getElementById('year');
const contactForm = document.getElementById('contact-form');

// --- Mobile Navigation Toggle ---
if (navToggleBtn && navMenuLinks) {
  navToggleBtn.addEventListener('click', () => {
    navMenuLinks.classList.toggle('active');
    
    // Toggle menu icon between bars and close icon
    const icon = navToggleBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    }
  });
}

// --- Close Mobile Menu On Nav Link Click ---
navLinksList.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenuLinks.classList.contains('active')) {
      navMenuLinks.classList.remove('active');
      
      const icon = navToggleBtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    }
  });
});

// --- Active Link Highlighting On Scroll ---
window.addEventListener('scroll', () => {
  let currentSectionId = '';
  const pageSections = document.querySelectorAll('section');

  pageSections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinksList.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});

// --- Dynamic Footer Copyright Year ---
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// --- Contact Form Submission Handler ---
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const messageInput = document.getElementById('message').value;

    if (nameInput && emailInput && messageInput) {
      alert(`Thank you, ${nameInput}! Your message has been sent successfully.`);
      contactForm.reset();
    } else {
      alert('Please fill out all required fields.');
    }
  });
}
// --- Dark / Light Mode Toggle & Profile Pic Swap ---
const themeToggleBtn = document.getElementById('theme-toggle');

// Image file paths
const darkProfileImg = 'Profile.jpeg';
const lightProfileImg = 'Gallery1.jpeg'; // <-- Switch to your preferred photo for light mode

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    // Toggle light-mode class
    document.body.classList.toggle('light-mode');
    
    const isLight = document.body.classList.contains('light-mode');
    const icon = themeToggleBtn.querySelector('i');
    const profileImg = document.getElementById('profile-img') || document.querySelector('.avatar-img');

    if (isLight) {
      if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
      if (profileImg) {
        profileImg.setAttribute('src', lightProfileImg);
      }
    } else {
      if (icon) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
      if (profileImg) {
        profileImg.setAttribute('src', darkProfileImg);
      }
    }
  });
}
