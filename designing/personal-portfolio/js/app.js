let count = localStorage.getItem("themeCount") || 0;
const themeToggle = document.querySelector(".theme");
const body = document.querySelector("body");
const mode = document.querySelector(".mode");

function toggleTheme() {
    count++;
    count % 2 === 0 ? setLightTheme() : setDarkTheme();
    localStorage.setItem("themeCount", count);
}

function setLightTheme() {
    themeToggle.textContent = "🌚";
    mode.classList.replace("dark", "light");
    body.style.backgroundColor = "#FFFFFF";
    body.style.transition = "0.8s";
}

function setDarkTheme() {
    themeToggle.textContent = "🌞";
    mode.classList.replace("light", "dark");
    body.style.backgroundColor = "#111111";
    body.style.transition = "0.8s";
}

themeToggle.addEventListener("click", toggleTheme);

count % 2 === 0 ? setLightTheme() : setDarkTheme();

document.getElementById("year").innerHTML = new Date().getFullYear();