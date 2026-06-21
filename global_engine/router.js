// Purpose: Main Router | Location: /global_engine/router.js
import { loadComponent } from './component_loader.js';

async function loadView(viewName) {
    const container = document.getElementById('main-container');
    const folder = viewName.toLowerCase();

    // 1. Load the page frame
    const response = await fetch(`${folder}/${folder}card.html`);
    container.innerHTML = await response.text();

    // 2. Load the button using the Component Loader
    loadComponent(`${folder}/add_facilities_button.html`, 'button-container', () => {
        document.getElementById('add-facilities-btn').addEventListener('click', () => {
            alert('Hello World!');
        });
    });
}
