import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { BackToTop } from "@/components/back-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const description =
  "Portfolio of Thivanka Tharuka, a Computer Science undergraduate at NSBM Green University building full-stack software and exploring applied AI and cloud computing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thivanka Tharuka | Computer Science Undergraduate",
    template: "%s | Thivanka Tharuka",
  },
  description,
  applicationName: "Thivanka Tharuka",
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  keywords: [
    "Thivanka Tharuka",
    "Software Engineer",
    "Full-Stack Developer",
    "Computer Science",
    "NSBM Green University",
    "React",
    "Spring Boot",
    "Sri Lanka",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "Thivanka Tharuka | Computer Science Undergraduate",
    description,
    siteName: "Thivanka Tharuka",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thivanka Tharuka | Computer Science Undergraduate",
    description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Computer Science Undergraduate",
  url: siteUrl,
  sameAs: [profile.github, profile.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.university,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Polegoda",
    addressCountry: "LK",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${space.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t;}catch(e){}',
          }}
        />
      </head>
      <body className="min-h-full">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
