/**
 * Appear Animations Module
 * Handles all appear animation logic
 */

import AnimationService from "../services/AnimationService.js";
import { ANIMATION_CONFIG } from "../config/constants.js";

export class AppearAnimations {
  constructor() {
    this.initialized = false;
  }

  /**
   * Initialize appear animations
   * @param {string} appearIdAttr - Appear ID attribute
   * @param {string} transformKey - Transform key
   * @param {boolean} respectReducedMotion - Respect reduced motion
   */
  init(
    appearIdAttr = ANIMATION_CONFIG.APPEAR_ID_ATTR,
    transformKey = ANIMATION_CONFIG.TRANSFORM_KEY,
    respectReducedMotion = ANIMATION_CONFIG.REDUCED_MOTION
  ) {
    if (this.initialized) {
      console.warn("AppearAnimations already initialized");
      return;
    }

    AnimationService.startAppearAnimations(
      appearIdAttr,
      transformKey,
      respectReducedMotion
    );

    this.initialized = true;
  }

  /**
   * Reset animations
   */
  reset() {
    this.initialized = false;
  }
}

// Export singleton instance
export default new AppearAnimations();
