import { useEffect } from "react";

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export function FacebookPixel() {
  const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

  useEffect(() => {
    if (!pixelId) return;

    // Facebook Pixel Code
    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
  }, [pixelId]);

  if (!pixelId) return null;

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}

// Função helper para disparar eventos de conversão
export function trackFBEvent(eventName: string, params?: object) {
  if (window.fbq) {
    window.fbq("track", eventName, params);
  }
}
