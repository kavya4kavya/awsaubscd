"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Gift, Sparkles, Ticket } from "lucide-react"

const perks = [
  "Exclusive AWS-themed tech swags",
  "Premium event goodies",
  "Special surprise giveaways",
]

export function SwagSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="swag" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Exclusive Perks
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Tech Swags & Goodies Await
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We are not running tracks this year. Instead, we have exclusive tech swags and goodies just for the first 450 attendees.
          </p>
        </div>

        <div
          className={`glass mt-12 rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "180ms" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-center sm:gap-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Ticket size={16} />
              First 450 Only
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Gift size={16} />
              Exclusive Swags
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles size={16} />
              Curated Goodies
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {perks.map((perk) => (
              <div
                key={perk}
                className="rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-sm text-foreground"
              >
                {perk}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
