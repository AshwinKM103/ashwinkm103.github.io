# Hybrid site — Academic Pages content × Basically Basic design

This site merges **Academic Pages** (content model, collections, academic features)
with the **Basically Basic** visual design (fluid typography, entry cards, intro
hero, off-canvas sidebar). It was produced by re-templating Academic Pages onto
Basically Basic's markup and SCSS, per the four locked decisions:

1. **Full re-template** to Basically Basic markup/classes (`.entry-*`, `.intro-*`, `.layout--*`).
2. **GitHub Actions** deployment (own pinned Jekyll 4.3, no `github-pages` gem / plugin whitelist).
3. **Runtime light/dark toggle preserved** — Basically Basic's skin colors are re-expressed as `--global-*` CSS custom properties.
4. **Lunr search** ported over Academic Pages' collections.

## How to build / preview (verified working — no Docker, no sudo)

The site was built and served **for real** in a conda environment (no Docker, no
root needed). Conda-forge's `ruby` package ships its own headers, and a
conda-forge C/C++ compiler builds the few native-extension gems (`nokogiri`,
`eventmachine`, etc.) — this sidesteps the missing system `ruby-dev`/sudo problem
entirely.

```bash
# One-time environment setup
conda create -n jekyll -c conda-forge ruby=3.2 nodejs=20 -y
conda install -n jekyll -c conda-forge c-compiler cxx-compiler -y

# Each time you work on the site
conda activate jekyll
cd hybrid-site
bundle install          # first run only (or after Gemfile changes); installs into ./vendor/bundle
bundle exec jekyll serve
# -> http://127.0.0.1:4000/
```

`Gemfile.lock` is committed (platform `x86_64-linux`, matching GitHub Actions'
`ubuntu-latest` runners) so both local and CI builds resolve identical gem versions.

Docker also still works if available (`docker compose up`, repo ships a
Dockerfile + devcontainer) — the conda path above is simply the no-Docker/no-sudo
alternative.

CI/CD: `.github/workflows/deploy.yml` builds with `ruby/setup-ruby` (uses the
committed `Gemfile.lock`, cached) and deploys to GitHub Pages. Enable Pages →
"GitHub Actions" in repo settings.

### Verified build results

A real `bundle exec jekyll build` was run end-to-end and confirmed:
- All key pages generate: `/`, `/publications/`, `/talks/`, `/teaching/`, `/portfolio/`,
  `/cv/`, `/cv-json/`, `/year-archive/`, `/sitemap.xml`, `/feed.xml`.
- `assets/css/main.css` compiles (36 KB) with all 13 `--global-*` dark-mode tokens
  and Basically Basic's `.entry`, `.intro`, `.site-title`, `.menu`, `.sidebar` classes present.
- Served locally and fetched with curl: `/publications/` correctly renders
  category-grouped entry cards ("Journal Articles", "Conference Papers"); `/cv/`
  renders all sections (Education, Work, Skills, Publications, Talks, Teaching);
  homepage renders the masthead, site-title, and theme-toggle button.
- One real bug was caught and fixed by this build (not visible via static
  analysis): `assets/css/fontawesome.scss` imports `_sass/vendor/font-awesome/*`,
  which had been deleted along with Academic Pages' old Susy/Breakpoint vendor
  dirs. Restored just the `font-awesome` vendor partials (unrelated to the
  Susy version conflict) — see `_sass/vendor/font-awesome/`.
- Remaining build output is only Sass deprecation warnings (legacy `@import` and
  `/`-division syntax in the vendored Breakpoint/Susy libraries — harmless, fixable
  later with the dart-sass migrator) and two **pre-existing** Academic Pages demo
  content bugs unrelated to this merge: `_posts/2199-01-01-future-post.md` and
  `_posts/2015-08-14-blog-post-4.md` share a permalink, and two `_publications`
  files share a permalink. Fix by editing those files' `permalink:` if you keep
  the demo content.

## Architecture

- **Config:** `_config.yml` (collections, permalinks, plugins, search) + `_data/theme.yml`
  (UI text `t.*`, Google Fonts). `site_theme` selects the SCSS skin.
- **SCSS:** `assets/css/main.scss` → `_sass/theme/_default.scss` (skin + dark-mode bridge)
  → `_sass/basically-basic/*` (vendored, patched) → `_sass/_academic.scss` (publications,
  author profile, theme toggle). The bridge rebinds Basically Basic's color Sass vars to
  `var(--global-*)` **before** the manifest so compile-time `tint()`/`shade()` never runs
  on a `var()`. Nine component call-sites were patched to `--global-*-light/-dark/-alpha`
  tokens (grep `--global-` in `_sass/basically-basic/*`).
- **JS:** `assets/js/theme.js` (Plotly light/dark templates, globals) + `assets/js/main.js`
  (sidebar/search toggle + theme toggle + Plotly/Mermaid). `assets/js/lunr/*` for search.
- **Layouts:** `default` (shell) → `single`/`archive` (content + author sidebar),
  `publications` (category-grouped), `collection-list` (talks/teaching), `posts`
  (blog by year), `publication`/`talk` (item detail), `cv` (JSON Resume), `page`/`post`,
  `collection` (portfolio grid).
- **Author sidebar:** `_includes/author-profile.html` renders `site.author.*` with
  Academicons + Font Awesome (ORCID, Scholar, etc.).
- **SEO:** single source = `jekyll-seo-tag` (via `_includes/head-seo.html`). Feed at
  `/feed.xml`, sitemap at `/sitemap.xml` — both preserved.

## URL preservation

All original permalinks and `redirect_from` entries are unchanged: `/`, `/publications/`,
`/publication/<slug>`, `/talks/`, `/teaching/`, `/portfolio/`, `/cv/`, `/cv-json/`,
`/year-archive/`, `/categories/`, `/tags/`, `/talkmap.html`, `/markdown/`, `/terms/`, post URLs.

## Known follow-ups (polish, not blockers)

- **Syntax-highlight tokens** are compile-time (base16); code blocks read acceptably in
  both themes but aren't runtime-swapped. Bridge `$base00–$base0f` if you want per-theme code colors.
- **CV**: `/cv/` is the Academic Pages markdown CV (auto-lists pubs/talks/teaching);
  `/cv-json/` is the Basically Basic JSON-Resume CV from `_data/cv.json`. Pick one long-term.
- **Blog pagination** is off (kept `/year-archive/`). Enable `jekyll-paginate` + a `home`
  layout page if you want a paginated feed.
- **Greedy-nav removed**; navigation is Basically Basic's off-canvas menu driven by
  `_data/navigation.yml`. jQuery is loaded only by Lunr search (from CDN).
- Unused theme demo includes (`home.html` layout, `posts-*.html`, `page-tags.html`) were
  left in place harmlessly; prune if desired.
- Fill in real content: `_config.yml` author block, `_data/cv.json`, collection Markdown.

See the full architectural report at
`~/.claude/plans/you-are-acting-as-zazzy-cerf.md`.
