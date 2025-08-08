# WeWeb Neon Switch (coded component)
Neon, accessible switch for WeWeb with full **states**, **bindings**, and **trigger events**.

## Files
- `ww-config.js` — editor config (properties with `states`, `bindable`, `triggerEvents`)
- `src/wwElement.vue` — Vue 3 component used by WeWeb
- `package.json` — optional scripts (not required by WeWeb import)

## How to push to GitHub
1. Create an empty repo on GitHub, e.g. `ww-neon-switch` (public or private; if private, ensure your WeWeb workspace has access).
2. On your machine:
```bash
git clone https://github.com/<you>/ww-neon-switch.git
cd ww-neon-switch
# copy these files into this folder (ww-config.js, src/wwElement.vue, package.json, README.md)
git add .
git commit -m "init: neon switch coded component"
git push origin main  # create main if asked
```
3. In **WeWeb** → Workspace → **Coded components** → **+ Import element** → pick the repo/branch and import.

## Update flow
- Edit files locally, commit, push.
- In WeWeb, open **Coded components**, click the **Commit** column to pull the latest, then **Update** the element in your projects.

## Using the component
- `checked` / `disabled` bindable
- `size`: `sm|md|lg`
- `onColor`, `offColor`, `knobColor`, `glow`, `glowIntensity` support **states** (hover, active, etc.).
- Workflows: listen to **On Change**; payload: `{ checked: boolean }`.
