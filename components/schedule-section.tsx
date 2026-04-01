"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"

type SessionType = "All" | "Keynote" | "Session" | "Workshop" | "Networking"

const schedule = [
  {
    time: "09:00 – 10:00",
    title: "Registration & Check-in",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description:
      "Students register and get their ID cards, welcoming of guests into VIP lounge",
  },
  {
    time: "10:00 – 10:05",
    title: "Opening speech",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "Intro about the event",
  },
  {
    time: "10:05 - 10:10",
    title: "Lamp Lighting",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "Event begins",
  },
  {
    time: "10:10 - 10:20",
    title: "Welcome Speech",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "Welcoming guests and dignitaries",
  },
  {
    time: "10:20 – 10:30",
    title: "College dignitaries addressing the attendees",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "",
  },
  {
    time: "10:30 – 11:00",
    title: "Keynote 1",
    speaker: "",
    type: "Keynote" as SessionType,
    track: "General",
    description: "1st speaker",
  },
  {
    time: "11:00 - 11:10",
    title: "Keynote speaker Felicitation",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "",
  },
  {
    time: "11:00 - 11:30",
    title: "Keynote 2",
    speaker: "",
    type: "Keynote" as SessionType,
    track: "General",
    description: "2nd speaker",
  },
  {
    time: "11:30 - 11:35",
    title: "Keynote speaker Felicitation",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "Token of appreciation for speakers",
  },
  {
    time: "11:35 - 11:45",
    title: "Small Break",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Quick game to refresh the audience and get back attention",
  },
  {
    time: "11:45 - 12:25",
    title: "Session - 1",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "3rd speaker",
  },
  {
    time: "12:25 - 12:30",
    title: "Speaker Felicitation",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "Token of appreciation to speaker and introduction of next speaker",
  },
  {
    time: "12:30 – 13:10",
    title: "Session - 2",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "4th speaker",
  },
  {
    time: "13:10 - 13:15",
    title: "Speaker Felicitation",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "Token of appreciation to speaker",
  },
  {
    time: "13:15 - 14:00",
    title: "Lunch",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Lunch break for all speakers and attendees",
  },
  {
    time: "14:00 – 14:40",
    title: "Session - 3",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "5th speaker",
  },
  {
    time: "14:40 - 14:45",
    title: "Speaker Felicitation",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "Token of appreciation to speaker and introduction of next speaker",
  },
  {
    time: "14:45 – 15:25",
    title: "Session - 4",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "6th speaker",
  },
  {
    time: "15:25 - 15:30",
    title: "Speaker Felicitation",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "Token of appreciation to speaker and introduction of next speaker",
  },
  {
    time: "15:30 – 15:45",
    title: "High Tea and snacks",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Refreshments for all attendees and speakers",
  },
  {
    time: "15:45 - 16:00",
    title: "Cultural Performance",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "To take the vibe from tech to art and entertain the audience",
  },
  {
    time: "16:00 - 16:15",
    title: "Swag Distribution",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Swag distribution to all attendees",
  },
  {
    time: "16:15 - 16:30",
    title: "Closing Ceremony",
    speaker: "",
    type: "Session" as SessionType,
    track: "General",
    description: "Vote of thanks and dispersal of attendees -",
  },
]

const filters: SessionType[] = ["All", "Keynote", "Session", "Workshop", "Networking"]

const typeColors: Record<SessionType, string> = {
  All: "hsl(265 80% 65%)",
  Keynote: "hsl(265 80% 65%)",
  Session: "hsl(210 70% 60%)",
  Workshop: "hsl(160 60% 50%)",
  Networking: "hsl(40 80% 60%)",
}

export function ScheduleSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [activeFilter, setActiveFilter] = useState<SessionType>("All")

  const filteredSchedule =
    activeFilter === "All"
      ? schedule
      : schedule.filter((s) => s.type === activeFilter)

  return (
    <section id="schedule" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Event Schedule
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            The Day at a Glance
          </h2>
        </div>

        {/* Filters */}
        <div className={`mt-10 flex flex-wrap items-center justify-center gap-2 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-[70px] top-0 bottom-0 hidden w-px bg-border/50 sm:block" aria-hidden="true" />

          <div className="space-y-4">
            {filteredSchedule.map((item, i) => (
              <div
                key={`${item.time}-${item.title}`}
                className={`group flex gap-4 sm:gap-8 transition-all duration-500 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80 + 300}ms` }}
              >
                {/* Time */}
                <div className="flex-shrink-0 pt-4 sm:w-[60px]">
                  <span className="font-display text-sm font-bold text-muted-foreground">
                    {item.time}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative hidden flex-shrink-0 sm:flex">
                  <div
                    className="mt-5 h-3 w-3 rounded-full border-2 transition-all group-hover:scale-125"
                    style={{
                      borderColor: typeColors[item.type],
                      backgroundColor: `${typeColors[item.type]}30`,
                    }}
                  />
                </div>

                {/* Card */}
                <div className="glass flex-1 rounded-xl p-4 transition-all duration-300 hover:glow-sm group-hover:border-primary/20">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: `${typeColors[item.type]}15`,
                        color: typeColors[item.type],
                      }}
                    >
                      {item.type}
                    </span>
                    {item.track !== "General" && (
                      <span className="text-xs text-muted-foreground">
                        {item.track}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.speaker && (
                    <p className="mt-1 text-sm text-primary">{item.speaker}</p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
