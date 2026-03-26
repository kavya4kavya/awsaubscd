"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const orgLogos = [
  {
    name: "Amity Innovation Incubator",
    src: "/aii.png",
  },
  {
    name: "AWS Cloud Club",
    src: "/cloudClub.png",
  },
  {
    name: "Amity University Bengaluru",
    src: "/aub_blue.png",
  },
]

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Swags", href: "#swag" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-4 sm:gap-8">
          {orgLogos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-8 sm:h-12 w-auto object-contain opacity-95"
            />
          ))}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://docs.google.com/forms/d/1tHOJsmJiqKycMuYcwHIrzXSU1uvBTPT1GAb3qEKdDLY/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(268_68%_55%/0.28)]"
          >
            Register Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="glass-strong mt-2 mx-4 rounded-2xl p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/1tHOJsmJiqKycMuYcwHIrzXSU1uvBTPT1GAb3qEKdDLY/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
