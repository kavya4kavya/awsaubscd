"use client"

import { ParticlesBackground } from "@/components/particles-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TracksSection } from "@/components/tracks-section"
import { SpeakersSection } from "@/components/speakers-section"
import { ScheduleSection } from "@/components/schedule-section"
import { QuizSection } from "@/components/quiz-section"
import { VenueSection } from "@/components/venue-section"
import { FoodSection } from "@/components/food-section"
import { CommitteeSection } from "@/components/committee-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { PastEventsSection } from "@/components/past-events-section"
import { GallerySection } from "@/components/gallery-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticlesBackground />
      <Navbar />

      <div className="relative z-10">
        <HeroSection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <AboutSection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <TracksSection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <SpeakersSection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <ScheduleSection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <QuizSection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <VenueSection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <FoodSection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <CommitteeSection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <SponsorsSection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <PastEventsSection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <GallerySection />

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px bg-border/30" />
        </div>

        <FAQSection />

        <Footer />
      </div>
    </main>
  )
}
