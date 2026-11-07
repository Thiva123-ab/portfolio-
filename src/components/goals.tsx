import { goals } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function Goals() {
  return (
    <Section id="goals">
      <Reveal>
        <SectionHeading
          eyebrow="Direction"
          title="What I want to work on next."
          description="I am looking for an internship where I can contribute, get feedback, and keep learning how reliable software is built."
        />
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {goals.map((goal, index) => (
          <Reveal key={goal.title} delay={index * 0.04}>
            <article className="h-full rounded-3xl border border-line bg-surface/55 p-6">
              <h3 className="font-display text-xl tracking-tight">{goal.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{goal.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
