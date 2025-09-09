import { Card, CardContent } from "@/components/ui/card"

export default function ReviewsPage() {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-secondary-foreground">Reviews</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <Card className="bg-card border-border h-full">
            <CardContent className="flex flex-col h-full">
              <p className="text-card-foreground">
                "Fast delivery, excellent translation and excellent communication. Nille is very helpful and kind. Highly recommended!"
              </p>
              <div className="text-right text-sm text-muted-foreground mt-4 mt-auto">- Renaissance Translations</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border h-full">
            <CardContent className="flex flex-col h-full">
              <p className="text-card-foreground">
                "Nille is a highly professional and reliable colleague. I can recommend her service!"
              </p>
              <div className="text-right text-sm text-muted-foreground mt-4 mt-auto">- Gerti Potschien-Roth</div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border h-full">
            <CardContent className="flex flex-col h-full">
              <p className="text-card-foreground">
                "Reliable, friendly, on time, perfect work - a pleasure to work with Nille!"
              </p>
              <div className="text-right text-sm text-muted-foreground mt-4 mt-auto">- Elke Adams</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


