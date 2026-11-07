"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/site";
import { HeroVisual } from "@/components/hero-visual";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:pb-28">
        <div>
          <motion.p
            {...rise}
            className="text-sm font-medium text-accent"
          >
            Hi, I&apos;m {profile.name}
          </motion.p>
          <motion.h1
            {...rise}
            transition={{ ...rise.transition, delay: 0.08 }}
            className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>{" "}
            Through Code.
          </motion.h1>
          <motion.p
            {...rise}
            transition={{ ...rise.transition, delay: 0.16 }}
            className="mt-5 max-w-xl text-base text-muted sm:text-lg"
          >
            {profile.title}
          </motion.p>
          <motion.p
            {...rise}
            transition={{ ...rise.transition, delay: 0.22 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-foreground/90 sm:text-lg"
          >
            I study Computer Science at NSBM Green University and build full-stack
            software, from Spring Boot services to React interfaces. I am especially
            interested in software engineering, applied AI, and systems that stay
            clear for the people using them.
          </motion.p>

          <motion.div
            {...rise}
            transition={{ ...rise.transition, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
            >
              View My Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            {profile.cvUrl ? (
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-medium transition hover:border-accent/60"
              >
                Download CV
              </a>
            ) : null}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line transition hover:border-accent/60"
              aria-label="GitHub profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line transition hover:border-accent/60"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.p
            {...rise}
            transition={{ ...rise.transition, delay: 0.36 }}
            className="mt-6 text-sm text-muted"
          >
            {profile.location} · Seeking a software engineering internship
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
