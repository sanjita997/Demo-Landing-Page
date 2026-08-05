"use client";

import { useEffect, useRef, useState } from "react";

const ROOT_SELECTOR = ".ff-6a72fd228bee88b470a87be8[data-ff-el=\"root\"]";

export function FlodeskForm() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let observer: MutationObserver | undefined;
    let delay: number | undefined;
    let redirectScheduled = false;

    async function mountEmbed() {
      try {
        const response = await fetch("/flodesk-embed.html");
        if (!response.ok) throw new Error("The Flodesk embed could not be loaded.");
        const source = await response.text();
        if (cancelled || !hostRef.current) return;

        const documentFragment = new DOMParser().parseFromString(source, "text/html");
        documentFragment.querySelectorAll("link[rel=\"stylesheet\"]").forEach((link) => {
          const href = link.getAttribute("href");
          if (!href || document.head.querySelector(`link[data-flodesk-asset="${href}"]`)) return;
          const stylesheet = document.createElement("link");
          stylesheet.rel = "stylesheet";
          stylesheet.href = href;
          stylesheet.dataset.flodeskAsset = href;
          document.head.appendChild(stylesheet);
        });

        const nativeStyle = documentFragment.querySelector("style");
        if (nativeStyle && !document.head.querySelector("style[data-flodesk-native-styles]")) {
          const style = document.createElement("style");
          style.dataset.flodeskNativeStyles = "true";
          style.textContent = nativeStyle.textContent;
          document.head.appendChild(style);
        }

        const sourceRoot = documentFragment.querySelector(ROOT_SELECTOR);
        if (!sourceRoot) throw new Error("The Flodesk form markup is missing.");
        const mountedRoot = sourceRoot.cloneNode(true) as HTMLElement;
        hostRef.current.replaceChildren(mountedRoot);

        const scheduleRedirect = () => {
          if (redirectScheduled) return;
          redirectScheduled = true;
          delay = window.setTimeout(() => window.location.assign("/thanks"), 1800);
        };

        observer = new MutationObserver(() => {
          if (mountedRoot.dataset.ffStage === "success") scheduleRedirect();
        });
        observer.observe(mountedRoot, { attributes: true, attributeFilter: ["data-ff-stage"] });
        if (mountedRoot.dataset.ffStage === "success") scheduleRedirect();

        const scripts = Array.from(documentFragment.querySelectorAll("script"));
        scripts.forEach((sourceScript, index) => {
          if (index === 0 && document.querySelector("script[data-flodesk-bootstrap]")) return;
          const script = document.createElement("script");
          for (const attribute of Array.from(sourceScript.attributes)) script.setAttribute(attribute.name, attribute.value);
          script.dataset.flodeskEmbedScript = String(index);
          if (index === 0) script.dataset.flodeskBootstrap = "true";
          script.text = sourceScript.text;
          document.body.appendChild(script);
        });
      } catch {
        if (!cancelled) setLoadError(true);
      }
    }

    mountEmbed();
    return () => {
      cancelled = true;
      observer?.disconnect();
      if (delay) window.clearTimeout(delay);
    };
  }, []);

  return (
    <div className="flodesk-shell">
      <div ref={hostRef} aria-live="polite" />
      {loadError && <p className="flodesk-load-error">We couldn&apos;t load the consultation form. Please refresh and try again.</p>}
    </div>
  );
}
