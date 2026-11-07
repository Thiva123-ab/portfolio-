"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { label: "React", className: "left-[6%] top-[16%]" },
  { label: "Spring", className: "right-[4%] top-[24%]" },
  { label: "SQL", className: "left-[12%] top-[48%]" },
  { label: "AI", className: "right-[14%] top-[46%]" },
];

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-[440px]" aria-hidden="true">
      <div className="absolute left-[12%] right-[12%] top-[6%] aspect-square rounded-full border border-line" />
      <div className="absolute left-[22%] right-[22%] top-[16%] aspect-square rounded-full border border-accent/35" />
      <div className="absolute left-[32%] right-[32%] top-[26%] aspect-square rounded-full border border-accent-2/30" />

      <motion.div
        className="absolute left-1/2 top-[30%] flex h-24 w-24 -translate-x-1/2 flex-col items-center justify-center rounded-3xl border border-line bg-surface/85 shadow-[0_0_70px_var(--glow)] backdrop-blur"
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-display text-3xl tracking-tight">TT</span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted">Build</span>
      </motion.div>

      {nodes.map((node, index) => (
        <motion.span
          key={node.label}
          className={`absolute rounded-full border border-line bg-surface/90 px-3 py-1.5 text-xs text-foreground ${node.className}`}
          animate={reduce ? undefined : { y: [0, index % 2 === 0 ? -6 : 6, 0] }}
          transition={{ duration: 5.5 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          {node.label}
        </motion.span>
      ))}

      <div className="absolute inset-x-0 bottom-0 rounded-2xl border border-line bg-surface/90 p-4 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="ml-2 font-mono text-[11px] text-muted">focus.ts</span>
        </div>
        <pre className="mt-4 overflow-x-auto font-mono text-[12.5px] leading-6 text-muted">
          <code>
            <span className="text-accent">const</span> focus = {"{"}
            {"\n"}  role: <span className="text-foreground">&quot;software engineer&quot;</span>,
            {"\n"}  stack: [<span className="text-foreground">&quot;Java&quot;</span>,{" "}
            <span className="text-foreground">&quot;TypeScript&quot;</span>],
            {"\n"}  learning: [<span className="text-foreground">&quot;AI&quot;</span>,{" "}
            <span className="text-foreground">&quot;cloud&quot;</span>]
            {"\n"}
            {"}"};
          </code>
        </pre>
      </div>
    </div>
  );
}
