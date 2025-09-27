jQuery(document).ready(function( $ ) {

    // Global flag to track the animation interval
    var chartInterval = null;

    // Smooth scroll for the menu and links with .scrollto classes
    $('.smothscroll').on('click', function(e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 62
                }, 3000, 'easeInOutExpo');
            }
        }
    });

    $('.carousel').carousel({
        interval: 3500
    });

    // Define the data arrays immediately
    var javascriptData = [{ value: 70, color: "#1abc9c" }, { value: 30, color: "#ecf0f1" }];
    var frontendLangData = [{ value: 99.5, color: "#1abc9c" }, { value: 0.5, color: "#ecf0f1" }];
    var englishData = [{ value: 90, color: "#1abc9c" }, { value: 10, color: "#ecf0f1" }];
    var htmlData = [{ value: 70, color: "#1abc9c" }, { value: 30, color: "#ecf0f1" }];
    var photoshopData = [{ value: 70, color: "#1abc9c" }, { value: 30, color: "#ecf0f1" }];
    var illustratorData = [{ value: 85, color: "#1abc9c" }, { value: 15, color: "#ecf0f1" }];

    // Array to hold references to the Chart objects (for cleaning them up)
    var activeCharts = {};

    // Function to draw/redraw all charts
    function drawCharts() {
        // 1. Clean up old charts (important to prevent issues when redrawing)
        if (activeCharts.javascript) activeCharts.javascript.destroy();
        if (activeCharts.frontendLang) activeCharts.frontendLang.destroy();
        if (activeCharts.english) activeCharts.english.destroy();
        if (activeCharts.html) activeCharts.html.destroy();
        if (activeCharts.photoshop) activeCharts.photoshop.destroy();
        if (activeCharts.illustrator) activeCharts.illustrator.destroy();
        
        // 2. Initialize and store new chart instances
        activeCharts.javascript = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(javascriptData);
        activeCharts.frontendLang = new Chart(document.getElementById("frontend-lang").getContext("2d")).Doughnut(frontendLangData);
        activeCharts.english = new Chart(document.getElementById("english").getContext("2d")).Doughnut(englishData);
        activeCharts.html = new Chart(document.getElementById("html").getContext("2d")).Doughnut(htmlData);
        activeCharts.photoshop = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(photoshopData);
        activeCharts.illustrator = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(illustratorData);
    }

    // --- SCROLL AND INTERVAL TRIGGER ---
    var skillsTop = $('#skillswrap').offset().top - $(window).height() / 2;

    function handleScroll() {
        // Start the repeating animation when the section is visible
        if ($(window).scrollTop() > skillsTop && chartInterval === null) {
            // Immediately draw the charts once
            drawCharts(); 

            // Then, set the interval to redraw (restart animation) every 3 seconds (3000ms)
            chartInterval = setInterval(drawCharts, 3000); 

        // Stop the repeating animation if the user scrolls away from the section
        } else if ($(window).scrollTop() <= skillsTop && chartInterval !== null) {
            clearInterval(chartInterval);
            chartInterval = null;
        }
    }

    $(window).on('scroll', handleScroll);

    // Also run on load, in case the user loads the page scrolled down
    handleScroll();
    // ----------------------------

});

// Typed.js (Unchanged)
const typedOne = new Typed('.typed', {
    strings: ['Frontend Web Developer', 'Frontend Web Developer | <i class="typed-style">Design Systems</i>', 'Frontend Web Developer | <i class="typed-style">CSS fan</i>', 'Frontend Web Developer | <i class="typed-style">Digital Marketing</i>', 'Frontend Web Developer | <i class="typed-style">Branding</i>', 'Frontend Web Developer | <i class="typed-style">Guitar + flute player ☺</i>', '<span class="typed-style">Frontend Web developer, software engineer | fanapal.design@gmail.com'],
    stringsElement: '#cadenas-texto',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 25,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: 30, //false = infinite
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('#section-topbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight / 3) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    });
});