/**
 * Google Analytics Utilities
 *
 * Provides functions for tracking page views and events with Google Analytics.
 */

/**
 * Track a page view
 * @param {string} path - The page path to track
 */
export function trackPageView(path) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-6NDKG07DY6', {
      page_path: path,
    });
  }
}

/**
 * Track a custom event
 * @param {string} eventName - The event name
 * @param {object} eventParams - Additional event parameters
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Track an error event
 * @param {string} description - Error description
 * @param {boolean} fatal - Whether the error is fatal
 */
export function trackError(description, fatal = false) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'exception', {
      description,
      fatal,
    });
  }
}
