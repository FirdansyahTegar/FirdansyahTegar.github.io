let prevScrollPos = window.pageYOffset;
const nav = document.querySelector("nav");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let scrollTopBtn = document.getElementById("scrollTopBtn");

    // Navbar show/hide logic
    if (prevScrollPos > currentScrollPos) {
        // Scrolling up - show the nav bar
        nav.style.top = "0";
    } else {
        // Scrolling down - hide the nav bar
        nav.style.top = "-70px"; // Adjust this value to the height of your nav
    }
    prevScrollPos = currentScrollPos;

    // Scroll-to-top button logic
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block"; // Show button
    } else {
        scrollTopBtn.style.display = "none"; // Hide button
    }
};

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

document.addEventListener("DOMContentLoaded", function() {
    const aboutH1 = document.querySelector("#about h1");
    const aboutP = document.querySelector("#about p");

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === aboutH1) {
                    aboutH1.classList.add('slide-in');
                } else if (entry.target === aboutP) {
                    aboutP.classList.add('slide-in');
                }
            }
        });
    });

    observer.observe(document.querySelector("#about h1")); // Observe h1
    observer.observe(document.querySelector("#about p")); // Observe p
});

document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            }
        });
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll2');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            }
        });
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});