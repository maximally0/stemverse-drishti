import { Button } from "@/components/ui/button"
import { Rocket, Star } from "lucide-react"

export const HeroCommunity = () => {
  return (
    <section className="py-16 px-4 bg-card relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Coming Soon Badge */}
        <div className="inline-block mb-8">
          <div className="border-doodle border-stemverse-purple bg-stemverse-purple/10 text-stemverse-purple px-6 py-3 font-headline font-bold text-lg">
            COMING SOON
          </div>
        </div>

        {/* Planet Illustration */}
        <div className="mb-12 relative">
          <div className="w-64 h-64 mx-auto relative">
            {/* Main Planet */}
            <div className="w-48 h-48 bg-stemverse-blue rounded-full border-doodle border-stemverse-blue mx-auto flex items-center justify-center relative">
              <span className="font-headline text-white text-xl font-bold">
                Hero Community
              </span>
              
              {/* Orbiting Moons */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-stemverse-yellow rounded-full border-doodle border-stemverse-yellow flex items-center justify-center doodle-spin">
                <span className="font-headline text-xs font-bold text-stemverse-yellow-foreground">
                  AI
                </span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-stemverse-green rounded-full border-doodle border-stemverse-green flex items-center justify-center doodle-float">
                <span className="font-headline text-xs font-bold text-white">
                  SPACE
                </span>
              </div>
              
              <div className="absolute top-1/2 -right-12 w-10 h-10 bg-stemverse-red rounded-full border-doodle border-stemverse-red flex items-center justify-center doodle-bounce">
                <span className="font-headline text-xs font-bold text-white">
                  ROBOTICS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
          Our first hero community is on the launchpad…
        </h2>
        
        <p className="font-body text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Want early access? Sign up and be first in line when we blast off into the STEM universe.
        </p>

        {/* CTA */}
        <Button variant="hero" size="lg" className="text-xl px-10 py-5">
          Get Early Access
          <Rocket className="ml-2 w-6 h-6" />
        </Button>

        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-16 left-16 w-6 h-6 text-stemverse-yellow opacity-60 doodle-bounce" />
          <Star className="absolute top-32 right-20 w-4 h-4 text-stemverse-purple opacity-40 doodle-float" />
          <Star className="absolute bottom-20 left-32 w-5 h-5 text-stemverse-red opacity-50 doodle-spin" />
          <Star className="absolute bottom-32 right-16 w-7 h-7 text-stemverse-green opacity-70 doodle-bounce" />
        </div>
      </div>
    </section>
  )
}