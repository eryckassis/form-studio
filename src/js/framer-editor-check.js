/**
 * Framer Editor Bar Check
 * Checks if the Framer editor should be shown and preloads the necessary module
 */

try {
  if (localStorage.get("__framer_force_showing_editorbar_since")) {
    const n = document.createElement("link");
    n.rel = "modulepreload";
    n.href = "https://framer.com/edit/init.mjs";
    document.head.appendChild(n);
  }
} catch (e) {
  // Fail silently if localStorage is not available
}
