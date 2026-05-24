// `determineComputedTheme` is defined in theme.js, which is only loaded when
// `site.enable_darkmode` is true. Fall back to "light" so the rest of this
// script (including `window.openSearchModal`) still runs when dark mode is
// disabled — otherwise the search button would do nothing.
let searchTheme = typeof determineComputedTheme === "function" ? determineComputedTheme() : "light";
const ninjaKeys = document.querySelector("ninja-keys");

if (searchTheme === "dark") {
  ninjaKeys.classList.add("dark");
} else {
  ninjaKeys.classList.remove("dark");
}

// Exposed on `window` so the inline `onclick="openSearchModal()"` handler in the
// navbar can find it. Top-level `const`/`let` bindings live in the script scope
// and are not reachable from inline HTML event handlers.
window.openSearchModal = () => {
  // collapse navbarNav if expanded on mobile
  const $navbarNav = $("#navbarNav");
  if ($navbarNav.hasClass("show")) {
    $navbarNav.collapse("hide");
  }
  ninjaKeys.open();
};
