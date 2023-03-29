const fakeLink = document.getElementById("fakeLink");
fakeLink.addEventListener("click", (action) => {
    action.preventDefault();
    fakeLink.innerText = "There is actually no link here. That's because I've been procrastinating.";
    fakeLink.style.fontWeight = "bold";
});

const djangoGithubLink = document.getElementById("djangoGithubLink");
djangoGithubLink.addEventListener("click", (action) => {
    action.preventDefault();
    djangoGithubLink.innerText = "Not open-sourced yet.";
})