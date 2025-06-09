"use client"
import dynamic from "next/dynamic"
import { Card } from "@/components/ui/card"

// Динамический импорт Three.js компонентов для избежания ошибок SSR
const ThreeComponents = dynamic(
  () =>
    import("./three-components").then((mod) => ({
      default: mod.ThreeComponents,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] flex items-center justify-center bg-slate-900/80 rounded-lg">
        <div className="text-blue-400">Загрузка 3D сцены...</div>
      </div>
    ),
  },
)

export default function ThreeScene() {
  return (
    <Card className="w-full h-[400px] overflow-hidden bg-slate-900/80 border-slate-700/50">
      <ThreeComponents />
    </Card>
  )
}
