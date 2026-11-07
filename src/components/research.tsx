import { researchInterests } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

const steps = [
  {
    title: "Hold a credential",
    text: "A person has some private fact, such as an identity record or an eligibility attribute.",
  },
  {
    title: "Prove one statement",
    text: "A zero-knowledge proof lets them convince a verifier that a required statement is true.",
  },
  {
    title: "Keep the rest private",
    text: "The verifier does not receive the underlying secret, so the check collects less personal data.",
  },
];

export function Research() {
  return (
    <Section id="research">
      <Reveal>
        <SectionHeading
          eyebrow="Research"
          title="Zero-knowledge proofs for digital identity."
          description="This is an academic interest, not a published paper. Nothing here should be read as a completed study or a formal result."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)]">
        <Reveal>
          <article className="rounded-3xl border border-line bg-surface/65 p-6 sm:p-8">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              A zero-knowledge proof lets someone show that a statement is true without
              handing over the secret that makes it true. For digital identity, that
              statement might be “this person is allowed to use this service” rather
              than a copy of their documents. I want to understand that privacy
              property properly: how identity systems can verify a person while
              collecting less data.
            </p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-line p-4">
                  <span className="font-mono text-xs text-accent">0{index + 1}</span>
                  <h3 className="mt-3 font-display text-lg tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="h-full rounded-3xl border border-line bg-surface/40 p-6">
            <h3 className="font-display text-xl tracking-tight">Also exploring</h3>
            <ul className="mt-4 space-y-3">
              {researchInterests.map((interest) => (
                <li
                  key={interest}
                  className="border-b border-line pb-3 text-sm text-foreground last:border-b-0 last:pb-0"
                >
                  {interest}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              These sit next to the identity topic because privacy, security, cloud
              systems, and AI increasingly meet in the same products. They are
              interests, not research outputs.
            </p>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
