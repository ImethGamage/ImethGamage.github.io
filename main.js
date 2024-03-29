document.addEventListener("DOMContentLoaded", function(){

  document.body.style.backgroundColor = "black";
  const counter3 = document.querySelector(".counter-3");
  
  for(let i = 0; i < 2; i++){
    for(let j = 0; j < 10; j++){
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }
  const finalDiv= document.createElement("div");
  finalDiv.className = "num";
  finalDiv.textContent= "0";
  counter3.appendChild(finalDiv);

  function animate(counter , duration, delay=0){
    const numHeight = counter.querySelector(".num").clientHeight;

    const totalDistance = 
    (counter.querySelectorAll(".num").length - 1) *
    numHeight;

    gsap.to(counter,{
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  }

  animate(counter3, 5);
  animate(document.querySelector(".counter-2"), 6);
  animate(document.querySelector(".counter-1"), 2, 4);

  gsap.to(".digit", {
    top: "-150px",
    stagger: {
      amount: 0.25,
    },
    delay: 6,
    duration: 1,
    ease: "power4.inOut",
  });

  gsap.from(".loader-1", {
    width: 0,
    duration: 6,
    ease: "power2.inOut",
  });

  gsap.from(".loader-2", {
    width: 0,
    delay: 1.9,
    duration: 2,
    ease: "power2.inOut",
  });

  gsap.to(".loader", {
    background: "none", 
    delay: 6,
    duration: 0.1,
  });

  gsap.to(".loader-1", {
    rotate: 90,
    y: -50,
    duration: 0.5,
    delay: 6,
  });

  gsap.to(".loader-2", {
    x: -75,
    y: 75,
    duration: 0.5,
  }, "<"
  
  );

  gsap.to(".loader", {
    scale: 40,
    duration: 1,
    delay: 7,
    ease: "power2.inOut",
  });


  gsap.to(".loader", {
    rotate:45,
    y:500,
    x: 2000,
    duration: 1,
    delay: 7,
    ease: "power2.inOut",
  });

  gsap.to(".loading-screen", {
    opacity: 0,
    display: "none", // Changed from opacity to display
    duration: 0.5,
    delay: 7.5,
    ease: "power1.inOut",
    onComplete: function() {
      // Change background color of content back to original color
      document.body.style.backgroundColor = "black"; // Set to original color (or specify desired color)
    }
  },);

 
});




// Typed.js Initialization
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Mobile App Developer", "Java Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Function to toggle additional details
function toggleDetails() {
    var paragraph = document.querySelector('.subtitle2');
    var readMoreButton = document.querySelector('.read-more');
    var additionalDetails = " I love exploring new places. I bring my camera with me everywhere I go because I enjoy taking pictures of the interesting things I see. I also like staying active, so I play sports like Cricket and Table tennis whenever I can. And of course, I can't forget about music! I'm a big music fan and love listening to all kinds of tunes. I believe that connecting with people and working together is the best way to make awesome stuff happen!"; // Modify this string with the additional details you want to add
    
    if (paragraph.classList.contains('expanded')) {
        paragraph.innerText = paragraph.innerText.substring(0, 448) + "..."; // Truncate the paragraph to original length
        paragraph.classList.remove('expanded');
        readMoreButton.innerText = "Read More";
    } else {
        paragraph.innerText += additionalDetails; // Append additional details
        paragraph.classList.add('expanded');
        readMoreButton.innerText = "Read Less";
    }
}





// Circle Animation
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(elem => {
        var dots = parseInt(elem.getAttribute("data-dots"));
        var marked = parseInt(elem.getAttribute("data-percent"));
        var percent = Math.floor((dots * marked / 100));
        var points = "";
        var rotate = 360 / dots;

        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i: ${i}; --root: ${rotate}deg"></div>`;
        }

        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll('.points');

        for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add('marked')
        }
    });
});

// Portfolio Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all portfolio items
    var portfolioItems = document.querySelectorAll('.portfolio-gallery .port-box');

    // Get all filter buttons
    var filterButtons = document.querySelectorAll('.fillter-buttons .btn');

    // Function to show or hide portfolio items based on the selected filter
    function filterItems(filterValue) {
        portfolioItems.forEach(function(item) {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block'; // Show the item
            } else {
                item.style.display = 'none'; // Hide the item
            }
        });
    }

    // Add click event listeners to filter buttons
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var filterValue = button.getAttribute('data-filter');
            filterItems(filterValue);

            // Toggle active class on filter buttons
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
});

// Scroll Reveal Initialization
document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 1000,
        delay: 200
    });

    // Define animations based on screen size or viewport
    if (window.innerWidth > 768) {
        ScrollReveal().reveal('.header-text p', { origin: 'top' });
        ScrollReveal().reveal('.header-text h1', { origin: 'left' });
        ScrollReveal().reveal('.about-col-1 img', { origin: 'right', delay: 300 });
        ScrollReveal().reveal('.about-col-2 .subtitle', { origin: 'left', delay: 400 });
        ScrollReveal().reveal('.about-col-2 .subtitle2', { origin: 'left', delay: 500 });
        ScrollReveal().reveal('.tab-titles', { origin: 'bottom', delay: 600 });
        ScrollReveal().reveal('.skill-right', { origin: 'left', delay: 700, interval: 100 });
        ScrollReveal().reveal('.skill-bar', { origin: 'bottom', interval: 200 });
        ScrollReveal().reveal('.subtitle3', { origin: 'bottom', interval: 200 });
        ScrollReveal().reveal('.services-list div', { origin: 'bottom', interval: 200 });
       // ScrollReveal().reveal('.portfolio-gallery .port-box', { origin: 'bottom', interval: 200 });
        ScrollReveal().reveal('.contact-left', { origin: 'left', interval: 200 });
        ScrollReveal().reveal('.contact-right', { origin: 'right', interval: 200 });
    } else {
        // Define alternative animations for smaller screens
        ScrollReveal().reveal('.header-text p', { origin: 'bottom' });
        ScrollReveal().reveal('.header-text h1', { origin: 'bottom' });
        ScrollReveal().reveal('.about-col-1 img', { origin: 'bottom', delay: 300 });
        ScrollReveal().reveal('.about-col-2 .subtitle', { origin: 'bottom', delay: 400 });
        ScrollReveal().reveal('.about-col-2 .subtitle2', { origin: 'bottom', delay: 500 });
        ScrollReveal().reveal('.tab-titles', { origin: 'bottom', delay: 600 });
        ScrollReveal().reveal('.skill-right', { origin: 'bottom', delay: 700, interval: 100 });
        ScrollReveal().reveal('.skill-bar', { origin: 'bottom', interval: 200 });
        ScrollReveal().reveal('.subtitle3', { origin: 'bottom', interval: 200 });
        ScrollReveal().reveal('.services-list div', { origin: 'bottom', interval: 200 });
       // ScrollReveal().reveal('.portfolio-gallery .port-box', { origin: 'bottom', interval: 200 });
        ScrollReveal().reveal('.contact-left', { origin: 'bottom', interval: 200 });
        ScrollReveal().reveal('.contact-right', { origin: 'bottom', interval: 200 });
    }
});


particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  document.getElementById("downloadLink").addEventListener("click", function(event){
    event.preventDefault(); // Prevent the default action of the link
    
    var filename = "Imeth_Gamage_CV.pdf"; // Replace with your file name
    var link = document.createElement('a');
    link.setAttribute('href', filename);
    link.setAttribute('download', filename);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click(); // Simulate a click on the link to trigger download
    document.body.removeChild(link);
});
