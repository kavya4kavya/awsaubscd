"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { X as XIcon } from "lucide-react"
import { useState } from "react"

const speakers = [
  {
    name: "Vijay Rajagopal",
    role: "Country Head, GTM - AWS BFSI & Fintech",
    company: "Amazon Web Services",
    bio: "Vijay Rajagopal is a senior BFSI and fintech leader with 22+ years of experience across strategy, business development, enterprise sales, partnerships, operations, and finance. He currently serves as Country Head – GTM for AWS BFSI & Fintech, connecting technology partners with banks, insurers, NBFCs, and capital market firms. Previously, he held leadership roles at Amazon Pay, PayPal India, Zeta, Quess Corp, and Zolve, driving large-scale business growth, product launches, and market expansion. He has also served on the boards of five companies. Vijay holds an MBA from IIM Ahmedabad, an engineering degree from BITS Pilani, is a CFA charterholder, and is AWS Certified in GenAI and Agentic AI",
    image: "/vijay.png",
    linkedin: "#",
  },
  {
    name: "Adrian De Luca",
    role: "Director, Cloud Acceleration, Asia Pacific & Japan",
    company: "Amazon Web Services",
    bio: "Adrian leads a regional team of specialist Solution Architects and Software Engineers who help customers and partners accelerate cloud adoption through Prototyping, Developer Transformation, Migration, Modernisation and Security. His team works with emerging technologies such as Artificial Intelligence, Machine Learning, Robotics, Internet of Things and Spatial computing, adapting them across industries. They develop the latest practices for cloud Migration and Application Modernization to increase business agility, and they advise Governments and Customers on strategies to improve security, risk and compliance in the cloud. Adrian also works closely in the sport of Formula 1 and is a technical advisor to Scuderia Ferrari. Having worked in Asia Pacific and North America markets, Adrian's extensive international experience sees him advise and work with a wide range of organizations including startups, independent software vendors, consulting companies, and enterprises. He is a popular public speaker, regularly conducting keynotes at industry events, and writes and hosts two popular online video shows including AWS This is my Architecture and Back to Basics. He also works closely with the motorsports segment as the AWS ambassador for their Formula 1 and Scuderia Ferrari partnerships. Adrian brings 25 years of experience in information technology to AWS. Prior roles include Global Director for Partner Strategic Development in Seattle, Head of Partner Solution Architecture in Asia Pacific at AWS, Chief Technology Officer in Asia Pacific at Hitachi, Co-founder of AirActive, and Technical Advisor at Zetaris. He has worked actively with industry bodies such as the Storage Networking Industry Association (SNIA), and advised the Australian Government on cloud policy. Adrian has also published multiple technical whitepapers and books.",
    image: "/speaker_place.png",
    linkedin: "#",
  },
  {
    name: "Sonal Sarda",
    role: "AWS Golden Jacket Holder | 12x AWS Certified",
    company: "Amazon Web Services",
    bio: "An AWS Golden Jacket Holder, AWStronaut, and 12x certified professional with 28+ years of experience in corporate training, technical consulting, and skill development. Specialized in AWS, Unix, Red Hat Linux, IBM AIX, and niche technologies, with a strong track record of delivering transformative learning experiences and solving complex technical challenges. Conducted 1800+ successful training sessions globally for both B2B and B2C audiences using interactive, hands-on, learner-focused delivery methods. Known for tailoring training to diverse skill levels, enabling organizations and individuals to achieve measurable growth and technical excellence. Extensive AWS ecosystem experience includes delivering multiple AWS projects reviewed and approved by an Amazon technical manager, along with creating step-by-step technical documentation, detailed learning content, and impactful cloud enablement programs for a global audience.",
    image: "/sonal.png",
    linkedin: "#",
  },
  {
    name: "Shubham Purwar",
    role: "Analytics & AI Specialist Solutions Architect",
    company: "Amazon Web Services",
    bio: "Shubham Purwar is an Analytics & AI Specialist Solutions Architect at AWS with an MTech in AI & ML from BITS Pilani, empowering Startup and ISV organizations to unlock the full potential of their data through scalable, secure, and high-performance cloud solutions. He brings deep expertise across the complete AWS analytics stack- including Amazon MSK, OpenSearch, Redshift, Glue, Athena, EMR, and SageMaker and is passionate about driving analytics and AI innovation for India's fastest-growing technology companies, having presented at AWS re:Invent 2025 in Las Vegas.",
    image: "/shubham.png",
    linkedin: "#",
  },
  {
    name: "Coming Soon",
    role: "",
    company: "",
    bio: "Details coming soon.",
    image: "/speaker_place.png",
    linkedin: "#",
  },
]

function getMiniBio(bio: string, maxLength = 180) {
  if (bio.length <= maxLength) return bio
  return `${bio.slice(0, maxLength).trimEnd()}...`
}

function SpeakerModal({ speaker, onClose }: { speaker: (typeof speakers)[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="glass-strong relative z-10 w-full max-w-md rounded-2xl p-6 animate-scale-in"
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

        <div className="flex flex-col items-center text-center">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-secondary">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = "/sali.png"
              }}
            />
          </div>

          <h3 id="speaker-name" className="mt-4 font-display text-xl font-bold text-foreground">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{speaker.name}</span>
          </h3>
          {speaker.role && <p className="text-sm text-primary">{speaker.role}</p>}
          {speaker.company && <p className="text-sm text-muted-foreground">{speaker.company}</p>}

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{speaker.bio}</p>

          {/* LinkedIn link removed per request */}
        </div>
      </div>
    </div>
  )
}

export function SpeakersSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [selectedSpeaker, setSelectedSpeaker] = useState<(typeof speakers)[0] | null>(null)

  return (
    <section id="speakers" className="relative py-24 sm:py-32">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Keynote Speakers</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">Learn from the Best</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Industry leaders and AWS experts sharing cutting-edge insights.</p>
        </div>

        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {speakers.map((speaker, i) => (
            <button
              key={`speaker-${i}`}
              onClick={() => setSelectedSpeaker(speaker)}
              aria-label={`Open speaker profile: ${speaker.name}`}
              className={`glass group relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:glow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60`}
              style={{ animationDelay: `${i * 80 + 120}ms` }}
            >
              <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-72 -translate-x-1/2 rounded-xl border border-primary/20 bg-background/95 p-4 text-left shadow-xl backdrop-blur-sm opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Mini Bio</p>
                <p className="mt-2 line-clamp-6 text-xs leading-relaxed text-muted-foreground">{getMiniBio(speaker.bio)}</p>
              </div>

              <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-secondary transition-all group-hover:ring-2 group-hover:ring-primary/50">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src = "/speaker_place.png"
                      }}
                    />
                  </div>

                <h3 className="mt-4 font-display font-semibold text-foreground">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{speaker.name}</span>
                </h3>
                {speaker.role && <p className="text-sm text-primary mt-1">{speaker.role}</p>}
                {speaker.company && <p className="text-xs text-muted-foreground">{speaker.company}</p>}

                <div className="mt-3 flex items-center gap-2 justify-center">
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">View Profile</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedSpeaker && <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />}
    </section>
  )
}
