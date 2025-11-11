document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const sidebar = document.getElementById("sidebar");

  hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  const actionButtons = document.querySelectorAll(".action-btn");
  actionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      actionButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});