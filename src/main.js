/**import "./css/styles.css";

 * Application Entry Pointimport "./js/framer-editor-check.js";

 * Initializes all modules and services

 */const style = document.createElement("style");

style.textContent = `

import './css/styles.css';  body {

    color: var(--token-ad9b4115-c8bf-4757-af13-005f7e571fb7, #000);

// Services    font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;

import StorageService from './services/StorageService.js';  }

import DOMService from './services/DOMService.js';  

import AnimationService from './services/AnimationService.js';  .container {

    max-width: 1400px;

// Utils    margin: 0 auto;

import animator from './utils/animator.js';    padding: 0 2rem;

  }

// Modules  

import FramerEditor from './modules/FramerEditor.js';  .hero-section {

import AppearAnimations from './modules/AppearAnimations.js';    min-height: 100vh;

import NestedLinks from './modules/NestedLinks.js';    display: flex;

import LocaleCache from './modules/LocaleCache.js';    align-items: center;

import URLParams from './modules/URLParams.js';    justify-content: center;

import ImageSizes from './modules/ImageSizes.js';    text-align: center;

  }

/**  

 * Application class - Facade Pattern  .hero-title {

 */    font-size: 5rem;

class App {    font-weight: 500;

  constructor() {    margin-bottom: 1rem;

    this.initialized = false;    font-family: 'Newsreader', serif;

  }  }

  

  /**  .hero-subtitle {

   * Initialize application    font-size: 1.25rem;

   */    opacity: 0.7;

  async init() {  }

    if (this.initialized) {  

      console.warn('App already initialized');  .about-section,

      return;  .projects-section {

    }    padding: 8rem 0;

  }

    try {  

      // Add custom styles  .grid {

      this.injectStyles();    display: grid;

    grid-template-columns: repeat(2, 1fr);

      // Initialize services    gap: 4rem;

      this.initializeServices();  }

  

      // Initialize modules  .section-title {

      this.initializeModules();    font-size: 2rem;

    margin-bottom: 1.5rem;

      this.initialized = true;  }

      console.log('🎨 NORDIC - Vite Edition (Refactored)');  

    } catch (error) {  .body-text {

      console.error('Failed to initialize app:', error);    font-size: 1.1rem;

    }    line-height: 1.6;

  }    opacity: 0.8;

  }

  /**  

   * Inject custom styles  .projects-grid {

   */    display: grid;

  injectStyles() {    grid-template-columns: repeat(3, 1fr);

    const style = document.createElement('style');    gap: 2rem;

    style.textContent = `    margin-top: 3rem;

      body {  }

        color: var(--token-ad9b4115-c8bf-4757-af13-005f7e571fb7, #000);  

        font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;  .project-card {

      }    cursor: pointer;

        }

      .container {  

        max-width: 1400px;  .project-image {

        margin: 0 auto;    aspect-ratio: 4/3;

        padding: 0 2rem;    margin-bottom: 1rem;

      }    background: var(--token-ad9b4115-c8bf-4757-af13-005f7e571fb7);

          opacity: 0.1;

      .hero-section {  }

        min-height: 100vh;  

        display: flex;  .placeholder {

        align-items: center;    display: flex;

        justify-content: center;    align-items: center;

        text-align: center;    justify-content: center;

      }    height: 100%;

          font-size: 1.5rem;

      .hero-title {    color: var(--token-99b13e40-5413-47d9-996c-2fa7047e46d6);

        font-size: 5rem;  }

        font-weight: 500;  

        margin-bottom: 1rem;  .project-title {

        font-family: 'Newsreader', serif;    font-size: 1.25rem;

      }    margin-bottom: 0.5rem;

        }

      .hero-subtitle {  

        font-size: 1.25rem;  .project-category {

        opacity: 0.7;    opacity: 0.6;

      }  }

        

      .about-section,  .footer {

      .projects-section {    padding: 4rem 0;

        padding: 8rem 0;    text-align: center;

      }    opacity: 0.6;

        }

      .grid {  

        display: grid;  @media (max-width: 809px) {

        grid-template-columns: repeat(2, 1fr);    .hero-title {

        gap: 4rem;      font-size: 3rem;

      }    }

          .grid {

      .section-title {      grid-template-columns: 1fr;

        font-size: 2rem;      gap: 2rem;

        margin-bottom: 1.5rem;    }

      }    .projects-grid {

            grid-template-columns: 1fr;

      .body-text {    }

        font-size: 1.1rem;  }

        line-height: 1.6;  

        opacity: 0.8;  @media (min-width: 810px) and (max-width: 1199px) {

      }    .hero-title {

            font-size: 4rem;

      .projects-grid {    }

        display: grid;    .projects-grid {

        grid-template-columns: repeat(3, 1fr);      grid-template-columns: repeat(2, 1fr);

        gap: 2rem;    }

        margin-top: 3rem;  }

      }`;

      document.head.appendChild(style);

      .project-card {

        cursor: pointer;console.log("🎨 NORDIC - Vite Edition");

      }

      const scripts = [

      .project-image {  "/src/js/init.js",

        aspect-ratio: 4/3;  "/src/js/nested-links.js",

        margin-bottom: 1rem;  "/src/js/image-sizes.js",

        background: var(--token-ad9b4115-c8bf-4757-af13-005f7e571fb7);  "/src/js/url-params.js",

        opacity: 0.1;  "/src/js/animator.js",

      }  "/src/js/appear-animations.js",

        "/src/js/locale-cache.js",

      .placeholder {];

        display: flex;

        align-items: center;scripts.forEach((src) => {

        justify-content: center;  const script = document.createElement("script");

        height: 100%;  script.src = src;

        font-size: 1.5rem;  script.type = "module";

        color: var(--token-99b13e40-5413-47d9-996c-2fa7047e46d6);  document.body.appendChild(script);

      }});

      
      .project-title {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
      
      .project-category {
        opacity: 0.6;
      }
      
      .footer {
        padding: 4rem 0;
        text-align: center;
        opacity: 0.6;
      }
      
      @media (max-width: 809px) {
        .hero-title {
          font-size: 3rem;
        }
        .grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .projects-grid {
          grid-template-columns: 1fr;
        }
      }
      
      @media (min-width: 810px) and (max-width: 1199px) {
        .hero-title {
          font-size: 4rem;
        }
        .projects-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Initialize core services
   */
  initializeServices() {
    // Check if services are available
    if (!StorageService.isAvailable()) {
      console.warn('LocalStorage not available');
    }

    // Initialize animation service with animator
    AnimationService.initialize(animator);
  }

  /**
   * Initialize application modules
   */
  initializeModules() {
    // Initialize in correct order
    FramerEditor.init();
    URLParams.init();
    LocaleCache.init();
    NestedLinks.init();
    ImageSizes.init();
    
    // Initialize animations last (depends on DOM being ready)
    DOMService.batchUpdate(() => {
      AppearAnimations.init();
    });
  }

  /**
   * Cleanup and destroy app
   */
  destroy() {
    NestedLinks.destroy();
    ImageSizes.destroy();
    this.initialized = false;
  }
}

// Create and initialize app instance
const app = new App();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}

// Export for external access if needed
export default app;
