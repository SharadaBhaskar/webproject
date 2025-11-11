// Elements
const sidebar = document.getElementById('sidebar');
const mobileToggle = document.getElementById('mobileToggle');
const sidebarFull = document.getElementById('sidebarFull');
const closeSidebar = document.getElementById('closeSidebar');
const mainContent = document.getElementById('mainContent');

const notifBtn = document.getElementById('notifBtn');
const modalBackdrop = document.getElementById('modalBackdrop');
const closeModal = document.getElementById('closeModal');
const closeFooter = document.getElementById('closeFooter');
const markRead = document.getElementById('markRead');
const notifBadge = document.getElementById('notifBadge');
const modalBody = document.getElementById('modalBody');

// Helper: detect small screens (where overlay behavior should apply)
function isOverlayMode() {
  return window.innerWidth < 1000;
}

/* ---------- Sidebar toggle (A: hamburger in topbar) ---------- */
mobileToggle?.addEventListener('click', () => {
  // open overlay sidebar on small screens
  if (isOverlayMode()) {
    sidebar.classList.add('open');
    sidebar.setAttribute('aria-hidden', 'false');
    sidebarFull.setAttribute('aria-hidden', 'false');
    // lock body scroll
    document.body.style.overflow = 'hidden';
  } else {
    // on large screens, toggle nothing (desktop always shows full)
    // but we can optionally focus the first nav link
    const firstNav = sidebar.querySelector('.sidebar-nav a');
    if (firstNav) firstNav.focus();
  }
});

// close overlay
closeSidebar?.addEventListener('click', () => {
  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  sidebarFull.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
});

// also close when clicking outside the sidebar-full on overlay mode
document.addEventListener('click', (e) => {
  if (!isOverlayMode()) return;
  if (!sidebar.classList.contains('open')) return;
  const clickedInsideSidebar = e.composedPath().includes(sidebarFull) || e.composedPath().includes(mobileToggle);
  if (!clickedInsideSidebar) {
    sidebar.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'true');
    sidebarFull.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});

/* close sidebar when window resizes to desktop (cleanup) */
window.addEventListener('resize', () => {
  if (!isOverlayMode()) {
    sidebar.classList.remove('open');
    sidebar.setAttribute('aria-hidden', 'false');
    sidebarFull.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = '';
  } else {
    // collapsed mode: hide full content by default
    sidebarFull.setAttribute('aria-hidden', 'true');
  }
});

/* ---------- Notifications modal ---------- */
function openModal() {
  modalBackdrop.classList.add('show');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // staggered entry animation for items
  const items = Array.from(modalBody.querySelectorAll('.notif'));
  items.forEach((it, i) => {
    it.style.opacity = 0;
    it.style.transform = 'translateY(8px)';
    setTimeout(() => {
      it.style.transition = 'opacity .28s ease, transform .28s ease';
      it.style.opacity = 1;
      it.style.transform = 'translateY(0)';
    }, 80 * i);
  });
}

function closeModalFn() {
  modalBackdrop.classList.remove('show');
  modalBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

notifBtn?.addEventListener('click', openModal);
closeModal?.addEventListener('click', closeModalFn);
closeFooter?.addEventListener('click', closeModalFn);

// click outside modal to close
modalBackdrop?.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModalFn();
});

// ESC closes modal or sidebar overlay
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modalBackdrop.classList.contains('show')) closeModalFn();
    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      sidebar.setAttribute('aria-hidden', 'true');
      sidebarFull.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }
});

/* ---------- Mark all read (staggered) ---------- */
markRead?.addEventListener('click', () => {
  const items = Array.from(modalBody.querySelectorAll('.notif'));
  items.forEach((it, i) => {
    setTimeout(() => it.classList.add('read'), i * 100);
  });
  // remove badge
  notifBadge?.remove();
});

/* ---------- Card active animation ---------- */
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('active');
    setTimeout(() => card.classList.remove('active'), 200);
  });
});

/* ---------- Small niceties ---------- */
// set today's date (example)
(function setTodayDate(){
  const d = new Date();
  const opts = { day: '2-digit', month: 'short', year: 'numeric' };
  const el = document.getElementById('todayDate');
  if (el) el.textContent = d.toLocaleDateString('en-GB', opts);
})();