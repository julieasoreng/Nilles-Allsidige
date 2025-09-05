import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Users, Award, Mail, Phone, MapPin } from "lucide-react"

export default function TranslatorLandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-foreground">Nilles Allsidige</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Your Trusted Translation Partner</h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto text-pretty">
            Professional translation services that bridge languages and cultures with precision, expertise, and cultural
            sensitivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary-foreground">Translation Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Document Translation</CardTitle>
                <CardDescription>
                  Legal, medical, technical, and business documents translated with precision and confidentiality.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Interpretation Services</CardTitle>
                <CardDescription>
                  Simultaneous and consecutive interpretation for meetings, conferences, and events.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Website Localization</CardTitle>
                <CardDescription>
                  Adapt your digital content for global markets with cultural nuance and technical expertise.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Certified Translation</CardTitle>
                <CardDescription>
                  Official translations for immigration, academic, and legal purposes with certification.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Literary Translation</CardTitle>
                <CardDescription>
                  Creative and literary works translated while preserving artistic intent and cultural context.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Business Communication</CardTitle>
                <CardDescription>
                  Marketing materials, presentations, and corporate communications for international expansion.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-muted-foreground">About Nille</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                With over 15 years of experience in professional translation, I specialize in bridging linguistic and
                cultural gaps for businesses and individuals worldwide. My expertise spans multiple industries including
                legal, medical, technical, and creative fields.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                I hold certifications from the American Translators Association and have worked with Fortune 500
                companies, government agencies, and international organizations. My commitment to accuracy, cultural
                sensitivity, and timely delivery has earned the trust of clients across the globe.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Spanish ↔ English</Badge>
                <Badge variant="secondary">French ↔ English</Badge>
                <Badge variant="secondary">Portuguese ↔ English</Badge>
                <Badge variant="secondary">ATA Certified</Badge>
                <Badge variant="secondary">15+ Years Experience</Badge>
              </div>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-48 h-48 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-24 w-24 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">Nille</h3>
                <p className="text-muted-foreground mb-4">Professional Translator & Interpreter</p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Recent Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Legal Contract Translation</CardTitle>
                <CardDescription>Spanish to English • 50 pages • Completed in 3 days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground">
                  Complex international business contract requiring precise legal terminology and cultural adaptation
                  for cross-border negotiations.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Medical Research Paper</CardTitle>
                <CardDescription>French to English • 25 pages • Peer-reviewed publication</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground">
                  Cardiovascular research study translation maintaining scientific accuracy and terminology for
                  international medical journal submission.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">E-commerce Website</CardTitle>
                <CardDescription>English to Spanish • 200+ product descriptions • SEO optimized</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground">
                  Complete website localization for fashion retailer expanding into Latin American markets, including
                  cultural adaptation and SEO optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-foreground">nillejk@online.no</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">+47 90970019</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Flisa, Norway</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Business Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM CET</div>
                  <div>Saturday: 10:00 AM - 2:00 PM CET</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Request a Quote</CardTitle>
                <CardDescription>Get a personalized quote for your translation project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-input border-border" />
                  <Input placeholder="Last Name" className="bg-input border-border" />
                </div>
                <Input placeholder="Email Address" type="email" className="bg-input border-border" />
                <Select>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue placeholder="Service Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="document">Document Translation</SelectItem>
                    <SelectItem value="interpretation">Interpretation</SelectItem>
                    <SelectItem value="localization">Website Localization</SelectItem>
                    <SelectItem value="certified">Certified Translation</SelectItem>
                    <SelectItem value="literary">Literary Translation</SelectItem>
                    <SelectItem value="business">Business Communication</SelectItem>
                  </SelectContent>
                </Select>
                <div className="grid grid-cols-2 gap-4">
                  <Select>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="From Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="pt">Portuguese</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="To Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="pt">Portuguese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea
                  placeholder="Project details, word count, deadline, and any special requirements..."
                  className="bg-input border-border min-h-[100px]"
                />
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Quote Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-accent text-accent-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">Nilles Allsidige</span>
              </div>
              <p className="text-accent-foreground/80">
                Professional translation services bridging languages and cultures with expertise and precision.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>Document Translation</li>
                <li>Interpretation Services</li>
                <li>Website Localization</li>
                <li>Certified Translation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>nillejk@online.no</li>
                <li>+47 90970019</li>
                <li>Flisa, Norway</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60">
            <p>&copy; 2024 Nilles Allsidige Translation Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
