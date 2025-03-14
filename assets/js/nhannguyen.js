// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
    }
});

// Typing effect for hero section
const text = "Building robust and scalable solutions";
let index = 0;
const speed = 100;

function typeWriter() {
    if (index < text.length) {
        document.querySelector('.hero-content p').textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    document.querySelector('.hero-content p').textContent = '';
    setTimeout(typeWriter, 1000);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    
    // Simulate form submission (replace with actual form submission logic)
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.backgroundColor = 'var(--success-color)';
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
        }, 3000);
    }, 1500);
});

// Skill level animation
const skillCards = document.querySelectorAll('.skill-card');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const level = entry.target.querySelector('.level');
            level.style.width = level.dataset.width || '0%';
        }
    });
}, observerOptions);

skillCards.forEach(card => observer.observe(card));

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.project-image img').style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.project-image img').style.transform = 'scale(1)';
    });
});

// Code window animation
const codeWindow = document.querySelector('.code-window pre code');
const codeText = codeWindow.textContent;
codeWindow.textContent = '';

function animateCode() {
    let index = 0;
    const interval = setInterval(() => {
        if (index < codeText.length) {
            codeWindow.textContent += codeText[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

// Start code animation when the element is in view
const codeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCode();
            codeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

codeObserver.observe(codeWindow);
