// Purpose: Load component into container | Location: /js/main.js
async function loadComponent(url, elementId) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const text = await response.text();
        document.getElementById(elementId).innerHTML = text;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Ensure the code runs after the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('./Views/button.html', 'main-container');
});
