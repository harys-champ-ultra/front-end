// HAMBURGER BUTTON NAVIGATION
// GET BAR BUTTON TO SAVE IN VARIABLE
const hbg = document.getElementById("hbgBtn");
let count = 0;
// ONCE, BUTTON CLICKED, CALLS A FUNCTION
hbg.onclick = () => {
    count++;
    // EVENLY
    if (count % 2 == 0) {
        document.getElementById("hbgLinks").style.display = "none";
        // ODDLY
    } else {
        document.getElementById("hbgLinks").style.display = "flex";
    }
}


// CAROUSEL IMAGES
// SAVE IMAGE OBJECTS IN ARRAY
const images = [
    { img: 'media/carouselHome.png' },
    { img: 'media/carousel1.png' },
    { img: 'media/carousel2.png' },
    { img: 'media/carousel3.png' },
    { img: 'media/carousel4.png' }
];

// GET IMAGE ELEMENT BY ID FROM HTML
const img = document.getElementById("carousel");
let index = 0;

// FOR NEXT IMAGE
const showNextImage = () => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; // Loop back to the first image if at the end.
    }
    const image = images[index];
    img.src = image.img;
}

// FOR PREVIOUS IMAGE
const showPrevImage = () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1; // Loop to the last image if at the beginning.
    }
    const image = images[index];
    img.src = image.img;
}

// SHOW CURRENT IMAGE
showNextImage();
