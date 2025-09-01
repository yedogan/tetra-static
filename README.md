# Tetra Danışmanlık — Multi‑Page Static Site (No Node.js)

This package contains a simple multi‑page website that you can deploy on **GitHub Pages**.

## Structure
- `index.html` — Home
- `about.html` — About Us (mission, vision, values)
- `services.html` — Detailed Services
- `resources.html` — Blog/Resources (placeholders)
- `contact.html` — Contact (map placeholder + form)
- `styles.css` — Global styles + brand color variables at the top
- `script.js` — Mobile nav + year
- `assets/logo.png` — Replace with your real logo (same filename)
- `assets/hero.jpg` — Optional hero image (replace)
- `assets/map-placeholder.png` — Map placeholder (replace with Google Maps embed later)
- `CNAME` — Optional: put your custom domain here (single line)

## Apply your brand
- Replace `assets/logo.png` with your real logo (ideally a square PNG or SVG).
- Edit brand colors in `styles.css` under the `:root{}` variables.

## Deploy on GitHub Pages
1. Create a new repo, e.g. `tetra-website`.
2. Upload all these files to the repo **root**.
3. Go to **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main** → Folder: **/** (root) → **Save**.
4. Your site will be live at `https://<username>.github.io/tetra-website/` shortly.

## Custom domain (optional)
- Add your domain under **Settings → Pages → Custom domain**.
- Create DNS `CNAME` to `<username>.github.io`.
- Ensure the repo has a `CNAME` file containing only your domain.
