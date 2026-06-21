// Purpose: Load component | Location: /js/main.js
async function loadComponent(url, elementId) {
    try {
        // Use a leading slash to ensure it looks at the root of your repository
        const response = await fetch('/Views/button.html'); 
        const text = await response.text();
        document.getElementById(elementId).innerHTML = text;
    } catch (error) {
        console.error('Error:', error);
    }
}
