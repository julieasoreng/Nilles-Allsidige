import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <section id="about" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-muted-foreground">About Nille</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              I am a versatile and mature professional with a broad background spanning several
              disciplines. I speak English, Norwegian, and German fluently, and I primarily
              translate into these three languages. Being bilingual gives me a natural sensitivity to
              linguistic nuance, tone, and cultural context, allowing me to ensure that meaning and
              style come across clearly in every translation.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Over the years, I have translated a wide variety of texts, including technical software
              strings, user manuals, and other complex documentation. I have also translated
              academic research papers within the medical and anatomical fields, primarily from
              Norwegian into English. In addition, I have worked with media translations for
              platforms such as Netflix, where I translated films and series with close attention to
              tone, timing, and cultural relevance.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              My experience reflects a flexible and adaptive approach to language. Whether the
              task involves highly specialized vocabulary or more general content, I always aim to
              produce clear, fluent, and accurate translations tailored to the target audience.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              As highlighted in my profile, I am comfortable working with different types of texts
              and subject areas. I value precision, consistency, and a well-crafted end result.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm px-3 py-1.5">English → Norwegian</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1.5">Norwegian → English</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1.5">German → Norwegian</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1.5">19 Years Experience</Badge>
            </div>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border mx-auto w-full max-w-md mt-16">
            <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden">
              <Image 
                src="/Farger Kjøkken fra Julieasoreng.jpg" 
                alt="Nille" 
                width={192} 
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 text-card-foreground">Nille</h3>
              <p className="text-lg font-semibold text-muted-foreground mb-4">Professional Translator</p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-base font-bold text-primary">Translators without Borders</div>
                </div>
                <div className="text-center">
                  <div className="text-base font-bold text-primary">Translator since 2007</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


