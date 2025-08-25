import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ClearSpaceSolutionLogo.jpg-7KXGYT1Gl2jYocC88Xvz3RWoQy8z6p.jpeg"
                alt="ClearSpace Solutions Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex-shrink-0"
              />
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-foreground">ClearSpace Solutions</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Charlotte & Surrounding Areas</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
              Fast, affordable junk removal, deep cleaning, and pressure washing services. We haul it, clean it, and
              leave your space spotless.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>Junk Removal</li>
              <li>Deep Cleaning</li>
              <li>Pressure Washing</li>
              <li>Yard Cleaning</li>
              <li>Same-Day Service</li>
              <li>Emergency Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm sm:text-base break-all">(786) 912-2406</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm sm:text-base break-all">
                  contact.clearspacesolutions@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm sm:text-base">210 S F St, Bessemer City, NC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2024 ClearSpace Solutions. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
