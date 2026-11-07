import { developingInterests, establishedSkills } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="What shows up in the work."
          description="These are technologies present in public repositories or stated on the public profile. There are no proficiency scores, because a bar would invent a level of expertise."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {establishedSkills.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04}>
            <article className="h-full rounded-3xl border border-line bg-surface/60 p-6">
              <h3 className="font-display text-xl tracking-tight">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{group.source}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-background/50 px-3 py-1 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <article className="mt-4 rounded-3xl border border-dashed border-line bg-surface/40 p-6">
          <h3 className="font-display text-xl tracking-tight">Learning and interests</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
            These are areas I am studying or paying attention to. They are not listed
            as professional experience. AWS appears here because the public credential
            is an introductory training badge. Kubernetes is an interest, not a tool
            I have shipped with.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {developingInterests.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-3 py-1 text-sm text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </Section>
  );
}
