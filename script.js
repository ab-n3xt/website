const DEBUG = true;

function fadeInObserver() {
    var contentToFadeIn = document.querySelectorAll(".fadeInContent");
    for (var i = 0; i < contentToFadeIn.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = contentToFadeIn[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            contentToFadeIn[i].classList.add("active");
        } else {
            contentToFadeIn[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", fadeInObserver);

// To check the scroll position on page load
fadeInObserver();