import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Award } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind",
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Quick response times with same-day availability",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Experienced and courteous service professionals",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee on all our services",
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-24 md:py-28 bg-muted/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,184,148,0.08),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              About ClearSpace Solutions
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for junk removal and cleaning services in Charlotte
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Why Choose ClearSpace Solutions?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At ClearSpace Solutions, we understand that your time is valuable and your space is important. That's
                why we've built our business around providing fast, reliable, and affordable services that exceed your
                expectations every time.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Serving Charlotte and the surrounding areas, we specialize in junk removal, deep cleaning, pressure
                washing, and yard cleanup. Our professional team is always ready to help you reclaim your space and
                restore its beauty.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're committed to eco-friendly practices and responsible disposal, ensuring that your unwanted items
                are handled in an environmentally conscious way whenever possible.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <h4 className="font-bold text-foreground mb-3 text-lg">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
