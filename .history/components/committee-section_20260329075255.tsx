"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Linkedin } from "lucide-react"

const committeeLevels = [
  {
    category: "University Leadership",
    members: [
      {
        name: "Dr. Aseem Chauhan",
        role: "Chancellor",
        linkedin: "https://www.linkedin.com/in/aseemchauhan",
        image: "/aseem.png",
      },
      {
        name: "Dr. D Subhakar",
        role: "Vice Chancellor",
        linkedin: "https://www.linkedin.com/in/d-subhakar-2750411ba",
        image: "/subhakar.png",
      },
      {
        name: "Dr. PS Sali",
        role: "RBEF Vice President",
        linkedin: "https://www.linkedin.com/in/dr-sali-p-s-602628a",
        image: "/sali.png",
      },
      {
        name: "Dr. Monit Kapoor",
        role: "Pro Vice Chancellor & Director ASET",
        linkedin: "https://www.linkedin.com/in/monitkapoor01",
        image: "/monit.png",
      },
    ],
  },
  {
    category: "AWS Cloud Club Leadership",
    members: [
      {
        name: "Dr. Rajat Bhardwaj",
        role: "HOD - GenAI Dept & Faculty Lead AWS Cloud Club",
        linkedin: "https://www.linkedin.com/in/dr-rajat-bhardwaj-28109a214",
        image: "/rajat_sir.png",
      },
      {
        name: "Shreya Sherikar",
        role: "Cloud Club Captain",
        linkedin: "https://www.linkedin.com/in/shreya-sherikar",
        image: "/shreya.png",
      },
    ],
  },
  {
    category: "Organizing Team",
    members: [
      { name: "Abhijeet Sale", role: "Director of Tech", linkedin: "https://www.linkedin.com/in/abhijeet-sale-9a1b6a245/", image: "/abhijeet.png" },
      { name: "Chirantan Chandra H", role: "Director of Outreach", linkedin: "https://www.linkedin.com/in/chirantan-chandra-h", image: "/chirantan.png" },
      { name: "Tejas Gowda", role: "Director of Design", linkedin: "https://www.linkedin.com/in/h-r-thejas-gowda-26b202340/", image: "/tejas.png" },
      { name: "Agratha K", role: "Director of Support", linkedin: "https://www.linkedin.com/in/agratha-k-18a348366/", image: "/agratha.png" },
      { name: "Saloni Kumari", role: "Director of Events", linkedin: "https://www.linkedin.com/in/saloni-kumari-82b03a2a9", image: "/saloni.png" },
      { name: "Kavya M", role: "Assistant Director of Tech", linkedin: "https://www.linkedin.com/in/kavya4kavya", image: "/kavya.png" },
      { name: "Thulasi S", role: "Assistant Director of Outreach", linkedin: "https://www.linkedin.com/in/thulasi-s-640a16327/", image: "/thulasi.png" },
      { name: "Aakash Gowda R H", role: "Assistant Director of Design", linkedin: "https://www.linkedin.com/in/akash-gowda-r-h-38596b314", image: "/akash.png" },
      { name: "Rachita", role: "Assistant Director of Support", linkedin: "https://www.linkedin.com/in/rachitha-n-5a7a08359/", image: "/rachita.png" },
      { name: "Chaman Gowda P", role: "Assistant Director of Events", linkedin: "https://www.linkedin.com/in/chaman-gowda-p-b88872326", image: "/chaman.png" },
      { name: "Monika Pandey", role: "Member", linkedin: "https://www.linkedin.com/in/monika-pandey07", image: "/monika.png" },
      { name: "Sahil Varshney", role: "Member", linkedin: "https://www.linkedin.com/in/sahil-varshney-67a346251", image: "/sahil.png" },
      { name: "Syed Amaan Tabraiz", role: "Member", linkedin: "https://www.linkedin.com/in/syed-amaan-tabraiz-a23745295", image: "/amaan.png" },
      { name: "Rajath Sai S", role: "Member", linkedin: "https://www.linkedin.com/in/rajath-sai-s-3560a52b5", image: "/rajat_sai.png" },
      { name: "V Sneha", role: "Member", linkedin: "https://www.linkedin.com/in/v-sneha-468a81350/", image: "/sneha.png" },
      { name: "Jhanavi Krishnan", role: "Member", linkedin: "https://www.linkedin.com/in/jahnavi-krishnan-60a3a0343/", image: "/jahnavi.png" },
      {name: "Muskan Kumari", role: "Member", linkedin: "www.linkedin.com/in/muskan-kumari-327739349", image: "/muskan.png" },
      {name : "Pranay Ashok Bhalerao", role: "Member", linkedin: "https://www.linkedin.com/in/pranay-bhalerao-013661280/", image: "/pranay.png" },
      { name: "Adithya Rai", role: "Member", linkedin: "https://www.linkedin.com/in/raiaditya19/", image: "/adithya.png" },
      ]
  },
]

function MemberCard({
  name,
  role,
  linkedin,
  image,
  isLeadership,
}: {
  name: string
  role: string
  linkedin: string
  image?: string
  isLeadership?: boolean
}) {
  return (
    <div
      className={`group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
        isLeadership ? "p-4" : "p-3"
      }`}
    >
      <div
        className={`relative ${
          isLeadership
            ? "h-28 w-28 sm:h-36 sm:w-36"
            : "h-32 w-32 sm:h-40 sm:w-40"
        } overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center transition-all ring-4 ring-primary/30 ring-offset-2 ring-offset-background shadow-lg`}
      >
        {/* purple halo */}
        <span className="absolute -inset-2 rounded-full bg-purple-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
        {image ? (
          <img
            src={image}
            alt={name}
            className="relative z-10 h-full w-full object-cover"
          />
        ) : (
          <span
            className={`relative z-10 font-bold text-primary ${
              isLeadership ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
            }`}
          >
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        )}
      </div>
      <h3
        className={`mt-2 font-display font-semibold text-foreground ${
          isLeadership ? "text-sm sm:text-base" : "text-xs sm:text-sm"
        }`}
      >
        {name}
      </h3>
      <p
        className={`text-muted-foreground ${
          isLeadership ? "text-xs" : "text-xs"
        }`}
      >
        {role}
      </p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        title="LinkedIn Profile"
      >
        <Linkedin size={14} />
      </a>
    </div>
  )
}

export function CommitteeSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            The Team
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Event Organizing Committee
          </h2>
        </div>

        <div className="mt-16 space-y-12 sm:space-y-16">
          {committeeLevels.map((level, levelIdx) => (
            <div
              key={level.category}
              className={`transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${levelIdx * 150}ms` }}
            >
              <h3 className="text-center text-lg sm:text-xl font-display font-bold text-primary mb-8">
                {level.category}
              </h3>
              <div
                className={`grid gap-6 sm:gap-8 ${
                  level.category === "University Leadership"
                    ? "grid-cols-2 sm:grid-cols-4"
                    : level.category === "AWS Cloud Club Leadership"
                    ? "grid-cols-1 max-w-sm mx-auto"
                    : "grid-cols-2 sm:grid-cols-4 lg:grid-cols-5"
                }`}
              >
                {level.members.map((member, i) => (
                  <div
                    key={member.name}
                    className={`transition-all duration-500 ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${levelIdx * 150 + i * 50}ms`,
                    }}
                  >
                    <MemberCard
                      {...member}
                      isLeadership={level.category !== "Organizing Team"}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
