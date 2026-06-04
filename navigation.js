/* LUX IN TENEBRIS - Dynamic Interactivity */

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const navMenuBtn = document.getElementById("navMenuBtn");
    const navOverlay = document.getElementById("navOverlay");

    // Menu toggles
    if (navMenuBtn && navOverlay) {
        navMenuBtn.addEventListener("click", () => {
            navMenuBtn.classList.toggle("active");
            navOverlay.classList.toggle("active");
            
            // Prevent body scroll when menu is open
            if (navOverlay.classList.contains("active")) {
                body.style.overflow = "hidden";
            } else {
                body.style.overflow = "";
            }
        });

        // Close menu on Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navOverlay.classList.contains("active")) {
                navMenuBtn.classList.remove("active");
                navOverlay.classList.remove("active");
                body.style.overflow = "";
            }
        });
    }

    // Ambient cursor glow
    const cursorGlow = document.createElement("div");
    cursorGlow.className = "cursor-glow";
    body.appendChild(cursorGlow);

    document.addEventListener("mousemove", (e) => {
        cursorGlow.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
        cursorGlow.classList.add("visible");
    });

    document.addEventListener("mouseleave", () => {
        cursorGlow.classList.remove("visible");
    });
});
