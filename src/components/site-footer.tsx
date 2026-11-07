import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg tracking-tight">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{profile.tagline}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line transition hover:border-accent/60"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line transition hover:border-accent/60"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="/#home"
            className="rounded-full border border-line px-4 py-2 text-sm text-muted transition hover:text-foreground"
          >
            Back to top
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
