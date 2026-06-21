// File: /global_engine/component_loader.js
export async function loadComponent(componentPath, targetId) {
    const response = await fetch(componentPath);
    if (!response.ok) {
        console.error(`Failed to load: ${componentPath}`);
        return;
    }
    const html = await response.text();
    const container = document.getElementById(targetId);
    container.innerHTML = html;

    const scripts = container.querySelectorAll('script');
    scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        newScript.type = "module"; // CRITICAL: This fixes the module import error
        newScript.innerHTML = oldScript.innerHTML;
        document.body.appendChild(newScript);
    });
}
