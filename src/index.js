import './style.css';
import './secondary-style.css';
import images from './images.js';
console.log(images);

document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const thresholds = [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875]; // Percentages of the page height

    function changeBackground() {
        const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

        for (let i = thresholds.length - 1; i >= 0; i--) {
            if (scrollPercentage >= thresholds[i]) {
                body.style.backgroundImage = `url(${images[i]})`;
                break;
            }
        }
    }

    window.addEventListener('scroll', changeBackground);
    changeBackground(); // Initial call to set the background image
});

for (let i = images.length - 1; i >= 0; i--) {
    body.style.backgroundImage = `url(${images[i]})`;
}