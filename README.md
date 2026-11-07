# Thivanka Tharuka — Portfolio

Personal portfolio for Thivanka Tharuka, a Computer Science undergraduate. The site is a Next.js app with a dark, technology-inspired design and editable profile data.

Project copy is based on the public GitHub profile [Thiva123-ab](https://github.com/Thiva123-ab) and the public LinkedIn profile. It does not invent employment, grades, or metrics. Empty fields in `src/data/site.ts` are intentional.

## Stack

- Next.js (App Router) and React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Project structure

```text
src/
  app/
    api/contact/route.ts   Contact delivery
    globals.css            Theme tokens
    icon.tsx               TT favicon
    layout.tsx             Metadata, header, footer
    not-found.tsx          Custom 404
    opengraph-image.tsx    Social preview
    page.tsx               Home page
    robots.ts
    sitemap.ts
  components/              Sections and chrome
  data/site.ts             Profile, skills, projects, education
public/                    Static files, including a future CV
```

## Requirements

- Node.js 20 or newer
- npm

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit the content

All personal content lives in `src/data/site.ts`.

- Set `email` to publish an address and enable the mailto fallback.
- Set `cvUrl` to a file in `public`, for example `"/cv.pdf"`, to show Download CV.
- Add `coursework` and `achievements` arrays when you have real entries.
- Project descriptions can be revised there without changing the layout.

## Contact form

The form does not report success unless a message is actually accepted by [Resend](https://resend.com).

1. Copy `.env.example` to `.env.local`.
2. Set `CONTACT_TO_EMAIL` to your inbox.
3. Set `RESEND_API_KEY`.
4. Set `RESEND_FROM_EMAIL` to a verified sender, for example `Portfolio <noreply@yourdomain.com>`.
5. Restart the dev server.

Until those three values exist, submit returns a clear “not configured” message. If `email` in `src/data/site.ts` is a real address, the browser then opens the visitor’s email app with the message filled in. That path is labeled as a fallback. The site itself still has not sent the mail.

Set `NEXT_PUBLIC_SITE_URL` to the public URL, without a trailing slash, before deploying. It is used for canonical metadata, Open Graph, `robots.txt`, and the sitemap.

## Production build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel, import the repository. Framework preset: Next.js. Root directory: this project.
3. Add the environment variables from `.env.example`.
4. Deploy. Vercel runs `npm run build`.

No extra `vercel.json` is required.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
