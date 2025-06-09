"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const techData = [
  {
    name: "Python",
    level: 95,
    color: "from-yellow-400 to-yellow-600",
    icon: "🐍",
    projects: 12,
    years: 3,
  },
  {
    name: "FastAPI",
    level: 90,
    color: "from-green-400 to-green-600",
    icon: "⚡",
    projects: 8,
    years: 2,
  },
  {
    name: "PostgreSQL",
    level: 88,
    color: "from-blue-400 to-blue-600",
    icon: "🐘",
    projects: 10,
    years: 2.5,
  },
  {
    name: "Redis",
    level: 82,
    color: "from-red-400 to-red-600",
    icon: "📦",
    projects: 6,
    years: 1.5,
  },
  {
    name: "Docker",
    level: 85,
    color: "from-cyan-400 to-cyan-600",
    icon: "🐳",
    projects: 9,
    years: 2,
  },
  {
    name: "AsyncIO",
    level: 87,
    color: "from-purple-400 to-purple-600",
    icon: "🔄",
    projects: 7,
    years: 2,
  },
]

export default function TechProgressBars() {
  const [visibleBars, setVisibleBars] = useState<boolean[]>(new Array(techData.length).fill(false))
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Анимируем появление прогресс-баров с задержкой
            techData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleBars((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto">
      <Card className="bg-slate-900/80 backdrop-blur-sm border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Технические навыки</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {techData.map((tech, index) => (
            <div
              key={tech.name}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{tech.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                        {tech.projects} проектов
                      </Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                        {tech.years} лет опыта
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white">{tech.level}%</span>
                </div>
              </div>

              <div className="relative">
                <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out relative`}
                    style={{
                      width: visibleBars[index] ? `${tech.level}%` : "0%",
                      transform: hoveredIndex === index ? "scaleY(1.2)" : "scaleY(1)",
                    }}
                  >
                    {/* Анимированный блик */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                      style={{
                        animation: visibleBars[index] ? "shine 2s ease-in-out" : "none",
                      }}
                    />

                    {/* Пульсирующий эффект при наведении */}
                    {hoveredIndex === index && <div className="absolute inset-0 bg-white/10 animate-pulse" />}
                  </div>
                </div>

                {/* Дополнительная информация при наведении */}
                {hoveredIndex === index && (
                  <div className="absolute top-6 left-0 bg-slate-800 border border-slate-600 rounded-lg p-3 z-10 min-w-[200px] shadow-lg">
                    <p className="text-slate-300 text-sm">Использую в {tech.projects} проектах</p>
                    <p className="text-slate-300 text-sm">Опыт работы: {tech.years} лет</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${tech.color}`} />
                      <span className="text-white text-sm font-medium">Уровень: {tech.level}%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </div>
  )
}
