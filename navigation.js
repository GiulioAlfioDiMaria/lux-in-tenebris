/* -------------------------------------------------------------
 * LUX IN TENEBRIS - Shared Dynamic Navigation Injection
 * ------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Define the sitemap pages
    const pages = [
        { name: "L'Ingresso nell'Oscurità (Home)", file: "index.html" },
        { name: "Le Radici Storiche", file: "storia-religione.html" },
        { name: "Cento Anni di Possessione", file: "cento-anni-possessione.html" },
        { name: "I Film di Culto", file: "pilastri.html" },
        { name: "Anatomia dell'Archetipo", file: "anatomia-archetipo.html" }
    ];

    // Get current filename to highlight active page
    const currentPath = window.location.pathname;
    const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || "index.html";

    // 2. Build the Header HTML
    const header = document.createElement("header");
    header.className = "header-nav";
    header.innerHTML = `
        <a href="index.html" class="logo">
            <span class="logo-main">LUX IN TENEBRIS</span>
            <span class="logo-sub">Il Fascino Oscuro degli Esorcisti nel Cinema</span>
        </a>
        <button class="nav-menu-btn" id="navMenuBtn" aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    `;

    // 3. Build the Navigation Overlay HTML
    const overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    overlay.id = "navOverlay";

    let linksHtml = "";
    pages.forEach((p, idx) => {
        const isMainCurrent = currentFile === p.file || (currentFile === "" && p.file === "index.html");
        const isSubpageActive = p.file === "pilastri.html" && [
            "il-culto-1973.html",
            "conflitto-scienza-fede.html",
            "dubbio-moderno-rito.html",
            "investigazione-laica.html",
            "blockbuster-pop.html"
        ].includes(currentFile);
        
        const activeClass = (isMainCurrent || isSubpageActive) ? "active-page" : "";
        
        linksHtml += `
            <a href="${p.file}" class="nav-overlay-link ${activeClass}">
                <span class="num">${String(idx + 1).padStart(2, '0')}.</span> ${p.name}
            </a>
        `;
        
        if (p.file === "pilastri.html") {
            const subpages = [
                { name: "L'Esorcista (1973)", file: "il-culto-1973.html" },
                { name: "Emily Rose (2005)", file: "conflitto-scienza-fede.html" },
                { name: "Il Rito (2011)", file: "dubbio-moderno-rito.html" },
                { name: "The Conjuring (2013)", file: "investigazione-laica.html" },
                { name: "I Pop-Blockbuster", file: "blockbuster-pop.html" }
            ];
            
            linksHtml += `<div class="nav-submenu">`;
            subpages.forEach(sub => {
                const isSubActive = currentFile === sub.file;
                const subActiveClass = isSubActive ? "active-sub" : "";
                linksHtml += `
                    <a href="${sub.file}" class="nav-submenu-link ${subActiveClass}">
                        • ${sub.name}
                    </a>
                `;
            });
            linksHtml += `</div>`;
        }
    });

    overlay.innerHTML = `
        <div class="nav-links-container">
            ${linksHtml}
        </div>
    `;

    // 4. Inject into the DOM
    const body = document.body;
    body.insertBefore(overlay, body.firstChild);
    body.insertBefore(header, body.firstChild);

    // 5. Setup Menu Toggle Actions
    const navMenuBtn = document.getElementById("navMenuBtn");
    const navOverlay = document.getElementById("navOverlay");

    navMenuBtn.addEventListener("click", () => {
        navMenuBtn.classList.toggle("active");
        navOverlay.classList.toggle("active");
        
        // Prevent background scrolling when menu is active
        if (navOverlay.classList.contains("active")) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "";
        }
    });

    // Close menu on pressing Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navOverlay.classList.contains("active")) {
            navMenuBtn.classList.remove("active");
            navOverlay.classList.remove("active");
            body.style.overflow = "";
        }
    });

    // 6. Dynamic Footer and YouTube Documentary Injection
    const footerElement = document.querySelector("footer.footer");
    if (footerElement) {
        // Create the YouTube Documentary Section wrapper
        const dynamicFooterWrapper = document.createElement("div");
        dynamicFooterWrapper.className = "dynamic-footer-wrapper";
        dynamicFooterWrapper.innerHTML = `
            <!-- Section A3: Narrative / Overlapping Image Layout -->
            <section class="overlapping-section">
                <div class="overlap-left">
                    <h2 class="overlap-title">GLI ESORCISTI<br>NEL CINEMA</h2>
                    <p class="overlap-desc">
                        Un documentario esclusivo che ripercorre l'evoluzione del cinema di possessione, dalle radici dei classici immortali alle moderne chiavi di lettura laiche e scientifiche.
                    </p>
                    <a href="https://youtu.be/ubKGS2PW_xc" target="_blank" class="watch-video-btn">
                        <svg width="12" height="15" viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7.5L0 15V0L12 7.5Z"/>
                        </svg>
                        Guarda su YouTube
                    </a>
                </div>

                <div class="overlap-right" style="height: auto;">
                    <div style="border: 1px solid var(--grid-color); padding: 10px; background-color: var(--card-bg); box-shadow: 0 0 30px rgba(140, 149, 249, 0.15);">
                        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
                            <iframe src="https://www.youtube.com/embed/ubKGS2PW_xc" title="LUX IN TENEBRIS - Esorcisti nel Cinema" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Standardized Footer -->
            <footer class="footer">
                <span>© 2026 LUX IN TENEBRIS.</span>
                <div class="footer-socials">
                    <a href="#" class="footer-social-link" aria-label="Instagram">IG</a>
                    <a href="#" class="footer-social-link" aria-label="Facebook">FB</a>
                    <a href="#" class="footer-social-link" aria-label="Twitter">TW</a>
                    <a href="#" class="footer-social-link" aria-label="Telegram">TG</a>
                </div>
            </footer>
        `;
        // Replace the existing footer with the new wrapper
        footerElement.replaceWith(dynamicFooterWrapper);
    }

    // 7. Dynamic Ambient Background Glow / Halo Animation
    const cursorGlow = document.createElement("div");
    cursorGlow.className = "cursor-glow";
    document.body.appendChild(cursorGlow);

    document.addEventListener("mousemove", (e) => {
        cursorGlow.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
        cursorGlow.classList.add("visible");
    });

    document.addEventListener("mouseleave", () => {
        cursorGlow.classList.remove("visible");
    });
});
