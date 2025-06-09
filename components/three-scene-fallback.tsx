"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Database, Shield, Code, Zap } from "lucide-react"

type FloatingItem = {
  icon: React.ReactNode
  label: string
  color: string
  x: number
  y: number
  z: number
  speed: number
  rotation: number
}

export default function ThreeSceneFallback() {
  const [items, setItems] = useState<FloatingItem[]>([
    {
      icon: <Code className="h-6 w-6" />,
      label: "Python",
      color: "bg-blue-500",
      x: 20,
      y: 30,
      z: 1,
      speed: 2,
      rotation: 5,
    },
    {
      icon: <Database className="h-6 w-6" />,
      label: "PostgreSQL",
      color: "bg-emerald-500",
      x: 60,
      y: 50,
      z: 2,
      speed: 3,
      rotation: -3,
    },
    {
      icon: <Shield className="h-6 w-6" />,
      label: "JWT",
      color: "bg-purple-500",
      x: 40,
      y: 70,
      z: 3,
      speed: 4,
      rotation: 8,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      label: "FastAPI",
      color: "bg-yellow-500",
      x: 75,
      y: 25,
      z: 2,
      speed: 3.5,
      rotation: -6,
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          y: item.y + Math.sin(Date.now() / 1000 / item.speed) * 0.5,
          rotation: item.rotation + 0.1,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full h-[400px] overflow-hidden bg-slate-900/80 border-slate-700/50 relative">
      {/* Фоновые градиенты */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Плавающие элементы */}
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute flex flex-col items-center justify-center p-3 rounded-lg ${item.color} text-white shadow-lg transform transition-transform duration-300 hover:scale-110`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            zIndex: item.z,
            transform: `rotate(${item.rotation}deg) translateZ(${item.z * 10}px)`,
          }}
        >
          {item.icon}
          <span className="text-xs mt-1 font-medium">{item.label}</span>
        </div>
      ))}

      {/* Центральный элемент */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30 animate-pulse">
          <Code className="h-10 w-10 text-white" />
        </div>
      </div>

      {/* Соединительные линии */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="30%"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="60%"
          y2="50%"
          stroke="rgba(16, 185, 129, 0.5)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="40%"
          y2="70%"
          stroke="rgba(139, 92, 246, 0.5)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="75%"
          y2="25%"
          stroke="rgba(245, 158, 11, 0.5)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
      </svg>
    </Card>
  )
}
