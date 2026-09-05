# Parth Vaidya — Portfolio (React + Vite)

A proper React project (built with Vite) that **automatically deploys to GitHub Pages every
time you push to `main`** using GitHub Actions — no manual "enable Pages" clicking after the
first setup.

## Edit your content

Everything you'd want to change lives in `src/App.jsx`, at the top — `PROFILE`,
`HERO_METRICS`, `STACK`, `EXPERIENCE`, `PROJECTS`, `ACHIEVEMENTS`, `EDUCATION`. Add your real
LinkedIn/GitHub URLs to `PROFILE.linkedin` / `PROFILE.github` — currently blank.

## Run it locally (optional, needs Node.js installed)

```bash
npm install
npm run dev
```
Opens at `http://localhost:5173`.

## Deploy to GitHub (one-time setup, then it's automatic)

1. **Create a new public GitHub repository**, e.g. `portfolio`.

2. **Push this project**:
   ```bash
   cd junior-portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Turn on GitHub Actions deployment** (one-time):
   - Go to your repo → **Settings** → **Pages**
   - Under **Build and deployment → Source**, choose **GitHub Actions**
   - That's it — no branch/folder to pick, the workflow handles it.

4. **Done.** The included workflow (`.github/workflows/deploy.yml`) will now automatically
   build and publish the site on every push to `main`. Watch it run under the repo's
   **Actions** tab. Once it finishes (~1 minute), your site is live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

5. From then on: edit `src/App.jsx`, commit, `git push` — the site updates itself within a
   minute or two. No redeploy steps needed.

## Why this setup

- **Vite + React** — a real build step (`npm run build`), not a CDN hack, so it behaves like a
  standard professional React project (good to show recruiters you know the tooling).
- **GitHub Actions workflow included** — demonstrates the CI/CD skills already on your CV
  (GitHub Actions, Jenkins) applied to your own project.
- **`vite.config.js` uses a relative base path**, so it works regardless of what you name the
  repo — no config editing needed.
