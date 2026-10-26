# Legal Research Desk

A statically exported Next.js App Router site. Next.js prerenders the home page and all practice, deed, and legal-resource pages during the build. No Next.js server or API routes are required at runtime.

## Local development

Requires Node.js 20 or newer and npm.

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>.

## Build for GitHub Pages

```bash
npm run build
```

The complete static site is written to `out/`, including an `.html` file for each route. GitHub Actions deploys this folder to GitHub Pages on every push to `main`. Set the repository's Pages source to **GitHub Actions**.

Site-wide components live in `components/layout/`; practice templates and shared page parts live in `components/practice/`; homepage sections live in `components/home/`; browser interactions use hooks under `hooks/`.
