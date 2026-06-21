// Purpose: Router Engine | Location: /global_engine/router.js
import { loadComponent } from './component_loader.js';

async function loadView(viewName) {
    const container = document.getElementById('main-container');
    const folder = viewName.toLowerCase();

    // Use './' to look in the current project directory
    const response = await fetch(`./${folder}/${folder}card.html`);
    container.innerHTML = await response.text();

    loadComponent(`./${folder}/add_facilities_button.html`, 'button-container', () => {
        const btn = document.getElementById('add-facilities-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                alert('Hello World!');
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => loadView('Home'));
