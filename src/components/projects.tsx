"use client";

import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { projectFilters, projects, type ProjectCategory } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

const tones = [
  "from-violet-500/50 to-blue-500/20",
  "from-blue-500/45 to-violet-500/15",
  "from-fuchsia-500/30 to-blue-500/20",
  "from-indigo-500/45 to-cyan-500/15",
  "from-violet-600/40 to-slate-500/20",
  "from-sky-500/35 to-violet-600/25",
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]["id"]>("all");

  const visible = useMemo(
    () =>
      projects.filter((project) =>
        filter === "all" ? true : project.categories.includes(filter as ProjectCategory),
      ),
    [filter],
  );

  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work from GitHub."
          description="Six public repositories chosen for technical range. Descriptions follow the repository READMEs, source layout, and Thivanka's own public posts. Screenshots and live demos are omitted because none are published."
        />
      </Reveal>

      <div
        className="mt-8 flex gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Filter projects"
      >
        {projectFilters.map((item) => {
          const selected = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(item.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
                selected
                  ? "border-transparent bg-foreground text-background"
                  : "border-line text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.name} delay={Math.min(index * 0.04, 0.16)}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface/65 transition duration-300 hover:-translate-y-1 hover:border-accent/40">
              <div
                className={`relative h-32 bg-gradient-to-br ${tones[index % tones.length]}`}
                aria-hidden="true"
              >
                <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:22px_22px]" />
                <span className="absolute bottom-4 left-5 font-display text-3xl tracking-tight text-white">
                  {project.mark}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl tracking-tight">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-muted">{project.contribution}</p>
                <div className="mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition group-hover:text-accent"
                  >
                    View repository
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted">
        More repositories, including coursework, are on{" "}
        <a
          href="https://github.com/Thiva123-ab"
          className="text-foreground underline decoration-line underline-offset-4 hover:decoration-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}
