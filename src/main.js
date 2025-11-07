import "./css/styles.css";
import "./js/framer-editor-check.js";

const style = document.createElement("style");
style.textContent = `
  body {
    color: var(--token-ad9b4115-c8bf-4757-af13-005f7e571fb7, #000);
    font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  }
  
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .hero-title {
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    font-family: 'Newsreader', serif;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    opacity: 0.7;
  }
  
  .about-section,
  .projects-section {
    padding: 8rem 0;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  .body-text {
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.8;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
  }
  
  .project-card {
    cursor: pointer;
  }
  
  .project-image {
    aspect-ratio: 4/3;
    margin-bottom: 1rem;
    background: var(--token-ad9b4115-c8bf-4757-af13-005f7e571fb7);
    opacity: 0.1;
  }
  
  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 1.5rem;
    color: var(--token-99b13e40-5413-47d9-996c-2fa7047e46d6);
  }
  
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

console.log("🎨 NORDIC - Vite Edition");

const scripts = [
  "/src/js/init.js",
  "/src/js/nested-links.js",
  "/src/js/image-sizes.js",
  "/src/js/url-params.js",
  "/src/js/animator.js",
  "/src/js/appear-animations.js",
  "/src/js/locale-cache.js",
];

scripts.forEach((src) => {
  const script = document.createElement("script");
  script.src = src;
  script.type = "module";
  document.body.appendChild(script);
});
