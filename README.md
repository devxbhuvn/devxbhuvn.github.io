# Bhuvanesh C

Personal portfolio for [devxbhuvn.github.io](https://devxbhuvn.github.io/). Plain HTML, CSS, and JavaScript. There is no build step, no framework, and no analytics.

## Edit the site

Page copy, links, and metadata live in `index.html`. Change the words there directly.

| File                   | What it controls                                           |
| ---------------------- | ---------------------------------------------------------- |
| `index.html`           | Content, sections, SEO tags, and structured data           |
| `assets/css/style.css` | Layout, type, and the black-and-white theme                |
| `assets/js/script.js`  | Mobile menu, theme toggle, active section, and footer year |
| `robots.txt`           | Crawler rules                                              |
| `sitemap.xml`          | The public page URL                                        |

Images, the résumé, and icons already live under `assets/`:

```
assets/
  css/style.css
  js/script.js
  images/bhuvanesh.webp
  images/og-default.jpg
  files/bhuvanesh-resume.pdf
  favicons/
```

The theme is black and white, set in [Outfit](https://fonts.google.com/specimen/Outfit). A visitor can switch between the dark and light versions; the choice is stored in the browser.

## Format

Indentation is 4 spaces. [Prettier](https://prettier.io/) is set up for local formatting only. It is not part of the published site.

```bash
npm install
npm run format
```

`npm run format:check` reports files that do not match `.prettierrc.json`.

## Deploy on GitHub Pages

Publish this folder as the user site repository `devxbhuvn/devxbhuvn.github.io`.

1. Push `main` to that repository. The site root is this folder, including `index.html` and `assets/`.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.

GitHub Pages serves the site at `https://devxbhuvn.github.io/`. Canonical links, Open Graph tags, `robots.txt`, and `sitemap.xml` already use that address. `.nojekyll` tells Pages to serve the files as static assets and skip Jekyll.

After the first deploy, confirm the portrait, résumé download, favicon, and social preview image.
