/**
 * Claude-style skin for the dsh web GUI.
 *
 * Hand-written bundle in the official __ModuleLoader__ format (no build step):
 * apply() sets the `data-dsh-claude` body attribute (the scope of the whole
 * stylesheet), injects one <style> tag carrying the Claude look, and pins the
 * document title. Its effect disposer retracts every write: body attribute,
 * style tag, title (only while the title is still the skin's own).
 *
 * Palette: Anthropic's official brand tokens (aligned with the community
 * "claude-theme" VS Code theme derived from the official brand palette):
 *   dark bg #141413 · elevated #262624 · deep input #0a0a09
 *   text #faf9f5 · secondary #b0aea5 · muted #6b6a65
 *   accent clay #d97757 · hover #e08a6d
 *   link #6a9bcc · green #788c5d · amber #c08c3a · teal #6a9b91 · lavender #9588a8
 *   light bg #faf9f5 · card #ffffff · border #e8e6dc · text #141413
 *
 * Presentation-only: no services injected, no cordis events, no model requests.
 */
window.__ModuleLoader__.load({
  id: '@pakiknowledge/dsh-client-ui-skin-claude',
  factory: (require) => {
    'use strict'
    var module = { exports: {} }
    var exports = module.exports

    var SKIN_TITLE = 'Claude · DeepSeek Harness'

    var STYLE_ID = 'dsh-skin-claude-style'

    var CSS = [
      /* Claude typography: Anthropic Serif Web Text (serif UI) — free
         fallback Georgia, per the brand's own font stack. Code uses the
         Anthropic Mono Variable stack (ui-monospace fallback). */
      'body[data-dsh-claude] {',
      '  font-family: Georgia, "Anthropic Serif Web Text", "Times New Roman", "Noto Serif SC", serif;',
      '  font-feature-settings: "onum" 1;',
      '}',
      '',
      'body[data-dsh-claude] :is(h1, h2, h3, h4, [class*="headline"]) {',
      '  font-family: Georgia, "Copernicus", "Tiempos Headline", "Times New Roman", serif;',
      '  font-weight: 400;',
      '  letter-spacing: -0.01em;',
      '}',
      '',
      'body[data-dsh-claude] :is(pre, code, kbd, samp, [class*="mono"], [class*="codeBlock"], [class*="CodeBlock"]) {',
      '  font-family: "Anthropic Mono Variable", ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;',
      '  font-size: 0.9em;',
      '}',
      '',
      '/* Claude scrollbars: slim, rounded, low-key */',
      'body[data-dsh-claude] * {',
      '  scrollbar-width: thin;',
      '  scrollbar-color: rgba(48, 48, 46, 0.8) transparent;',
      '}',
      '',
      'body[data-dsh-claude] ::-webkit-scrollbar {',
      '  width: 8px;',
      '  height: 8px;',
      '}',
      '',
      'body[data-dsh-claude] ::-webkit-scrollbar-track {',
      '  background: transparent;',
      '}',
      '',
      'body[data-dsh-claude] ::-webkit-scrollbar-thumb {',
      '  background: rgba(48, 48, 46, 0.8);',
      '  border-radius: 9999px;',
      '}',
      '',
      'body[data-dsh-claude] ::-webkit-scrollbar-thumb:hover {',
      '  background: rgba(107, 106, 101, 0.8);',
      '}',
      '',
      '/* Claude selection: clay-tinted highlight */',
      'body[data-dsh-claude] ::selection {',
      '  background: rgba(217, 119, 87, 0.28);',
      '  color: inherit;',
      '}',
      '',
      '/* Claude focus ring: clay outline on interactive elements */',
      'body[data-dsh-claude] :is(button, input, textarea, select, [role="button"], [role="tab"], [role="treeitem"]) {',
      '  outline: none;',
      '}',
      '',
      'body[data-dsh-claude] :is(button, input, textarea, select, [role="button"], [role="tab"], [role="treeitem"]):focus-visible {',
      '  outline: 2px solid rgba(217, 119, 87, 0.7);',
      '  outline-offset: 1px;',
      '}',
      '',
      '/* Claude buttons: clay primary stays, shape owned by DSH */',
      'body[data-dsh-claude] button[class*="newSession"],',
      'body[data-dsh-claude] [data-slot="sidebar.settings"] > :is(button, [role="button"]) {',
      '  background: #d97757;',
      '  color: #ffffff;',
      '}',
      '',
      '/* Claude badges: full pill (color/soft only, not layout-breaking) */',
      'body[data-dsh-claude] :is([class*="badge"], [class*="Badge"]) {',
      '  border-radius: 9999px;',
      '}',
      '',
      '/* Claude uppercase captions: tracked out */',
      'body[data-dsh-claude] :is([class*="caption"], [class*="sectionLabel"], [class*="label"]) {',
      '  letter-spacing: 0.06em;',
      '}',
      '',
      'body[data-dsh-claude] {',
      '  --dsw-alias-bg-base: #141413;',
      '  --dsw-alias-bg-layer-1: #1d1d1c;',
      '  --dsw-alias-bg-layer-2: #262624;',
      '  --dsw-alias-bg-layer-3: #30302e;',
      '  --dsw-alias-bg-overlay: #262624;',
      '  --dsw-alias-border-l1: #262624;',
      '  --dsw-alias-border-l2-darkmode-thin: #30302e;',
      '  --dsw-alias-border-l2: #30302e;',
      '  --dsw-alias-border-l3: #3a3a38;',
      '  --dsw-alias-brand-primary: #d97757;',
      '  --dsw-alias-brand-text: #faf9f5;',
      '  --dsw-alias-button-elevated-fill: #262624;',
      '  --dsw-alias-button-floating-fill: #262624;',
      '  --dsw-alias-button-floating-hover: #30302e;',
      '  --dsw-alias-button-info-fill: #d97757;',
      '  --dsw-alias-button-info-hover: #e08a6d;',
      '  --dsw-alias-interactive-bg-active: rgba(217, 119, 87, 0.28);',
      '  --dsw-alias-interactive-bg-hover: rgba(255, 255, 255, 0.05);',
      '  --dsw-alias-interactive-bg-hover-solid: #30302e;',
      '  --dsw-alias-label-primary: #faf9f5;',
      '  --dsw-alias-label-primary-bluish: #faf9f5;',
      '  --dsw-alias-label-secondary: #b0aea5;',
      '  --dsw-alias-label-tertiary: #8f8d84;',
      '  --dsw-alias-label-caption: #6b6a65;',
      '  --dsw-alias-state-business-primary: #d97757;',
      '  --dsw-alias-state-business-tertiary: #3a2a22;',
      '  --dsw-shadow-lv2: 0 18px 54px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);',
      '  --dsw-specific-input-major: #0a0a09;',
      '  --dsw-specific-selector: #30302e;',
      '  --dsw-specific-sidebar-fill: #141413;',
      '}',
      '',
      '/* Claude look: warm-black canvas, clay accent, rounded composer */',
      'body[data-dsh-claude] {',
      '  color: #faf9f5;',
      '  background-color: #141413;',
      '}',
      '',
      'body[data-dsh-claude] :is([data-pane="sidebar"], [class*="sidebarCol"]) {',
      '  background: #141413;',
      '  border-right: 1px solid #262624;',
      '}',
      '',
      'body[data-dsh-claude] :is([data-pane="conversation"], [class*="centerCol"]) {',
      '  background: #141413;',
      '}',
      '',
      '/* clay accent on brand / key actions */',
      'body[data-dsh-claude] button[class*="brand"] {',
      '  color: #d97757;',
      '}',
      '',
      'body[data-dsh-claude] button[class*="newSession"],',
      'body[data-dsh-claude] [data-slot="sidebar.settings"] > :is(button, [role="button"]) {',
      '  border-radius: 8px;',
      '  background: #d97757;',
      '  color: #ffffff;',
      '}',
      '',
      '/* links: Anthropic blue */',
      'body[data-dsh-claude] a {',
      '  color: #6a9bcc;',
      '}',
      '',
      '/* light variant: warm cream, follow the native theme switch */',
      'body[data-dsh-claude]:not([data-ds-dark-theme]) {',
      '  color: #141413;',
      '  background-color: #faf9f5;',
      '  --dsw-alias-bg-base: #faf9f5;',
      '  --dsw-alias-bg-layer-1: #f5f4f0;',
      '  --dsw-alias-bg-layer-2: #f0efea;',
      '  --dsw-alias-bg-layer-3: #e8e6dc;',
      '  --dsw-alias-bg-overlay: #ffffff;',
      '  --dsw-alias-border-l1: #e8e6dc;',
      '  --dsw-alias-border-l2: #e8e6dc;',
      '  --dsw-alias-border-l3: #d6d4ca;',
      '  --dsw-alias-brand-primary: #d97757;',
      '  --dsw-alias-button-info-fill: #d97757;',
      '  --dsw-alias-button-info-hover: #c66943;',
      '  --dsw-alias-button-floating-hover: #ffffff;',
      '  --dsw-alias-label-primary: #141413;',
      '  --dsw-alias-label-secondary: #6b6a65;',
      '  --dsw-alias-label-tertiary: #8f8d84;',
      '  --dsw-alias-label-caption: #a6a49b;',
      '  --dsw-specific-input-major: #ffffff;',
      '  --dsw-specific-selector: #f0efea;',
      '  --dsw-specific-sidebar-fill: #faf9f5;',
      '}',
      '',
      'body[data-dsh-claude]:not([data-ds-dark-theme]) :is([data-pane="sidebar"], [class*="sidebarCol"]) {',
      '  background: #faf9f5;',
      '  border-right: 1px solid #e8e6dc;',
      '}',
      '',
      'body[data-dsh-claude]:not([data-ds-dark-theme]) :is([data-pane="conversation"], [class*="centerCol"]) {',
      '  background: #faf9f5;',
      '}',
      '',
      'body[data-dsh-claude]:not([data-ds-dark-theme]) a {',
      '  color: #6a9bcc;',
      '}',
      '',
      '/* light scrollbar/selection adjustments */',
      'body[data-dsh-claude]:not([data-ds-dark-theme]) * {',
      '  scrollbar-color: rgba(166, 164, 155, 0.6) transparent;',
      '}',
      '',
      'body[data-dsh-claude]:not([data-ds-dark-theme]) ::-webkit-scrollbar-thumb {',
      '  background: rgba(166, 164, 155, 0.6);',
      '}',
      '',
      'body[data-dsh-claude]:not([data-ds-dark-theme]) ::-webkit-scrollbar-thumb:hover {',
      '  background: rgba(107, 106, 101, 0.7);',
      '}',
      '',
      'body[data-dsh-claude]:not([data-ds-dark-theme]) ::selection {',
      '  background: rgba(217, 119, 87, 0.22);',
      '}',
      '',
    ].join('\n')

    /**
     * Apply the Claude skin: body attribute, style tag, title.
     * All writes are retracted by the effect disposer on dispose.
     * @param ctx - owning context (the effect lifecycle owns retraction).
     */
    function apply(ctx) {
      var body = document.body
      var originalTitle = document.title
      body.setAttribute('data-dsh-claude', '')

      var style = document.createElement('style')
      style.id = STYLE_ID
      style.dataset.skinChrome = 'claude-style'
      style.textContent = CSS
      document.head.appendChild(style)

      document.title = SKIN_TITLE

      ctx.effect(function () {
        return function () {
          body.removeAttribute('data-dsh-claude')
          var el = document.getElementById(STYLE_ID)
          if (el) el.remove()
          // Only restore when the skin's own title still stands — a session
          // title projected by the shell must not be clobbered by teardown.
          if (document.title === SKIN_TITLE) document.title = originalTitle
        }
      }, 'ui-skin-claude: Claude chrome')
    }

    exports.apply = apply
    return module.exports
  },
})
