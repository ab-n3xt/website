const DEBUG = true;

/*== Animated subtitle ==*/
var index = 0;
var delay = 0.1;
const delayRate = 0.05;
var animatedJobTitle = document.querySelector(".animatedJobTitle");

const jobTitles = ["Digital Marketing", "E-Commerce", "Web Development"];
const spannedJobTitles = []
for (const jobTitle of jobTitles) {
    var newJobTitle = new String();
    for (const letter of jobTitle) {
        var newLetter = new String();
        if (letter === ' ') newLetter = `<span style='animation-delay: ${delay}s' class='letter'>&nbsp</span>`;
        else newLetter = `<span style='animation-delay: ${delay}s' class='letter'>${letter}</span>`;
        newJobTitle = newJobTitle.concat(newLetter);
        delay += delayRate;
    }
    delay = 0.1;
    spannedJobTitles.push(newJobTitle);
}

// identify an element to observe
var elementToObserve = window.document.getElementById('animatedJobTitle');

// create a new instance of 'MutationObserver' named 'observer', 
// passing it a callback function
var observer = new MutationObserver(function (mutationsList, observer) {
    const letters = document.querySelectorAll(".letter");
    const lastLetter = letters[letters.length - 1];
    lastLetter.addEventListener("animationend", () => {
        index += 1;
        if (index >= spannedJobTitles.length) index = 0;
        animatedJobTitle.innerHTML = spannedJobTitles[index];
    })
});

// call 'observe' on that MutationObserver instance, 
// passing it the element to observe, and the options object
observer.observe(elementToObserve, { childList: true });

animatedJobTitle.innerHTML = spannedJobTitles[index];