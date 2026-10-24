# template01

Landing page template built with React 19, TypeScript, Vite and Tailwind CSS 4.

## Requirements

- Node.js 24 or newer
- pnpm 12.15.0. The version is pinned in `package.json` (`packageManager`), so
  `corepack enable` is enough to get the right one.
- Docker, only if you want to run it in a container

## Scripts

```bash
pnpm install       # install dependencies
pnpm dev           # dev server with hot reload, http://localhost:5173
pnpm build         # type-check and build to dist/
pnpm preview       # serve the production build locally
pnpm test          # run the tests once
pnpm test:watch    # run the tests in watch mode
pnpm lint          # lint with ESLint
```

## Run with Docker

```bash
docker compose up --build
```

Then open <http://localhost:8080>.

```bash
PORT=3000 docker compose up --build   # use another host port
docker compose up --build -d --wait   # run in the background until healthy
docker compose down                   # stop and remove the container
```

The image is built in two stages: Node installs the dependencies and builds the
site, then an unprivileged nginx serves `dist/` on port 8080 inside the
container. Unknown paths fall back to `index.html`, so client-side routes work
on reload. See [Dockerfile](Dockerfile) and [nginx.conf](nginx.conf).

## Notes

- `src/index.css` loads `@atlaskit/css-reset` into its own cascade layer below
  Tailwind's. Tailwind v4 emits layered CSS, and unlayered CSS would otherwise
  override every utility class.
- How the project was set up and migrated is recorded in
  [setup_log.md](setup_log.md).
