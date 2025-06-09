"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, Lock } from "lucide-react"

const projectCards = [
  {
    id: "pingflow",
    title: "PingFlow",
    description: "Система мониторинга сервисов с real-time уведомлениями",
    image: "https://clck.ru/3MXTuz",
    tags: ["FastAPI", "PostgreSQL", "Redis"],
    color: "from-blue-500 to-cyan-500",
    demoUrl: null, // Закрытый проект
    githubUrl: null, // Закрытый проект
    isPrivate: true,
  },
  {
    id: "searchtorrent",
    title: "SearchTorrent",
    description: "Безопасный поиск с проверкой через VirusTotal",
    image: "/FLX.jpg",
    tags: ["Python", "aiohttp", "Security"],
    color: "from-green-500 to-teal-500",
    demoUrl: null,
    githubUrl: "https://gitlab.elevo.space/flex/search_torrent",
    isPrivate: false,
  },
  {
    id: "getmetadata",
    title: "GetMetadata",
    description: "Сервис получения метаданных фильмов с КиноПоиска",
    image: "/FLX.jpg",
    tags: ["FastAPI", "aiohttp", "Pydantic"],
    color: "from-orange-500 to-red-500",
    demoUrl: null,
    githubUrl: "https://gitlab.elevo.space/flex/get_metadata",
    isPrivate: false,
  },
  {
    id: "booklib",
    title: "BookLib",
    description: "Электронная библиотека с ролевым доступом",
    image: "/BookLib.png",
    tags: ["FastAPI", "S3", "RBAC"],
    color: "from-purple-500 to-pink-500",
    demoUrl: null,
    githubUrl: "https://gitlab.elevo.space/k.dubov/booklib",
    isPrivate: false,
  },
]

export default function HoverEffects() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {projectCards.map((project) => (
        <div
          key={project.id}
          className="group relative"
          onMouseEnter={() => setHoveredCard(project.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Светящийся фон при наведении */}
          <div
            className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}
          />

          <Card className="relative bg-slate-900/90 backdrop-blur-sm border-slate-700/50 overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2">
            {/* Изображение с эффектами */}
            <div className="relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Градиентный оверлей */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Индикатор приватного проекта */}
              {project.isPrivate && (
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm border border-slate-600 rounded-lg px-2 py-1 flex items-center gap-1">
                  <Lock className="h-3 w-3 text-yellow-400" />
                  <span className="text-xs text-yellow-400">Private</span>
                </div>
              )}

              {/* Кнопки действий при наведении */}
              <div
                className={`absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-10`}
              >
                {!project.isPrivate ? (
                  <>
                    {project.demoUrl && (
                      <Button 
                        asChild 
                        size="sm" 
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <a href={project.demoUrl}>
                          <Play className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-gray/20"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <a href={project.githubUrl}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                  </>
                ) : (
                  <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-600 rounded-lg px-3 py-2 flex items-center gap-2">
                    <Lock className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-yellow-400">Коммерческий проект</span>
                  </div>
                )}
              </div>

              {/* Анимированная рамка */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-colors duration-300" />
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mt-2 group-hover:text-slate-200 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Теги с анимацией */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`border-slate-600 text-slate-300 transition-all duration-300 transform ${
                        hoveredCard === project.id
                          ? `translate-y-0 opacity-100 delay-${index * 100}`
                          : "translate-y-2 opacity-70"
                      }`}
                      style={{
                        transitionDelay: hoveredCard === project.id ? `${index * 100}ms` : "0ms",
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.isPrivate && (
                    <Badge variant="outline" className="border-yellow-500/30 text-yellow-400 bg-yellow-500/10">
                      <Lock className="h-3 w-3 mr-1" />
                      NDA
                    </Badge>
                  )}
                </div>

                {/* Кнопка с ссылкой на страницу проекта */}
                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${project.color} hover:shadow-lg hover:shadow-blue-500/25 transform transition-all duration-300 group-hover:scale-105`}
                >
                  <Link href={`/projects/${project.id}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Подробнее
                  </Link>
                </Button>
              </div>
            </CardContent>

            {/* Декоративные элементы */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            <div className="absolute bottom-4 left-4 w-1 h-8 bg-gradient-to-t from-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Card>
        </div>
      ))}
    </div>
  )
}
