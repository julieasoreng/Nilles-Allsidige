import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

export default function AboutPage() {
  return (
    <section id="about" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-muted-foreground">About Nille</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              I am a versatile, mature woman with experience from many disciplines. Speaks English, Norwegian, and German
              fluently.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              I translate into English and Norwegian. I'm bilingual, which in my line of work is an advantage. I have
              translated technical software strings, manuals, and other technical texts to Norwegian and English as well
              as research papers from Norwegian into English. This job was of medical/anatomical grade.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              As can be read in my profile I am versatile when it comes to type of texts and languages.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">English → Norwegian</Badge>
              <Badge variant="secondary">Norwegian → English</Badge>
              <Badge variant="secondary">German → Norwegian</Badge>
              <Badge variant="secondary">19 Years Experience</Badge>
            </div>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border mx-auto w-full max-w-md">
            <div className="w-48 h-48 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="h-24 w-24 text-primary" />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-card-foreground">Nille</h3>
              <p className="text-muted-foreground mb-4">Professional Translator</p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">33,167</div>
                  <div className="text-sm text-muted-foreground">Words Translated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">19</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


