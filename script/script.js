function min(tE, s) {
    var e = document.getElementById(s);
    if (e.style.display == "none") {
        tE.innerHTML="[-]";
        e.style.display="block";
    }     
    else {
        tE.innerHTML="[+]";
        e.style.display="none";
    }
}