import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Megaphone, Users, ScrollText, Languages, Wrench } from "lucide-react"

export default function ServicesPage() {
  return (
    <section className="py-20 px-4 bg-secondary min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-secondary-foreground">Translation Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <FileText className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-card-foreground">Research Reports</CardTitle>
              <CardDescription>
                Clear, accurate translations for academic and scientific documents. Ensure your findings are communicated
                with precision and credibility across languages.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <Megaphone className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-card-foreground">Marketing Materials</CardTitle>
              <CardDescription>
                Engaging, culturally sensitive translations that capture your brand’s voice. From campaigns to product
                descriptions, make sure your message resonates globally.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-card-foreground">HR Documents</CardTitle>
              <CardDescription>
                Professional translations of employee handbooks, training material, and internal communication. Build
                clarity, trust, and inclusivity in your workplace.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <ScrollText className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-card-foreground">Legal Texts</CardTitle>
              <CardDescription>
                Precise and reliable translations of contracts, agreements, and other legal documents. Accuracy and
                confidentiality are always top priority.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <Languages className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-card-foreground">Localization</CardTitle>
              <CardDescription>
                Adapt your website, app, or digital product for different markets. More than translation, it’s about
                making your content feel native and natural to your audience.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <Wrench className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-card-foreground">Technical Manuals</CardTitle>
              <CardDescription>
                Clear, structured translations for technical documentation and user guides. Ensure your instructions are
                easy to follow, no matter the language.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}


