"use client"

import Image from "next/image"

export function OurWork() {
  const workExamples = [
    {
      id: 1,
      title: "Patio Junk Removal",
      description: "Complete cleanout of cluttered patio area",
      image: "/img1.png",
      service: "Junk Removal",
    },
    {
      id: 2,
      title: "Professional Yard Cleaning",
      description: "Landscaping maintenance and yard cleanup",
      image: "/img2.png",
      service: "Yard Cleaning",
    },
    {
      id: 3,
      title: "Basement Cleanout",
      description: "Full basement junk removal and organization",
      image: "/img3.png",
      service: "Junk Removal",
    },
    {
      id: 4,
      title: "Deep Cleaning Service",
      description: "Professional deep cleaning with premium results",
      image: "/img4.png",
      service: "Deep Cleaning",
    },
    {
      id: 5,
      title: "Construction Debris Removal",
      description: "Large-scale debris and material removal",
      image: "/img5.png",
      service: "Junk Removal",
    },
  ]

  return (
    <section id="our-work" className="py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 text-balance">Our Work</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
            See the transformation we bring to homes and businesses across Charlotte. From cluttered spaces to spotless
            results - we deliver excellence every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workExamples.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-500 text-white shadow-lg">
                    {work.service}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
                  {work.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{work.description}</p>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-200 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 mb-6">Ready to transform your space? Get your free quote today!</p>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Free Quote
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
