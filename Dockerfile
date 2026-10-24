# syntax=docker/dockerfile:1

# ---- Build stage: install deps and compile the static site ----
FROM node:24-alpine AS build

# The pnpm version comes from the `packageManager` field in package.json.
RUN corepack enable

WORKDIR /app

# Install first, against the manifests only, so this layer is cached until
# the dependencies change.
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,target=/pnpm/store \
    pnpm install --frozen-lockfile --store-dir /pnpm/store

COPY . .
RUN pnpm build

# ---- Runtime stage: serve dist/ with unprivileged nginx ----
FROM nginxinc/nginx-unprivileged:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

# Fail the build, not the container, on a bad nginx config.
RUN nginx -t

EXPOSE 8080
