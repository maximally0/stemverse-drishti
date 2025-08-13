import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Rocket } from "lucide-react"

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Pick your squad",
      description: "robotics, AI, space, whatever's your jam.",
      color: "bg-stemverse-red"
    },
    {
      number: "02", 
      icon: Users,
      title: "Show up for the movement",
      description: "hackathon, build sprint, challenge, you name it.",
      color: "bg-stemverse-blue"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Make something awesome",
      description: "and share it with the world.",
      color: "bg-stemverse-green"
    }
  ]

  return (
    <section className="py-16 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
            How it works
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to join the most exciting STEM community
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                  <ArrowRight className="w-8 h-8 text-muted-foreground" />
                </div>
              )}
              
              {/* Step Card */}
              <div className="card-paper p-8 text-center group hover:scale-105 transition-transform relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-headline font-bold text-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`${step.color} rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
                  <step.icon size={40} className="text-white" strokeWidth={2.5} />
                </div>
                
                {/* Content */}
                <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-xl px-10 py-5">
            Start Your Journey
            <Rocket className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}