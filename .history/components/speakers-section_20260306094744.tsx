"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Linkedin, X as XIcon } from "lucide-react"
import { useState } from "react"

const speakers = [
  {
    name: "Sonal Sarda",
    role: "Cloud Security | AWS Authorized Instructor",
    company: "",
    session: "Cloud Security",
    bio: "Experienced cloud security practitioner and AWS Authorized Instructor focusing on secure cloud architecture and IAM best practices.",
    image: "sonal.png",
    linkedin: "#",
  },
  {
    name: "Shefali Arora",
    role: "AWS Community Builder | AWS Lead Instructor",
    company: "",
    session: "GenAI",
    bio: "Community builder and instructor working across GenAI, ML and data science training programs.",
    image: "shefali.png",
    linkedin: "#",
  },
  {
    name: "Coming Soon",
    role: "",
    company: "",
    session: "Coming Soon",
    bio: "Details coming soon.",
    image: "/speakers/placeholder.jpg",
    linkedin: "#",
  },
  {
    name: "Coming Soon",
    role: "",
    company: "",
    session: "Coming Soon",
    bio: "Details coming soon.",
    image: "/speakers/placeholder.jpg",
    linkedin: "#",
  },
]

function SpeakerModal({
  speaker,
  onClose,
}: {
  speaker: (typeof speakers)[0]
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="glass-strong relative z-10 w-full max-w-md rounded-2xl p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="speaker-name"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close dialog"
        >
          <XIcon size={20} />
        </button>
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-secondary">
            <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-primary">
              {speaker.name.split(" ").map((n) => n[0]).join("")}
            </div>
          </div>
          <div>
            <h3 id="speaker-name" className="font-display text-xl font-bold text-foreground">
              {speaker.name}
            </h3>
            <p className="text-sm text-primary">{speaker.role}</p>
            <p className="text-sm text-muted-foreground">{speaker.company}</p>
          </div>
        </div>
        <div className="mt-6 rounded-xl bg-secondary/50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">Session</p>
          <p className="mt-1 font-display text-sm font-semibold text-foreground">
            {speaker.session}
          </p>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{speaker.bio}</p>
        <a
          href={speaker.linkedin}
          className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <Linkedin size={16} />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  )
}

export function SpeakersSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [selectedSpeaker, setSelectedSpeaker] = useState<(typeof speakers)[0] | null>(null)

  return (
    <section id="speakers" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Keynote Speakers
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Learn from the Best
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Industry leaders and AWS experts sharing cutting-edge insights.
          </p>
        </div>

        {/* Speaker grid */}
        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {speakers.map((speaker, i) => (
            <button
              key={speaker.name === "Coming Soon" ? `coming-soon-${i}` : speaker.name}
              onClick={() => setSelectedSpeaker(speaker)}
              className={`glass group rounded-2xl p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:glow-sm ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-secondary transition-all group-hover:ring-2 group-hover:ring-primary/50">
                  <div className="flex h-full w-full items-center justify-center text-lg font-bold text-primary">
                    {speaker.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-foreground truncate">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-primary">{speaker.role}</p>
                  <p className="text-xs text-muted-foreground">{speaker.company}</p>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-secondary/50 px-3 py-2">
                <p className="text-sm font-medium text-foreground">{speaker.session}</p>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Linkedin size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  View Profile
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSpeaker && (
        <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
      )}
    </section>
  )
}
