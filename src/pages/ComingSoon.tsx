import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Rocket, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const communities = [
    "AI & Machine Learning",
    "Robotics & Automation", 
    "Quantum Tech & Computing",
    "Space & Astrophysics",
    "BioTech & Life Sciences",
    "Neuroscience & Human Mind",
    "Product Design & Engineering",
    "Electronics & Hardware",
    "Environmental Tech & Sustainability",
    "Research & Innovation (General)"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative py-8 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center text-stemverse-blue hover:text-stemverse-blue/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-headline font-bold text-lg">Back to Home</span>
          </Link>
          
          <div className="font-headline text-3xl font-bold">
            <span className="text-stemverse-red">STEM</span>
            <span className="text-stemverse-blue">VERSE</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background Doodles */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-16 left-16 w-6 h-6 text-stemverse-yellow opacity-60 doodle-bounce" />
          <div className="absolute top-32 right-20 w-4 h-4 bg-stemverse-purple rounded-full doodle-float opacity-40" />
          <Sparkles className="absolute bottom-20 left-32 w-5 h-5 text-stemverse-green opacity-50 doodle-spin" />
          <div className="absolute bottom-32 right-16 w-7 h-7 bg-stemverse-red rounded-full opacity-70 doodle-bounce" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Coming Soon Badge */}
          <div className="inline-block mb-8">
            <div className="border-doodle border-stemverse-purple bg-stemverse-purple/10 text-stemverse-purple px-6 py-3 font-headline font-bold text-lg">
              COMING SOON
            </div>
          </div>

          <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground mb-6">
            The Future of STEM is Here
          </h1>
          
          <p className="font-body text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We're building the ultimate STEM communities where curiosity meets collaboration. 
            Pick your passion and join the movement!
          </p>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Upcoming Communities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {communities.map((community, index) => (
              <Card key={index} className="card-paper hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-stemverse-green mr-4 flex-shrink-0" />
                  <span className="font-body text-lg font-medium text-foreground">
                    {community}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interest Form Section */}
          <div className="text-center">
            <div className="card-paper bg-card p-8 max-w-2xl mx-auto">
              <div className="mb-6">
                <Rocket className="w-16 h-16 text-stemverse-blue mx-auto mb-4 doodle-float" />
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Join the Adventure?
                </h3>
                <p className="font-body text-lg text-muted-foreground mb-8">
                  Tell us which communities spark your curiosity! We'll notify you when they launch.
                </p>
              </div>

              {/* Placeholder for Tally form */}
              <div className="border-doodle border-muted bg-muted/20 p-8 rounded-lg">
                <p className="font-body text-muted-foreground mb-4">
                  🚀 Interest form will be embedded here
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  (Tally.so form to be added)
                </p>
              </div>

              <div className="mt-8">
                <Button variant="hero" size="lg" className="text-xl px-10 py-5">
                  Get Early Access
                  <Rocket className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-muted-foreground">
            Made with 💡 and ☕ for STEM lovers everywhere
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;