import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Sparkles } from "lucide-react"
import robotMascot from "@/assets/robot-mascot.png"

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    stemArea: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-16 px-4 bg-card relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Background Confetti */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-stemverse-yellow transform rotate-45 doodle-bounce"></div>
          <div className="absolute top-32 right-16 w-6 h-6 bg-stemverse-red rounded-full doodle-float"></div>
          <div className="absolute bottom-40 left-20 w-5 h-5 bg-stemverse-purple transform rotate-12 doodle-spin"></div>
          <div className="absolute bottom-20 right-24 w-4 h-8 bg-stemverse-green transform -rotate-45 doodle-bounce"></div>
          <Sparkles className="absolute top-1/2 left-16 w-8 h-8 text-stemverse-blue opacity-60 doodle-float" />
          <Sparkles className="absolute top-1/4 right-12 w-6 h-6 text-stemverse-purple opacity-50 doodle-spin" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Robot with Clipboard */}
          <div className="text-center">
            <div className="relative inline-block">
              <img 
                src={robotMascot} 
                alt="STEMVERSE robot holding clipboard" 
                className="w-64 h-64 doodle-float"
              />
              {/* Clipboard */}
              <div className="absolute -right-8 top-8 w-24 h-32 bg-card border-doodle border-foreground p-2 transform rotate-12">
                <div className="w-full h-2 bg-muted mb-1"></div>
                <div className="w-3/4 h-2 bg-muted mb-1"></div>
                <div className="w-full h-2 bg-muted mb-1"></div>
                <div className="w-1/2 h-2 bg-muted"></div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
                Be part of the first 500 Stemversers
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                and get insider perks when we launch!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="border-doodle border-muted text-lg p-4 h-14"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-doodle border-muted text-lg p-4 h-14"
                  required
                />
              </div>

              <div>
                <Select value={formData.stemArea} onValueChange={(value) => setFormData({...formData, stemArea: value})}>
                  <SelectTrigger className="border-doodle border-muted text-lg p-4 h-14">
                    <SelectValue placeholder="What's your favorite STEM area?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai">Artificial Intelligence</SelectItem>
                    <SelectItem value="robotics">Robotics</SelectItem>
                    <SelectItem value="space">Space & Astronomy</SelectItem>
                    <SelectItem value="biotech">Biotechnology</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" variant="playful" size="lg" className="w-full text-xl py-6">
                Join Stemverse
                <Sparkles className="ml-2 w-6 h-6" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}