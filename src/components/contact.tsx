"use client";

import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { FormEvent, useState } from "react";
import { profile } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

type Status =
  | { type: "idle" }
  | { type: "pending" }
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | { type: "fallback"; message: string };

const hasPublicEmail = profile.email.includes("@") && !profile.email.endsWith("@example.com");

export function Contact() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    setStatus({ type: "pending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as { ok?: boolean; message?: string; configured?: boolean };

      if (response.ok && body.ok) {
        form.reset();
        setStatus({
          type: "success",
          message: body.message ?? "Message sent.",
        });
        return;
      }

      if (body.configured === false && hasPublicEmail) {
        const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(
          `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
        )}`;
        window.location.href = mailto;
        setStatus({
          type: "fallback",
          message:
            "Email delivery is not configured on this site, so your email app should open with this message. Nothing has been sent by the website itself.",
        });
        return;
      }

      setStatus({
        type: "error",
        message:
          body.message ??
          "The message was not sent. Email delivery is not configured yet.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "The message could not be sent. Check your connection and try again.",
      });
    }
  }

  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about an internship or a project."
          description="The form sends mail only after Resend is configured. Until then it will say so plainly, and it will open your email app if a public address has been added."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(240px,0.8fr)_minmax(0,1.2fr)]">
        <Reveal>
          <div className="space-y-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface/60 p-4 transition hover:border-accent/50"
            >
              <LinkedinIcon className="h-4 w-4 text-accent" />
              <span>
                <span className="block text-sm font-medium">LinkedIn</span>
                <span className="block text-xs text-muted">thivanka-tharuka</span>
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface/60 p-4 transition hover:border-accent/50"
            >
              <GithubIcon className="h-4 w-4 text-accent" />
              <span>
                <span className="block text-sm font-medium">GitHub</span>
                <span className="block text-xs text-muted">Thiva123-ab</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/60 p-4">
              <Mail className="h-4 w-4 text-accent" />
              <span>
                <span className="block text-sm font-medium">Email</span>
                {hasPublicEmail ? (
                  <a href={`mailto:${profile.email}`} className="block text-xs text-muted hover:text-foreground">
                    {profile.email}
                  </a>
                ) : (
                  <span className="block text-xs text-muted">
                    Not published yet. Add it in src/data/site.ts.
                  </span>
                )}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <form
            onSubmit={onSubmit}
            className="relative rounded-3xl border border-line bg-surface/65 p-6"
            noValidate
          >
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label>
                Company
                <input name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block text-muted">Name</span>
                <input
                  name="name"
                  required
                  maxLength={80}
                  autoComplete="name"
                  className="w-full rounded-xl border border-line bg-background/70 px-3.5 py-2.5 text-foreground outline-none transition focus:border-accent"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-muted">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  autoComplete="email"
                  className="w-full rounded-xl border border-line bg-background/70 px-3.5 py-2.5 text-foreground outline-none transition focus:border-accent"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block text-muted">Subject</span>
              <input
                name="subject"
                required
                maxLength={140}
                className="w-full rounded-xl border border-line bg-background/70 px-3.5 py-2.5 text-foreground outline-none transition focus:border-accent"
              />
            </label>
            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block text-muted">Message</span>
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={6}
                className="w-full resize-y rounded-xl border border-line bg-background/70 px-3.5 py-2.5 text-foreground outline-none transition focus:border-accent"
              />
            </label>
            <button
              type="submit"
              disabled={status.type === "pending"}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status.type === "pending" ? "Sending" : "Submit"}
            </button>
            <p className="mt-4 text-sm leading-relaxed text-muted" role="status" aria-live="polite">
              {status.type === "idle"
                ? "This button does not pretend to deliver mail before the email service is set up."
                : null}
              {status.type === "pending" ? "Sending…" : null}
              {status.type === "success" || status.type === "fallback" ? (
                <span className="text-foreground">{status.message}</span>
              ) : null}
              {status.type === "error" ? <span className="text-rose-400">{status.message}</span> : null}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
