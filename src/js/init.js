/**
 * Framer Editor Initialization
 * This script checks for the Framer editor and preloads necessary modules
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
