/**
 * Animation Service - Singleton Pattern
 * Handles all animation operations
 */

import { ANIMATION_CONFIG, FRAMER_CONFIG } from '../config/constants.js';

class AnimationService {
  constructor() {
    if (AnimationService.instance) {
      return AnimationService.instance;
    }
    this.animator = null;
    this.isInitialized = false;
    AnimationService.instance = this;
  }

  /**
   * Initialize animation service
   * @param {Object} animatorInstance - Animator instance
   */
  initialize(animatorInstance) {
    if (this.isInitialized) {
      console.warn('AnimationService already initialized');
      return;
    }
    
    this.animator = animatorInstance;
    this.isInitialized = true;
  }

  /**
   * Check if animations are disabled
   * @returns {boolean}
   */
  isDisabled() {
    return Boolean(window[FRAMER_CONFIG.DISABLE_FLAG]);
  }

  /**
   * Check if reduced motion is preferred
   * @returns {boolean}
   */
  prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Get appear animation content
   * @returns {Object|null}
   */
  getAppearContent() {
    try {
      const element = document.getElementById(FRAMER_CONFIG.APPEAR_CONTENT_ID);
      return element ? JSON.parse(element.text) : null;
    } catch (error) {
      console.warn('Failed to parse appear animations content', error);
      return null;
    }
  }

  /**
   * Get breakpoints configuration
   * @returns {Object|null}
   */
  getBreakpoints() {
    try {
      const element = document.getElementById(FRAMER_CONFIG.BREAKPOINTS_ID);
      return element ? JSON.parse(element.text) : null;
    } catch (error) {
      console.warn('Failed to parse breakpoints', error);
      return null;
    }
  }

  /**
   * Start appear animations
   * @param {string} appearIdAttr - Appear ID attribute
   * @param {string} transformKey - Transform key
   * @param {boolean} respectReducedMotion - Respect reduced motion preference
   */
  startAppearAnimations(
    appearIdAttr = ANIMATION_CONFIG.APPEAR_ID_ATTR,
    transformKey = ANIMATION_CONFIG.TRANSFORM_KEY,
    respectReducedMotion = ANIMATION_CONFIG.REDUCED_MOTION
  ) {
    if (!this.isInitialized || this.isDisabled()) {
      return;
    }

    const appearContent = this.getAppearContent();
    const breakpoints = this.getBreakpoints();

    if (!appearContent || !breakpoints) {
      return;
    }

    const shouldReduceMotion = respectReducedMotion && this.prefersReducedMotion();

    requestAnimationFrame(() => {
      const startMark = 'framer-appear-start';
      const eventDetail = { detail: { bg: document.hidden } };
      
      performance.mark(startMark, eventDetail);

      this.animator.animateAppearEffects(
        appearContent,
        (selector, properties, defaults) => {
          const element = document.querySelector(selector);
          if (!element) return;

          Object.entries(properties).forEach(([key, value]) => {
            this.animator.startOptimizedAppearAnimation(
              element,
              key,
              value,
              defaults[key]
            );
          });
        },
        appearIdAttr,
        transformKey,
        shouldReduceMotion,
        this.animator.getActiveVariantHash(breakpoints)
      );

      const endMark = 'framer-appear-end';
      performance.mark(endMark, eventDetail);
      performance.measure('framer-appear', {
        start: startMark,
        end: endMark,
        detail: eventDetail.detail,
      });
    });
  }

  /**
   * Create spring animation
   * @param {Object} options - Spring options
   * @returns {Object}
   */
  spring(options = {}) {
    if (!this.isInitialized) {
      console.warn('AnimationService not initialized');
      return null;
    }
    return this.animator.spring(options);
  }
}

// Export singleton instance
export default new AnimationService();
