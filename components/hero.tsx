"use client"

import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin, Star } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-background via-muted/30 to-background py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,128,128,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,184,148,0.05),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">Trusted by 500+ customers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 sm:mb-8 leading-tight animate-fade-in-up">
            Fast, Affordable{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Junk Removal
            </span>{" "}
            & Cleaning Services
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto px-2 leading-relaxed animate-fade-in-up">
            We haul it, clean it, and leave your space spotless. Serving Charlotte & surrounding areas with same-day
            service you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-0 animate-fade-in-up">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-lg py-4 px-8"
              asChild
            >
              <a href="tel:+17869122406">
                <Phone className="h-5 w-5 mr-2" />
                Call (786) 912-2406
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-lg py-4 px-8"
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-2 animate-fade-in-up">
            <div className="flex flex-col items-center space-y-3 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Same-Day Service</span>
              <span className="text-sm text-muted-foreground text-center">Quick response when you need it most</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-accent/10 rounded-full">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <span className="font-semibold text-foreground">Charlotte & Surrounding</span>
              <span className="text-sm text-muted-foreground text-center">Serving the greater Charlotte area</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="p-3 bg-primary/10 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Always Available</span>
              <span className="text-sm text-muted-foreground text-center">24/7 emergency service available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
