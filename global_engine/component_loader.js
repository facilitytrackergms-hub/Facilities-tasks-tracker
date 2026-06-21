// Purpose: Path Correction and Execution Fix | Location: /global_engine/component_loader.js

export async function loadComponent(path, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement) return;

    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to load: ${path}`);
        
        const html = await response.text();
        targetElement.innerHTML = html;

        const scripts = targetElement.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            if (oldScript.src) {
                newScript.src = oldScript.src;
            } else {
                newScript.textContent = oldScript.textContent;
            }
            newScript.async = false;
            document.body.appendChild(newScript);
        });
    } catch (error) {
        console.error(error);
    }
}
