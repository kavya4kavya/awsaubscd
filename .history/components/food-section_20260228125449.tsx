"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Coffee, UtensilsCrossed, Gift } from "lucide-react"

const experiences = [
  {
    icon: Coffee,
    title: "High Tea",
    description: "Premium snacks and beverages to fuel your learning.",
    time: "3:30 PM",
  },
  {
    icon: UtensilsCrossed,
    title: "Lunch",
    description: "Curated multi-cuisine buffet for all dietary preferences.",
    time: "12:30 PM",
  },
  {
    icon: Gift,
    title: "Swag Kit",
    description: "Exclusive AWS Community merch, stickers, and goodies.",
    time: "On Arrival",
  },
]

export function FoodSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Beyond the Sessions
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {experiences.map((item, i) => (
            <div
              key={item.title}
              className={`glass group rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:glow-sm ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <p className="mt-3 text-xs font-medium text-primary">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
