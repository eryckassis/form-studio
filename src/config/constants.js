/**
 * Application Constants
 */

export const STORAGE_KEYS = {
  FRAMER_EDITOR_BAR: '__framer_force_showing_editorbar_since',
  LOCALE: 'preferredLocale',
};

export const ANIMATION_CONFIG = {
  APPEAR_ID_ATTR: 'data-framer-appear-id',
  TRANSFORM_KEY: '__Appear_Animation_Transform__',
  REDUCED_MOTION: false,
};

export const FRAMER_CONFIG = {
  EDITOR_INIT_URL: 'https://framer.com/edit/init.mjs',
  BREAKPOINTS_ID: '__framer__breakpoints',
  APPEAR_CONTENT_ID: '__framer__appearAnimationsContent',
  DISABLE_FLAG: '__framer_disable_appear_effects_optimization__',
};

export const SPRING_DEFAULTS = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};

export const EASING = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  circIn: 'cubic-bezier(0, 0.65, 0.55, 1)',
  circOut: 'cubic-bezier(0.55, 0, 1, 0.45)',
  backIn: 'cubic-bezier(0.31, 0.01, 0.66, -0.59)',
  backOut: 'cubic-bezier(0.33, 1.53, 0.69, 0.99)',
};

export const TRANSFORM_PROPERTIES = [
  'transformPerspective',
  'x',
  'y',
  'z',
  'translateX',
  'translateY',
  'translateZ',
  'scale',
  'scaleX',
  'scaleY',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'skew',
  'skewX',
  'skewY',
];
