// File Name: router.js
// GitHub Path: Facilities-tasks-tracker/global_engine/router.js

import { loadComponent } from './component_loader.js';

export async function loadView(viewName) {
    const container = document.getElementById('main-container');
    const folder = viewName.toLowerCase();

    const response = await fetch(`../${folder}/${folder}card.html`);
    if (!response.ok) throw new Error(`Not Found: ../${folder}/${folder}card.html`);
    
    container.innerHTML = await response.text();

    const components = container.querySelectorAll('[data-component]');
    components.forEach(comp => {
        loadComponent(`${folder}/${comp.dataset.component}.html`, comp.id);
    });
}
