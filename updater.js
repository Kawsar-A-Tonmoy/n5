(function () {
    // --- CONFIGURATION ---
    const CONFIG = {
        repo: 'Kawsar-A-Tonmoy/n5',  // Your GitHub repository[cite: 2]
        currentVersion: 'v0.2b'       // Your current installed app version[cite: 2]
    };

    // Helper to compare version tags (handles formats like v0.1X, v0.2a, v1.0.0, etc.)[cite: 2]
    function isNewerVersion(current, latest) {
        // Strip leading 'v' or 'v ' if present[cite: 2]
        const cleanCurrent = current.replace(/^v\s*/i, '').trim();
        const cleanLatest = latest.replace(/^v\s*/i, '').trim();

        // If exact match, not newer[cite: 2]
        if (cleanCurrent === cleanLatest) return false;

        // Compare using standard locale-aware string comparison for alphanumeric tags[cite: 2]
        return cleanLatest.localeCompare(cleanCurrent, undefined, { numeric: true, sensitivity: 'base' }) > 0;
    }

    // Function to inject and display the modern update popup modal[cite: 2]
    function showUpdateModal(release) {
        if (document.getElementById('gh-update-modal')) return;

        const modalHtml = `
            <div id="gh-update-modal" style="
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                background: rgba(0, 0, 0, 0.65); display: flex; justify-content: center;
                align-items: center; z-index: 999999; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            ">
                <div style="
                    background: #ffffff; width: 90%; max-width: 480px; border-radius: 12px;
                    padding: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); position: relative;
                    max-height: 80vh; display: flex; flex-direction: column; color: #1f2328;
                ">
                    <h2 style="margin: 0 0 8px 0; font-size: 1.25rem; color: #0969da;">
                        🚀 Update Available (${release.tag_name})
                    </h2>
                    <p style="margin: 0 0 16px 0; font-size: 0.875rem; color: #57609a;">
                        A new version of <strong>n5</strong> is available for download!
                    </p>
                    
                    <!-- Changelog Box (HTML rendering enabled) -->
                    <div style="
                        background: #f6f8fa; border: 1px solid #d0d7de; border-radius: 8px;
                        padding: 12px; font-size: 0.85rem; overflow-y: auto; flex-grow: 1;
                        white-space: pre-wrap; word-break: break-word; margin-bottom: 20px;
                        max-height: 220px; font-family: monospace; color: #24292f;
                    ">${release.body ? release.body : 'No release notes provided.'}</div>

                    <!-- Action Buttons -->
                    <div style="display: flex; justify-content: flex-end; gap: 10px;">
                        <button id="gh-update-close" style="
                            background: #f3f4f6; border: 1px solid #d0d7de; padding: 8px 16px;
                            border-radius: 6px; cursor: pointer; font-weight: 500; color: #24292f;
                        ">Remind Me Later</button>
                        
                        <a href="${release.html_url}" target="_blank" rel="noopener noreferrer" style="
                            background: #1f883d; color: #ffffff; text-decoration: none; padding: 8px 16px;
                            border-radius: 6px; font-weight: 600; text-align: center; display: inline-block;
                        ">Get ${release.tag_name}</a>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);

        document.getElementById('gh-update-close').addEventListener('click', function() {
            const modal = document.getElementById('gh-update-modal');
            if (modal) modal.remove();
        });
    }

    // Basic HTML sanitizer for security[cite: 2]
    function escapeHtml(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    // Fetch update from GitHub Releases API[cite: 2]
    async function checkForUpdates() {
        if (!navigator.onLine) return; // Ignore if offline[cite: 2]

        try {
            const response = await fetch(`https://api.github.com/repos/${CONFIG.repo}/releases/latest`, {
                headers: { 'Accept': 'application/vnd.github.v3+json' }
            });

            if (!response.ok) return;

            const releaseData = await response.json();
            const latestVersion = releaseData.tag_name;

            // Trigger modal if latest tag is newer (e.g. v0.2a > v0.1X)[cite: 2]
            if (isNewerVersion(CONFIG.currentVersion, latestVersion)) {
                showUpdateModal(releaseData);
            }
        } catch (error) {
            console.debug('GitHub update check failed silently:', error);
        }
    }

    // Auto-run when DOM is fully loaded[cite: 2]
    if (document.readyState === 'complete') {
        checkForUpdates();
    } else {
        window.addEventListener('load', checkForUpdates);
    }
})();