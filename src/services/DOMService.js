/**
 * DOM Service - Singleton Pattern
 * Handles all DOM operations
 */

class DOMService {
  constructor() {
    if (DOMService.instance) {
      return DOMService.instance;
    }
    DOMService.instance = this;
  }

  /**
   * Create and append element
   * @param {string} tag - HTML tag name
   * @param {Object} attributes - Element attributes
   * @param {HTMLElement} parent - Parent element
   * @returns {HTMLElement}
   */
  createElement(tag, attributes = {}, parent = null) {
    const element = document.createElement(tag);
    
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'textContent' || key === 'innerHTML') {
        element[key] = value;
      } else {
        element.setAttribute(key, value);
      }
    });

    if (parent) {
      parent.appendChild(element);
    }

    return element;
  }

  /**
   * Query selector with error handling
   * @param {string} selector - CSS selector
   * @param {HTMLElement} context - Context element
   * @returns {HTMLElement|null}
   */
  querySelector(selector, context = document) {
    try {
      return context.querySelector(selector);
    } catch (error) {
      console.warn(`Invalid selector: ${selector}`, error);
      return null;
    }
  }

  /**
   * Query all selectors with error handling
   * @param {string} selector - CSS selector
   * @param {HTMLElement} context - Context element
   * @returns {NodeList|Array}
   */
  querySelectorAll(selector, context = document) {
    try {
      return context.querySelectorAll(selector);
    } catch (error) {
      console.warn(`Invalid selector: ${selector}`, error);
      return [];
    }
  }

  /**
   * Add event listener with automatic cleanup
   * @param {HTMLElement} element - Target element
   * @param {string} event - Event name
   * @param {Function} handler - Event handler
   * @param {Object} options - Event options
   * @returns {Function} - Cleanup function
   */
  addEventListener(element, event, handler, options = {}) {
    if (!element) return () => {};
    
    element.addEventListener(event, handler, options);
    
    return () => element.removeEventListener(event, handler, options);
  }

  /**
   * Check if element is in viewport
   * @param {HTMLElement} element - Target element
   * @returns {boolean}
   */
  isInViewport(element) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  /**
   * Wait for element to exist
   * @param {string} selector - CSS selector
   * @param {number} timeout - Timeout in ms
   * @returns {Promise<HTMLElement>}
   */
  waitForElement(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const element = this.querySelector(selector);
      if (element) return resolve(element);

      const observer = new MutationObserver(() => {
        const element = this.querySelector(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Element ${selector} not found within ${timeout}ms`));
      }, timeout);
    });
  }

  /**
   * Batch DOM operations
   * @param {Function} callback - Operations to perform
   */
  batchUpdate(callback) {
    requestAnimationFrame(() => {
      callback();
    });
  }
}

// Export singleton instance
export default new DOMService();
