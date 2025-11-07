/**
 * Framer Editor Module
 * Handles Framer editor initialization
 */

import StorageService from '../services/StorageService.js';
import DOMService from '../services/DOMService.js';
import { STORAGE_KEYS, FRAMER_CONFIG } from '../config/constants.js';

export class FramerEditor {
  constructor() {
    this.initialized = false;
  }

  /**
   * Initialize Framer editor
   */
  init() {
    if (this.initialized) {
      console.warn('FramerEditor already initialized');
      return;
    }

    this.loadEditorIfNeeded();
    this.initialized = true;
  }

  /**
   * Check if editor should be loaded
   * @returns {boolean}
   */
  shouldLoadEditor() {
    return Boolean(StorageService.get(STORAGE_KEYS.FRAMER_EDITOR_BAR));
  }

  /**
   * Load editor script if needed
   */
  loadEditorIfNeeded() {
    if (!this.shouldLoadEditor()) {
      return;
    }

    const link = DOMService.createElement(
      'link',
      {
        rel: 'modulepreload',
        href: FRAMER_CONFIG.EDITOR_INIT_URL,
      },
      document.head
    );
  }
}

// Export singleton instance
export default new FramerEditor();
