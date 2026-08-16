const formLoader = String.raw`
  <div id="flodesk-native-form" aria-live="polite"></div>
  <script>
    (function () {
      var host = document.getElementById("flodesk-native-form");
      var rootSelector = '.ff-6a72fd228bee88b470a87be8[data-ff-el="root"]';
      if (!host) return;

      fetch("/flodesk-embed.html")
        .then(function (response) {
          if (!response.ok) throw new Error("Flodesk form unavailable");
          return response.text();
        })
        .then(function (source) {
          var parsed = new DOMParser().parseFromString(source, "text/html");

          parsed.querySelectorAll('link[rel="stylesheet"]').forEach(function (link) {
            var href = link.getAttribute("href");
            if (!href || document.head.querySelector('link[data-flodesk-asset="' + href + '"]')) return;
            var stylesheet = document.createElement("link");
            stylesheet.rel = "stylesheet";
            stylesheet.href = href;
            stylesheet.dataset.flodeskAsset = href;
            document.head.appendChild(stylesheet);
          });

          var nativeStyle = parsed.querySelector("style");
          if (nativeStyle && !document.head.querySelector("style[data-flodesk-native-styles]")) {
            var style = document.createElement("style");
            style.dataset.flodeskNativeStyles = "true";
            style.textContent = nativeStyle.textContent;
            document.head.appendChild(style);
          }

          var sourceRoot = parsed.querySelector(rootSelector);
          if (!sourceRoot) throw new Error("Flodesk form markup unavailable");
          var mountedRoot = sourceRoot.cloneNode(true);
          host.replaceChildren(mountedRoot);

          var redirectScheduled = false;
          var redirectAfterSuccess = function () {
            if (redirectScheduled) return;
            redirectScheduled = true;
            window.setTimeout(function () { window.location.assign("/thanks"); }, 1800);
          };
          new MutationObserver(function () {
            if (mountedRoot.dataset.ffStage === "success") redirectAfterSuccess();
          }).observe(mountedRoot, { attributes: true, attributeFilter: ["data-ff-stage"] });

          Array.prototype.forEach.call(parsed.querySelectorAll("script"), function (sourceScript, index) {
            if (index === 0 && document.querySelector("script[data-flodesk-bootstrap]")) return;
            var script = document.createElement("script");
            Array.prototype.forEach.call(sourceScript.attributes, function (attribute) {
              script.setAttribute(attribute.name, attribute.value);
            });
            script.dataset.flodeskEmbedScript = String(index);
            if (index === 0) script.dataset.flodeskBootstrap = "true";
            script.text = sourceScript.text;
            document.body.appendChild(script);
          });
        })
        .catch(function () {
          host.innerHTML = '<p class="flodesk-load-error">We couldn\'t load the consultation form. Please refresh and try again.</p>';
        });
    })();
  </script>
`;

export function FlodeskForm() {
  return <div className="flodesk-shell" dangerouslySetInnerHTML={{ __html: formLoader }} />;
}
