import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-secondary-foreground">Get In Touch</h1>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">nille@nilles.no</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+47 90970019</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Flisa, Norway</span>
              </div>
            </div>
          </div>
          <div className="md:pl-8">
            <h4 className="text-2xl font-bold mb-6 text-muted-foreground">Business Hours</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>Monday - Friday: 9:00 AM - 6:00 PM CET</div>
              <div>Saturday: 10:00 AM - 2:00 PM CET</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


