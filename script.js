const DEBUG = true;
const headerNavLinks = document.getElementsByTagName('nav')[0].children;

for (var i = 0; i < headerNavLinks.length; i++) {
    (function() {
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



