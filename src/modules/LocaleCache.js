/**
 * Locale Cache Module
 * Handles locale preferences caching
 */

import StorageService from '../services/StorageService.js';
import { STORAGE_KEYS } from '../config/constants.js';

export class LocaleCache {
  constructor() {
    this.initialized = false;
  }

  /**
   * Initialize locale cache
   */
  init() {
    if (this.initialized) {
      console.warn('LocaleCache already initialized');
      return;
    }

    this.cacheLocalePreference();
    this.initialized = true;
  }

  /**
   * Cache locale preference from URL
   */
  cacheLocalePreference() {
    const urlParams = new URLSearchParams(window.location.search);
    const locale = urlParams.get('locale');

    if (locale) {
      this.setLocale(locale);
    }
  }

  /**
   * Get cached locale
   * @returns {string|null}
   */
  getLocale() {
    return StorageService.get(STORAGE_KEYS.LOCALE);
  }

  /**
   * Set locale preference
   * @param {string} locale - Locale code
   * @returns {boolean}
   */
  setLocale(locale) {
    return StorageService.set(STORAGE_KEYS.LOCALE, locale);
  }

  /**
   * Clear locale cache
   * @returns {boolean}
   */
  clearLocale() {
    return StorageService.remove(STORAGE_KEYS.LOCALE);
  }
}

// Export singleton instance
export default new LocaleCache();
