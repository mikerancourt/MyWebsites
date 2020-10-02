// TEST
// alert("Hello World");




/** SCROLL TO TOP BUTTON **/
//Get the button:
mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

// CHECK: Do screen readers get borked with visibility?
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { //Safari OR Chrome
        mybutton.style.visibility = "visible";
        mybutton.style.opacity = "1";
    } else {
        mybutton.style.visibility = "hidden";
        mybutton.style.opacity = "0";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// TAKEN FROM: https://www.youtube.com/watch?v=2mvXKooes3E
// VIP Tutorials: "Add Remove Active Class on Click - HTML CSS and PURE JS"
// DON'T NEED THIS ANYMORE!
//Change Active Class based on mouse clicks using vanilla js//
// let ul = document.querySelector('.navbar ul');
//     let li = document.querySelectorAll('.navbar ul li');
//     li.forEach(el => {
//         el.addEventListener('click', function(){
//             ul.querySelector('.active').classList.remove('active');

//             el.classList.add('active');
//         });
//     });


//SOURCE: https://www.youtube.com/watch?v=MXlAkBzKbpc
// Change navigation style on scroll

window.addEventListener('scroll', event => {
    let nav=document.querySelector('.navbar');

    (window.scrollY>=44)? nav.classList.add('scroll'):nav.classList.remove('scroll');
});

//SOURCE: https://www.youtube.com/watch?v=MXlAkBzKbpc
//Active navigation on scroll
window.addEventListener('scroll', event => {
    let navigationLinks=document.querySelectorAll('nav ul li a');
    let fromTop=window.scrollY;

    navigationLinks.forEach(link => {
        let section=document.querySelector(link.hash);

        if (section.offsetTop<=fromTop&&section.offsetTop+section.offsetHeight>fromTop) {
            link.classList.add('active');
        }
        else {
            link.classList.remove('active');
        }
    });
});