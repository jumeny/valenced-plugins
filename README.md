# Jumeny's Valenced Plugins

Static plugin repository for Valenced, hosted with GitHub Pages.

## Published repository

After enabling GitHub Pages with **GitHub Actions** as the source, add this URL in Valenced:

`https://jumeny.github.io/valenced-plugins/index.json`

## Contents

- `index.json` — repository catalog consumed by Valenced.
- `pool/` — versioned plugin ZIP artifacts.
- `repo.config.json` — repository display metadata.
- `.github/workflows/pages.yml` — publishes the repository to GitHub Pages on pushes to `main`.

See the AMOLED plugin entry in the catalog for the legacy black theme port. Release 1.0.4 keeps modal surfaces pure black while leaving the surrounding dialog backdrop on Valenced's default blur.
