document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const sidebar = document.getElementById("sidebar");
    const tabs = document.querySelectorAll(".tab");
    const settingsBtn = document.getElementById("settings-btn");
    const alertsBtn = document.getElementById("alerts-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // Hamburger menu toggle
    hamburgerBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        hamburgerBtn.classList.toggle("active");
    });

    // Tab navigation active state
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
        });
    });

    // Settings button click
    settingsBtn.addEventListener("click", () => {
        alert("Settings clicked!");
    });

    // All Alerts button click
    alertsBtn.addEventListener("click", () => {
        alert("All Alerts clicked!");
    });

    // Logout button click
    logoutBtn.addEventListener("click", () => {
        alert("Logout clicked!");
    });
});