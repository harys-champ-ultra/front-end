let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}
const popUp = () => {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("pop").style.display = "block";
}
const popDown = () => {
    document.getElementById("pop").style.display = "none";
    document.getElementById("navbar").style.display = "block";
}

document.getElementById("year").innerHTML = new Date().getFullYear();