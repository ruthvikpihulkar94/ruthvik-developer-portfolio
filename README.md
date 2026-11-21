# Ruthvik Pihulkar — Developer Portfolio

A responsive dark-theme React portfolio built with Vite, Framer Motion, and Lucide icons.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract this project folder.
2. Open the folder in VS Code.
3. Open the integrated terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## Personalize before publishing
Open `src/App.jsx` and update the `profile` object:
- `github`: your actual GitHub profile URL
- `linkedin`: your actual LinkedIn profile URL

Also:
- Verify the internship date and responsibilities.
- Review every project bullet to ensure it accurately describes your contribution.
- Add project repository links and screenshots when available.
- Replace `public/resume.pdf` with your latest resume PDF.
- If you do not want to publish your phone number or location, remove them from the page.

## Deploy to Vercel
1. Create a GitHub repository and push this project.
2. Sign in to https://vercel.com using GitHub.
3. Select **Add New → Project**.
4. Import the portfolio repository.
5. Vercel should detect Vite automatically.
6. Keep the build command as `npm run build` and output directory as `dist`.
7. Click **Deploy**.

After deployment, Vercel provides a public `*.vercel.app` URL. Future pushes to the connected Git branch trigger new deployments.

## Notes
- This is a frontend-only static portfolio. No backend server is required.
- The contact button uses `mailto:` and opens the visitor's email application.
- External social profile links are hidden until real URLs are added.
