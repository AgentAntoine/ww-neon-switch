# WeWeb Neon Switch (coded component)

Neon, accessible switch for WeWeb with full **states**, **responsive**, **bindings**, and **workflow events**.

## Dev
```bash
npm init @weweb/component ww-neon-switch -- --type element
# Replace generated files with this repo content
npm i
npm run serve # default https://localhost:8080
```
Open your WeWeb project → **Dev** tab → **Open Dev Editor** → Add local Element (port 8080).

## Import from GitHub
Push to GitHub. In your WeWeb **Workspace → Coded components**, add a source code to your repo, then in the Editor (normal mode), Dev tab → drag your element.

## Properties (ww-config.js)
- **checked** (OnOff, bindable)
- **disabled** (OnOff, bindable)
- **size** (sm|md|lg)
- **onColor**, **offColor**, **knobColor** (Color, `states: true`)
- **glow** (OnOff, `states: true`), **glowIntensity** (Number 0..1, `states: true`)
- **label** (Text, multiLang, bindable)

## Events
Exposed in `triggerEvents` so you can start workflows:
- **change** → payload: `{ checked: boolean }`
- **focus**, **blur**

## Notes
- In **Editor**, we use `update:content` to persist `checked` and keep undo/redo.
- In **Front**, we store state locally (internal mirror) but still emit **trigger-event** for your flows.
- `states: true` let the Editor store per-state values (e.g. different **onColor** on hover). WeWeb merges them so you always receive a simple `content` object depending on the current state.