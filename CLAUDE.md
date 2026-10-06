# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/landing site for **Expreso Tim Car**, an Argentine cargo transport and logistics company (cold chain, door-to-door delivery, 7 branches across Entre Ríos, Santa Fe, Córdoba, Buenos Aires). Spanish-language, single-page Next.js site generated via v0.app.

Not a git repository (no `.git`). There is a `rediseno-web-expreso-tim.zip` at the repo root — likely a reference/export bundle, not part of the build.

## Commands

Package manager is **pnpm** (pinned `pnpm@12.3.4` via `packageManager` field).

```bash
pnpm install     # install dependencies
pnpm dev         # start Next.js dev server
pnpm build       # production build
pnpm start       # run production build
```

There is no lint, test, or typecheck script defined in `package.json`. `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so type errors will not fail `pnpm build`.

### Video asset generation

`scripts/gen-videos.mjs` is a standalone script (not wired into `package.json` scripts) that uses the Vercel AI SDK's `experimental_generateVideo` with a Google Veo model to generate hero background videos into `public/videos/`. Run manually with `node scripts/gen-videos.mjs` if those assets need regenerating; it requires the relevant provider API key to be configured in the environment.

## Architecture

- **App Router, single page**: `app/page.tsx` composes the entire site as a fixed sequence of section components (`SiteHeader`, `Hero`, `CityMarquee`, `Stats`, `WhyUs`, `Network`, `ColdChain`, `News`, `ContactCta`, `SiteFooter`), each imported from `components/`. There are no other routes.
- **`components/ui/`** holds shadcn-style primitives (currently just `button.tsx`); everything else in `components/` is a page-section component named after what it renders.
- **`lib/site.ts`** is the single source of truth for site-wide content used across components: contact info (phone/WhatsApp/email/address), nav links, and the list of cities served. Update copy/contact data here rather than inline in components.
- **`lib/utils.ts`** has the standard shadcn `cn()` class-merging helper.
- **Styling**: Tailwind CSS v4 with `@theme inline` CSS-variable tokens defined in `app/globals.css` (colors, radii), plus `shadcn/tailwind.css` and `tw-animate-css` imports. The theme is dark-only (`color-scheme: dark`, dark navy background `#060a18`, red primary `#e3262f`, blue secondary `#2b4fd8`) — there is no light mode toggle.
- **Fonts**: `Archivo` (variable width axis) and `IBM Plex Mono`, loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables (`--font-archivo`, `--font-plex-mono`).
- **shadcn config** (`components.json`): style `base-nova`, base color `neutral`, no tailwind config file (v4 uses CSS-based config), aliases map `@/components`, `@/lib`, `@/components/ui`, `@/hooks`.
- **Animation**: `motion` (Framer Motion's successor package) is a dependency for section animations.
- **Analytics**: `@vercel/analytics` is mounted in `app/layout.tsx`, gated to `NODE_ENV === 'production'` only.
- Images are unoptimized (`images.unoptimized: true` in `next.config.mjs`), so `next/image` assets are served as-is without Next's image optimization pipeline — consistent with static export/Vercel-less hosting assumptions.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
