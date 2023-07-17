```javascript
import { roadmapData } from './interactive_roadmap/roadmap.js';
import { pricingData } from './pricing_calculator/calculator.js';
import { forumData } from './forum/forum.js';
import { animationData } from './animations/animations.js';
import { responsiveData } from './responsiveness/responsive.js';

import { updateRoadmap } from './interactive_roadmap/roadmap.js';
import { updatePricing } from './pricing_calculator/calculator.js';
import { updateForum } from './forum/forum.js';
import { updateAnimation } from './animations/animations.js';
import { updateResponsive } from './responsiveness/responsive.js';

document.addEventListener('DOMContentLoaded', () => {
    updateRoadmap(roadmapData);
    updatePricing(pricingData);
    updateForum(forumData);
    updateAnimation(animationData);
    updateResponsive(responsiveData);
});

window.addEventListener('roadmapUpdate', () => {
    updateRoadmap(roadmapData);
});

window.addEventListener('pricingUpdate', () => {
    updatePricing(pricingData);
});

window.addEventListener('forumUpdate', () => {
    updateForum(forumData);
});

window.addEventListener('animationUpdate', () => {
    updateAnimation(animationData);
});

window.addEventListener('responsiveUpdate', () => {
    updateResponsive(responsiveData);
});
```