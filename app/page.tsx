import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { TypingAnimation } from "@/components/typing-animation"

export default function Portfolio() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
  ]

  const projects = [
   {
      title: "CanvasDraw",
      description:
        "A full-stack collaborative  solution for drawing with real-time integration and admin dashboard.",
      image: "/Screenshot 2025-07-30 234414.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Canvas",
        "PostgreSQL",
        "Websocket",
      ],
      github: "https://github.com/Manmohan-Shukla/CanvasDraw",
      live: "https://canvas-draw-my-app.vercel.app/",
    },
    {
      title: "Chat App",
      description:
        "A Full Stack Website for chatting with other people with room logic with mordern slick design",
      image: "/Screenshot 2025-06-15 215246.png",
      technologies: ["React", "Node.js", "Websocket", "MongoDB"],
      github: "https://github.com/Manmohan-Shukla/Chat_App-V1",
      live: "https://chat-app-v1-five.vercel.app/",
    },
    {
      title: "Second Brain App",
      description:
        "A minimalist Second Brain app to capture, organize, and retrieve your ideas, notes, and knowledge effortlessly.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Typescript"],
      github: "https://github.com/Manmohan-Shukla/Second-Brain",
      live:"#",
    },
  ]

  const typingTexts = ["Full Stack Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Manmohan Shukla</h1>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-6">
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </Link>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto text-center relative">
          <div className="mb-8">
            <div className="relative inline-block mb-6">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full mx-auto border-4 border-primary/20 hover:border-primary/40 transition-colors duration-300"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Manmohan Shukla</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto h-8">
              <TypingAnimation texts={typingTexts} />
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate about creating beautiful, functional web applications that solve real-world problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/Manmohan Shukla.pdf" download>
             <Button size="lg" className="gap-2 hover:scale-105 transition-transform">
              <Download className="w-4 h-4" />
                                  Download Resume
              </Button>
               </a>

              <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/Manmohan-Shukla" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/manmohan-shukla-291a5727b/" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:manmohanshukla815@gmail.com" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              I'm a passionate full-stack developer with over 5 years of experience creating web applications that solve
              real-world problems. I love working with modern technologies and am always eager to learn new skills.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="group hover:scale-105 transition-transform">
                <Code className="w-6 h-6 mx-auto mb-2 text-primary group-hover:animate-pulse" />
                <p className="text-sm font-semibold">Clean Code</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <Palette className="w-6 h-6 mx-auto mb-2 text-primary group-hover:animate-pulse" />
                <p className="text-sm font-semibold">UI/UX Design</p>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <Smartphone className="w-6 h-6 mx-auto mb-2 text-primary group-hover:animate-pulse" />
                <p className="text-sm font-semibold">Responsive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic text-muted-foreground max-w-4xl mx-auto">
            "Code is like humor. When you have to explain it, it's bad."
          </blockquote>
          <p className="text-primary font-semibold mt-4">- Cory House</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm py-2 px-4 hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Link href={project.github} className="text-white hover:text-primary transition-colors">
                        <Github className="w-6 h-6" />
                      </Link>
                      <Link href={project.live} className="text-white hover:text-primary transition-colors">
                        <ExternalLink className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 hover:scale-105 transition-transform" asChild>
              <Link href="mailto:manmohanshukla815@gmail.com">
                <Mail className="w-4 h-4" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform" asChild>
              <Link href="https://www.linkedin.com/in/manmohan-shukla-291a5727b/">
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Manmohan Shukla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
