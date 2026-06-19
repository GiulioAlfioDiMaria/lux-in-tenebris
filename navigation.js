document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const navMenuBtn = document.getElementById("navMenuBtn");
    const navOverlay = document.getElementById("navOverlay");

    if (navMenuBtn && navOverlay) {
        navMenuBtn.addEventListener("click", () => {
            navMenuBtn.classList.toggle("active");
            navOverlay.classList.toggle("active");
            
            if (navOverlay.classList.contains("active")) {
                body.style.overflow = "hidden";
            } else {
                body.style.overflow = "";
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navOverlay.classList.contains("active")) {
                navMenuBtn.classList.remove("active");
                navOverlay.classList.remove("active");
                body.style.overflow = "";
            }
        });
    }

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

    const cards = document.querySelectorAll(".interactive-card");
    const panes = document.querySelectorAll(".detail-pane");
    const mobileSelector = document.getElementById("mobileDossierSelector");

    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener("click", () => {
                const target = card.getAttribute("data-target");

                cards.forEach(c => c.classList.remove("active"));
                card.classList.add("active");

                if (mobileSelector) {
                    mobileSelector.value = target;
                }

                card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

                panes.forEach(p => {
                    p.classList.remove("active");
                    if (p.id === target) {
                        p.classList.add("active");
                    }
                });
            });
        });
    }

    if (mobileSelector) {
        mobileSelector.addEventListener("change", (e) => {
            const target = e.target.value;

            cards.forEach(c => {
                c.classList.remove("active");
                if (c.getAttribute("data-target") === target) {
                    c.classList.add("active");
                }
            });

            panes.forEach(p => {
                p.classList.remove("active");
                if (p.id === target) {
                    p.classList.add("active");
                }
            });
        });
    }

    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        function updateActiveTimelineItem() {
            const triggerPoint = window.innerHeight * 0.45;
            let closestItem = null;
            let minDistance = Infinity;

            timelineItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                const nodePosition = rect.top + 20;
                const distance = Math.abs(nodePosition - triggerPoint);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestItem = item;
                }
            });

            timelineItems.forEach(item => {
                if (item === closestItem) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveTimelineItem);
        window.addEventListener('resize', updateActiveTimelineItem);

        updateActiveTimelineItem();
        setTimeout(updateActiveTimelineItem, 100);
    }
});
