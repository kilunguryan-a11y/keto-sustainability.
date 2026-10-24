# Keton Sustainability website

A responsive, static one-page website for Keton Sustainability. It uses HTML, CSS and vanilla JavaScript; there is no framework, build step or paid library.

## Before publishing: the important checks

1. **Contact email is configured.** The website uses `ketonsustainability@gmail.com`. Test the ‘Start a conversation’ button after publishing; it should open a new email addressed to this inbox. If the inbox changes, update `CONTACT_EMAIL` in `script.js`.
2. **Confirm the legal name.** The public website currently says **Keton Sustainability**, not “Keton Sustainability Ltd”. Use “Ltd” only after the name has been approved/registered and you intend to present the registered entity that way.
3. **Confirm that the project description is accurate.** IREOF is described as an early-stage concept, not a completed product or validated solution.
4. **Review every claim.** This site deliberately avoids invented team members, awards, clients, case studies, statistics and claims of completed work.
5. **Check the name and domain.** Confirm company-name availability through Kenya's Business Registration Service, and check the domain before purchasing it. A site going online does not itself register the business or protect the brand.
6. **Fonts.** Google Fonts are loaded remotely. If you prefer to avoid external requests, remove the Google Fonts links in `index.html`; the site will fall back to system fonts.

## Preview locally

Open `index.html` in a current browser. For a local server, from this directory run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish free with GitHub Pages

1. Create a new GitHub repository, e.g. `keton-sustainability-website`.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md` and the `assets` folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. GitHub will show the published URL when deployment finishes. Test it on mobile and desktop.

Alternatively, you can drag the entire `keton-website` folder into a static hosting service such as Netlify Drop. Before using any hosting provider, review its current account, privacy and usage terms.

The contact button uses a `mailto:` link, so it opens the visitor's configured email app. It does not send a message automatically; visitors still review and send their own emails.

## Domain and email

A custom domain is optional for the first version. A free hosting URL is enough to make the project visible while it is being developed. Before spending money, verify the name, decide who controls the domain, and make sure you can maintain the renewal and email costs.

## What's included

- Responsive one-page landing site with mobile navigation
- Clear description of Keton's applied-research mission
- Broad research areas and an evidence-to-solutions methodology
- IREOF shown explicitly as an early-stage concept
- Accessibility features: skip link, visible focus states and reduced-motion support
- Basic search/social metadata and structured data
- No fake client logos, testimonials, impact statistics or invented contact details
