```javascript
// Performance.js

// Function to measure the performance of the website
function measurePerformance() {
    let t0 = performance.now();

    // Call the update functions for each component of the website
    updateRoadmap();
    updatePricing();
    updateForum();
    updateAnimation();
    updateResponsive();

    let t1 = performance.now();
    console.log("Call to update all components took " + (t1 - t0) + " milliseconds.");
}

// Function to measure the performance of a specific function
function measureFunctionPerformance(func) {
    let t0 = performance.now();

    // Call the function
    func();

    let t1 = performance.now();
    console.log("Call to " + func.name + " took " + (t1 - t0) + " milliseconds.");
}

// Export the performance measurement functions
module.exports = {
    measurePerformance,
    measureFunctionPerformance
};
```