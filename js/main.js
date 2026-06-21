// Purpose: Load components into the main container | Location: /js/main.js
async function loadComponent(url, elementId) {
    const response = await fetch(url);
    const text = await response.text();
    document.getElementById(elementId).innerHTML = text;
}

// Example: This will inject a file named 'button.html' into your main-container
loadComponent('components/button.html', 'main-container');
