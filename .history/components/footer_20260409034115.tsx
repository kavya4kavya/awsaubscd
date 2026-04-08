"use client"

import { Linkedin, Instagram, Mail, Calendar } from "lucide-react"

const socials = [
  { icon: Mail, href: "mailto:awscc.aub@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/awscc-aub/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/awscc_aub", label: "Instagram" },
  { icon: Calendar, href: "https://www.meetup.com/aws-cloud-club-at-amity-university-bengaluru/", label: "Meetup" },
]

export function Footer() {

  return (
    <footer className="relative border-t border-border/30 py-16">
      {/* Gradient line accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(24 100% 50%), hsl(24 88% 45%), hsl(215 16% 55%), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.8" />
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-display text-sm font-bold text-foreground">
                AWS Community Day 2026
              </span>
            </div>

          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-3">
            
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/50 text-muted-foreground transition-all hover:bg-primary/20 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border/30 bg-secondary/30 px-6 py-5 text-center sm:text-left">
          <p className="font-display text-base font-semibold text-foreground">Contact Us</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            <a href="tel:+918431852859" className="transition-colors hover:text-primary">
              Phone: +91 84318 52859
            </a>
            <a href="mailto:awscc.aub@gmail.com" className="transition-colors hover:text-primary">
              Mail: awscc.aub@gmail.com
            </a>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            You can also reach out to us on Meetup, Instagram, or LinkedIn if you have any queries.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-border/20 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} AWS Student Community Day. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}
