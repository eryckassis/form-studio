/**
 * Nested Links Module
 * Handles nested link navigation with proper event handling
 */

import DOMService from '../services/DOMService.js';

export class NestedLinks {
  constructor() {
    this.initialized = false;
    this.cleanupFunctions = [];
  }

  /**
   * Initialize nested links handler
   */
  init() {
    if (this.initialized) {
      console.warn('NestedLinks already initialized');
      return;
    }

    this.setupLinkHandlers();
    this.initialized = true;
  }

  /**
   * Setup link event handlers
   */
  setupLinkHandlers() {
    const links = DOMService.querySelectorAll('a[href]:not([data-hydrated])');

    links.forEach((link) => {
      const clickCleanup = DOMService.addEventListener(
        link,
        'click',
        this.handleClick.bind(this)
      );
      
      const auxclickCleanup = DOMService.addEventListener(
        link,
        'auxclick',
        this.handleAuxClick.bind(this)
      );
      
      const keydownCleanup = DOMService.addEventListener(
        link,
        'keydown',
        this.handleKeydown.bind(this)
      );

      this.cleanupFunctions.push(clickCleanup, auxclickCleanup, keydownCleanup);
    });
  }

  /**
   * Handle click event
   * @param {Event} event
   */
  handleClick(event) {
    const link = event.currentTarget;
    
    if (link.dataset.hydrated) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const href = link.getAttribute('href');
    if (!href) return;

    const isModifierPressed = this.isModifierKeyPressed(event);
    
    if (isModifierPressed) {
      this.openLink(href, '', '_blank');
      return;
    }

    const rel = link.getAttribute('rel') || '';
    const target = link.getAttribute('target') || '';
    this.openLink(href, rel, target);
  }

  /**
   * Handle auxiliary click (middle mouse button)
   * @param {Event} event
   */
  handleAuxClick(event) {
    const link = event.currentTarget;
    
    if (link.dataset.hydrated) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const href = link.getAttribute('href');
    if (href) {
      this.openLink(href, '', '_blank');
    }
  }

  /**
   * Handle keydown event
   * @param {Event} event
   */
  handleKeydown(event) {
    const link = event.currentTarget;
    
    if (link.dataset.hydrated) {
      return;
    }

    if (event.key !== 'Enter') return;

    event.preventDefault();
    event.stopPropagation();

    const href = link.getAttribute('href');
    if (!href) return;

    const rel = link.getAttribute('rel') || '';
    const target = link.getAttribute('target') || '';
    this.openLink(href, rel, target);
  }

  /**
   * Open link programmatically
   * @param {string} href - URL to open
   * @param {string} rel - Rel attribute
   * @param {string} target - Target attribute
   */
  openLink(href, rel, target) {
    const anchor = document.createElement('a');
    anchor.href = href;
    anchor.target = target;
    anchor.rel = rel;
    
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }

  /**
   * Check if modifier key is pressed
   * @param {Event} event
   * @returns {boolean}
   */
  isModifierKeyPressed(event) {
    const isMac = /Mac|iPod|iPhone|iPad/u.test(navigator.userAgent);
    return isMac ? event.metaKey : event.ctrlKey;
  }

  /**
   * Cleanup all event listeners
   */
  destroy() {
    this.cleanupFunctions.forEach((cleanup) => cleanup());
    this.cleanupFunctions = [];
    this.initialized = false;
  }
}

// Export singleton instance
export default new NestedLinks();
