async function loadComponent(path, targetElement) {
    try {
        const response = await fetch(`./${path}`);
        if (!response.ok) throw new Error(`Failed to load: ${path}`);
        
        const html = await response.text();
        targetElement.innerHTML = html;

        const scripts = targetElement.querySelectorAll('script');
        scripts.forEach(oldScript => {
            if (oldScript.src) {
                const newScript = document.createElement('script');
                newScript.src = oldScript.src;
                newScript.async = false;
                document.body.appendChild(newScript);
            } else {
                const newScript = document.createElement('script');
                newScript.textContent = `(function() { ${oldScript.textContent} })();`;
                document.body.appendChild(newScript);
            }
        });
    } catch (error) {
        console.error(error);
    }
}
