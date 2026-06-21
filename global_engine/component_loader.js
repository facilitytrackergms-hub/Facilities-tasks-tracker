// Purpose: Component Engine | Location: /global_engine/component_loader.js

export async function loadComponent(componentPath, targetId, callback) {
    const response = await fetch(componentPath);
    const html = await response.text();
    document.getElementById(targetId).innerHTML = html;
    
    // Run any logic (like click events) after the component is loaded
    if (callback) callback();
}
