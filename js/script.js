// header
fetch("./components/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-component").innerHTML = data;
    });


// main component
fetch("./components/index-content.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("main-content").innerHTML = data;
    });

// footer
fetch("./components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-component").innerHTML = data;
    });


// about introduction
fetch("./components/introduction.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("introduction").innerHTML = data;
    });

// about mission
fetch("./components/mission.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("mission").innerHTML = data;
    });


// contact
fetch("./components/contact-content.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("contact-content").innerHTML = data;
    });


// Function to initialize Swiper
function initSwiper() {
    return new Swiper('.auto-swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}




