import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Sparkles, Droplets, TreePine } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Truck,
      title: "Junk Removal",
      description:
        "Fast and efficient removal of unwanted items, furniture, appliances, and debris from your home or business.",
      features: ["Same-day pickup", "No job too big or small", "Eco-friendly disposal", "Licensed & insured"],
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Comprehensive cleaning services that leave your space spotless and sanitized from top to bottom.",
      features: [
        "Residential & commercial",
        "Move-in/move-out cleaning",
        "Post-construction cleanup",
        "Detailed sanitization",
      ],
    },
    {
      icon: Droplets,
      title: "Pressure Washing",
      description:
        "Professional pressure washing to restore the beauty of your exterior surfaces and increase curb appeal.",
      features: ["Driveways & walkways", "House exteriors", "Decks & patios", "Commercial buildings"],
    },
    {
      icon: TreePine,
      title: "Yard Cleaning",
      description: "Complete yard cleanup services including debris removal, leaf clearing, and landscape maintenance.",
      features: ["Seasonal cleanup", "Storm damage removal", "Brush & debris clearing", "Landscape preparation"],
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-background relative">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,128,128,0.02)_50%,transparent_75%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">Our Services</h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto px-2 leading-relaxed">
            Professional cleaning and removal services designed to make your life easier
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full group"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 sm:mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-card-foreground mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-6 text-base sm:text-lg leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm sm:text-base text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 flex-shrink-0 mt-2" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
