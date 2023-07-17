```javascript
let animationData = {
    hoverEffect: true,
    smoothScroll: true,
    slideInElements: true
};

const animationContainer = document.getElementById('animationContainer');

function applyAnimations() {
    if(animationData.hoverEffect) {
        applyHoverEffect();
    }
    if(animationData.smoothScroll) {
        applySmoothScroll();
    }
    if(animationData.slideInElements) {
        applySlideInElements();
    }
}

function applyHoverEffect() {
    // Code to apply hover effects to elements
}

function applySmoothScroll() {
    // Code to enable smooth scrolling
}

function applySlideInElements() {
    // Code to slide in elements on scroll
}

document.addEventListener('animationUpdate', applyAnimations);

applyAnimations();
```