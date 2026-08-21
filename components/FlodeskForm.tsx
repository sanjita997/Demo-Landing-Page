import flodeskEmbed from "../public/flodesk-embed.html?raw";

const themeOverrides = String.raw`
<style>
#consultation-form .flodesk-shell [data-ff-el="root"],
#consultation-form .flodesk-shell [class*="__container"],
#consultation-form .flodesk-shell [class*="__wrapper"],
#consultation-form .flodesk-shell [class*="__form"],
#consultation-form .flodesk-shell [class*="__content"] { background: transparent !important; border: 0 !important; box-shadow: none !important; }
#consultation-form .flodesk-shell [class*="__form"] { padding: 0 !important; }
#consultation-form .flodesk-shell [class*="__title"],
#consultation-form .flodesk-shell [class*="__subtitle"],
#consultation-form .flodesk-shell [class*="__label"] { display: none !important; }
#consultation-form .flodesk-shell [class*="__fields"] { display: grid !important; gap: 12px !important; }
#consultation-form .flodesk-shell [class*="__field"] { margin: 0 !important; }
#consultation-form .flodesk-shell [class*="__control"] { min-height: 52px !important; padding: 14px 15px !important; border: 1px solid var(--line) !important; border-radius: 13px !important; background: var(--bg) !important; color: var(--ink) !important; font-family: var(--font-sans), sans-serif !important; font-size: .95rem !important; }
#consultation-form .flodesk-shell [class*="__control"]::placeholder { color: var(--muted) !important; opacity: 1 !important; }
#consultation-form .flodesk-shell [class*="__button"] { min-height: 58px !important; border: 0 !important; border-radius: 999px !important; background: linear-gradient(135deg, var(--gold-bright), var(--gold)) !important; color: #16120b !important; font-family: var(--font-sans), sans-serif !important; font-weight: 700 !important; }
</style>`;

export function FlodeskForm() {
  return (
    <div
      className="flodesk-shell"
      dangerouslySetInnerHTML={{ __html: flodeskEmbed + themeOverrides }}
    />
  );
}
