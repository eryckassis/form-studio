/**
 * Image Sizes Module
 * Handles responsive image sizing
 */

import DOMService from "../services/DOMService.js";
import { throttle } from "../utils/helpers.js";

export class ImageSizes {
  constructor() {
    this.initialized = false;
    this.images = [];
    this.resizeCleanup = null;
  }

  /**
   * Initialize image sizes handling
   */
  init() {
    if (this.initialized) {
      console.warn("ImageSizes already initialized");
      return;
    }

    this.findImages();
    this.updateAllSizes();
    this.setupResizeObserver();

    this.initialized = true;
  }

  /**
   * Find all responsive images
   */
  findImages() {
    this.images = Array.from(
      DOMService.querySelectorAll('img[data-sizes="auto"]')
    );
  }

  /**
   * Update all image sizes
   */
  updateAllSizes() {
    this.images.forEach((img) => this.updateImageSize(img));
  }

  /**
   * Update single image size
   * @param {HTMLImageElement} img
   */
  updateImageSize(img) {
    if (!img || !img.offsetParent) return;

    const width = img.offsetWidth;
    const sizes = this.calculateSizes(width);

    if (img.getAttribute("sizes") !== sizes) {
      img.setAttribute("sizes", sizes);
    }
  }

  /**
   * Calculate sizes attribute value
   * @param {number} width - Image width
   * @returns {string}
   */
  calculateSizes(width) {
    // Round to nearest 100px for better caching
    const rounded = Math.ceil(width / 100) * 100;
    return `${rounded}px`;
  }

  /**
   * Setup resize observer
   */
  setupResizeObserver() {
    const handleResize = throttle(() => {
      this.updateAllSizes();
    }, 250);

    this.resizeCleanup = DOMService.addEventListener(
      window,
      "resize",
      handleResize
    );
  }

  /**
   * Cleanup
   */
  destroy() {
    if (this.resizeCleanup) {
      this.resizeCleanup();
      this.resizeCleanup = null;
    }
    this.images = [];
    this.initialized = false;
  }
}

// Export singleton instance
export default new ImageSizes();
