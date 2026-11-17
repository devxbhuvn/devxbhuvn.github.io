(() => {
    "use strict";

    const menu = document.querySelector(".menu-button");
    const nav = document.querySelector("#nav");
    const theme = document.querySelector(".theme-button");
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const storageKey = "portfolio-theme";

    const setTheme = (light) => {
        document.body.classList.toggle("light", light);
        themeMeta?.setAttribute("content", light ? "#f5f5f7" : "#000000");
    };

    const closeMenu = () => {
        nav?.classList.remove("open");
        menu?.setAttribute("aria-expanded", "false");
    };

    menu?.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        menu.setAttribute("aria-expanded", String(open));
    });

    nav?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });

    setTheme(localStorage.getItem(storageKey) === "light");

    theme?.addEventListener("click", () => {
        const light = !document.body.classList.contains("light");
        setTheme(light);
        localStorage.setItem(storageKey, light ? "light" : "dark");
    });

    const year = document.querySelector("#year");
    if (year) year.textContent = String(new Date().getFullYear());

    if (!("IntersectionObserver" in window) || !nav) return;

    const links = [...nav.querySelectorAll("a")];
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                links.forEach((link) => {
                    link.classList.toggle("active", link.hash === `#${entry.target.id}`);
                });
            });
        },
        { rootMargin: "-20% 0px -65% 0px" },
    );

    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
})();
