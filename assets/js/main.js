// Navbar opacity on scroll

$(window).scroll(function () {
    if ($(this).scrollTop() > 120) /* height in pixels when the navbar becomes non opaque */ {
        $(".navbar").addClass("navbar-on-scroll");
    } else {
        $(".navbar").removeClass("navbar-on-scroll");
    }
});

// Back to top button

// Get the button

mybutton = document.getElementById("to-top-btn");

// When the user scrolls down 200px from the top of the document, show the button

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}