// Purpose: Slim Router | Location: /global_engine/router.js
import { loadComponent } from './component_loader.js';

async function loadView(viewName) {
    const container = document.getElementById('main-container');
    const folder = viewName.toLowerCase();

    // 1. Load View
    const response = await fetch(`./${folder}/${folder}card.html`);
    container.innerHTML = await response.text();

    // 2. Load Components (Router doesn't care about the logic inside them)
    const components = container.querySelectorAll('[data-component]');
    components.forEach(comp => {
        loadComponent(`./${folder}/${comp.dataset.component}.html`, comp.id);
    });
}
