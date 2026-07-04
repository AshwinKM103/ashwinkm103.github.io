# Deploying this site (you never build it by hand)

This repo ships a **GitHub Actions** workflow (`.github/workflows/deploy.yml`) that builds
the site with a pinned Jekyll (from `Gemfile.lock`) and publishes it to **GitHub Pages** on
every push. You edit → commit → push; GitHub builds and deploys automatically. Local
`jekyll serve` is only for previewing.

## One-time setup

1. **Create the GitHub repo.** For a user site served at `https://ashwinkm103.github.io`,
   name it exactly `ashwinkm103.github.io` under the `AshwinKM103` account.

2. **Push this folder** (already a git repo with an initial commit):

   ```bash
   cd hybrid-site
   git remote add origin https://github.com/AshwinKM103/ashwinkm103.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Turn on Pages via Actions:** repo **Settings → Pages → Build and deployment →
   Source = "GitHub Actions"**. (Do this once.)

4. Watch the **Actions** tab — the "Build and deploy site" workflow runs and, when green,
   your site is live at `https://ashwinkm103.github.io`.

## Everyday updates (no manual build)

```bash
# edit content (Markdown / _data / _config.yml), then:
git add -A
git commit -m "Update publications"
git push
```

Each push re-runs the workflow and redeploys in ~1–2 minutes. That's the whole loop.

## Previewing locally (optional)

```bash
conda activate jekyll
bundle exec jekyll serve   # -> http://127.0.0.1:4000/
```

## Before final deployment

- In `_config.yml`, set `accent_picker: false` so the color-swatch picker is hidden and the
  site uses the single fixed accent defined in `_sass/theme/_default.scss` (change the two
  `--global-accent-color` values there to lock a different color).
- If you don't use a custom domain, leave `url: https://ashwinkm103.github.io` as is.

## Alternative hosts (also build-on-push, if you ever leave GitHub Pages)

Point **Netlify** or **Cloudflare Pages** at the same repo with build command
`bundle exec jekyll build` and publish directory `_site`. Same push-to-deploy model.
