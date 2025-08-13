import { Microscope, Rocket, Settings, Atom } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-background border-t border-border relative overflow-hidden">
      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Microscope className="absolute top-8 left-16 w-8 h-8 text-stemverse-blue doodle-float" />
        <Rocket className="absolute top-12 right-20 w-6 h-6 text-stemverse-red doodle-spin" />
        <Settings className="absolute bottom-12 left-24 w-7 h-7 text-stemverse-green doodle-bounce" />
        <Atom className="absolute bottom-8 right-16 w-8 h-8 text-stemverse-purple doodle-float" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-headline text-3xl font-bold mb-2">
              <span className="text-stemverse-red">STEM</span>
              <span className="text-stemverse-blue">VERSE</span>
            </h3>
            <p className="font-body text-muted-foreground text-lg">
              Made with 💡 and ☕ for STEM lovers everywhere
            </p>
          </div>

          {/* Links */}
          <div className="text-center md:text-right">
            <nav className="space-x-8">
              <a href="#about" className="font-body text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="font-body text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#privacy" className="font-body text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="font-body text-muted-foreground">
            © 2024 Stemverse. Building the future of STEM education, one community at a time.
          </p>
        </div>
      </div>
    </footer>
  )
}