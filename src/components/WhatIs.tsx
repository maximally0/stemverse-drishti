import { Users, GraduationCap, Calendar } from "lucide-react"

export const WhatIs = () => {
  const features = [
    {
      icon: Users,
      title: "Community",
      description: "Connect with fellow STEM enthusiasts",
      color: "text-stemverse-blue"
    },
    {
      icon: GraduationCap,
      title: "Mentors", 
      description: "Learn from experienced guides",
      color: "text-stemverse-purple"
    },
    {
      icon: Calendar,
      title: "Monthly Movements",
      description: "Join exciting challenges and sprints",
      color: "text-stemverse-green"
    }
  ]

  return (
    <section className="py-16 px-4 bg-card relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-8">
          What is Stemverse?
        </h2>
        
        {/* Description */}
        <p className="font-body text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          We're a community where science isn't just learned — it's played with.
          <br />
          <span className="text-foreground font-semibold">
            Mentors lead monthly movements — from hackathons to build sprints — so you can make real projects, meet cool people, and have fun with STEM.
          </span>
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-paper p-8 text-center group hover:scale-105 transition-transform">
              <div className={`${feature.color} mb-4 flex justify-center`}>
                <feature.icon size={64} strokeWidth={2.5} />
              </div>
              <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}