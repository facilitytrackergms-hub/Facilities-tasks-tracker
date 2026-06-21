/* -------------------------------------------------------------------------- */
/* Purpose: router.js | Location: Facilities-tasks-tracker/global_engine/router.js */
/* -------------------------------------------------------------------------- */

import { loadComponent } from './component_loader.js';

export async function loadView(viewName) {
    const container = document.getElementById('main-container');
    const folder = viewName.toLowerCase();

    // Corrected absolute path from root
    const response = await fetch(`/Facilities-tasks-tracker/${folder}/${folder}card.html`);
    if (!response.ok) throw new Error(`Not Found: /Facilities-tasks-tracker/${folder}/${folder}card.html`);
    
    // Clear container to prevent duplication on route change
    container.innerHTML = '';
    container.innerHTML = await response.text();

    const components = container.querySelectorAll('[data-component]');
    components.forEach(comp => {
        loadComponent(`${folder}/${comp.dataset.component}.html`, comp.id);
    });
}

/* -------------------------------------------------------------------------- */
/* Purpose: router.js | Location: Facilities-tasks-tracker/global_engine/router.js */
/* -------------------------------------------------------------------------- */

