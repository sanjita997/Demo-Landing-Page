import flodeskEmbed from "../public/flodesk-embed.html?raw";

const redirectObserver = String.raw`
<script>
  (function () {
    var root = document.querySelector('.ff-6a72fd228bee88b470a87be8[data-ff-el="root"]');
    if (!root) return;
    var scheduled = false;
    var redirect = function () {
      if (scheduled) return;
      scheduled = true;
      window.setTimeout(function () { window.location.assign('/thanks'); }, 1800);
    };
    new MutationObserver(function () {
      if (root.dataset.ffStage === 'success') redirect();
    }).observe(root, { attributes: true, attributeFilter: ['data-ff-stage'] });
  })();
</script>`;

export function FlodeskForm() {
  return (
    <div
      className="flodesk-shell"
      dangerouslySetInnerHTML={{ __html: flodeskEmbed + redirectObserver }}
    />
  );
}
