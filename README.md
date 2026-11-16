# Kalyani Asane — Mechatronics Engineer Portfolio

A responsive, multi-page React portfolio built with Vite, Tailwind CSS v4, React Router, Framer Motion and Lucide React.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed in the terminal (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. Sign in at https://vercel.com/ and choose **Add New → Project**.
3. Import the repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Click **Deploy**.

The included `vercel.json` enables client-side React Router routes on refresh.

## Personalize before publishing
- Replace `public/profile-placeholder.svg` with your own photo (keep the filename or update the image path in `src/pages/Home.jsx` and `src/pages/About.jsx`).
- Your uploaded CV is included as `public/resume.pdf`. Replace it whenever you update your CV.
- Update LinkedIn and GitHub URLs in `src/data/portfolio.js`.
- Verify all CV details and project descriptions before making the site public.
- Add certificate and achievement images to `public/images/` later and update `src/data/portfolio.js`.

## Notes
The content is initially populated from the supplied CV. The CV lists a B.Tech in Mechatronics (2023–2027), CGPA 8.3, OEN India Ltd. production internship, three projects, JLPT N4, NAT Q5 and an STM Journals publication. No certificate image gallery is populated yet; it is ready for your later uploads.
