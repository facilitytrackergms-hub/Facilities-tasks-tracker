// Purpose: Fix relative path navigation and module type assignment
// Location: /global_engine/component_loader.js

export async function loadComponent(path, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement) return;

    try {
        // Use '../' to escape the global_engine folder to reach root items
        const response = await fetch(`../${path}`);
        if (!response.ok) throw new Error(`Failed to load: ${path}`);
        
        const html = await response.text();
        targetElement.innerHTML = html;

        const scripts = targetElement.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            // FIX: Explicitly set type to module to allow import/export
            newScript.type = 'module'; 
            
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
