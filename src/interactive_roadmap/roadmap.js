```javascript
let roadmapData = [
    // This data will be filled with the company's milestones and future plans
];

const roadmapContainer = document.getElementById('roadmapContainer');

function updateRoadmap() {
    roadmapContainer.innerHTML = ''; // Clear the container

    roadmapData.forEach(milestone => {
        let milestoneElement = document.createElement('div');
        milestoneElement.className = 'milestone';

        let title = document.createElement('h3');
        title.textContent = milestone.title;
        milestoneElement.appendChild(title);

        let date = document.createElement('p');
        date.textContent = milestone.date;
        milestoneElement.appendChild(date);

        let description = document.createElement('p');
        description.textContent = milestone.description;
        milestoneElement.appendChild(description);

        milestoneElement.addEventListener('click', () => {
            // Show more details when the milestone is clicked
            let detailElement = document.createElement('div');
            detailElement.className = 'detail';

            let detailTitle = document.createElement('h4');
            detailTitle.textContent = 'Details';
            detailElement.appendChild(detailTitle);

            let detailDescription = document.createElement('p');
            detailDescription.textContent = milestone.details;
            detailElement.appendChild(detailDescription);

            milestoneElement.appendChild(detailElement);
        });

        roadmapContainer.appendChild(milestoneElement);
    });
}

// Listen for the roadmapUpdate message
window.addEventListener('roadmapUpdate', updateRoadmap);

// Call the function to update the roadmap initially
updateRoadmap();
```