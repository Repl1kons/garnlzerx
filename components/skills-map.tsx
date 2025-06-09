"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Shield, Server, Zap } from "lucide-react"

const skillsData = {
  backend: {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 95, experience: "3+ лет" },
      { name: "FastAPI", level: 90, experience: "2+ лет" },
      { name: "AsyncIO", level: 85, experience: "2+ лет" },
      { name: "aiohttp", level: 80, experience: "1+ лет" },
    ],
  },
  database: {
    title: "Базы данных",
    icon: <Database className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "PostgreSQL", level: 88, experience: "2+ лет" },
      { name: "Redis", level: 82, experience: "1+ лет" },
      { name: "SQLAlchemy", level: 85, experience: "2+ лет" },
      { name: "MongoDB", level: 70, experience: "6+ месяцев" },
    ],
  },
  security: {
    title: "Безопасность",
    icon: <Shield className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "JWT", level: 90, experience: "2+ лет" },
      { name: "OAuth", level: 75, experience: "1+ лет" },
      { name: "RBAC", level: 80, experience: "1+ лет" },
      { name: "bcrypt", level: 85, experience: "2+ лет" },
    ],
  },
  devops: {
    title: "DevOps",
    icon: <Zap className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Docker", level: 85, experience: "2+ лет" },
      { name: "GitLab CI", level: 75, experience: "1+ лет" },
      { name: "Nginx", level: 80, experience: "1+ лет" },
      { name: "Linux", level: 82, experience: "2+ лет" },
    ],
  },
}

export default function SkillsMap() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {Object.entries(skillsData).map(([key, category]) => (
          <Card
            key={key}
            className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === key
                ? "bg-slate-800 border-blue-500 shadow-lg shadow-blue-500/25"
                : "bg-slate-900/60 border-slate-700/50 hover:bg-slate-800/80"
            }`}
            onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
          >
            <CardContent className="p-6 text-center">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4`}
              >
                {category.icon}
              </div>
              <h3 className="text-white font-semibold">{category.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{category.skills.length} навыков</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCategory && (
        <Card className="bg-slate-900/80 backdrop-blur-sm border-slate-700/50">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-3 rounded-lg bg-gradient-to-r ${skillsData[selectedCategory as keyof typeof skillsData].color}`}
              >
                {skillsData[selectedCategory as keyof typeof skillsData].icon}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {skillsData[selectedCategory as keyof typeof skillsData].title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skillsData[selectedCategory as keyof typeof skillsData].skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="space-y-3"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <Badge variant="outline" className="border-slate-600 text-slate-300">
                      {skill.experience}
                    </Badge>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skillsData[selectedCategory as keyof typeof skillsData].color} transition-all duration-1000 ease-out rounded-full relative`}
                        style={{
                          width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                    <span className="absolute right-0 -top-6 text-sm text-slate-400">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
