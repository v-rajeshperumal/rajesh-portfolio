# Rajesh Perumal — Portfolio

Personal portfolio site, built on the open-source [developerFolio](https://github.com/saadpasta/developerFolio) template by Saad Pasta, licensed under GPL-3.0 (see `LICENSE`).

## Edit the content

Everything on the page comes from `src/portfolio.js`. Change the text there, commit, and push to `main`. The GitHub Action rebuilds and republishes the site in about two minutes.

- **Resume download:** `src/containers/greeting/resume.pdf`. Replace the file to update it.
- **Company and project badges:** `src/assets/images/*Badge.png` and the project images.
- **Colors:** `src/_globalColor.scss`.

## Run it locally

```bash
npm ci
npm start
```

## Hosting

GitHub Pages, deployed by `.github/workflows/deploy.yml`. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
