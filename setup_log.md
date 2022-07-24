# Init

```bash
npx create-react-app template01 --template typescript
cd template01
rm package-lock.json
yarn
yarn upgrade-interactive --latest
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

# Reset browser CSS

```bash
yarn add @atlaskit/css-reset
```

add

```ts
import "@atlaskit/css-reset";
```

into `src/index.tsx`, before any style sheet

also cleanup `src/index.css`

# Install Tailwind CSS

[Ref](https://tailwindcss.com/docs/guides/create-react-app)

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

edit `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

add these to `./src/index.css``

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Router

```bash
yarn add react-router react-router-dom
```

# UI components

```bash
yarn add @headlessui/react @heroicons/react
```
