// HAMBURGER BUTTON NAVIGATION
// GET BAR BUTTON TO SAVE IN VARIABLE
const hbg = document.getElementById("hbgBtn");
let count = 0;
// ONCE, BUTTON CLICKED, CALLS A FUNCTION
hbg.onclick = function() {
    count++;
    // EVENLY
    if(count%2==0) {
        document.getElementById("hbgLinks").style.display = "none";
    // ODDLY
    } else {
        document.getElementById("hbgLinks").style.display = "flex";
    }
}



// ----------------------------------------------------------------------------------------------------------------------



// CROUSAL IMAGES
// SAVE IMAGE OBJECTS IN ARRAY
const images = [
    { img: '../media/carouselHome.png' },
    { img: '../media/carousel1.png' },
    { img: '../media/carousel2.png' },
    { img: '../media/carousel3.png' },
    { img: '../media/carousel4.png' }
];

// GET IMAGE ELEMENT BY ID FROM HTML
const img = document.getElementById('crousal');
let index = 0;

// FOR NEXT IMAGE
function showNextImage() {
    const image = images[index++];
    img.src = image.img;
}

// FOR PREVIOUS IMAGE
function showPrevImage() {
    const image = images[index--];
    img.src = image.img;
}

// SHOW CURRENT IMAGE
showNextImage();