jQuery(document).ready(function( $ ) {

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

  // JavaScript Chart
  var doughnutData = [{
      value: 70,
      color: "#1abc9c"
    },
    {
      value: 30,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // Bootstrap Chart
  var doughnutData = [{
    value: 99.5,
    color: "#1abc9c"
  },
  {
    value: 0.5,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("frontend-lang").getContext("2d")).Doughnut(doughnutData);

  // English Chart
  var doughnutData = [{
    value: 90,
    color: "#1abc9c"
  },
  {
    value: 10,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("english").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // Photoshop Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);

  // Illustrator Chart
  var doughnutData = [{
    value: 85,
    color: "#1abc9c"
  },
  {
    value: 15,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);
});

// Typed.js
const typedOne = new Typed('.typed', {
  strings: ['Frontend Web Developer', 'Frontend Web Developer | <i class="typed-style">Design System creator</i>', 'Frontend Web Developer | <i class="typed-style">Javascript lover</i>', 'Frontend Web Developer | <i class="typed-style">CSS fanatic</i>', 'Frontend Web Developer | <i class="typed-style">Digital Marketing</i>', 'Frontend Web Developer | <i class="typed-style">Graph. design</i>', 'Frontend Web Developer | <i class="typed-style">Branding</i>', 'Frontend Web Developer | <i class="typed-style">Guitar + flute player ☺</i>', '<span class="typed-style">Frontend Web developer, software engineer | fanapal.design@gmail.com'],
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
