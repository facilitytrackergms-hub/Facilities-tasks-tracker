/* -------------------------------------------------------------------------- */
/* Purpose: component_loader.js | Location: Facilities-tasks-tracker/global_engine/component_loader.js */
/* -------------------------------------------------------------------------- */

export async function loadComponent(path, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement) return;

    try {
        // Use absolute path from repository root
        const response = await fetch(`/Facilities-tasks-tracker/${path}`);
        if (!response.ok) throw new Error(`Failed to load: ${path}`);
        
        const html = await response.text();
        targetElement.innerHTML = html;

        const scripts = targetElement.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
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

/* -------------------------------------------------------------------------- */
/* Purpose: component_loader.js | Location: Facilities-tasks-tracker/global_engine/component_loader.js */
/* -------------------------------------------------------------------------- */
