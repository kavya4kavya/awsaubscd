"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Who can attend AWS Student Community Day?",
    answer:
      "The event is open to all students, recent graduates, and early-career professionals with an interest in cloud computing. No prior AWS experience is required.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No, the event is completely free for all attendees. Registration is required to secure your spot as seats are limited.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop (fully charged), student ID, and a lot of enthusiasm. All workshops are hands-on, so having your own machine is essential.",
  },
  {
    question: "Will there be food and refreshments?",
    answer:
      "Yes. Lunch and high tea will be provided for all registered attendees. We cater to multiple dietary preferences.",
  },
  {
    question: "Are there any attendee perks?",
    answer:
      "Yes. We have exclusive tech swags and goodies just for the first 450 attendees, available on a first-come, first-served basis.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes, all attendees will receive a digital certificate of participation. Workshop completions come with additional credentials.",
  },
  {
    question: "How do I reach the venue?",
    answer:
      "Amity University Bengaluru is well-connected by road. We recommend using the Google Maps link on our venue section. Limited free parking is available at Block C.",
  },
]

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-3xl px-6">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Got Questions?
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`glass overflow-hidden rounded-xl transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80 + 200}ms` }}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-sm font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
