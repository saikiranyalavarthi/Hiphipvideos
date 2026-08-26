// export function trackEvent(eventName, parameters = {}) {
//   if (typeof window === "undefined") return;

//   if (typeof window.gtag !== "function") {
//     console.warn("Google Analytics is not loaded.");
//     return;
//   }

//   window.gtag("event", eventName, parameters);
// }
export function trackEvent(eventName, parameters = {}) {
  if (typeof window === "undefined") {
    console.warn("Window is not available");
    return;
  }

  console.log("Tracking event:", eventName, parameters);

  if (typeof window.gtag !== "function") {
    console.error("Google Analytics gtag is NOT loaded");
    return;
  }

  window.gtag("event", eventName, parameters);

  console.log("Google Analytics event sent:", eventName);
}
