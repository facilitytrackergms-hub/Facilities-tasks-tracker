// Purpose: Router Engine | Location: /global_engine/router.js
async function loadView(viewName) {
    const container = document.getElementById('main-container');
    const lowerName = viewName.toLowerCase();

    // Fetch HTML
    const htmlResponse = await fetch(`${lowerName}/${lowerName}card.html`);
    container.innerHTML = await htmlResponse.text();

    // Fetch and apply CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${lowerName}/${lowerName}card.css`;
    document.head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', () => loadView('Home'));
