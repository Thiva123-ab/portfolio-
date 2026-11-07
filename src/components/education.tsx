import { education, learningNotes } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";

export function Education() {
  return (
    <Section id="education">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title="Academic background."
          description="Dates come from the public LinkedIn profile. Grades, modules, and awards are left blank until they are added in the site data."
        />
      </Reveal>

      <ol className="mt-10 space-y-5">
        {education.map((item, index) => (
          <Reveal key={item.school} delay={index * 0.05}>
            <li className="grid gap-4 rounded-3xl border border-line bg-surface/60 p-6 sm:grid-cols-[160px_minmax(0,1fr)]">
              <p className="font-mono text-sm text-accent">{item.period}</p>
              <div>
                <h3 className="font-display text-2xl tracking-tight">{item.school}</h3>
                <p className="mt-1 text-sm text-foreground">{item.program}</p>
                <p className="mt-1 text-sm text-muted">{item.place}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.detail}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.16em] text-muted">
                      Coursework
                    </h4>
                    {item.coursework.length > 0 ? (
                      <ul className="mt-2 space-y-1 text-sm">
                        {item.coursework.map((course) => (
                          <li key={course}>{course}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm text-muted">
                        Not added yet. Edit coursework in src/data/site.ts.
                      </p>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.16em] text-muted">
                      Academic achievements
                    </h4>
                    {item.achievements.length > 0 ? (
                      <ul className="mt-2 space-y-1 text-sm">
                        {item.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm text-muted">
                        None listed. Add verified results in src/data/site.ts.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <div className="mt-5 rounded-3xl border border-line p-6">
          <h3 className="font-display text-xl tracking-tight">Learning outside class</h3>
          <ul className="mt-4 space-y-4">
            {learningNotes.map((note) => (
              <li key={note.title}>
                <p className="text-sm font-medium text-foreground">
                  {note.href ? (
                    <a
                      href={note.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-line underline-offset-4 hover:decoration-accent"
                    >
                      {note.title}
                    </a>
                  ) : (
                    note.title
                  )}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{note.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
