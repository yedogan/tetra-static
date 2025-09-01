# Tetra Danışmanlık — Static Site (No Node.js)

This is a plain HTML/CSS/JS version of the Tetra landing page. You can deploy it on **GitHub Pages** without installing Node.js.

## Files
- `index.html` — the page
- `styles.css` — styling
- `script.js` — small JS for mobile nav & year
- `CNAME` (optional) — if you have a custom domain, put it here (single line)

## Deploy to GitHub Pages
1. Create a new GitHub repo, e.g. `tetra-static`.
2. Upload these files (drag & drop or `Add file > Upload files`).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, pick **Deploy from a branch**.
5. Select **main** branch and **/ (root)** folder. Save.
6. Your site will appear at `https://<username>.github.io/tetra-static/` within a minute.

### Custom Domain (optional)
- Add your domain under **Settings → Pages → Custom domain**.
- Create DNS record: `CNAME` → `<username>.github.io`.
- Add a `CNAME` file in the repo root containing only your domain name.

---

Feel free to replace placeholder text/images and adjust colors in `styles.css`.
