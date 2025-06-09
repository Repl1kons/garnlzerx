"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

const codeSnippets = [
  {
    language: "python",
    title: "FastAPI Endpoint",
    code: `@app.post("/api/monitor")
async def create_monitor(
    monitor: MonitorCreate,
    db: AsyncSession = Depends(get_db)
):
    """Создание нового монитора"""
    result = await monitor_service.create(
        db=db, 
        monitor_data=monitor
    )
    return {"status": "success", "data": result}`,
  },
  {
    language: "python",
    title: "Async Database Query",
    code: `async def get_user_monitors(
    user_id: int,
    db: AsyncSession
) -> List[Monitor]:
    """Получение мониторов пользователя"""
    query = select(Monitor).where(
        Monitor.user_id == user_id,
        Monitor.is_active == True
    )
    result = await db.execute(query)
    return result.scalars().all()`,
  },
  {
    language: "python",
    title: "JWT Authentication",
    code: `async def verify_token(token: str) -> dict:
    """Проверка JWT токена"""
    try:
        payload = jwt.decode(
            token, 
            SECRET_KEY, 
            algorithms=[ALGORITHM]
        )
        return payload
    except JWTError:
        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )`,
  },
]

export default function AnimatedCodeEditor() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentLine, setCurrentLine] = useState(0)

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet]
    const lines = snippet.code.split("\n")

    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedCode((prev) => prev + (currentLine === 0 ? lines[currentLine] : "\n" + lines[currentLine]))
        setCurrentLine((prev) => prev + 1)
      }, 150)

      return () => clearTimeout(timer)
    } else {
      // Переход к следующему сниппету через 3 секунды
      const timer = setTimeout(() => {
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
        setDisplayedCode("")
        setCurrentLine(0)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [currentLine, currentSnippet])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="bg-slate-900/90 backdrop-blur-sm border-slate-700/50 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-slate-800/80 px-4 py-3 border-b border-slate-700/50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-slate-300 text-sm font-mono">{codeSnippets[currentSnippet].title}</div>
          <div className="flex gap-1">
            {codeSnippets.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSnippet ? "bg-blue-400" : "bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm">
          <pre className="text-slate-300 leading-relaxed">
            <code>
              {displayedCode.split("\n").map((line, index) => (
                <div key={index} className="flex">
                  <span className="text-slate-500 w-8 text-right mr-4 select-none">{index + 1}</span>
                  <span className="flex-1">
                    {line
                      .split(/(\b(?:async|def|await|return|import|from|class|if|else|try|except)\b)/)
                      .map((part, partIndex) => {
                        if (
                          [
                            "async",
                            "def",
                            "await",
                            "return",
                            "import",
                            "from",
                            "class",
                            "if",
                            "else",
                            "try",
                            "except",
                          ].includes(part)
                        ) {
                          return (
                            <span key={partIndex} className="text-purple-400">
                              {part}
                            </span>
                          )
                        }
                        if (part.match(/^["'].*["']$/)) {
                          return (
                            <span key={partIndex} className="text-green-400">
                              {part}
                            </span>
                          )
                        }
                        if (part.match(/^\d+$/)) {
                          return (
                            <span key={partIndex} className="text-orange-400">
                              {part}
                            </span>
                          )
                        }
                        return <span key={partIndex}>{part}</span>
                      })}
                    {index === displayedCode.split("\n").length - 1 && (
                      <span className="animate-pulse text-blue-400">|</span>
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </Card>
    </div>
  )
}
