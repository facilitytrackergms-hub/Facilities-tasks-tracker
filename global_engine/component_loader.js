// Purpose: Updated Component Loader | Location: /global_engine/component_loader.js
export async function loadComponent(componentPath, targetId) {
    const response = await fetch(componentPath);
    const html = await response.text();
    
    const container = document.getElementById(targetId);
    container.innerHTML = html;

    const scripts = container.querySelectorAll('script');
    scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        // IMPORTANT: Set type="module" to allow imports inside components
        newScript.type = "module"; 
        newScript.innerHTML = oldScript.innerHTML;
        document.body.appendChild(newScript);
    });
}
