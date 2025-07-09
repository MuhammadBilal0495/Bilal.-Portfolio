/*toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbars');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*scroll section*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*sticky navbar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*remove toggle icon navbar when click link */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*scroll reveal*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*typed js*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function showError1() {
    alert("⚠️ Error: The user is currently not on Twitter.");
}

function showError2() {
    alert("⚠️ Error: The user is currently not on Linkedin.");
}


/*dark theme script code*/
const toggleCheckbox = document.getElementById("theme-toggle");

// Toggle the theme when the checkbox changes
toggleCheckbox.addEventListener("change", () => {
    const isLight = toggleCheckbox.checked;

    document.body.classList.toggle("light-theme", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Restore theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const isLight = savedTheme === "light";

    document.body.classList.toggle("light-theme", isLight);
    toggleCheckbox.checked = isLight;
});
