/* -------------------------------------------------------------------------- */
/* Purpose: component_loader.js | Location: Facilities-tasks-tracker/global_engine/component_loader.js */
/* -------------------------------------------------------------------------- */

export async function loadComponent(path, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement) return;

    try {
        // Corrected absolute path from root
        const response = await fetch(`/Facilities-tasks-tracker/${path}`);
        if (!response.ok) throw new Error(`Failed to load: ${path}`);
        
        const html = await response.text();
        targetElement.innerHTML = html;

        // Cleanup existing scripts of this component to prevent re-declaration errors
        const oldScripts = targetElement.querySelectorAll('script.injected-component-script');
        oldScripts.forEach(s => s.remove());

        const scripts = targetElement.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            newScript.type = 'module'; 
            newScript.className = 'injected-component-script';
            
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
