/**
 * URL Parameters Module
 * Handles URL parameter processing
 */

export class URLParams {
  constructor() {
    this.params = null;
  }

  /**
   * Initialize URL parameters
   */
  init() {
    this.params = new URLSearchParams(window.location.search);
  }

  /**
   * Get parameter value
   * @param {string} key - Parameter key
   * @returns {string|null}
   */
  get(key) {
    if (!this.params) this.init();
    return this.params.get(key);
  }

  /**
   * Get all parameters
   * @returns {Object}
   */
  getAll() {
    if (!this.params) this.init();
    const obj = {};
    for (const [key, value] of this.params.entries()) {
      obj[key] = value;
    }
    return obj;
  }

  /**
   * Check if parameter exists
   * @param {string} key - Parameter key
   * @returns {boolean}
   */
  has(key) {
    if (!this.params) this.init();
    return this.params.has(key);
  }

  /**
   * Set parameter (updates URL)
   * @param {string} key - Parameter key
   * @param {string} value - Parameter value
   */
  set(key, value) {
    if (!this.params) this.init();
    this.params.set(key, value);
    this.updateURL();
  }

  /**
   * Delete parameter
   * @param {string} key - Parameter key
   */
  delete(key) {
    if (!this.params) this.init();
    this.params.delete(key);
    this.updateURL();
  }

  /**
   * Update browser URL
   */
  updateURL() {
    const url = new URL(window.location);
    url.search = this.params.toString();
    window.history.replaceState({}, '', url);
  }
}

// Export singleton instance
export default new URLParams();
