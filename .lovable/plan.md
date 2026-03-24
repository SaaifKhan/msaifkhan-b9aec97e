

## Deploy Portfolio as GitHub Pages Root Site

To get a clean URL like `saaifkhan.github.io` (similar to `syedammarsohail.github.io`), you need a specific repository setup.

### The Problem

Your current repo is named `work-wand-portfolio`, which gives you `saaifkhan.github.io/work-wand-portfolio/`. To get the root `saaifkhan.github.io` URL, the repository **must** be named exactly `SaaifKhan.github.io` (matching your GitHub username).

### What You Need to Do on GitHub

1. **Create a new repository** on GitHub named **`SaaifKhan.github.io`**
2. In Lovable, disconnect the current GitHub connection and reconnect to this new repo
3. Go to the new repo's **Settings → Pages → Source** and select **GitHub Actions**

### Code Changes I'll Make

1. **`vite.config.ts`** — Change `base` from `"/work-wand-portfolio/"` to `"/"` since the site will be served from the root domain
2. **`.github/workflows/deploy.yml`** — Already configured correctly, no changes needed

### Result

Your portfolio will be live at: **https://saaifkhan.github.io/**

