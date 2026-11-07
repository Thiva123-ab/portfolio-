import Image from "next/image";
import { profile } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

const facts = [
  { label: "University", value: profile.university },
  { label: "Degree", value: `${profile.degree} · 2024 – Present` },
  { label: "Based in", value: profile.location },
  { label: "Looking for", value: "Software engineering internship" },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A student who likes building software that has a job to do."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I am a Computer Science undergraduate at NSBM Green University. My
              coursework and own projects sit mostly in software engineering and
              full-stack development: Java and Spring Boot services, MySQL, and
              interfaces in React, TypeScript, HTML, CSS, and JavaScript.
            </p>
            <p>
              I care about whether an application is practical to use and reasonable
              to change later. Recent work includes a pharmacy operations system, a
              flood-relief coordinator, a banking dashboard, a study tool, and a
              Flutter time-management app.
            </p>
            <p>
              I am also studying how artificial intelligence and cloud computing fit
              into ordinary products. I would rather understand a system well than
              claim a technology I have only read about.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-line bg-surface/70 p-6 backdrop-blur">
            <div className="flex items-center gap-4">
              <Image
                src={profile.avatar}
                alt="Thivanka Tharuka"
                width={72}
                height={72}
                className="h-[72px] w-[72px] rounded-2xl object-cover"
              />
              <div>
                <p className="font-display text-lg tracking-tight">{profile.name}</p>
                <p className="mt-1 text-sm text-muted">Undergraduate developer</p>
              </div>
            </div>
            <dl className="mt-6 space-y-4">
              {facts.map((fact) => (
                <div key={fact.label} className="border-t border-line pt-4">
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
