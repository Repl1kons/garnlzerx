import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, GitlabIcon, Server, Database, Shield, Code, Zap, Globe } from "lucide-react"

export default function HomePage() {
  const projects = [
    {
      id: "pingflow",
      title: "PingFlow",
      description: "Платформа мониторинга сервисов и веб-сайтов",
      icon: <Globe className="h-6 w-6" />,
      tags: ["FastAPI", "PostgreSQL", "Redis", "Мониторинг"],
      color: "from-slate-800 to-slate-900",
      accent: "from-blue-500 to-cyan-500",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "searchtorrent",
      title: "SearchTorrent",
      description: "Безопасный поиск торрентов с проверкой через VirusTotal",
      icon: <Shield className="h-6 w-6" />,
      tags: ["aiohttp", "BeautifulSoup", "VirusTotal", "Безопасность"],
      color: "from-slate-800 to-slate-900",
      accent: "from-emerald-500 to-teal-500",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "getmetadata",
      title: "GetMetadata",
      description: "Сервис получения метаданных фильмов с КиноПоиска",
      icon: <Database className="h-6 w-6" />,
      tags: ["FastAPI", "aiohttp", "Pydantic", "API"],
      color: "from-slate-800 to-slate-900",
      accent: "from-orange-500 to-red-500",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "booklib",
      title: "BookLib",
      description: "Электронная библиотека с ролевым доступом",
      icon: <Server className="h-6 w-6" />,
      tags: ["FastAPI", "S3", "PostgreSQL", "RBAC"],
      color: "from-slate-800 to-slate-900",
      accent: "from-purple-500 to-pink-500",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

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

  const skillCards = [
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 text-blue-400" />,
      description: "Python, FastAPI, aiohttp, asyncio",
      color: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
    },
    {
      title: "Базы данных",
      icon: <Database className="h-8 w-8 text-emerald-400" />,
      description: "PostgreSQL, Redis, SQLAlchemy",
      color: "from-emerald-500/10 to-teal-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "Безопасность",
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      description: "JWT, RBAC, OAuth, bcrypt",
      color: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20",
    },
    {
      title: "DevOps",
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      description: "Docker, GitLab CI, pytest",
      color: "from-yellow-500/10 to-orange-500/10",
      border: "border-yellow-500/20",
    },
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

        <div className="absolute bottom-32 left-1/4 z-10 hidden lg:block">
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 transform rotate-1 shadow-2xl">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span className="text-emerald-400 text-xs">JWT Secure</span>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
              <div 
                className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 bg-cover bg-center"
                style={{ backgroundImage: "url('image_logo.jpg')" }}
              >
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

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Мои проекты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={project.id} className="relative group">
                {/* Background Image */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
                </div>

                {/* Floating Icon */}
                <div
                  className={`absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r ${project.accent} flex items-center justify-center shadow-lg shadow-black/50 z-10`}
                >
                  {project.icon}
                </div>

                <Card className="relative bg-slate-900/80 backdrop-blur-sm border-slate-700/50 hover:bg-slate-900/90 transition-all duration-300 group overflow-hidden">
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="border-slate-600 text-slate-300 bg-slate-800/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${project.accent} hover:opacity-90 text-white shadow-lg`}
                    >
                      <Link href={`/projects/${project.id}`}>Подробнее</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Overlapping Cards */}
      <section className="py-16 bg-slate-950/30 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Навыки и опыт</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCards.map((skill, index) => (
                <div key={index} className="relative">
                  {/* Floating decoration */}
                  <div
                    className={`absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r ${skill.color} border ${skill.border} z-10`}
                  ></div>

                  <Card
                    className={`bg-slate-900/60 backdrop-blur-sm border-slate-700/50 hover:bg-slate-900/80 transition-all duration-300 transform hover:-translate-y-1 ${skill.border}`}
                  >
                    <CardHeader className="text-center">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-xl opacity-50`}
                        ></div>
                        <div className="relative">{skill.icon}</div>
                      </div>
                      <CardTitle className="text-white text-lg mt-2">{skill.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-300 text-sm">{skill.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
                <div className="text-slate-300">Проектов</div>
              </div>
            </div>
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">8+</div>
                <div className="text-slate-300">Технологий</div>
              </div>
            </div>
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-slate-300">Асинхронность</div>
              </div>
            </div>
          </div>
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
