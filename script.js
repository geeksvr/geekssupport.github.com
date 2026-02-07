// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Subtle hover sound support (optional)
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.filter = "brightness(1.15)";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.filter = "brightness(1)";
    });
});
