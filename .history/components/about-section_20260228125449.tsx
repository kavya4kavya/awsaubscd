"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code2, Mic2, Layers, Gift } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const features = [
  {
    icon: Code2,
    title: "Hands-on Workshops",
    description: "Build real-world cloud applications with guided labs and expert mentors.",
  },
  {
    icon: Mic2,
    title: "Industry Keynotes",
    description: "Hear from cloud leaders shaping the future of distributed systems.",
  },
  {
    icon: Layers,
    title: "Multi-Track Sessions",
    description: "Choose your own path across 5 parallel technical tracks.",
  },
  {
    icon: Gift,
    title: "Networking & Swag",
    description: "Connect with peers and take home exclusive AWS Community merch.",
  },
]

const stats = [
  { value: 300, suffix: "+", label: "Attendees" },
  { value: 10, suffix: "+", label: "Speakers" },
  { value: 5, suffix: "", label: "Technical Tracks" },
  { value: 1, suffix: "", label: "Power-Packed Day" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-foreground sm:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            About the Event
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            One Day. Infinite Possibilities.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A student-powered cloud conference designed to spark innovation and build real skills.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`glass group rounded-2xl p-6 transition-all duration-500 hover:glow-sm hover:border-primary/30 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 600}ms` }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
