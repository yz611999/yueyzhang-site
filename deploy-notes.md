# Deploy Notes — yueyzhang.com

Quick checklist to get `yueyzhang.com` live.

---

## ✅ Pre-launch Checklist

### Personalize the content
- [ ] Update social links in `src/layouts/Base.astro` (Twitter/X, GitHub)
- [ ] Add your first real project in `src/data/projects.ts`
- [ ] Consider adding a profile photo — drop it in `public/` and add an `<img>` to the hero in `src/pages/index.astro`

### Domain setup
- [ ] Register `yueyzhang.com` if you haven't (Namecheap, Cloudflare, Google Domains)
- [ ] After Vercel deploy, add the domain in: Vercel → Project → Settings → Domains

### Analytics (optional but nice)
- [ ] Add [Fathom](https://usefathom.com) or [Plausible](https://plausible.io) — both are privacy-respecting and have Astro guides
- Or add Vercel Analytics (free tier): `npx astro add @vercel/analytics`

---

## 🚀 Launch Steps

1. **Push to GitHub**
   ```bash
   cd /path/to/yueyzhang-site
   git init
   git add .
   git commit -m "Initial commit — yuhang.build"
   git remote add origin https://github.com/YOUR_USERNAME/yueyzhang-site.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import the GitHub repo
   - Framework will auto-detect as Astro
   - Hit Deploy — you'll get a `*.vercel.app` URL immediately

3. **Add custom domain**
   - Vercel Dashboard → your project → Settings → Domains
   - Add `yueyzhang.com` and `www.yueyzhang.com`
   - Follow Vercel's DNS instructions for your registrar
   - HTTPS is automatic via Let's Encrypt

---

## 🔧 Future Enhancements (when you're ready)

| Feature | How |
|---|---|
| RSS feed | `npx astro add @astrojs/rss` |
| Sitemap | `npx astro add @astrojs/sitemap` |
| OG image per post | Use `@vercel/og` or `satori` |
| Search | Add [Pagefind](https://pagefind.app) — works with static Astro |
| Comments | Add [Giscus](https://giscus.app) (GitHub Discussions–backed) |
| Newsletter | Connect [Buttondown](https://buttondown.email) or Substack |
| Dark mode | Add CSS custom properties + a toggle component |

---

## 💡 Tips

- **Writing workflow:** Draft in `src/content/blog/` with `draft: true`, flip to `false` when ready to publish
- **Speed:** Astro ships zero JS by default — this site is already blazing fast
- **SEO:** Each page has a `<meta name="description">` — customize per-page via the `description` prop on `<Base>`

---

*Built with Astro + Tailwind. Styled after Doodle Jump. Shipped from SF.*
