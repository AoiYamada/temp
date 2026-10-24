# Init

```bash
pnpm create vite template01 --template react-ts
cd template01
pnpm install
pnpm update --interactive --latest
```

Pin the package manager and Node version in `package.json`:

```bash
pnpm pkg set packageManager="pnpm@<version>" engines.node=">=24"
```

# Setup folder structure

[Ref](https://www.youtube.com/watch?v=UUga4-z7b6s)

```bash
mkdir ./src/assets
mkdir ./src/components
mkdir ./src/context
mkdir ./src/data
mkdir ./src/features
mkdir ./src/hooks
mkdir ./src/layouts
mkdir ./src/lib
mkdir ./src/pages
mkdir ./src/services
mkdir ./src/utils
```

# Remove strict mode

in file `./src/index.tsx`. It cause many problems like run useEffect twice when mounting components in React 18

(Vite's template wraps `<App />` in `<StrictMode>` in its entry file, remove it there.)

# Reset browser CSS

```bash
pnpm add @atlaskit/css-reset
```

Import it into a cascade layer below Tailwind's, at the top of `src/index.css`.
Tailwind v4 emits layered CSS, and unlayered CSS beats every layered rule, so a
plain `import "@atlaskit/css-reset"` would override all utility classes.

```css
@layer reset, theme, base, components, utilities;

@import "@atlaskit/css-reset/dist/bundle.css" layer(reset);
@import "tailwindcss";
```

# Install Tailwind CSS

[Ref](https://tailwindcss.com/docs/installation/using-vite)

```bash
pnpm add -D tailwindcss @tailwindcss/vite
```

Register the plugin in `vite.config.ts`:

```ts
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

`src/index.css` only needs `@import "tailwindcss";` (see above). There is no
`tailwind.config.js` or `postcss.config.js` any more, v4 detects the sources
by itself.

# Router

```bash
pnpm add react-router
```

# UI components

```bash
pnpm add @headlessui/react @heroicons/react
```

# Testing

```bash
pnpm add -D vitest @vitest/coverage-v8 jsdom @testing-library/react \
  @testing-library/dom @testing-library/jest-dom @testing-library/user-event
```

Configured in `vite.config.ts` (`test`, including the 80% coverage thresholds)
and `src/setupTests.ts`. `pnpm test:coverage` fails below the thresholds.

# Linting

```bash
pnpm add -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks \
  eslint-plugin-react-refresh globals
```

Configured in `eslint.config.js`.

# Docker

`Dockerfile`, `nginx.conf`, `compose.yaml` and `.dockerignore` at the project
root. `docker compose up --build` serves the site on <http://localhost:8080>.

# Migration: Create React App + yarn to Vite + pnpm

Done in October 2026. Things worth knowing if you hit them again:

- **yarn to pnpm.** `pnpm import` converts `yarn.lock`. pnpm 12 fails the
  install when a dependency has a build script nobody reviewed; deny or allow
  it explicitly with `pnpm approve-builds` (stored in `pnpm-workspace.yaml`).
- **CRA to Vite.** `react-scripts` is deprecated. `index.html` moved from
  `public/` to the root, `%PUBLIC_URL%` became `/`, Jest became Vitest, and the
  CRA `eslintConfig` became `eslint.config.js`.
- **`@types/node` is on 24, not the latest 26.** It follows the Node version
  in `engines` and the Docker image; newer typings describe APIs that Node 24
  does not have.
- **TypeScript is on 6.0, not 7.** `typescript-eslint` does not support the
  native TS 7 yet (its peer range is `typescript <6.1`). Move up when it does.
- **Headless UI 2.** `Menu.Button`/`Menu.Items`/`Menu.Item` became
  `MenuButton`/`MenuItems`/`MenuItem`, and the `active` render prop became
  `focus`.
- **Heroicons 2.** Import from `@heroicons/react/24/outline`; `MenuIcon` is
  `Bars3Icon` and `XIcon` is `XMarkIcon`. Strokes are 1.5 wide instead of 2.
- **react-router-dom was dropped.** From v7 on `react-router` exports
  everything `react-router-dom` used to.
- **Tailwind v4 and the CSS reset.** See "Reset browser CSS". The reset's
  `body` line height and `li + li` margin used to survive Tailwind's preflight
  and no longer do, so `src/index.css` restores both.
- **`@atlaskit/css-reset` 6 to 8** dropped the negative `letter-spacing` on
  headings, so `h1` text is a little wider than before.
- **Vitest without globals** does not register Testing Library's automatic
  cleanup, and jsdom has no `ResizeObserver`, which Headless UI needs. Both are
  handled in `src/setupTests.ts`.
