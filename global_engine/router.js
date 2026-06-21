// Purpose: Infinite Scale Router | Location: /global_engine/router.js
import { loadComponent } from './component_loader.js';

export async function loadView(viewName) {
    const container = document.getElementById('main-container');
    const folder = viewName.toLowerCase();

    // 1. Fetch the view (No hard-coding!)
    const response = await fetch(`./${folder}/${folder}card.html`);
    container.innerHTML = await response.text();

    // 2. Auto-load any components inside this view
    const components = container.querySelectorAll('[data-component]');
    components.forEach(comp => {
        loadComponent(`./${folder}/${comp.dataset.component}.html`, comp.id);
    });
}
