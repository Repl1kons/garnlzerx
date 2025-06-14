import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, GitlabIcon, Server, Database, Shield, Code, Zap } from "lucide-react"
// Импортируйте ThreeSceneFallback вместо ThreeScene, если Three.js не работает
import ThreeSceneFallback from "@/components/three-scene-fallback"
import SkillsMap from "@/components/skills-map"
import AnimatedCodeEditor from "@/components/animated-code-editor"
import TechProgressBars from "@/components/tech-progress-bars"
import HoverEffects from "@/components/hover-effects"

export default function HomePage() {
  const techStack = [
    { name: "Python 3.11+", icon: <Code className="h-4 w-4" />, color: "bg-yellow-500/20 border-yellow-500/30" },
    { name: "FastAPI", icon: <Zap className="h-4 w-4" />, color: "bg-green-500/20 border-green-500/30" },
    { name: "PostgreSQL", icon: <Database className="h-4 w-4" />, color: "bg-blue-500/20 border-blue-500/30" },
    { name: "Redis", icon: <Server className="h-4 w-4" />, color: "bg-red-500/20 border-red-500/30" },
    { name: "Docker", icon: <Server className="h-4 w-4" />, color: "bg-cyan-500/20 border-cyan-500/30" },
    { name: "JWT", icon: <Shield className="h-4 w-4" />, color: "bg-purple-500/20 border-purple-500/30" },
    { name: "AsyncIO", icon: <Zap className="h-4 w-4" />, color: "bg-indigo-500/20 border-indigo-500/30" },
    { name: "S3", icon: <Database className="h-4 w-4" />, color: "bg-orange-500/20 border-orange-500/30" },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-gray-900/30 to-black/50" />

        {/* Floating Code Widgets */}
        <div className="absolute top-20 left-10 z-10 hidden lg:block">
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 transform rotate-3 shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <code className="text-green-400 text-sm">{"async def monitor():\n    await check_status()"}</code>
          </div>
        </div>

        <div className="absolute top-32 right-16 z-10 hidden lg:block">
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 transform -rotate-2 shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-4 w-4 text-blue-400" />
              <span className="text-slate-300 text-xs">PostgreSQL</span>
            </div>
            <div className="w-16 h-2 bg-blue-500/30 rounded-full">
              <div className="w-12 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <div className="relative inline-block">
              <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
              <div 
                className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 bg-cover bg-center"
                style={{ backgroundImage: "url('image_logo.jpg')" }}
              >
              </div>
            </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Garnlzerx</h1>
            <p className="text-xl md:text-2xl text-blue-300 font-medium">Backend Developer на FastAPI</p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Проектирую надёжные и масштабируемые системы. Люблю асинхронность, REST, продуманную архитектуру и
              автоматизацию
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25"
              >
                <a href="mailto:dubovkonstantyn@yandex.ru" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-slate-900/50"
              >
                <a href="https://t.me/Garnlzerx" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Telegram
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-slate-900/50"
              >
                <a href="https://gitlab.elevo.space/k.dubov" className="flex items-center gap-2">
                  <GitlabIcon className="h-4 w-4" />
                  GitLab
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      

      {/* Animated Code Editor */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Живой код</h2>
          <AnimatedCodeEditor />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-slate-950/50 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Технологический стек</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`${tech.color} text-slate-200 hover:scale-105 transition-transform px-4 py-2 text-sm flex items-center gap-2 border backdrop-blur-sm`}
              >
                {tech.icon}
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Skills Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Интерактивная карта навыков</h2>
          <SkillsMap />
        </div>
      </section>

      {/* Tech Progress Bars */}
      <section className="py-16 bg-slate-950/30">
        <div className="container mx-auto px-4">
          <TechProgressBars />
        </div>
      </section>

      {/* Projects with Hover Effects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Мои проекты</h2>
          <HoverEffects />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">© 2024 Garnlzerx. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}
