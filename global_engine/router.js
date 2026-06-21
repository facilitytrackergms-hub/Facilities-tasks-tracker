// Purpose: Scalable Router Engine | Location: /global_engine/router.js
import { loadComponent } from './component_loader.js';

async function loadView(viewName) {
    const container = document.getElementById('main-container');
    const folder = viewName.toLowerCase();

    // 1. Load the View
    const response = await fetch(`./${folder}/${folder}card.html`);
    container.innerHTML = await response.text();

    // 2. Find all components on the page and load them automatically
    const components = container.querySelectorAll('[data-component]');
    components.forEach(comp => {
        const componentName = comp.getAttribute('data-component');
        loadComponent(`./${folder}/${componentName}.html`, comp.id, () => {
            // Logic for specific buttons can be handled here or inside the components
            console.log(`Loaded: ${componentName}`);
        });
    });
}
