"use client"

import { useEffect, useState } from "react"
import { ArrowRight, CalendarDays, MapPin, Sparkles } from "lucide-react"

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative glass-strong flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-bold text-foreground sm:h-24 sm:w-24 sm:text-4xl border-2 border-primary/20 shadow-lg hover:scale-105 transition-transform duration-300">
          {String(value).padStart(2, "0")}
        </div>
      </div>
      <span className="mt-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
        {label}
      </span>
    </div>
  )
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const eventDate = new Date("2026-04-24T09:00:00+05:30")

    const update = () => {
      const now = new Date()
      const diff = eventDate.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Liquid glass blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-primary/25 to-purple-400/25 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/25 to-primary/30 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-400/25 to-primary/25 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Bento-style header card */}
        <div className="mx-auto mb-8 inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full border-2 border-primary/30 shadow-lg">
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Bengaluru 2026
          </span>
        </div>

        {/* AWS Logo with kinetic effect */}
        <div className="mb-6 animate-fade-in-up">
          <svg className="mx-auto h-16 sm:h-20 w-auto" viewBox="0 0 304 182" fill="none">
            <path d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67.1 17.3-67.1c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z" fill="#232F3E"/>
            <path d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" fill="#FF9900"/>
            <path d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" fill="#FF9900"/>
          </svg>
        </div>

        {/* Main title with kinetic typography */}
        <div className="relative mb-4">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                STUDENT
              </span>
            </span>
            <br />
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <span className="bg-gradient-to-r from-purple-500 via-primary to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                COMMUNITY DAY
              </span>
            </span>
          </h1>
          
          {/* Neo-brutalism accent */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2 w-32 bg-primary rounded-full shadow-lg" />
        </div>

        {/* Tagline with glass effect */}
        <div className="inline-block glass-strong px-8 py-4 rounded-2xl border-2 border-primary/20 shadow-xl mb-8 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <p className="text-xl sm:text-2xl font-bold text-foreground tracking-wide">
            Build. Deploy. Scale.
          </p>
        </div>

        {/* Bento grid for date & location */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="glass-strong p-6 rounded-2xl border-2 border-primary/20 shadow-lg hover:scale-105 transition-transform duration-300">
            <CalendarDays className="h-6 w-6 text-primary mx-auto mb-3" />
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Date</p>
            <p className="text-lg font-bold text-foreground">April 24, 2026</p>
          </div>
          <div className="glass-strong p-6 rounded-2xl border-2 border-primary/20 shadow-lg hover:scale-105 transition-transform duration-300">
            <MapPin className="h-6 w-6 text-primary mx-auto mb-3" />
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">Venue</p>
            <p className="text-lg font-bold text-foreground">Amity University</p>
          </div>
        </div>

        {/* Countdown with enhanced glassmorphism */}
        <div className="mt-12 flex items-center justify-center gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <CountdownUnit value={timeLeft.days} label="Days" />
          <span className="text-3xl font-light text-primary/50 mt-[-2rem]">:</span>
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <span className="text-3xl font-light text-primary/50 mt-[-2rem]">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Min" />
          <span className="text-3xl font-light text-primary/50 mt-[-2rem]">:</span>
          <CountdownUnit value={timeLeft.seconds} label="Sec" />
        </div>

        {/* Neo-brutalist CTAs */}
        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <a
            href="https://docs.google.com/forms/d/1tHOJsmJiqKycMuYcwHIrzXSU1uvBTPT1GAb3qEKdDLY/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 bg-primary px-10 py-4 text-base font-bold text-primary-foreground rounded-2xl border-4 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
          >
            Register Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#schedule"
            className="group inline-flex items-center gap-2 glass-strong px-10 py-4 text-base font-bold text-foreground rounded-2xl border-4 border-primary shadow-[4px_4px_0px_0px_hsl(270_70%_50%)] hover:shadow-[6px_6px_0px_0px_hsl(270_70%_50%)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
          >
            View Schedule
          </a>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-primary/50 p-2 glass">
          <div className="h-3 w-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}
