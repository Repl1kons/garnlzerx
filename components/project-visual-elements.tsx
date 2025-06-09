"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Monitor,
  Database,
  Shield,
  Server,
  Activity,
  Zap,
  Code,
  Globe,
  Layers,
  Network,
  TrendingUp,
  Clock,
  Users,
  FileText,
} from "lucide-react"

interface VisualElementsProps {
  projectType: "pingflow" | "searchtorrent" | "getmetadata" | "booklib"
}

// Компонент для подсветки синтаксиса с анимацией печатания
const SyntaxHighlighter = ({ code, animate = false }: { code: string; animate?: boolean }) => {
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (animate) {
      setDisplayedCode("")
      setCurrentIndex(0)
    } else {
      setDisplayedCode(code)
      setCurrentIndex(code.length)
    }
  }, [code, animate])

  useEffect(() => {
    if (animate && currentIndex < code.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(code.slice(0, currentIndex + 1))
        setCurrentIndex((prev) => prev + 1)
      }, 30) // Скорость печатания
      return () => clearTimeout(timer)
    }
  }, [currentIndex, code, animate])

  useEffect(() => {
    // Мигание курсора
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  const highlightCode = (code: string) => {
    return code.split("\n").map((line, lineIndex) => {
      // Разбиваем строку на токены
      const tokens = line.split(
        /(\b(?:async|def|await|return|import|from|class|if|else|try|except|@|router_api|app|get|post|put|delete|status|HTTPException|Depends|File|UploadFile|List|Dict|Optional|Union|str|int|bool|float|Request|UUID4|logger|db)\b|"[^"]*"|'[^']*'|f"[^"]*"|f'[^']*'|\d+|#.*$)/g,
      )

      return (
        <div key={lineIndex} className="flex">
          <span className="text-slate-500 w-8 text-right mr-4 select-none text-xs">{lineIndex + 1}</span>
          <span className="flex-1">
            {tokens.map((token, tokenIndex) => {
              // Ключевые слова Python
              if (
                ["async", "def", "await", "return", "import", "from", "class", "if", "else", "try", "except"].includes(
                  token,
                )
              ) {
                return (
                  <span key={tokenIndex} className="text-purple-400 font-medium">
                    {token}
                  </span>
                )
              }
              // Декораторы и FastAPI
              if (["@", "router_api", "app", "get", "post", "put", "delete"].includes(token)) {
                return (
                  <span key={tokenIndex} className="text-blue-400 font-medium">
                    {token}
                  </span>
                )
              }
              // Типы и классы
              if (
                [
                  "status",
                  "HTTPException",
                  "Depends",
                  "File",
                  "UploadFile",
                  "List",
                  "Dict",
                  "Optional",
                  "Union",
                  "str",
                  "int",
                  "bool",
                  "float",
                  "Request",
                  "UUID4",
                  "logger",
                  "db",
                ].includes(token)
              ) {
                return (
                  <span key={tokenIndex} className="text-emerald-400">
                    {token}
                  </span>
                )
              }
              // Строки (включая f-строки)
              if (token.match(/^(f?["'].*["'])$/)) {
                return (
                  <span key={tokenIndex} className="text-green-400">
                    {token}
                  </span>
                )
              }
              // Числа
              if (token.match(/^\d+$/)) {
                return (
                  <span key={tokenIndex} className="text-orange-400">
                    {token}
                  </span>
                )
              }
              // Комментарии
              if (token.startsWith("#")) {
                return (
                  <span key={tokenIndex} className="text-slate-400 italic">
                    {token}
                  </span>
                )
              }
              return (
                <span key={tokenIndex} className="text-slate-300">
                  {token}
                </span>
              )
            })}
            {/* Курсор в конце последней строки */}
            {lineIndex === displayedCode.split("\n").length - 1 && animate && currentIndex < code.length && (
              <span className={`text-blue-400 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
            )}
          </span>
        </div>
      )
    })
  }

  return <div className="font-mono text-sm leading-relaxed whitespace-pre">{highlightCode(displayedCode)}</div>
}

export default function ProjectVisualElements({ projectType }: VisualElementsProps) {
  const [activeMetric, setActiveMetric] = useState(0)
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)
  const [animateFlow, setAnimateFlow] = useState(false)
  const [codeAnimation, setCodeAnimation] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Запускаем анимацию потока данных каждые 5 секунд
    const flowInterval = setInterval(() => {
      setAnimateFlow(true)
      setTimeout(() => setAnimateFlow(false), 2000)
    }, 5000)
    return () => clearInterval(flowInterval)
  }, [])

  useEffect(() => {
    // Анимация печатания кода
    const codeInterval = setInterval(() => {
      setCodeAnimation(true)
      setTimeout(() => setCodeAnimation(false), 3000)
    }, 8000)
    return () => clearInterval(codeInterval)
  }, [])

  const getProjectVisuals = () => {
    switch (projectType) {
      case "pingflow":
        return {
          metrics: [
            {
              label: "Uptime",
              value: "99.9%",
              icon: <Activity className="h-4 w-4" />,
              color: "text-green-400",
              trend: "+0.1%",
            },
            {
              label: "Monitors",
              value: "1,247",
              icon: <Monitor className="h-4 w-4" />,
              color: "text-blue-400",
              trend: "+23",
            },
            {
              label: "Incidents",
              value: "23",
              icon: <Shield className="h-4 w-4" />,
              color: "text-red-400",
              trend: "-5",
            },
            {
              label: "Response",
              value: "45ms",
              icon: <Zap className="h-4 w-4" />,
              color: "text-yellow-400",
              trend: "-12ms",
            },
          ],
          codeExample: `@router_api.get('/monitors/{monitor_uuid}')
async def get_monitor_by_id(
    request: Request,
    monitor_uuid: UUID4,
    user=Depends(get_current_user_from_state)
):
    try:
        response_body = await db.SelectMonitor(
            user_uuid=user.user_uuid,
            monitor_uuid=str(monitor_uuid)
        )
        if not response_body:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Монитор не найден"
            )

        response_body[0]['zone_id'] = str(response_body[0]['zone_id']).upper()
        codes = await db.get_http_codes_for_monitor(str(monitor_uuid))
        response_body[0]['acceptable_status_codes'] = codes['acceptable_status_codes']
        response_body[0]['status_code_exceptions'] = codes['status_code_exceptions']
        
        return {'status': 'ok', 'result': response_body}
    
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        logger.error(f"Ошибка получения монитора {monitor_uuid}: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Ошибка сервера"
        )`,
          architecture: [
            {
              name: "FastAPI",
              position: { x: 50, y: 15 },
              color: "from-green-500 to-green-600",
              icon: <Code className="h-5 w-5" />,
              description: "Асинхронный REST API",
              stats: "2.1K req/s",
            },
            {
              name: "PostgreSQL",
              position: { x: 15, y: 50 },
              color: "from-blue-500 to-blue-600",
              icon: <Database className="h-5 w-5" />,
              description: "Хранение данных мониторинга",
              stats: "15GB data",
            },
            {
              name: "Redis",
              position: { x: 85, y: 50 },
              color: "from-red-500 to-red-600",
              icon: <Server className="h-5 w-5" />,
              description: "Кэширование и очереди",
              stats: "87% hit rate",
            },
          ],
          connections: [
            { from: "FastAPI", to: "PostgreSQL", label: "SQL", labelOffset: { x: -10, y: -5 } },
            { from: "FastAPI", to: "Redis", label: "Cache", labelOffset: { x: 10, y: -5 } },
          ],
        }
      case "searchtorrent":
        return {
          metrics: [
            {
              label: "Scanned",
              value: "15,432",
              icon: <Shield className="h-4 w-4" />,
              color: "text-green-400",
              trend: "+1.2K",
            },
            {
              label: "Safe Files",
              value: "14,891",
              icon: <Database className="h-4 w-4" />,
              color: "text-blue-400",
              trend: "+1.1K",
            },
            {
              label: "Blocked",
              value: "541",
              icon: <Shield className="h-4 w-4" />,
              color: "text-red-400",
              trend: "+89",
            },
            {
              label: "Speed",
              value: "2.3s",
              icon: <Zap className="h-4 w-4" />,
              color: "text-yellow-400",
              trend: "-0.5s",
            },
          ],
          codeExample: `async def __search(self, session: aiohttp.ClientSession, query: str):
    """Поиск торрентов на RuTracker"""
    req_url = self.search_url + query
    
    async with session.get(
        req_url, 
        headers=self.__headers,
        proxy=self.proxies.get("https")
    ) as response:
        if response.ok:
            logging.info("Данные успешно получены.")
            html_content = await response.text()
            return await self.__get_data_response(html_content)
        else:
            logging.error(f"Ошибка запроса: {response.status}")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, 
                detail="Ошибка запроса"
            )

async def check_virus_total(self, url: str) -> Dict:
    """Проверка URL через VirusTotal API"""
    headers = {"x-apikey": self.vt_api_key}
    data = {"url": url}
    
    async with aiohttp.ClientSession() as session:
        async with session.post(
            "https://www.virustotal.com/api/v3/urls",
            headers=headers,
            data=data
        ) as response:
            result = await response.json()
            stats = result["data"]["attributes"]["stats"]
            
            # Считаем безопасным если нет вредоносных и подозрительных
            is_safe = stats["malicious"] == 0 and stats["suspicious"] == 0
            return {"safe": is_safe, "stats": stats}`,
          architecture: [
            {
              name: "aiohttp",
              position: { x: 50, y: 15 },
              color: "from-green-500 to-green-600",
              icon: <Network className="h-5 w-5" />,
              description: "Асинхронные HTTP запросы",
              stats: "500 req/min",
            },
            {
              name: "VirusTotal",
              position: { x: 85, y: 50 },
              color: "from-red-500 to-red-600",
              icon: <Shield className="h-5 w-5" />,
              description: "Проверка безопасности",
              stats: "96.5% safe",
            },
            {
              name: "BeautifulSoup",
              position: { x: 15, y: 50 },
              color: "from-blue-500 to-blue-600",
              icon: <Code className="h-5 w-5" />,
              description: "Парсинг HTML",
              stats: "2.1s avg",
            },
            {
              name: "Proxy",
              position: { x: 50, y: 85 },
              color: "from-purple-500 to-purple-600",
              icon: <Globe className="h-5 w-5" />,
              description: "Обход блокировок",
              stats: "99% uptime",
            },
          ],
          connections: [
            { from: "aiohttp", to: "BeautifulSoup", label: "HTML", labelOffset: { x: -10, y: -5 } },
            { from: "aiohttp", to: "VirusTotal", label: "API", labelOffset: { x: 10, y: -5 } },
            { from: "aiohttp", to: "Proxy", label: "Route", labelOffset: { x: 5, y: 10 } },
            { from: "BeautifulSoup", to: "VirusTotal", label: "URLs", labelOffset: { x: 0, y: 15 } },
          ],
        }
      case "getmetadata":
        return {
          metrics: [
            {
              label: "Movies",
              value: "45,123",
              icon: <Database className="h-4 w-4" />,
              color: "text-green-400",
              trend: "+2.3K",
            },
            {
              label: "API Calls",
              value: "892K",
              icon: <Globe className="h-4 w-4" />,
              color: "text-blue-400",
              trend: "+45K",
            },
            {
              label: "Cache Hit",
              value: "87%",
              icon: <Zap className="h-4 w-4" />,
              color: "text-yellow-400",
              trend: "+3%",
            },
            {
              label: "Response",
              value: "120ms",
              icon: <Activity className="h-4 w-4" />,
              color: "text-purple-400",
              trend: "-20ms",
            },
          ],
          codeExample: `async def get_film_by_keyword(self, title: str, type_search: str):
    """Поиск фильма по ключевому слову"""
    url = f"{self.base_url}/v2.1/films/search-by-keyword"
    params = {"keyword": title}
    
    films_data = await self._fetch_data(url, params)

    if not films_data or not films_data.get("films"):
        self.log.warning("Список фильмов пуст.")
        return None

    if type_search == "FILM":
        film = next(
            (film for film in films_data["films"] if film["type"] == type_search), 
            None
        )
        if not film:
            self.log.warning(f"Фильмы с типом {type_search} не найдены.")
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, 
                detail=f"Фильмы с типом {type_search} не найдены."
            )
        return await self.get_film_info_by_id(film["filmId"], type_s="FILM")

    # Возвращаем первый найденный фильм для сериалов
    first_film_id = films_data["films"][0].get("filmId")
    return await self.get_film_info_by_id(first_film_id, type_s="SERIAL")

async def _fetch_data(self, url: str, params: Dict = None) -> Optional[Dict]:
    """Универсальный метод для запросов к API"""
    headers = {"X-API-KEY": self.api_key}
    
    async with aiohttp.ClientSession() as session:
        async with session.get(url, params=params, headers=headers) as response:
            if response.status == 200:
                return await response.json()
            else:
                self.log.error(f"API error: {response.status}")
                return None`,
          architecture: [
            {
              name: "FastAPI",
              position: { x: 50, y: 15 },
              color: "from-green-500 to-green-600",
              icon: <Code className="h-5 w-5" />,
              description: "REST API интерфейс",
              stats: "1.5K req/s",
            },
            {
              name: "Kinopoisk API",
              position: { x: 85, y: 50 },
              color: "from-orange-500 to-orange-600",
              icon: <Globe className="h-5 w-5" />,
              description: "Внешний API",
              stats: "45K movies",
            },
            {
              name: "Pydantic",
              position: { x: 15, y: 50 },
              color: "from-blue-500 to-blue-600",
              icon: <Layers className="h-5 w-5" />,
              description: "Валидация данных",
              stats: "100% valid",
            },
            {
              name: "aiohttp",
              position: { x: 50, y: 85 },
              color: "from-purple-500 to-purple-600",
              icon: <Network className="h-5 w-5" />,
              description: "HTTP клиент",
              stats: "120ms avg",
            },
          ],
          connections: [
            { from: "FastAPI", to: "Pydantic", label: "Schema", labelOffset: { x: -10, y: -5 } },
            { from: "FastAPI", to: "aiohttp", label: "Client", labelOffset: { x: 5, y: 10 } },
            { from: "aiohttp", to: "Kinopoisk API", label: "Request", labelOffset: { x: 10, y: -5 } },
            { from: "Kinopoisk API", to: "Pydantic", label: "Data", labelOffset: { x: 0, y: 15 } },
          ],
        }
      case "booklib":
        return {
          metrics: [
            {
              label: "Books",
              value: "2,847",
              icon: <Database className="h-4 w-4" />,
              color: "text-green-400",
              trend: "+127",
            },
            { label: "Users", value: "156", icon: <Users className="h-4 w-4" />, color: "text-blue-400", trend: "+12" },
            {
              label: "Storage",
              value: "45GB",
              icon: <Server className="h-4 w-4" />,
              color: "text-yellow-400",
              trend: "+2.1GB",
            },
            {
              label: "Requests",
              value: "1.2K",
              icon: <Activity className="h-4 w-4" />,
              color: "text-purple-400",
              trend: "+89",
            },
          ],
          codeExample: `@router_admin.post("/books")
@role_required('admin')
async def add_book(
    request: Request, 
    files_books: List[UploadFile] = File(...)
):
    """Добавление новой книги администратором"""
    book_data = None
    
    for file in files_books:
        # Извлекаем название книги из имени файла
        book_name = file.filename.split(".")[:-1][0]
        book_data = await ModelQueryAdmin.add_book(book_name)
        break
    
    if book_data:
        book_id = book_data[0]["id"]
        s3_manager = S3Manager(settings_obj.get_s3_client)
        
        # Загружаем файлы в S3
        await process_and_upload_files(files_books, book_id, s3_manager)
        
        return JSONResponse(
            content={"message": "Book was added successfully"}, 
            status_code=status.HTTP_201_CREATED
        )
    else:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, 
            detail="Error in adding book."
        )

async def process_and_upload_files(
    files: List[UploadFile], 
    book_id: int, 
    s3_manager: S3Manager
):
    """Обработка и загрузка файлов в S3"""
    for file in files:
        # Генерируем уникальный ключ для S3
        s3_key = f"books/{book_id}/{uuid4()}/{file.filename}"
        
        # Загружаем файл в S3
        await s3_manager.upload_fileobj(
            file.file, 
            settings_obj.BUCKET_NAME, 
            s3_key
        )
        
        # Сохраняем информацию о файле в БД
        await ModelQueryAdmin.add_book_file(book_id, s3_key, file.filename)`,
          architecture: [
            {
              name: "FastAPI",
              position: { x: 50, y: 15 },
              color: "from-green-500 to-green-600",
              icon: <Code className="h-5 w-5" />,
              description: "REST API с RBAC",
              stats: "800 req/s",
            },
            {
              name: "PostgreSQL",
              position: { x: 15, y: 50 },
              color: "from-blue-500 to-blue-600",
              icon: <Database className="h-5 w-5" />,
              description: "Хранение метаданных",
              stats: "2.8K books",
            },
            {
              name: "S3",
              position: { x: 85, y: 50 },
              color: "from-orange-500 to-orange-600",
              icon: <Server className="h-5 w-5" />,
              description: "Хранение файлов",
              stats: "45GB files",
            },
            {
              name: "RBAC",
              position: { x: 50, y: 85 },
              color: "from-purple-500 to-purple-600",
              icon: <Shield className="h-5 w-5" />,
              description: "Система ролей",
              stats: "3 roles",
            },
          ],
          connections: [
            { from: "FastAPI", to: "PostgreSQL", label: "Query", labelOffset: { x: -10, y: -5 } },
            { from: "FastAPI", to: "S3", label: "Upload", labelOffset: { x: 10, y: -5 } },
            { from: "FastAPI", to: "RBAC", label: "Auth", labelOffset: { x: 5, y: 10 } },
            { from: "RBAC", to: "PostgreSQL", label: "Roles", labelOffset: { x: -10, y: 0 } },
          ],
        }
      default:
        return { metrics: [], codeExample: "", architecture: [], connections: [] }
    }
  }

  const visuals = getProjectVisuals()

  // Функция для получения координат компонента по имени
  const getComponentPosition = (name: string) => {
    const component = visuals.architecture.find((c) => c.name === name)
    return component ? component.position : { x: 0, y: 0 }
  }

  // Функция для получения координат середины линии между компонентами с учетом смещения
  const getMidPoint = (from: string, to: string, offset: { x: number; y: number } = { x: 0, y: 0 }) => {
    const fromPos = getComponentPosition(from)
    const toPos = getComponentPosition(to)
    return {
      x: (fromPos.x + toPos.x) / 2 + offset.x,
      y: (fromPos.y + toPos.y) / 2 + offset.y,
    }
  }

  // Функция для создания изогнутого пути между компонентами
  const createPath = (from: string, to: string) => {
    const fromPos = getComponentPosition(from)
    const toPos = getComponentPosition(to)

    // Вычисляем контрольную точку для изогнутой линии
    const controlX = (fromPos.x + toPos.x) / 2 + (Math.random() * 5 - 2.5)
    const controlY = (fromPos.y + toPos.y) / 2 + (Math.random() * 5 - 2.5)

    return `M ${fromPos.x}% ${fromPos.y}% Q ${controlX}% ${controlY}%, ${toPos.x}% ${toPos.y}%`
  }

  return (
    <div className="space-y-8">
      {/* Enhanced Metrics Dashboard */}
      <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-slate-700/50 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
              Метрики в реальном времени
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="h-3 w-3" />
              Обновлено 2 мин назад
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visuals.metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`relative p-4 rounded-xl border transition-all duration-500 transform hover:scale-105 ${
                  activeMetric === index
                    ? "bg-gradient-to-br from-slate-800 to-slate-700 border-blue-500 shadow-lg shadow-blue-500/25"
                    : "bg-slate-800/50 border-slate-600 hover:bg-slate-800/70"
                }`}
              >
                {/* Animated background */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${
                    activeMetric === index ? "from-blue-500/10 to-purple-500/10" : "from-transparent to-transparent"
                  } transition-all duration-500`}
                />

                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`${metric.color} p-2 rounded-lg bg-slate-700/50`}>{metric.icon}</div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        metric.trend?.startsWith("+")
                          ? "text-green-400 bg-green-400/10"
                          : metric.trend?.startsWith("-")
                            ? "text-red-400 bg-red-400/10"
                            : "text-slate-400 bg-slate-400/10"
                      }`}
                    >
                      {metric.trend}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <span className="text-slate-400 text-sm">{metric.label}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Code Example with Syntax Highlighting */}
      <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-slate-700/50 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" />
              Пример кода
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Terminal-like code container */}
          <div className="bg-slate-950 rounded-lg border border-slate-700 overflow-hidden">
            {/* Terminal header */}
            <div className="bg-slate-800/80 px-4 py-2 border-b border-slate-700 flex items-center justify-between">
              <span className="text-slate-300 text-sm font-mono">
                {projectType === "pingflow" && "monitors.py"}
                {projectType === "searchtorrent" && "search_service.py"}
                {projectType === "getmetadata" && "metadata_service.py"}
                {projectType === "booklib" && "admin_routes.py"}
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Python</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Code content with syntax highlighting */}
            <div className="p-6 max-h-96 overflow-y-auto">
              <SyntaxHighlighter code={visuals.codeExample} animate={codeAnimation} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Architecture Visualization */}
      <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-slate-700/50 shadow-2xl">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Server className="h-5 w-5 text-purple-400" />
            Архитектура системы
          </h3>
          <div className="relative h-96 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-lg border border-slate-700 overflow-hidden">
            {/* Enhanced background grid */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#475569" strokeWidth="0.5" />
                  </pattern>
                  <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="#475569" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>

            {/* Enhanced decorative background elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-500/5 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="rgba(59, 130, 246, 0.8)" />
                </marker>

                {/* Enhanced gradient for animated flow */}
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                  <stop offset="30%" stopColor="rgba(59, 130, 246, 0.6)" />
                  <stop offset="50%" stopColor="rgba(139, 92, 246, 0.8)" />
                  <stop offset="70%" stopColor="rgba(59, 130, 246, 0.6)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                </linearGradient>
              </defs>

              {visuals.connections?.map((connection, index) => {
                const isHighlighted = hoveredComponent === connection.from || hoveredComponent === connection.to
                const pathString = createPath(connection.from, connection.to)
                const midPoint = getMidPoint(connection.from, connection.to, connection.labelOffset || { x: 0, y: 0 })

                return (
                  <g key={index}>
                    {/* Основная линия связи */}
                    <path
                      d={pathString}
                      fill="none"
                      stroke={isHighlighted ? "rgba(59, 130, 246, 0.9)" : "rgba(59, 130, 246, 0.5)"}
                      strokeWidth={isHighlighted ? "3" : "2"}
                      strokeDasharray={isHighlighted ? "" : "8,4"}
                      markerEnd="url(#arrowhead)"
                      className="transition-all duration-300"
                      filter={isHighlighted ? "drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))" : "none"}
                    />

                    {/* Анимированный поток данных */}
                    {animateFlow && (
                      <path
                        d={pathString}
                        fill="none"
                        stroke="url(#flowGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="animate-flow"
                      />
                    )}

                    {/* Enhanced метка связи */}
                    <g>
                      <rect
                        x={`${midPoint.x - 2.5}%`}
                        y={`${midPoint.y - 1.5}%`}
                        width="5%"
                        height="3%"
                        rx="4"
                        fill="rgba(15, 23, 42, 0.9)"
                        stroke={isHighlighted ? "rgba(59, 130, 246, 0.8)" : "rgba(71, 85, 105, 0.5)"}
                        strokeWidth="1"
                        className={`transition-all duration-300 ${isHighlighted ? "opacity-100" : "opacity-80"}`}
                      />
                      <text
                        x={`${midPoint.x}%`}
                        y={`${midPoint.y}%`}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={isHighlighted ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.8)"}
                        fontSize="10"
                        fontWeight={isHighlighted ? "600" : "400"}
                        className="pointer-events-none transition-all duration-300"
                      >
                        {connection.label}
                      </text>
                    </g>
                  </g>
                )
              })}
            </svg>

            {/* Enhanced Architecture components */}
            {visuals.architecture.map((component, index) => (
              <div
                key={component.name}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer`}
                style={{
                  left: `${component.position.x}%`,
                  top: `${component.position.y}%`,
                  zIndex: hoveredComponent === component.name ? 30 : 10,
                  transform:
                    hoveredComponent === component.name
                      ? "translate(-50%, -50%) scale(1.15)"
                      : "translate(-50%, -50%) scale(1)",
                }}
                onMouseEnter={() => setHoveredComponent(component.name)}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <div className="relative">
                  {/* Enhanced пульсирующий фон */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${component.color} opacity-20 blur-sm ${
                      hoveredComponent === component.name ? "animate-pulse scale-110" : ""
                    } transition-all duration-300`}
                  ></div>

                  {/* Glow effect */}
                  {hoveredComponent === component.name && (
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${component.color} opacity-40 blur-md scale-125 animate-pulse`}
                    ></div>
                  )}

                  {/* Enhanced основной контейнер */}
                  <div
                    className={`relative px-4 py-3 rounded-xl bg-gradient-to-r ${component.color} text-white shadow-xl flex items-center gap-3 border border-white/20 backdrop-blur-sm`}
                  >
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">{component.icon}</div>
                    <div>
                      <div className="font-semibold text-sm">{component.name}</div>
                      <div className="text-xs text-white/80">{component.stats}</div>
                    </div>
                  </div>

                  {/* Enhanced всплывающее описание */}
                  {hoveredComponent === component.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-4 py-3 bg-slate-800/95 text-white text-sm rounded-lg shadow-2xl border border-slate-600 whitespace-nowrap z-40 backdrop-blur-sm">
                      <div className="font-medium">{component.description}</div>
                      <div className="text-xs text-slate-300 mt-1">{component.stats}</div>
                      {/* Arrow */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-slate-800"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes flow {
          0% {
            stroke-dasharray: 10;
            stroke-dashoffset: 30;
          }
          100% {
            stroke-dasharray: 10;
            stroke-dashoffset: 0;
          }
        }
        
        .animate-flow {
          animation: flow 2s linear infinite;
        }
      `}</style>
    </div>
  )
}
