declare global {
  interface Window {
    tianji?: {
      track: (
        eventName: string,
        eventData?: Record<string, string | number | boolean>
      ) => void;
    };
  }
}

export function trackEvent(
  name: string,
  props?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  window.tianji?.track(name, props);
}
