# miran-jamadar.vercel.app

Personal portfolio of **Miran Jamadar**, Software & AI Engineer (B.Tech CSE (AI), VIT Pune).

The hero portrait is a live WebGL particle system: the headshot is sampled into ~30k GPU particles that assemble on load, scatter away from the cursor and drift apart as you scroll.

## Stack
- React 18 + TypeScript, bundled with Vite
- Three.js with a custom GLSL point shader (`src/three/particlePortrait.ts`)
- Hand-written CSS, no UI framework
- Deployed on Vercel from this repo (`main` → production, other branches → preview)

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## Editing content
All text lives in `src/content.ts`.
