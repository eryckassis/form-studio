/**
 * Utility Helper Functions
 */

/**
 * Clamp value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number}
 */
export const clamp = (value, min, max) => {
  return Math.max(min, Math.min(max, value));
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function}
 */
export const debounce = (func, wait = 250) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in ms
 * @returns {Function}
 */
export const throttle = (func, limit = 250) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Lazy initialization
 * @param {Function} fn - Function to initialize
 * @returns {Function}
 */
export const lazy = (fn) => {
  let result;
  return () => {
    if (result === undefined) {
      result = fn();
    }
    return result;
  };
};

/**
 * Check if value is numeric array
 * @param {any} value - Value to check
 * @returns {boolean}
 */
export const isNumericArray = (value) => {
  return Array.isArray(value) && typeof value[0] === 'number';
};

/**
 * Convert seconds to milliseconds
 * @param {number} seconds
 * @returns {number}
 */
export const toMs = (seconds) => seconds * 1000;

/**
 * Convert milliseconds to seconds
 * @param {number} ms
 * @returns {number}
 */
export const toSeconds = (ms) => ms / 1000;

/**
 * Safe JSON parse
 * @param {string} json - JSON string
 * @param {any} fallback - Fallback value
 * @returns {any}
 */
export const safeJSONParse = (json, fallback = null) => {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
};

/**
 * Check if element matches selector
 * @param {HTMLElement} element
 * @param {string} selector
 * @returns {boolean}
 */
export const matches = (element, selector) => {
  if (!element || !selector) return false;
  return element.matches(selector);
};

/**
 * Get closest ancestor matching selector
 * @param {HTMLElement} element
 * @param {string} selector
 * @returns {HTMLElement|null}
 */
export const closest = (element, selector) => {
  if (!element || !selector) return null;
  return element.closest(selector);
};

/**
 * Noop function
 */
export const noop = () => {};

/**
 * Identity function
 * @param {any} value
 * @returns {any}
 */
export const identity = (value) => value;
