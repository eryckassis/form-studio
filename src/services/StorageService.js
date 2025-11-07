/**
 * Storage Service - Singleton Pattern
 * Handles all localStorage operations with error handling
 */

class StorageService {
  constructor() {
    if (StorageService.instance) {
      return StorageService.instance;
    }
    StorageService.instance = this;
  }

  /**
   * Get item from localStorage
   * @param {string} key - Storage key
   * @returns {string|null} - Stored value or null
   */
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn(`Failed to get item from storage: ${key}`, error);
      return null;
    }
  }

  /**
   * Set item in localStorage
   * @param {string} key - Storage key
   * @param {string} value - Value to store
   * @returns {boolean} - Success status
   */
  set(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn(`Failed to set item in storage: ${key}`, error);
      return false;
    }
  }

  /**
   * Remove item from localStorage
   * @param {string} key - Storage key
   * @returns {boolean} - Success status
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Failed to remove item from storage: ${key}`, error);
      return false;
    }
  }

  /**
   * Check if localStorage is available
   * @returns {boolean}
   */
  isAvailable() {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get parsed JSON from storage
   * @param {string} key - Storage key
   * @returns {any|null} - Parsed object or null
   */
  getJSON(key) {
    const value = this.get(key);
    if (!value) return null;
    
    try {
      return JSON.parse(value);
    } catch (error) {
      console.warn(`Failed to parse JSON from storage: ${key}`, error);
      return null;
    }
  }

  /**
   * Set JSON object to storage
   * @param {string} key - Storage key
   * @param {any} value - Object to store
   * @returns {boolean} - Success status
   */
  setJSON(key, value) {
    try {
      const json = JSON.stringify(value);
      return this.set(key, json);
    } catch (error) {
      console.warn(`Failed to stringify JSON for storage: ${key}`, error);
      return false;
    }
  }
}

// Export singleton instance
export default new StorageService();
