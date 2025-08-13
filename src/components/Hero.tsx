import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import robotMascot from "@/assets/robot-mascot.png";
export const Hero = () => {
  return <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-12 h-12 text-stemverse-yellow doodle-bounce">
          <Sparkles className="w-full h-full" />
        </div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-stemverse-purple rounded-full doodle-float opacity-80"></div>
        <div className="absolute bottom-40 left-20 w-8 h-16 bg-stemverse-green transform rotate-45 doodle-spin opacity-60"></div>
        <div className="absolute top-1/2 right-10 w-10 h-10 bg-stemverse-red rounded-full doodle-bounce opacity-70"></div>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto z-10">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="font-headline text-6xl md:text-8xl font-bold mb-4">
            <span className="text-stemverse-red">STEM</span>
            <span className="text-stemverse-blue">VERSE</span>
          </h1>
        </div>

        {/* Robot Mascot */}
        <div className="mb-8 flex justify-center">
          
        </div>

        {/* Headline */}
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Science is more fun when we build it together.
        </h2>

        {/* Subheadline */}
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Join a global STEM community led by mentors. Learn, build, and create — one monthly movement at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="playful" size="lg" className="text-lg px-8 py-4">
            Join Stemverse
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button variant="outline-playful" size="lg" className="text-lg px-8 py-4">
            See what's coming
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-card section-wave"></div>
    </section>;
};