import { GraduationCap, Building, Globe } from "lucide-react"

export const WhyJoin = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Mentor-led",
      description: "Learn from experienced professionals who've been where you want to go",
      color: "bg-stemverse-blue",
      borderColor: "border-stemverse-blue"
    },
    {
      icon: Building,
      title: "Real Projects", 
      description: "Build actual things that matter, not just homework assignments",
      color: "bg-stemverse-green",
      borderColor: "border-stemverse-green"
    },
    {
      icon: Globe,
      title: "Global Friends",
      description: "Connect with like-minded STEM enthusiasts from around the world",
      color: "bg-stemverse-purple", 
      borderColor: "border-stemverse-purple"
    }
  ]

  return (
    <section className="py-16 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why join Stemverse?
          </h2>
          <p className="font-body text-2xl text-muted-foreground font-medium">
            Because STEM should feel like your favorite game, not your hardest class.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`card-paper p-8 text-center group hover:scale-105 transition-transform border-doodle ${benefit.borderColor}`}>
              {/* Icon */}
              <div className={`${benefit.color} rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
                <benefit.icon size={40} className="text-white" strokeWidth={2.5} />
              </div>
              
              {/* Content */}
              <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}