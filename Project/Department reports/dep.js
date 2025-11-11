document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const sidebar = document.getElementById("sidebar");
    const tabs = document.querySelectorAll(".tab");
    const aiAssistantBtn = document.getElementById("ai-assistant-btn");

    // Hamburger menu toggle
    hamburgerBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // Tab navigation active state
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
        });
    });

    // AI Assistant button click
    aiAssistantBtn.addEventListener("click", () => {
        alert("AI Assistant activated! How can I help you today?");
        // You can replace this with actual AI assistant logic or modal
    });
});