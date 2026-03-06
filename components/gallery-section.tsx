"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Event moment 1",
    category: "Workshop"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    alt: "Event moment 2",
    category: "Networking"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    alt: "Event moment 3",
    category: "Keynote"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    alt: "Event moment 4",
    category: "Workshop"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    alt: "Event moment 5",
    category: "Networking"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
    alt: "Event moment 6",
    category: "Keynote"
  },
]

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Captured Moments
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Event Gallery
          </h2>
          <p className="mt-4 text-muted-foreground">
            Relive the best moments from our events
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 transition-all duration-700 hover:border-primary/50 cursor-pointer ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-flex rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={galleryImages.find(img => img.id === selectedImage)?.src}
            alt={galleryImages.find(img => img.id === selectedImage)?.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
