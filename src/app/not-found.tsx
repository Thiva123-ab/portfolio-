import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page is not part of Thivanka Tharuka's portfolio.",
};

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[70vh] items-center px-5 pt-24">
      <div className="mx-auto max-w-xl">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
          This page is not on the site.
        </h1>
        <p className="mt-4 text-muted">
          The link may be outdated. The portfolio itself is still on the home page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
