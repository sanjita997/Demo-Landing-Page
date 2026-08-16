import flodeskEmbed from "../public/flodesk-embed.html?raw";

const liveFlodeskEmbed = flodeskEmbed.replace(
  "aHR0cHM6Ly9jb25zdWx0LnNhbmppdGFtaHJ6bi5jb20vdGhhbmsteW91",
  "aHR0cHM6Ly90ZWNodmVyc2Utc2Fuaml0YS1haS1tYXJrZXRpbmcuc2Fuaml0YW1ocnpuMy5jaGF0Z3B0LnNpdGUvdGhhbmtz",
);

const redirectObserver = String.raw`
<script>
  (function () {
    var root = document.querySelector('.ff-6a72fd228bee88b470a87be8[data-ff-el="root"]');
    if (!root) return;
    var config = root.querySelector('[data-ff-el="config"]');
    if (config) config.dataset.ffConfig = 'eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IiIsInJlZGlyZWN0VXJsIjoiaHR0cHM6Ly90ZWNodmVyc2Utc2Fuaml0YS1haS1tYXJrZXRpbmcuc2Fuaml0YW1ocnpuMy5jaGF0Z3B0LnNpdGUvdGhhbmtzIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjpmYWxzZSwiZ2RwciI6eyJhY2NlcHRzTWFya2V0aW5nIjpmYWxzZSwicHJpdmFjeVBvbGljeSI6eyJlbmFibGVkIjpmYWxzZSwibWFuZGF0b3J5IjpmYWxzZX19LCJ0cmFja2luZ0NvbmZpZyI6eyJtZXRhUGl4ZWxJZCI6IiIsImNvb2tpZUJhbm5lckVuYWJsZWQiOmZhbHNlLCJnb29nbGVBbmFseXRpY3NJZCI6IiJ9fQ==';
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

const themeOverrides = String.raw`
<style>
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8,
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__container,
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__wrapper,
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__form,
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__content { background: transparent !important; border: 0 !important; box-shadow: none !important; }
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__form { padding: 0 !important; }
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__title,
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__subtitle,
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__label { display: none !important; }
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__fields { display: grid !important; gap: 12px !important; }
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__field { margin: 0 !important; }
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__control { min-height: 52px !important; padding: 14px 15px !important; border: 1px solid var(--line) !important; border-radius: 13px !important; background: var(--bg) !important; color: var(--ink) !important; font-family: var(--font-sans), sans-serif !important; font-size: .95rem !important; }
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__control::placeholder { color: var(--muted) !important; opacity: 1 !important; }
#consultation-form .flodesk-shell [data-ff-el="root"].ff-6a72fd228bee88b470a87be8 .ff-6a72fd228bee88b470a87be8__button { min-height: 58px !important; border: 0 !important; border-radius: 999px !important; background: linear-gradient(135deg, var(--gold-bright), var(--gold)) !important; color: #16120b !important; font-family: var(--font-sans), sans-serif !important; font-weight: 700 !important; }
</style>`;

export function FlodeskForm() {
  return (
    <div
      className="flodesk-shell"
      dangerouslySetInnerHTML={{ __html: liveFlodeskEmbed + themeOverrides + redirectObserver }}
    />
  );
}
