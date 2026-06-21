// File: /global_engine/router.js
export async function loadView(viewName) {
    const container = document.getElementById('main-container');
    const folder = viewName.toLowerCase();

    // Use absolute paths from the root
    const response = await fetch(`/${folder}/${folder}card.html`);
    const html = await response.text();
    container.innerHTML = html;

    const components = container.querySelectorAll('[data-component]');
    components.forEach(comp => {
        // Ensure this path matches your folder structure exactly
        loadComponent(`/${folder}/${comp.dataset.component}.html`, comp.id);
    });
}
