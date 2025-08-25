import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Charlotte, NC",
    rating: 5,
    text: "ClearSpace Solutions transformed my cluttered garage into a usable space in just one afternoon. Their team was professional, efficient, and the pricing was very fair. Highly recommend!",
    service: "Junk Removal",
  },
  {
    name: "Mike Rodriguez",
    location: "Gastonia, NC",
    rating: 5,
    text: "After years of putting it off, I finally called ClearSpace for pressure washing. My driveway and house exterior look brand new! Same-day service was a huge plus.",
    service: "Pressure Washing",
  },
  {
    name: "Jennifer Chen",
    location: "Huntersville, NC",
    rating: 5,
    text: "The deep cleaning service exceeded my expectations. They were thorough, reliable, and left my home spotless. Will definitely use them again for regular cleaning.",
    service: "Deep Cleaning",
  },
  {
    name: "Robert Thompson",
    location: "Concord, NC",
    rating: 5,
    text: "Great experience from start to finish. They hauled away old furniture and appliances, then cleaned up the area perfectly. Professional team and reasonable prices.",
    service: "Junk Removal",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 md:py-28 bg-muted/50 relative">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(0,128,128,0.03)_50%,transparent_75%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers throughout Charlotte and surrounding
            areas have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border border-border/50 p-8 lg:p-10 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-accent-foreground bg-gradient-to-r from-accent to-primary px-3 py-1.5 rounded-full">
                  {testimonial.service}
                </span>
              </div>

              <blockquote className="text-foreground mb-8 text-lg lg:text-xl leading-relaxed font-medium">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mr-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <p className="text-muted-foreground mb-8 text-xl">Ready to experience our exceptional service?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>
    </section>
  )
}
