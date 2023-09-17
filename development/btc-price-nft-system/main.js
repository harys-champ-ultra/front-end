import * as THREE from "/three.min.js";

const fetchBitcoinPrice = async () => {
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
    const data = await response.json();
    return data.bpi.USD.rate_float;
}

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setClearColor(0x000000, 1);

const setupScene = async (isFall) => {
    try {
        const btcPrice = await fetchBitcoinPrice();

        const ath = 68726;
        const threshold = 100000;
        const redSize = (ath - btcPrice) * 100 / threshold;
        const redRadius = 0.4;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const gap = 0.16;
        const figureRadius = 0.04 * Math.floor((btcPrice / threshold) * 100); // Updated Math.floor(), so if value is between 0.1 and 0.4 it is 0, and if value is 0.5 and 0.9, it becomes 1
        const figureSize = figureRadius / (0.04 * 3); // Default Particle size of figure increase by 3 times

        const xFigure = Math.random() * ((figureSize * 4.2) - (-figureSize * 4.2) + 1) + (-figureSize * 4.2);
        const yFigure = Math.random() * ((figureSize * 1.2) - (-figureSize * 1.2) + 1) + (-figureSize * 1.2);
        let xRed, yRed = 0;
        if (xFigure > 0) {
            // xRed = Math.random() * ((redSize * 1.68) - (redSize * 0.16) + 1) + (redSize * 0.16);
            xRed = Math.random() * ((redSize * 1.68) - (redSize * 0.98) + 1) + (redSize * 0.98);
        } else {
            xRed = Math.random() * ((-redSize * 1.68) - (-redSize * 0.98) + 1) + (-redSize * 0.98);
            // xRed = Math.random() * ((-redSize * 1.68) - (-redSize * 0.16) + 1) + (-redSize * 0.16);
        }
        if (yFigure > 0) {
            yRed = Math.random() * ((-redSize * 0.36) - (-redSize * 0.18) + 1) + (-redSize * 0.18);
        } else {
            yRed = Math.random() * ((redSize * 0.36) - (redSize * 0.18) + 1) + (redSize * 0.18);
        }

        camera.position.x = xFigure;
        camera.position.y = yFigure;
        camera.position.z = figureSize * 4;

        document.body.appendChild(renderer.domElement);

        const segments = 96;
        const figureGeometry = new THREE.CircleGeometry(figureRadius, segments);

        const figures = [];

        for (let i = -figureSize; i <= figureSize; i++) {
            for (let j = -figureSize; j <= figureSize; j++) {
                const x = (i + j / 2) * (figureRadius * 2 + gap);
                const y = j * (figureRadius * Math.sqrt(3) + gap);
                const distance = Math.sqrt(x * x + y * y);

                if (distance <= figureSize * (figureRadius * Math.sqrt(2) + gap)) {
                    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 0 });
                    const figure = new THREE.Mesh(figureGeometry, material);
                    figure.position.set(x, y, 0);
                    figure.velocity = new THREE.Vector3(0, 0, 0);
                    scene.add(figure);
                    figures.push(figure);
                }
            }
        }

        const redGeometry = new THREE.CircleGeometry(redSize * (redRadius * Math.sqrt(2) + 0), segments);
        const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide, transparent: true, opacity: 0 });
        const redLayer = new THREE.Mesh(redGeometry, redMaterial);
        redLayer.position.set(xRed, yRed, 1);
        scene.add(redLayer);
        function animateBreathing() {
            new TWEEN.Tween(redLayer.scale)
                .to({ x: 1.08, y: 1.08 }, 3000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onComplete(() => {
                    new TWEEN.Tween(redLayer.scale)
                        .to({ x: 1, y: 1 }, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(() => {
                            animateBreathing();
                        })
                        .start();
                })
                .start();
        }
        animateBreathing();

        const loader = new THREE.TextureLoader();
        let imageUrl;
        if ((btcPrice >= 10000) && (btcPrice < 25000)) {
            imageUrl = "/i1.jpg";
        } else if ((btcPrice >= 25000) && (btcPrice < 50000)) {
            imageUrl = "/i2.jpg";
        } else if ((btcPrice >= 50000) && (btcPrice < 75000)) {
            imageUrl = "/i3.jpg";
        } else if ((btcPrice >= 75000) && (btcPrice < 100000)) {
            imageUrl = "/i4.jpg";
        } else {
            imageUrl = "/i5.jpg";
        }

        const texture = await new Promise((resolve, reject) => {
            loader.load(imageUrl, resolve, undefined, reject);
        });
        scene.rotation.z = Math.PI;
        scene.rotation.y = Math.PI;

        const img = texture.image;
        img.crossOrigin = "anonymous";
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d", { willReadFrequently: true });
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);

        const oldRenderer = document.querySelector("canvas");
        if (oldRenderer) {
            document.body.removeChild(oldRenderer);
        }
        document.body.appendChild(renderer.domElement);

        const minWidth = -img.width / 16;
        const maxWidth = img.width / 1.8;
        const minHeight = -img.height / 16;
        const maxHeight = img.height / 1.8;
        const randomWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
        const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

        figures.forEach((figure) => {
            const x = Math.round(((figure.position.x + figureSize * (figureRadius * 2 + gap)) / (figureSize * 2 * (figureRadius * 2 + gap))) * img.width / 2 + randomWidth);
            const y = Math.round(((figure.position.y + figureSize * (figureRadius * 2 + gap)) / (figureSize * 2 * (figureRadius * 2 + gap))) * img.height / 2 + randomHeight);
            const pixel = context.getImageData(x, y, 1, 1).data;
            const color = new THREE.Color("rgb(" + pixel[0] + "," + pixel[1] + "," + pixel[2] + ")");
            figure.material.color = color;
            new TWEEN.Tween(figure.material)
                .to({ opacity: 1 }, 2000)
                .start();
        });

        new TWEEN.Tween(redMaterial)
            .to({ opacity: 1 }, 2000)
            .start();

        setTimeout(() => {
            figures.forEach((figure) => {
                if (isFall) {
                    figure.velocity = new THREE.Vector3((Math.random() - 0.5) / 4, Math.random() * 1.5, 0);
                }
                new TWEEN.Tween(figure.material)
                    .to({ opacity: 0 }, 2000)
                    .start();
            });
            new TWEEN.Tween(redMaterial)
                .to({ opacity: 0 }, 2000)
                .start();
        }, 4000);

        const animate = () => {
            requestAnimationFrame(animate);
            figures.forEach((figure) => {
                figure.position.add(figure.velocity);
            });
            TWEEN.update();
            renderer.render(scene, camera);
        }
        animate();

        const resetScene = () => {
            figureGeometry.dispose();
            redGeometry.dispose();
            figures.forEach(figure => {
                figure.material.dispose();
                scene.remove(figure);
            });
            texture.dispose();
            scene.remove(redLayer);
        };

        setTimeout(() => {
            resetScene();
        }, 6000);
    } catch (error) {
        console.error("Error:", error);
    }
}

let lastPrice = 0;
let timeoutRef;

const updateBitcoinPrice = async () => {
    let isRunning = true;
    while (isRunning) {
        try {
            const btcPrice = await fetchBitcoinPrice();
            console.log("Bitcoin Price:", btcPrice);

            if (btcPrice !== lastPrice) {
                clearTimeout(timeoutRef);

                if (btcPrice < lastPrice) {
                    timeoutRef = setInterval(() => {
                        setupScene(true);
                    }, 8000);
                } else {
                    timeoutRef = setInterval(() => {
                        setupScene(false);
                    }, 8000);
                }
            }

            lastPrice = btcPrice;
            await new Promise(resolve => setTimeout(resolve, 6000));
        } catch (error) {
            console.error("Error:", error);
            isRunning = false;
        }
    }
};

updateBitcoinPrice();
