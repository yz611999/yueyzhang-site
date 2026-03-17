# yuhang.build

Personal website for Yuhang Zhang — **builder of agents & ideas**.

Built with [Astro](https://astro.build), Tailwind CSS, and a heavy dose of Doodle Jump aesthetic.

---

## 🚀 Run Locally

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
# → opens at http://localhost:4321

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploy to Vercel

It's a one-click flow:

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. Vercel auto-detects Astro — hit **Deploy**
4. Every push to `main` auto-deploys ✨

For the custom domain `yueyzhang.com`:
- In Vercel: Project → Settings → Domains → add `yueyzhang.com`
- Add the DNS records Vercel shows you at your registrar

---

## ✍️ Add a New Blog Post

1. Create a new file in `src/content/blog/`:

```
src/content/blog/my-post-slug.md
```

2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
description: "A one-sentence description for SEO and previews."
pubDate: 2024-04-01
tags: ["AI", "agents", "VC"]
draft: false
---

Your content here in Markdown...
```

3. The post auto-appears at `/writing/your-post-slug`

**Tips:**
- Set `draft: true` to hide a post while you're working on it
- `pubDate` controls sort order (newest first)
- Tags are free-form — just strings

---

## 🛠 Add a New Project

1. Open `src/data/projects.ts`
2. Add an entry to the `projects` array:

```typescript
{
  title: "My Cool Project",
  description: "What it does, in one or two sentences.",
  tags: ["AI", "TypeScript", "Agents"],
  url: "https://mycoolproject.com",      // optional
  github: "https://github.com/you/repo", // optional
  status: "live",  // 'live' | 'wip' | 'concept'
  emoji: "🤖",
},
```

3. Save — the card appears on `/projects` automatically.

---

## 🎨 Aesthetic Notes

The site uses the **Doodle Jump** visual style:
- **Graph paper** CSS background (light blue grid)
- **Caveat** (Google Fonts) — display/headers
- **Patrick Hand** (Google Fonts) — body text
- Cards have slight CSS rotations for a hand-drawn feel
- Accent colors: `#6BCB77` (green) and `#FF6B35` (orange)

To tweak colors/fonts, edit `src/styles/global.css` and `tailwind.config.mjs`.

---

## 📁 Project Structure

```
yueyzhang-site/
├── public/            # Static assets (favicon, images)
├── src/
│   ├── components/    # Reusable Astro components (doodle SVGs, etc.)
│   ├── content/
│   │   └── blog/      # Markdown blog posts ← add posts here
│   ├── data/
│   │   └── projects.ts  # Projects data ← add projects here
│   ├── layouts/
│   │   └── Base.astro  # Main page layout with nav/footer
│   ├── pages/
│   │   ├── index.astro        # Home page
│   │   ├── projects.astro     # Projects page
│   │   └── writing/
│   │       ├── index.astro    # Blog index
│   │       └── [slug].astro   # Individual post
│   └── styles/
│       └── global.css  # Global styles & Tailwind imports
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```
