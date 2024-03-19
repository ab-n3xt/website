const DEBUG = true;
/*== SPA Functionality ==*/
const headerNavLinks = document.getElementsByTagName('nav')[0].children;

for (var i = 0; i < headerNavLinks.length; i++) {
    (function () {
        const headerNavLink = headerNavLinks[i];
        const headerNavLinkName = headerNavLink.getAttribute('name');
        headerNavLinks[i].addEventListener("click", () => {
            loadHTML(headerNavLinkName);
        })
    }());
}
async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function loadHTML(name) {
    const nameOfFile = name + ".html";
    if (DEBUG) console.log("Loading: " + nameOfFile + "...");
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = await fetchHtmlAsText(nameOfFile);
}

/*== Animated subtitle ==*/
var index = 0;
var delay = 0.1;
const delayRate = 0.05;
var animatedJobTitle = document.querySelector(".animatedJobTitle");

const jobTitles = ["Programmer", "Digital Marketer", "E-Commerce"];
const spannedJobTitles = []
for(const jobTitle of jobTitles) {
    var newJobTitle = new String();
    for(const letter of jobTitle) {
        var newLetter = new String();
        if (letter === ' ') newLetter = `<span style='animation-delay: ${delay}s' class='letter'>&nbsp</span>` ;
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
var observer = new MutationObserver(function(mutationsList, observer) {
    const letters = document.querySelectorAll(".letter");
    const lastLetter = letters[letters.length-1];
    lastLetter.addEventListener("animationend", () => {
        index += 1;
        if(index >= spannedJobTitles.length) index = 0;
        animatedJobTitle.innerHTML = spannedJobTitles[index];
    })
});

// call 'observe' on that MutationObserver instance, 
// passing it the element to observe, and the options object
observer.observe(elementToObserve, {childList: true});

animatedJobTitle.innerHTML = spannedJobTitles[index];